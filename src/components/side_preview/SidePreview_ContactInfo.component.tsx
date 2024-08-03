// Functions //
import { fieldChanges } from "../../functions/function_fieldChanges";
// Constants //
import { section_styles } from "../../constants/styles/constant_section";

interface CurrentComponentProp {
	contactInfo: ContactInfo,
	setContactInfo: React.Dispatch<React.SetStateAction<ContactInfo>>;
}

const SidePreview_ContactInfo = (props: CurrentComponentProp) => {
	const { contactInfo, setContactInfo } = props;

	return (
		<>
			<div className={section_styles}>
				<div className="flex flex-row gap-4">
					<label htmlFor="facebook" className="text-blue-500 text-md">Facebook:</label>
					<input value={contactInfo.facebook} onChange={(e) => fieldChanges(e, "facebook", setContactInfo)} id="facebook" type="text" className="px-2 border border-opacity-50 rounded-lg shadow-sm" />
				</div>
				<div className="flex flex-row gap-4">
					<label htmlFor="instagram" className="text-pink-500 text-md">Instagram:</label>
					<input value={contactInfo.instagram} onChange={(e) => fieldChanges(e, "instagram", setContactInfo)} id="instagram" type="text" className="px-2 border border-opacity-50 rounded-lg shadow-sm" />
				</div>
			</div>
			{/* Contact information 2nd person */}
			<div className={`${section_styles} ${(contactInfo.facebook != "" || contactInfo.instagram != "") || "opacity-50"}`}>
				<div className="flex flex-row gap-4">
					<label htmlFor="facebook_2" className="text-blue-500 text-md">Facebook:</label>
					<input value={contactInfo.facebook_2} onChange={(e) => fieldChanges(e, "facebook_2", setContactInfo)} disabled={contactInfo.facebook == "" && contactInfo.instagram == ""} id="facebook_2" type="text" className="px-2 border border-opacity-50 rounded-lg shadow-sm" />
				</div>
				<div className="flex flex-row gap-4">
					<label htmlFor="instagram_2" className="text-pink-500 text-md">Instagram:</label>
					<input value={contactInfo.instagram_2} onChange={(e) => fieldChanges(e, "instagram_2", setContactInfo)} disabled={contactInfo.facebook == "" && contactInfo.instagram == ""} id="instagram_2" type="text" className="px-2 border border-opacity-50 rounded-lg shadow-sm" />
				</div>
			</div>
		</>
	);
};

export default SidePreview_ContactInfo;