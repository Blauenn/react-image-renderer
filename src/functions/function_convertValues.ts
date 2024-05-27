import { convert_to_roman } from "./function_numbers";

export const convert_body_make = (Make: string) => {
  let converted_body_make =
    Make.charAt(0).toUpperCase() + Make.slice(1).toLowerCase();

  // Nikon cameras //
  if (converted_body_make.startsWith("Nikon corporation")) {
    converted_body_make = converted_body_make.replace(" corporation", "");
  }
  // Leica cameras //
  else if (converted_body_make.startsWith("Leica camera ag")) {
    converted_body_make = converted_body_make.replace(" camera ag", "");
  }
  // Olympus cameras //
  else if (converted_body_make.startsWith("Olympus corporation")) {
    converted_body_make = converted_body_make.replace(" corporation", "");
  }

  return converted_body_make;
};

export const convert_body_model = (Make: string, Model: string) => {
  let converted_body_model: string = Model;
  // Sony cameras //
  if (Model.startsWith("ILCE-")) {
    let model_noPrefix: string = "";
    let model_noSuffix: string = "";
    let model_mark_number: string = "";
    if (Model.startsWith("ILCE-")) {
      model_noPrefix = Model.replace("ILCE-", "");
    }

    const mIndex = model_noPrefix.lastIndexOf("M");
    if (mIndex !== -1) {
      model_mark_number = convert_to_roman(
        parseInt(model_noPrefix.substring(mIndex + 1))
      );
      model_noSuffix = model_noPrefix.substring(0, mIndex);
      converted_body_model = `A${model_noSuffix} ${model_mark_number}`;
    } else {
      converted_body_model = `A${model_noPrefix}`;
    }
  }
  // Canon cameras //
  else if (Model.startsWith("Canon ")) {
    converted_body_model = Model.replace("Canon ", "");
    converted_body_model = converted_body_model.replace("Mark ", "");
  }
  // Nikon cameras //
  else if (Model.startsWith("NIKON ")) {
    converted_body_model = Model.replace("NIKON ", "");
  }
  // Leica cameras //
  else if (Model.startsWith("LEICA ")) {
    converted_body_model = Model.replace("LEICA ", "");
  }
  // Olympus cameras //
  else if (Make.toLowerCase().startsWith("olympus")) {
    converted_body_model = Model.replace("Mark", " ");
  }

  return converted_body_model;
};

export const convert_lens_make_model = (
  LensModel: string,
  LensInfo: [number, number, number, number]
): string => {
  const [minFocalLength, maxFocalLength, minAperture, maxAperture] = LensInfo;

  let convertedLensModel: string = LensModel;

  // Sony lenses //
  if (LensModel.startsWith("FE ") || LensModel.startsWith("E ")) {
    const focalLength =
      minFocalLength !== maxFocalLength
        ? `${minFocalLength}-${maxFocalLength}mm`
        : `${minFocalLength}mm`;
    const aperture =
      minAperture !== maxAperture
        ? `f/${minAperture}-${maxAperture}`
        : `f/${minAperture}`;

    let prefix: string = "";
    let suffix: string = "";

    if (LensModel.endsWith("GM")) {
      suffix = "G Master";
    } else if (LensModel.endsWith("G")) {
      suffix = "G";
    } else if (LensModel.endsWith(" ZA")) {
      prefix = "Zeiss";
    }

    convertedLensModel = `${prefix} ${focalLength} ${aperture} ${suffix}`;
  }
  // Canon lenses //
  else if (LensModel.includes("EF") || LensModel.includes("RF")) {
    const focalLength =
      minFocalLength !== maxFocalLength
        ? `${minFocalLength}-${maxFocalLength}mm`
        : `${minFocalLength}mm`;
    let aperture;

    // Get the aperture value from LensModel string //
    const indexOfFSlash = LensModel.indexOf("f/");
    if (indexOfFSlash !== -1) {
      const indexOfSpace = LensModel.indexOf(" ", indexOfFSlash);

      if (indexOfSpace !== -1) {
        const lettersAfterFSlash = LensModel.substring(
          indexOfFSlash + 2,
          indexOfSpace
        );
        aperture = `f/${lettersAfterFSlash}`;
      }
    }

    let suffix;
    suffix = LensModel.includes("L") ? "L" : "";
    suffix = LensModel.includes("STM") ? "STM" : "";

    convertedLensModel = `${focalLength} ${aperture} ${suffix}`;
  }
  // Nikon lenses //
  else if (LensModel.startsWith("NIKKOR Z ")) {
    const focalLength =
      minFocalLength !== maxFocalLength
        ? `${minFocalLength}-${maxFocalLength}mm`
        : `${minFocalLength}mm`;
    const aperture =
      minAperture !== maxAperture
        ? `f/${minAperture}-${maxAperture}`
        : `f/${minAperture}`;

    const suffix = LensModel.endsWith(" S") ? "S" : "";

    convertedLensModel = `${focalLength} ${aperture} ${suffix}`;
  }
  // Leica lenses //
  else if (LensModel.startsWith("APO") || LensModel.startsWith("Summi")) {
    const focalLength =
      minFocalLength !== maxFocalLength
        ? `${minFocalLength}-${maxFocalLength}mm`
        : `${minFocalLength}mm`;
    const aperture =
      minAperture !== maxAperture
        ? `f/${minAperture}-${maxAperture}`
        : `f/${minAperture}`;

    let prefix: string = "";
    if (LensModel.toLowerCase().includes("summicron")) {
      prefix = "Summicron";
    } else if (LensModel.toLowerCase().includes("summilux")) {
      prefix = "Summilux";
    }

    convertedLensModel = `${prefix} ${focalLength} ${aperture}`;
  }
  // Olympus lenses //
  else if (LensModel.startsWith("OLYMPUS")) {
    const focalLength =
      minFocalLength !== maxFocalLength
        ? `${minFocalLength}-${maxFocalLength}mm`
        : `${minFocalLength}mm`;
    const aperture =
      minAperture !== maxAperture
        ? `f/${minAperture}-${maxAperture}`
        : `f/${minAperture}`;

    convertedLensModel = `${focalLength} ${aperture}`;
  }
  // Sigma lenses //
  else if (
    LensModel.includes("DG") ||
    LensModel.includes("DN") ||
    LensModel.includes("HSM")
  ) {
    const focalLength =
      minFocalLength !== maxFocalLength
        ? `${minFocalLength}-${maxFocalLength}mm`
        : `${minFocalLength}mm`;

    let aperture;
    // Get the aperture value from LensModel string //
    const indexOfFSlash = LensModel.indexOf("F");
    if (indexOfFSlash !== -1) {
      const indexOfSpace = LensModel.indexOf(" ", indexOfFSlash);

      if (indexOfSpace !== -1) {
        const lettersAfterFSlash = LensModel.substring(
          indexOfFSlash + 1,
          indexOfSpace
        );
        aperture = `f/${lettersAfterFSlash}`;
      }
    }

    let suffix;
    if (LensModel.includes("Art")) {
      suffix = "Art";
    }

    convertedLensModel = `Sigma ${focalLength} ${aperture} ${suffix}`;
  }

  return convertedLensModel;
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

// Check if the lens is a zoom or not //
export const isZoom = (LensInfo: [number, number, number, number]) => {
  if (LensInfo[0] != LensInfo[1]) {
    return true;
  } else {
    return false;
  }
};
