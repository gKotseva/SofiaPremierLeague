const multer = require('multer');

const configureMulter = (uploadPath) => {
    return multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, uploadPath); 
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname);
            }
        })
    });
};

module.exports = configureMulter;