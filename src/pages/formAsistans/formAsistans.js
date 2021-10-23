/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Spin, notification, Form, Radio, Button } from "antd";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { emailValidation, minLengthValidation, validateWhatsApp } from "../../utils/formValidation";
import { signUpAssistantApi } from "../../api/form";
import logo from '../../assets/img/logo.png'
import "../form/form.css";

const FormAssistantComponent = () => {
	const [loading, setLoading] = useState(false);

    const [saveImg1, setSaveImg1] = useState(false);
    const [saveImg2, setSaveImg2] = useState(false);
    const [payloadId, setPayloadId] = useState("");
    const [rol, setRol] = useState(0);
    const [rubro, setRubro] = useState("");
    const [payload, setPayload] = useState({
		fullName: "",
		whatsapp: "",
		email: "",
		region: "",
		rol: "",
		rubro: "",
		rut: "",
	});
    
    const [formValid, setFormValid] = useState({
		fullName: false,
		whatsapp: false,
		email: false,
		rol:false,
		rut: false,
	});

    useEffect(() => {
        setPayload({
            ...payload,
            rol: rol,
        })
    }, [rol]);

    useEffect(() => {
        setPayload({
            ...payload,
            rubro: rubro,
        })
    }, [rubro]);

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
    const handleChange = e => {
        setPayload({
            ...payload,
            region: e.target.value
        });
    }
    const SignUp = async () => {
        console.log(payload);
        setLoading(true);
        
        const valFullName = payload.fullName;
        const valWhatsapp = payload.whatsapp;
        const valEmail = payload.email;
        const valRol = payload.rol;
        const valRegion = payload.region;
        const valRut = payload.rut;

        const fullNameValid = formValid.fullName;
        const whatsappValid = formValid.whatsapp;
        const emailValid = formValid.email;
        const rutValid = payload.rut;

        if (!valFullName || !valWhatsapp || !valEmail || !valRol || !valRegion || !valRut) {
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
        } else if (!rutValid) {
			notification["error"]({
				message: "Ingrese un rut válido",
			});
			setLoading(false);
        }else {
            console.log(payload);
            const result = await signUpAssistantApi(payload);
            console.log(result);
            if (!result.ok) {
				notification["error"]({
					message: result.message,
				});
				setLoading(false);
			} else {
                setPayloadId(result.userId);
				setLoading(false);
                setPayload({
                    fullName: "",
                    whatsapp: "",
                    email: "",
                    commune: "",
                    region: "",
                    rol: "",
                    rubro: "",
                    rut: "",
                });
                notification["success"]({
					message: result.message,
				});
			}
        }
    }

	return (
		<Spin spinning={loading} size="large" tip="Cargando...">
            <div className="form-container">
                <Form onChange={changeForm} onFinish={SignUp}>
                    <div className="fieldMax">
                        <div className="field">
                            <input type="text" name="fullName" id="fullName" required spellCheck="false" value={payload.fullName} onChange={inputValidation} />
                            <span className="placeholder">Nombre</span>
                        </div>
                        <div className="field">
                            <input id="rut" type="text" name="rut" required spellCheck="false" value={payload.rut} onChange={inputValidation} />
                            <span className="placeholder">Rut</span>
                        </div>
                        <div className="field">
                            <input id="email" type="text" name="email" required spellCheck="false" value={payload.email} onChange={inputValidation} />
                            <span className="placeholder">Correo</span>
                        </div>
                        <div className="field">
                            <input id="whatsapp" type="text" name="whatsapp" required spellCheck="false" value={payload.whatsapp} onChange={inputValidation} />
                            <span className="placeholder">WhatsApp (Ej: +56911111111)</span>
                        </div>
                        <div className="field">
                            <InputLabel id="demo-simple-select-label">Región</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={payload.region}
                                label="Región"
                                onChange={handleChange}
                                style={{width:'100%'}}
                            >
                                <MenuItem value={"Antofagasta"}>Antofagasta</MenuItem>
                                <MenuItem value={"Araucanía"}>Araucanía</MenuItem>
                                <MenuItem value={"Arica_Parinacota"}>Arica-Parinacota</MenuItem>
                                <MenuItem value={"Atacama"}>Atacama</MenuItem>
                                <MenuItem value={"Aysen"}>Aysen</MenuItem>
                                <MenuItem value={"Bío_Bío"}>Bío Bío</MenuItem>
                                <MenuItem value={"Coquimbo"}>Coquimbo</MenuItem>
                                <MenuItem value={"Los_Lagos"}>Los Lagos</MenuItem>
                                <MenuItem value={"los_Rios"}>los Ríos</MenuItem>
                                <MenuItem value={"Magallanes"}>Magallanes y Antartica Chilena</MenuItem>
                                <MenuItem value={"Maule"}>Maule</MenuItem>
                                <MenuItem value={"Metropolitana"}>Metropolitana</MenuItem>
                                <MenuItem value={"O'higgins"}>O'higgins</MenuItem>
                                <MenuItem value={"Tarapaca"}>Tarapacá</MenuItem>
                                <MenuItem value={"Valparaiso"}>Valparaíso</MenuItem>
                                <MenuItem value={"Ñuble"}>Ñuble</MenuItem>
                            </Select>
                        </div>
                        <div className="field">
                            <span className="category">Tipo de visitante:</span>
                            <Radio.Group onChange={(e) => setRol(e.target.value)} value={rol}>
                                <Radio value={"Profesional"}>Profesional</Radio>
                                <Radio value={"Estudiante"}>Estudiante</Radio>
                                <Radio value={"Público"}>Público</Radio>
                            </Radio.Group>
                        </div>
                        <div className="field">
                            <span className="category">Tipo de visitante:</span>
                            <Radio.Group onChange={(e) => setRubro(e.target.value)} value={rubro}>
                                <div>
                                    <Radio value={"barberia"}>Barbería</Radio>
                                    <Radio value={"peluqueria"}>Peluquería</Radio>
                                    <Radio value={"cosmetica"}>Cosmética y maquillaje</Radio>
                                </div>
                                <div>
                                    <Radio value={"estetica-wellnes"}>Estética / wellness y SPA</Radio>
                                    <Radio value={"import-distribuidor-mayorista"}>Import / Distribuidores / Mayoristas</Radio>
                                    <Radio value={"escuelas-institutos"}>Escuelas e Institutos de Formación</Radio>
                                </div>
                                <div>
                                    <Radio value={"manicure"}>Manicure</Radio>
                                    <Radio value={"organizaciones-afines"}>Organizaciones Afines</Radio>
                                    <Radio value={"otros"}>Otros</Radio>
                                </div>
                            </Radio.Group>
                        </div>
                        <div className="fieldBtn">
                            <Button htmlType="submit" className="btnmaxmixo">Enviar</Button>
                        </div>
                    </div>
                </Form>
            </div>
		</Spin>
	);
};

export default FormAssistantComponent;
