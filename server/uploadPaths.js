const multer = require('multer');
const configureMulter = require('./multerConfig');


const uploadManagers = configureMulter('uploads/players');
const uploadTeams = configureMulter('uploads/teams');
const uploadLogos = configureMulter('uploads/logos');

module.exports = {uploadManagers, uploadTeams, uploadLogos}