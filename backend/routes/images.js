const { Router } =require('express');
const router = Router();
const multer = require('multer');
const path = require ('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
})
const cargaImagen = multer({
    storage,
    limits: {fileSize: 1000000}
}).single('image');


router.post('/images/upload', (req, res)=>{
    cargaImagen(req, res, (err) =>{
        if(err){
            err.message = 'Error al subir la imagen';
            return res.send(err);
        }else{
            console.log(req.file);
            res.send('Imagen fue cargada')
        }
    });
});

module.exports = router;