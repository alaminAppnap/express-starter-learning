const express = require('express')
var fileUploadRouter = express.Router();
var multer = require('multer')


/** File upload folder */
const FILE_UPLOAD_FOLDER = "./uploads";

/** Prepare the final multer upload object */
var upload = multer({
    dest:FILE_UPLOAD_FOLDER
});

/* GET users listing. */
fileUploadRouter.get('/', function(req, res, next) {
  res.render('pages/file-upload');
});

/** single file upload */
fileUploadRouter.post('/single',upload.single('image1'),(req,res)=>{ /** uploadMulter is middleware and single means single file upload */
  console.log(`successfully uploaded`);
  res.send("successfully uploaded");
})

/** multiple file upload using upload.array() */
fileUploadRouter.post('/multiple',upload.array('image1',3),(req,res)=>{ /** uploadMulter is middleware and mutiple means array file upload second argument 5 means maximum 5 file can upload at a time*/
  console.log(`successfully uploaded multiple file`);
  res.send("successfully uploaded multiple file");
})

/** multiple file upload using upload.fields() */
fileUploadRouter.post('/multiple-field',upload.fields([ /** uploadMulter is middleware and upload.fields means multiple field image file */
    {name:"image1",maxCount:2},
    {name:"image2",maxCount:2},
]),(req,res)=>{ 
  console.log(`successfully uploaded multiple file`);
  res.send("successfully uploaded multiple file");
})


module.exports = fileUploadRouter