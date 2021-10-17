/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Spin, notification, Form, Radio, Button } from "antd";

import UploadCompetitorImage from "./components/uploadCompetitorImage";
import UploadHaircutImage from "./components/uploadHaircutImage";
import { emailValidation, minLengthValidation, validateWhatsApp } from "../../utils/formValidation";
import { signUpApi } from "../../api/form";

import "./form.css";

const FormComponent = () => {
	const [loading, setLoading] = useState(false);

    const [saveImg1, setSaveImg1] = useState(false);
    const [saveImg2, setSaveImg2] = useState(false);
    const [payloadId, setPayloadId] = useState("");
    const [category, setCategory] = useState(0);
    const [payload, setPayload] = useState({
		fullName: "",
		whatsapp: "",
		email: "",
		instagram: "",
		category: 0,
		imageCompetitor: "",
		imageHaircut: "",
	});
    const [formValid, setFormValid] = useState({
		fullName: false,
		whatsapp: false,
		email: false,
		instagram: false,
		category:false,
		imageCompetitor: false,
		imageHaircut: false,
	});

    // states
    // 0 => default
    // 1 => success
    // 2 => error
    const [statusImage1, setStatusImage1] = useState(0);
    const [statusImage2, setStatusImage2] = useState(0);

    // Crop 1
	const previewCanvasRef1 = useRef(null);
	const [fileExt1, setFileExt1] = useState("");
	const [upImg1, setUpImg1] = useState();

    // Crop 2
	const previewCanvasRef2 = useRef(null);
	const [fileExt2, setFileExt2] = useState("");
	const [upImg2, setUpImg2] = useState();

    useEffect(() => {
        setPayload({
            ...payload,
            category: category,
        })
    }, [category]);

    useEffect(() => {
        if (statusImage1 === 1 && statusImage2 === 1) {
            setPayload({
                fullName: "",
                whatsapp: "",
                email: "",
                instagram: "",
                category: 0,
                imageCompetitor: "",
                imageHaircut: "",
            });
            setLoading(false);
            notification["success"]({
				message: "Registro exitoso",
			});
        }
        if (statusImage1 === 2) {
            setLoading(false);
            notification["error"]({
				message: "La Foto de Participante es obligatoria",
			});
        }
        if (statusImage2 === 2) {
            setLoading(false);
            notification["error"]({
				message: "La Foto del Corte es obligatoria",
			});
        }
    }, [statusImage1, statusImage2]);

    const changeForm = (e) => {
		setPayload({
			...payload,
			[e.target.name]: e.target.value,
		});
	};

    const inputValidation = async (e) => {
		const { type, name } = e.target;

		if (name === "email") {
			setFormValid({
				...formValid,
				[name]: emailValidation(e.target),
			});
		}
		if (type === "text") {
            if (name === "whatsapp") {
                setFormValid({
                    ...formValid,
                    [name]: validateWhatsApp(e.target.value),
                });
            } else {
                setFormValid({
                    ...formValid,
                    [name]: minLengthValidation(e.target, 2),
                });
            }
		}
	};

    const SignUp = async () => {
        setLoading(true);
        const valFullName = payload.fullName;
        const valWhatsapp = payload.whatsapp;
        const valEmail = payload.email;
        const valInstagram = payload.instagram;
        const valCategory = payload.category;

        const fullNameValid = formValid.fullName;
        const whatsappValid = formValid.whatsapp;
        const emailValid = formValid.email;
        const instagramValid = formValid.instagram;
        const categoryValid = payload.category > 0;

        if (!valFullName || !valWhatsapp || !valEmail || !valInstagram || !valCategory) {
			notification["error"]({
				message: "Todos los campos son obligatorios",
			});
			setLoading(false);
        } else if (!fullNameValid) {
			notification["error"]({
				message: "Ingrese un nombre válido",
			});
			setLoading(false);
        } else if (!whatsappValid) {
			notification["error"]({
				message: "Ingrese un WhatsApp válido",
			});
			setLoading(false);
        } else if (!emailValid) {
			notification["error"]({
				message: "Ingrese un correo válido",
			});
			setLoading(false);
        } else if (!instagramValid) {
			notification["error"]({
				message: "Ingrese un instagram válido",
			});
			setLoading(false);
        } else if (!categoryValid) {
			notification["error"]({
				message: "Ingrese una categoría",
			});
			setLoading(false);
        } else {
            const result = await signUpApi(payload);
            if (!result.ok) {
				notification["error"]({
					message: result.message,
				});
				setLoading(false);
			} else {
                setPayloadId(result.userId);
                setSaveImg1(true);
			}
        }
    }

	return (
		<Spin spinning={loading} size="large" tip="Cargando...">
            <div className="form-container">
                <Form onChange={changeForm} onFinish={SignUp}>
                    <div className="field">
                        <input type="text" name="fullName" id="fullName" required spellCheck="false" value={payload.fullName} onChange={inputValidation} />
                        <span className="placeholder">Nombre</span>
                    </div>
                    <div className="field">
                        <input id="whatsapp" type="text" name="whatsapp" required spellCheck="false" value={payload.whatsapp} onChange={inputValidation} />
                        <span className="placeholder">WhatsApp (Ej: +56911111111)</span>
                    </div>
                    <div className="field">
                        <input id="email" type="text" name="email" required spellCheck="false" value={payload.email} onChange={inputValidation} />
                        <span className="placeholder">Correo</span>
                    </div>
                    <div className="field">
                        <input id="instagram" type="text" name="instagram" required spellCheck="false" value={payload.instagram} onChange={inputValidation} />
                        <span className="placeholder">Instagram</span>
                    </div>
                    <div className="field">
                        <span className="category">Categoría</span>
                        <Radio.Group onChange={(e) => setCategory(e.target.value)} value={category}>
                            <Radio value={1}>Fade Master</Radio>
                            <Radio value={2}>Old School</Radio>
                            <Radio value={3}>New Trends</Radio>
                            <Radio value={4}>Freestyle</Radio>
                        </Radio.Group>
                    </div>
                    <div className="uploads-container">
                        <UploadCompetitorImage
                            save={saveImg1}
                            setSave={setSaveImg1}
                            setSave2={setSaveImg2}
                            options={payload}
                            setOptions={setPayload}
                            optionsId={payloadId}
                            previewCanvasRef1={previewCanvasRef1}
                            fileExt={fileExt1}
                            setFileExt={setFileExt1}
                            upImg={upImg1}
                            setUpImg={setUpImg1}
                            setStatusImages={setStatusImage1}
                        />
                        <UploadHaircutImage
                            save={saveImg2}
                            setSave={setSaveImg2}
                            options={payload}
                            setOptions={setPayload}
                            optionsId={payloadId}
                            previewCanvasRef1={previewCanvasRef2}
                            fileExt={fileExt2}
                            setFileExt={setFileExt2}
                            upImg={upImg2}
                            setUpImg={setUpImg2}
                            setStatusImages={setStatusImage2}
                        />
                    </div>
                    <div className="field">
                        <Button htmlType="submit">Enviar</Button>
                    </div>
                </Form>
            </div>
		</Spin>
	);
};

export default FormComponent;
