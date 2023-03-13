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
      ext === "zip" ||
      ext === "rar" ||
      ext === "7z" ||
      ext === "tar" ||
      ext === "gz" ||
      ext === "bz2" ||
      ext === "xz" ||
      ext === "iso" ||
      ext === "dmg" ||
      ext === "apk" ||
      ext === "exe" ||
      ext === "msi" ||
      ext === "deb" ||
      ext === "pkg" ||
      ext === "rpm" ||
      ext === "jar" ||
      ext === "war" ||
      ext === "ear" ||
      ext === "bin" ||
      ext === "swf"
    ) {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});

export default upload;
