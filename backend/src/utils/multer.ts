import multer from "multer";

// Multer config
const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    //get ext from mimetype
    const ext = file.mimetype.split("/")[1];

    //TODO: work on adding more file types to be uploaded

    // TODO: work on making validation properly
    if (
      ext !== "jpg" &&
      ext !== "jpeg" &&
      ext !== "png" &&
      ext !== "webp" &&
      ext !== "avif"
    ) {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});

export default upload;
