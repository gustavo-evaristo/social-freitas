const multer = require('multer')
const path = require('path')

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'public', 'uploads'),
        filename: function(req, file, cb){
            let now = new Date
            cb(null, ""+ now.getMilliseconds() + now.getDate()+ now.getMonth() + now.getFullYear() + '-' + file.originalname)
        }
    })
}