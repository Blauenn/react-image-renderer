// Functions //
import { fieldChanges } from "../../functions/function_fieldChanges";
// Constants //
import { section_styles } from "../../constants/styles/constant_section";

interface CurrentComponentProp {
	albumInfo: AlbumInfo;
	setAlbumInfo: React.Dispatch<React.SetStateAction<AlbumInfo>>;
}

const SidePreview_AlbumInfo = (props: CurrentComponentProp) => {
	const { albumInfo, setAlbumInfo } = props;

	return (
		<div className={`${section_styles} gap-4`}>
			{/* Date */}
			<div className="flex flex-col gap-1">
				<h1 className="text-md">Date taken</h1>
				<h1 className="text-2xl font-semibold">{albumInfo.date}</h1>
			</div>
			{/* Album name */}
			<div className="flex flex-col gap-2">
				<label htmlFor="albumName" className="text-md">Album name</label>
				<input onChange={(e) => fieldChanges(e, "name", setAlbumInfo)} id="albumName" type="text" className="px-2 border border-opacity-50 rounded-lg shadow-sm" />
			</div>
		</div>
	);
};

export default SidePreview_AlbumInfo;
