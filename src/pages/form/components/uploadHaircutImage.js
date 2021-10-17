/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Spin, notification } from "antd";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import { putHaircutImageApi } from "../../../api/form";

const UploadHaircutImage = (props) => {
	const { save, setSave, options, setOptions, optionsId, previewCanvasRef1, fileExt, setFileExt, upImg, setUpImg, setStatusImages } = props;

	const [loading, setLoading] = useState(false);

	const [imageHaircut, setImageHaircut] = useState("");

	// Crop
	const imgRef = useRef(null);
	const [crop, setCrop] = useState({
		unit: "px",
		width: 300,
		aspect: 1 / 1,
	});
	const [completedCrop, setCompletedCrop] = useState(null);

	useEffect(() => {
		if (imageHaircut) {
			setOptions({
				...options,
				imageHaircut: imageHaircut.file,
			});
		}
	}, [imageHaircut]);

	useEffect(() => {
		if (!completedCrop || !previewCanvasRef1.current || !imgRef.current) {
			return;
		}

		const image = imgRef.current;
		const canvas = previewCanvasRef1.current;
		const crop = completedCrop;

		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		const ctx = canvas.getContext("2d");
		const pixelRatio = window.devicePixelRatio;

		canvas.width = crop.width * pixelRatio;
		canvas.height = crop.height * pixelRatio;

		ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
		ctx.imageSmoothingQuality = "high";

		ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
		generateFile(previewCanvasRef1.current, setImageHaircut, "imageHaircut", fileExt);
	}, [completedCrop]);

	useEffect(() => {
		if (save) {
			updateHaircutImage();
			setSave(false);
		}
	}, [save]);

	const updateHaircutImage = async () => {
		let optionsUpdate = options;
		if (typeof optionsUpdate.imageHaircut == "object") {
			const resp = await putHaircutImageApi(optionsUpdate.imageHaircut, optionsId);
			if (resp.ok) {
				optionsUpdate.imageHaircut = resp.image;
				setStatusImages(1);
			} else {
				notification["error"]({
					message: resp.message,
				});
			}
		} else {
			setStatusImages(2);
		}
	};

	const onSelectFile = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			const extSplit = e.target.files[0].name.split(".");
			setFileExt(extSplit[1]);
			const reader = new FileReader();
			reader.addEventListener("load", () => setUpImg(reader.result));
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	const onLoad = useCallback((img) => {
		imgRef.current = img;
	}, []);

	const onChangeCrop = (c) => {
		c.width = 300;
		c.height = 300;
		setCrop(c);
	};

	return (
		<Spin spinning={loading} size="large" tip="Cargando...">
			<div className="upload-image-container">
				<div>
					<input type="file" accept="image/png, image/jpeg, , image/jpg" id="file" name="file" className="file" onChange={onSelectFile} />
					<label htmlFor="file" className="labelFile">
						<p>
							Sube aquí <br />
							<span>Foto del Corte</span>
						</p>
					</label>
				</div>
				<div className="react-crop">
					<ReactCrop
						src={upImg}
						crossorigin="anonymous"
						onImageLoaded={onLoad}
						crop={crop}
						style={{ width: "calc(100% - 40px)", overflow: "auto", margin: "20px", maxHeight: "500px" }}
						onChange={(c) => onChangeCrop(c)}
						onComplete={(c) => setCompletedCrop(c)}
					/>
					<canvas ref={previewCanvasRef1} crossOrigin="anonymous" className="hideCanvas" />
				</div>
			</div>
		</Spin>
	);
};

export default UploadHaircutImage;

function generateFile(canvas, setImage, name, fileExt) {
	if (!canvas) {
		return;
	}

	canvas.toBlob(
		(blob) => {
			const file = new File([blob], `${name}.${fileExt}`);
			setImage({ file, preview: URL.createObjectURL(file) });
		},
		`image/${fileExt}`,
		1
	);
}
