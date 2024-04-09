import { useState } from "react";
// Functions //
import { image_select } from "./functions/function_imageSelect";
// Constants //
import { hover_transition } from "./constants/styles/constant_hoverTransition";
import { section_styles } from "./constants/styles/constant_section";
import { fieldChanges } from "./functions/function_fieldChanges";

const App = () => {
	const [imageSource, setImageSource] = useState<string>("");
	const [imageName, setImageName] = useState<string>("Please select a file...");

	const [cameraInformation, setCameraInformation] = useState<CameraInformation>({
		body_make: "",
		body_model: "",
		lens_make_model: "",
	});
	const [cameraSettings, setCameraSettings] = useState<CameraSettings>({
		mode: "",
		ISO: "",
		shutter_speed: "",
		aperture: "",
		focal_length: ""
	});
	const [contactInfo, setContactInfo] = useState<ContactInfo>({
		facebook: "",
		facebook_2: "",
		instagram: "",
		instagram_2: "",
	});
	const [albumInfo, setAlbumInfo] = useState<AlbumInfo>({
		name: "",
		date: ""
	});

	return (
		<div className="m-8">
			<div className="flex flex-row gap-16">
				<div className="flex flex-col gap-8 w-1/4">
					<h1 className="text-2xl font-semibold">React image renderer</h1>
					{/* Buttons */}
					<div className="flex flex-row gap-4">
						<div>
							<input
								type="file"
								accept="image/*"
								onChange={(event) => image_select(event, setImageName, setImageSource, setCameraInformation, setCameraSettings, setAlbumInfo)}
								style={{ display: "none" }}
								id="fileInput"
							/>
							<label htmlFor="fileInput" className={`px-4 py-2 border border-opacity-50 rounded-xl shadow-sm bg-white hover:bg-pink-200 cursor-pointer ${hover_transition}`}>
								Upload an image
							</label>
						</div>
						<div>
							<input
								type="file"
								accept="image/*"
								onChange={() => console.log("Exported")}
								style={{ display: "none" }}
								id="fileOutput"
							/>
							<label htmlFor="fileOutput" className={`px-4 py-2 border border-opacity-50 rounded-xl shadow-sm bg-white hover:bg-pink-200 cursor-pointer ${hover_transition}`}>
								Export
							</label>
						</div>
					</div>

					{/* Information */}
					{imageSource != "" ? (
						<div className="flex flex-col gap-4">
							{/* File name */}
							<h1 className="text-xl">{imageName}</h1>
							{/* Camera information */}
							<div className={section_styles}>
								<h1 className="text-md">Camera : {cameraInformation.body_make} {cameraInformation.body_model}</h1>
								<h1 className="text-md">Lens : {cameraInformation.lens_make_model}</h1>
							</div>
							{/* Camera settings */}
							<div className={section_styles}>
								<h1 className="text-md">ISO : {cameraSettings.ISO}</h1>
								<h1 className="text-md">Shutter speed : {cameraSettings.shutter_speed}s</h1>
								<h1 className="text-md mb-2">Aperture : f/{cameraSettings.aperture}</h1>
								<h1 className="text-md">Mode : {cameraSettings.mode}</h1>
								<h1 className="text-md">Focal length : {cameraSettings.focal_length}</h1>
							</div>
							{/* Album information */}
							<div className={section_styles}>
								<div className="flex flex-row gap-4">
									<label htmlFor="albumName" className="text-md">Album name :</label>
									<input onChange={(e) => fieldChanges(e, "albumName", setAlbumInfo)} id="albumName" type="text" className="border border-opacity-50 rounded-lg shadow-sm px-2" />
								</div>
								<h1 className="text-md">Date taken : {albumInfo.date}</h1>
							</div>
							{/* Contact information */}
							<div className={section_styles}>
								<div className="flex flex-row gap-4">
									<label htmlFor="facebook" className="text-md text-blue-500">Facebook : </label>
									<input onChange={(e) => fieldChanges(e, "facebook", setContactInfo)} id="facebook" type="text" className="border border-opacity-50 rounded-lg shadow-sm px-2" />
								</div>
								<div className="flex flex-row gap-4">
									<label htmlFor="instagram" className="text-md text-pink-500">Instagram : </label>
									<input onChange={(e) => fieldChanges(e, "instagram", setContactInfo)} id="instagram" type="text" className="border border-opacity-50 rounded-lg shadow-sm px-2" />
								</div>
							</div>
							{/* Contact information 2nd person */}
							<div className={section_styles}>
								<div className="flex flex-row gap-4">
									<label htmlFor="facebook_2" className="text-md text-blue-500">Facebook : </label>
									<input onChange={(e) => fieldChanges(e, "facebook_2", setContactInfo)} id="facebook_2" type="text" className="border border-opacity-50 rounded-lg shadow-sm px-2" />
								</div>
								<div className="flex flex-row gap-4">
									<label htmlFor="instagram_2" className="text-md text-pink-500">Instagram : </label>
									<input onChange={(e) => fieldChanges(e, "instagram_2", setContactInfo)} id="instagram_2" type="text" className="border border-opacity-50 rounded-lg shadow-sm px-2" />
								</div>
							</div>
						</div>
					) : null}
				</div>
				<img src={imageSource} className="h-[800px] rounded-xl shadow-sm" />
			</div>
		</div>
	);
};

export default App;
