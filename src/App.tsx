import { useRef, useState } from "react";
// Components //
import ImagePreview from "./components/image_preview/ImagePreview.component";
import SidePreview_AlbumInfo from "./components/side_preview/SidePreview_AlbumInfo.component";
import SidePreview_ContactInfo from "./components/side_preview/SidePreview_ContactInfo.component";
// Functions //
import { image_select } from "./functions/function_imageSelect";
// Constants //
import { hover_transition } from "./constants/styles/constant_hoverTransition";
import SidePreview_Others from "./components/side_preview/SidePreview_Others.component";
import { export_preview_image } from "./functions/function_export";

const App = () => {
	const imagePreviewRef = useRef<HTMLDivElement | null>(null);

	const [imageSource, setImageSource] = useState<string>("");
	const [imageName, setImageName] = useState<string>("Please select a file...");
	const [imageDimensions, setImageDimensions] = useState<[number, number]>([0, 0]);

	const [cameraInformation, setCameraInformation] = useState<CameraInformation>({
		body_make: "",
		body_model: "",
		lens_make_model: "",
		lens_isZoom: false
	});
	const [cameraSettings, setCameraSettings] = useState<CameraSettings>({
		mode: "",
		ISO: "",
		shutter_speed: "",
		aperture: "",
		focal_length: ""
	});
	const [contactInfo, setContactInfo] = useState<ContactInfo>({
		photographer: "Blauen",
		facebook: "",
		facebook_2: "",
		instagram: "",
		instagram_2: "",
	});
	const [albumInfo, setAlbumInfo] = useState<AlbumInfo>({
		name: "",
		date: ""
	});
	const [otherInfo, setOtherInfo] = useState<OtherInfo>({
		file_name: "",
		unedited: false,
		lens_highlight: false,
		high_quality: false,
	});

	return (
		<div className="m-8">
			<div className="flex flex-row gap-16">
				<div className="flex flex-col w-1/4 gap-8">
					{/* Buttons */}
					<div className="flex flex-row gap-4">
						<div>
							<input
								type="file"
								accept="image/*"
								onChange={(event) => image_select(event, setImageName, setImageDimensions, setImageSource, setCameraInformation, setCameraSettings, setAlbumInfo)}
								style={{ display: "none" }}
								id="fileInput"
							/>
							<label htmlFor="fileInput" className={`px-4 py-2 border border-opacity-50 rounded-xl shadow-sm bg-white hover:bg-pink-200 cursor-pointer ${hover_transition}`}>
								Upload an image
							</label>
						</div>
					</div>

					{/* Information */}
					{imageSource != "" ? (
						<div className="flex flex-col gap-4">
							{/* File name */}
							<h1 className="text-xl">{imageName}</h1>
							{/* Album information */}
							<SidePreview_AlbumInfo albumInfo={albumInfo} setAlbumInfo={setAlbumInfo} />
							{/* Contact information */}
							<SidePreview_ContactInfo contactInfo={contactInfo} setContactInfo={setContactInfo} />
							{/* Other settings */}
							<SidePreview_Others contactInfo={contactInfo} setContactInfo={setContactInfo} otherInfo={otherInfo} setOtherInfo={setOtherInfo} />
							<button onClick={() => { export_preview_image(imagePreviewRef, otherInfo.high_quality, otherInfo.file_name); }} className={`px-4 py-2 border border-opacity-50 rounded-xl shadow-sm bg-white hover:bg-pink-200 cursor-pointer ${hover_transition}`}>
								Download Image Preview
							</button>
						</div>
					) : null}
				</div>

				{imageSource != "" ? (
					<>
						{/* The preview on the web */}
						<div className="scale-[0.35] origin-top-left">
							<ImagePreview isPreview imageSource={imageSource} imageDimensions={imageDimensions} cameraInformation={cameraInformation} cameraSettings={cameraSettings} contactInfo={contactInfo} albumInfo={albumInfo} otherInfo={otherInfo} />
						</div>
						{/* The canvas that's being rendered and downloaded */}
						{/* Doing this will also remove the gray margin on the right and bottom */}
						{/* Rendered offscreen, but you can scroll to it tho */}
						<div ref={imagePreviewRef}>
							<ImagePreview imageSource={imageSource} imageDimensions={imageDimensions} cameraInformation={cameraInformation} cameraSettings={cameraSettings} contactInfo={contactInfo} albumInfo={albumInfo} otherInfo={otherInfo} />
						</div>
					</>
				) : null}
			</div>
		</div>
	);
};

export default App;
