import { convert_to_roman } from "./function_numbers";

export const convert_body_make = (Make: string) => {
  const converted_body_make =
    Make.charAt(0).toUpperCase() + Make.slice(1).toLowerCase();

  return converted_body_make;
};

export const convert_body_model = (Model: string) => {
  let converted_body_model: string = Model;
  // Sony Cameras //
  if (Model.startsWith("ILCE-")) {
    let model_noPrefix: string = "";
    let model_mark_number: string = "";
    if (Model.startsWith("ILCE-")) {
      model_noPrefix = Model.replace("ILCE-", "");
    }

    const model_suffix = model_noPrefix.substring(-2);
    if (model_suffix.startsWith("M")) {
      model_mark_number = convert_to_roman(
        parseInt(model_suffix.replace("M", ""))
      );
    }

    converted_body_model = `A${model_noPrefix} ${model_mark_number}`;
  }

  return converted_body_model;
};

export const convert_lens_make_model = (
  LensModel: string,
  LensInfo: [number, number, number, number]
) => {
  let converted_lens_model: string = LensModel;
  // Sony lenses //
  if (LensModel.startsWith("FE ") || LensModel.startsWith("E ")) {
    // Focal length //
    let focal_length: string = "";
    if (LensInfo[0] != LensInfo[1]) {
      focal_length = `${LensInfo[0]}-${LensInfo[1]}mm`;
    } else {
      focal_length = `${LensInfo[0]}mm`;
    }
    // Aperture //
    let aperture: string = "";
    if (LensInfo[2] != LensInfo[3]) {
      aperture = `f/${LensInfo[2]}-${LensInfo[3]}`;
    } else {
      aperture = `f/${LensInfo[2]}`;
    }

    // Is in G or GM lineup?
    let isGM: boolean = false;
    let isG: boolean = false;
    if (LensModel.endsWith("GM")) {
      isGM = true;
    } else if (LensModel.endsWith("G")) {
      isG = true;
    }

    let suffix: string = "";
    if (isGM) {
      suffix = " G Master";
    } else if (isG) {
      suffix = " G";
    }

    // No space, it comes with the suffix //
    converted_lens_model = `${focal_length} ${aperture}${suffix}`;
  }

  return converted_lens_model;
};

export const convert_shutter_speed = (ExposureTime: number) => {
  let converted_shutter_speed: string = ExposureTime.toString();
  if (ExposureTime < 1) {
    converted_shutter_speed = `1/${1 / ExposureTime}`;
  }

  return converted_shutter_speed;
};

export const convert_aperture = (ApertureValue: number) => {
  let result = Math.pow(2, ApertureValue / 2);
  result = Math.round(result * 10) / 10;
  return Number.isInteger(result) ? result.toFixed(0) : result.toFixed(1);
};

export const convert_date = (DateTimeOriginal: Date) => {
  const day = DateTimeOriginal.getDate().toString().padStart(2, "0");
  const month = (DateTimeOriginal.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed, so add 1
  const year = DateTimeOriginal.getFullYear();

  return `${day}.${month}.${year}`;
};