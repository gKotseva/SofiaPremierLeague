const multer = require('multer');

const configureMulter = () => {
    return multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                if (file.fieldname === 'teamPhoto'){
                    cb(null, 'uploads/teams'); 
                } else if (file.fieldname === 'teamLogo'){
                    cb(null, 'uploads/logos'); 
                } else if (file.fieldname === 'awardFile'){
                    console.log('gabi')
                    cb(null, 'uploads/awards'); 
                } else {
                    cb(null, 'uploads/players')
                }
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname);
            }
        })
    });
};

module.exports = configureMulter;