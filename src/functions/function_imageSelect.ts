import { exif_parse } from "./function_exifParse";

export const image_select = (
  event: React.ChangeEvent<HTMLInputElement>,
  setImageName: React.Dispatch<React.SetStateAction<string>>,
  setImageDescription: React.Dispatch<React.SetStateAction<string>>,
  setImageDimensions: React.Dispatch<React.SetStateAction<[number, number]>>,
  setImageSource: React.Dispatch<React.SetStateAction<string>>,
  setCameraInformation: React.Dispatch<React.SetStateAction<CameraInformation>>,
  setCameraSettings: React.Dispatch<React.SetStateAction<CameraSettings>>,
  setAlbumInfo: React.Dispatch<React.SetStateAction<AlbumInfo>>
) => {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  const imageName = file.name;
  setImageName(imageName);

  exif_parse(file, setImageDescription, setCameraInformation, setCameraSettings, setAlbumInfo);

  const reader = new FileReader();

  reader.onload = () => {
    const result = reader.result as string;
    setImageSource(result);

    const img = new Image();
    img.src = result;

    img.onload = () => {
      setImageDimensions([img.width, img.height]);
    };
  };
  reader.readAsDataURL(file);
};
