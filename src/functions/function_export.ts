import saveAs from "file-saver";
import html2canvas from "html2canvas";

export const export_preview_image = (
  imagePreviewRef: any,
  high_quality: boolean
) => {
  if (imagePreviewRef.current) {
    html2canvas(imagePreviewRef.current, { width: 3840, height: 2160 }).then(
      (canvas) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              canvas.toBlob(
                (blob) => {
                  if (blob) {
                    saveAs(blob, "imagePreview.jpg");
                  }
                },
                "image/jpeg",
                high_quality ? 1 : 0.6
              );
            }
          },
          "image/jpeg",
          high_quality ? 1 : 0.6
        );
      }
    );
  }
};
