import { useEffect } from "react";
// Constants //
import { photographers_to_color } from "../../constants/styles/colors/constant_photographerColors";
import ImagePreview_lens from "./ImagePreview_lens.component";

interface CurrentComponentProp {
	isPreview?: boolean;
	imageSource: string;
	imageDimensions: [number, number];
	cameraInformation: CameraInformation;
	cameraSettings: CameraSettings;
	contactInfo: ContactInfo,
	albumInfo: AlbumInfo,
	otherInfo: OtherInfo,
}

const ImagePreview = (props: CurrentComponentProp) => {
	const { isPreview, imageSource, imageDimensions, cameraInformation, cameraSettings, contactInfo, albumInfo, otherInfo } = props;

	useEffect(() => {
	}, [imageDimensions, cameraInformation]);


	const photographerStyle = photographers_to_color[contactInfo.photographer] || "opacity-50";

	return (
		<div className="relative inline-block" >
			<div className="w-[3840px] h-[2160px] border-2 shadow-sm wall-background bg-white py-[115px] px-[130px]">
				<div className="relative w-full h-full">
					{/* Image */}
					<div className={`absolute flex items-center justify-center w-full h-full ${imageDimensions[0] > imageDimensions[1] ? "left-[500px]" : (imageDimensions[0] === imageDimensions[1] ? "left-[200px]" : "")}`}>
						<img src={imageSource}
							className={`${imageDimensions[0] / imageDimensions[1] > 16 / 9 ? "w-4/5 h-auto"
								: imageDimensions[0] / imageDimensions[1] > 3 / 2 ? "w-[2600px] h-auto"
									: "w-auto h-full"
								} shadow-md`} />
					</div>
					{/* Texts */}
					<div className="absolute top-0 left-0 flex flex-col justify-between h-full">
						{/* Header */}
						<div className="flex flex-col gap-4">
							{/* Photographer */}
							{contactInfo.photographer != "" ? (
								<h1 className={`text-[40px] ${photographerStyle}`}>Taken by {contactInfo.photographer}</h1>
							) : (
								<h1 className="text-[40px] opacity-50">Taken by Blauen</h1>
							)}
							{otherInfo.unedited ? (
								<h1 className="text-[40px] opacity-50">Unedited</h1>
							) : null}
						</div>
						{/* Center */}
						<div className="flex flex-col gap-24">
							{/* Camera information */}
							<div className="flex flex-col gap-4">
								<h1 className="text-[56px] font-bold">{cameraInformation.body_make} {cameraInformation.body_model}</h1>
								<ImagePreview_lens lens_make_model={cameraInformation.lens_make_model} lens_highlight={otherInfo.lens_highlight} />
							</div>
							{/* Camera settings */}
							<div className="flex flex-col gap-4 opacity-50">
								<h1 className="text-[60px] font-semibold">ISO {cameraSettings.ISO}</h1>
								<h1 className="text-[60px] font-semibold">{cameraSettings.shutter_speed}s</h1>
								<h1 className="text-[60px] font-semibold">f/{cameraSettings.aperture}</h1>
								{cameraInformation.lens_isZoom ? (
									<h1 className="text-[60px] font-semibold">{cameraSettings.focal_length}mm</h1>
								) : null}
							</div>
							{/* Contact information */}
							<div className="flex flex-col gap-16 mt-8">
								{/* First person */}
								<div className="flex flex-col gap-12">
									{contactInfo.facebook != "" ? (
										<div className="relative flex flex-row items-center gap-8">
											<img src="/assets/facebook.png" className="w-[60px] h-[60px]" />
											<h1 className={`relative ${isPreview ?? "-top-4"} text-[40px] opacity-50 font-semibold`}>{contactInfo.facebook}</h1>
										</div>
									) : null}
									{contactInfo.instagram != "" ? (
										<div className="relative flex flex-row items-center gap-8">
											<img src="/assets/instagram.png" className="w-[60px] h-[60px]" />
											<h1 className={`relative ${isPreview ?? "-top-4"} text-[40px] opacity-50 font-semibold`}>{contactInfo.instagram}</h1>
										</div>
									) : null}
								</div>
								{/* Second person */}
								<div className="flex flex-col gap-12">
									{contactInfo.facebook_2 != "" ? (
										<div className="relative flex flex-row items-center gap-8">
											<img src="/assets/facebook.png" className="w-[60px] h-[60px]" />
											<h1 className={`relative ${isPreview ?? "-top-4"} text-[40px] opacity-50 font-semibold`}>{contactInfo.facebook_2}</h1>
										</div>
									) : null}
									{contactInfo.instagram_2 != "" ? (
										<div className="relative flex flex-row items-center gap-8">
											<img src="/assets/instagram.png" className="w-[60px] h-[60px]" />
											<h1 className={`relative ${isPreview ?? "-top-4"} text-[40px] opacity-50 font-semibold`}>{contactInfo.instagram_2}</h1>
										</div>
									) : null}
								</div>
							</div>
						</div>
						{/* Footer */}
						<div className="flex flex-col gap-4 opacity-50">
							<h1 className="text-[40px]">{albumInfo.date}</h1>
							<h1 className="text-[40px]">{albumInfo.name != "" ? albumInfo.name : "[NO ALBUM NAME]"}</h1>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default ImagePreview;
