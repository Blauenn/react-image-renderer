interface CurrentComponentProp {
	lens_make_model: string;
	lens_highlight: boolean;
}

const ImagePreview_lens = (props: CurrentComponentProp) => {
	const { lens_make_model, lens_highlight } = props;

	if (lens_highlight && lens_make_model.endsWith(" G Master")) {
		return (
			<h1 className="text-[56px] font-bold text-[#cf4019]">
				{lens_make_model}
			</h1>
		);
	} else if (lens_highlight && lens_make_model.startsWith("Zeiss ")) {
		return (
			<h1 className="text-[56px] font-bold text-[#141E8C]">
				{lens_make_model}
			</h1>
		);
	} else if (lens_highlight && lens_make_model.endsWith(" S")) {
		return (
			<h1 className="text-[56px] font-bold text-[#FFE100] drop-shadow-sm">
				{lens_make_model}
			</h1>
		);
	} else {
		return (
			<h1 className="text-[56px] font-bold">
				{lens_make_model}
			</h1>
		);
	}
};

export default ImagePreview_lens;