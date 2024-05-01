interface CameraInformation {
  body_make: string;
  body_model: string;
  lens_make_model: string;
  lens_isZoom: boolean;
}

interface CameraSettings {
  mode: string;
  ISO: string;
  shutter_speed: string;
  aperture: string;
  focal_length: string;
}

interface ContactInfo {
  photographer: string;
  facebook: string;
  facebook_2: string;
  instagram: string;
  instagram_2: string;
}

interface AlbumInfo {
  name: string;
  date: string;
}

interface OtherInfo {
  file_name: string;
  unedited: boolean;
  lens_highlight: boolean;
  high_quality: boolean;
}
