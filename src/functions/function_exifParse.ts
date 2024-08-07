import exifr from "exifr";
import {
  convert_body_make,
  convert_body_model,
  convert_lens_make_model,
  convert_shutter_speed,
  convert_date,
  isZoom,
} from "./function_convertValues";

export const exif_parse = async (
  file: File,
  setImageDescription: React.Dispatch<React.SetStateAction<string>>,
  setCameraInformation: React.Dispatch<React.SetStateAction<CameraInformation>>,
  setCameraSettings: React.Dispatch<React.SetStateAction<CameraSettings>>,
  setAlbumInfo: React.Dispatch<React.SetStateAction<AlbumInfo>>
) => {
  try {
    const exifData = await exifr.parse(file);
    if (exifData) {
      const {
        ImageDescription,
        Make,
        Model,
        LensMake,
        LensModel,
        LensInfo,
        ExposureMode,
        ISO,
        ExposureTime,
        FNumber,
        FocalLength,
        DateTimeOriginal,
      } = exifData;

      console.log(exifData);

      const converted_values = {
        converted_body_make: convert_body_make(Make),
        converted_body_model: convert_body_model(Make, Model),
        converted_lens_make_model: convert_lens_make_model(LensMake, LensModel, LensInfo),
        converted_mode: ExposureMode,
        converted_ISO: ISO.toString(),
        converted_shutter_speed: convert_shutter_speed(ExposureTime),
        converted_aperture: FNumber,
        converted_focal_length: `${Math.ceil(FocalLength)}`,
        converted_date: convert_date(DateTimeOriginal),
      };

      if (ImageDescription != null) {
        setImageDescription(ImageDescription);
      } else {
				setImageDescription("");
			}

      setCameraInformation({
        body_make: converted_values.converted_body_make,
        body_model: converted_values.converted_body_model,
        lens_make_model: converted_values.converted_lens_make_model,
        lens_isZoom: isZoom(LensInfo),
      });

      setCameraSettings({
        mode: converted_values.converted_mode,
        ISO: converted_values.converted_ISO,
        shutter_speed: converted_values.converted_shutter_speed,
        aperture: converted_values.converted_aperture,
        focal_length: converted_values.converted_focal_length,
      });

      setAlbumInfo((prevAlbumInfo) => ({
        name: prevAlbumInfo.name,
        date: converted_values.converted_date,
      }));
    }
  } catch (error) {
    console.error("Error parsing EXIF data:", error);
  }
};
