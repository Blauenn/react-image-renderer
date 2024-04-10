import React from "react";
import { section_styles } from "../../constants/styles/constant_section";
import { fieldChanges, toggleCheckbox } from "../../functions/function_fieldChanges";
import { hover_transition } from "../../constants/styles/constant_hoverTransition";

interface CurrentComponentProp {
	contactInfo: ContactInfo;
	setContactInfo: React.Dispatch<React.SetStateAction<ContactInfo>>;
	otherInfo: OtherInfo;
	setOtherInfo: React.Dispatch<React.SetStateAction<OtherInfo>>;
}

const SidePreview_Others = (props: CurrentComponentProp) => {
	const { contactInfo, setContactInfo, otherInfo, setOtherInfo } = props;

	return (
		<div className={section_styles}>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<label htmlFor="photographer" className="text-md">Taken by</label>
					<input onChange={(e) => fieldChanges(e, "photographer", setContactInfo)} id="photographer" type="text" defaultValue={contactInfo.photographer} className="px-2 border border-opacity-50 rounded-lg shadow-sm" />
				</div>
				<div className="flex flex-row gap-4">
					<div className="grid gap-4">
						<div className="flex flex-row w-full gap-2">
							<label className={`inline-flex items-center gap-2 px-4 py-2 bg-white border cursor-pointer hover:bg-blue-300 rounded-xl ${hover_transition} ${otherInfo.unedited ? "bg-blue-300" : ""}`}>
								<input type="checkbox" onChange={(event) => toggleCheckbox('unedited', event, setOtherInfo)} checked={otherInfo.unedited} className="absolute w-0 h-0 opacity-0" />
								<span className="text-md">Unedited</span>
							</label>
							{/* If the lens is G Master and this is also checked, change the color of the lens text */}
							<label className={`inline-flex items-center gap-2 px-4 py-2 bg-white border cursor-pointer hover:bg-orange-400 rounded-xl ${hover_transition} ${otherInfo.lens_highlight ? "bg-orange-400" : ""}`}>
								<input type="checkbox" onChange={(event) => toggleCheckbox('lens_highlight', event, setOtherInfo)} checked={otherInfo.lens_highlight} className="absolute w-0 h-0 opacity-0" />
								<span className="text-md">Lens highlight</span>
							</label>
						</div>
						<div className="flex flex-row items-center gap-4">
							{/* Export quality */}
							<label className={`inline-flex items-center gap-2 px-4 py-2 bg-white border cursor-pointer hover:bg-green-400 rounded-xl ${hover_transition} ${otherInfo.high_quality ? "bg-green-400" : ""}`}>
								<input type="checkbox" onChange={(event) => toggleCheckbox('high_quality', event, setOtherInfo)} checked={otherInfo.high_quality} className="absolute w-0 h-0 opacity-0" />
								<span className="text-md">Export with high quality</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidePreview_Others;
