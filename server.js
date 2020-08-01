require('dotenv').config();
const express = require("express");
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectID
const bcrypt = require('bcrypt');
var multer = require('multer')
var cors = require('cors');
const fs=require('fs')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
var filer=Date.now()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build/build')));

//define storage function for multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'asset/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
//single upload function for multer
var upload = multer({ storage: storage }).single('recfile')
//connect to database and join path
mongo.connect(process.env.DB, {useUnifiedTopology:true}, (err,client)=>{
    let db=client.db('Cluster0')
    app.post('/register',(req,res)=>{
        db.collection('e-commerce').findOne({ email:req.body.email},(err,doc)=>{
            if(doc){
                bcrypt.compare(doc.password,req.body.password,(err,result)=>{
                    if(result){
                        res.json({id:'Failed'})
                    }
                    else{
                        console.log(req.body)
                        bcrypt.hash(req.body.password,13,(err,hash)=>{
                            db.collection('e-commerce').insertOne({firstName:req.body.firstName,lastName:req.body.lastName, email:req.body.email, password:hash, pic:'',cart:[]},(err,don)=>{
                                res.json({id:don.ops[0]._id})
                            })
                        })
                    }
                })
            }
            else{
                console.log(req.body)
                bcrypt.hash(req.body.password,13,(err,hash)=>{
                    db.collection('e-commerce').insertOne({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email, password:hash, pic:'',cart:[]},(err,don)=>{
                        res.json({id:don.ops[0]._id})
                    })
                })
            }
        })
    })
    app.post('/login',(req,res)=>{
        db.collection('e-commerce').findOne({email:req.body.email},(err,doc)=>{
            if(!doc){
                res.json({id:'Failed'})
            }
            else{
                bcrypt.compare(req.body.password,doc.password,(err,result)=>{
                    if(result){
                        res.json({id:doc._id})
                        
                    }
                    else{
                        res.json({id:'Failed'}) 
                    }
                })
            }
        })
    })
    app.post('/cart',(req,res)=>{
        db.collection('e-commerce').findOne({_id:ObjectId(req.body.id)},(err,doc)=>{
            if(doc){
                db.collection('e-commerce').findOneAndUpdate({_id:ObjectId(req.body.id)},{$push:{cart:req.body.item}})
                res.json({status:'success'})
            }
            else{
                res.json({status:'Failed'})
            }
        })
    })
    app.post('/upload',upload,(req,res)=>{
        
        let id=req.body.id || req.query.id
        db.collection('e-commerce').findOne({_id:ObjectId(id)},(err,doc)=>{
            if(doc && req.body.pics){
                var img=fs.readFileSync(req.file.path)
                var enc=img.toString('base64')
                var finalImg = new Buffer(enc, 'base64')
                db.collection('e-commerce').findOneAndUpdate({_id:ObjectId(id)},{$set:{pic:finalImg}})
                upload(req,res,(err)=>{
                    if (err instanceof multer.MulterError) {
                        return res.json({status:'Failed'})
                    }
                    return res.json({status:'success'})
                })
            }
            else if(doc){
                res.json({status:{firstName:doc.firstName,lastName:doc.lastName,pic:doc.pic.buffer,email:doc.email}})
            }
            else{
                res.json({status:'Failed'})
            }
        })
    })
    app.post('/namers',(req,res)=>{
        console.log(req.body)
        db.collection('e-commerce').findOne({_id:ObjectId(req.body.id)},(err,doc)=>{
            if(doc){
                console.log(doc.firstName)
                res.json({id:'success',firstName:doc.firstName,cart:doc.cart})
            }
            else{
                res.json({id:'Failed'})
            }
        })
    })
    app.post('/checkIn',(req,res)=>{
        db.collection('e-commerce').findOne({_id:ObjectId(req.body.id)},(err,doc)=>{
            if(doc){
                console.log(doc.firstName)
                res.json({id:'success',items:doc.cart})
            }
            else{
                res.json({id:'Failed'})
            }
        })
    })
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+'/build/build/index.html'));
      });

})



//listen for connection on port 5000
app.listen(process.env.PORT || 5000, () => {
    console.log('listening on port 5000');
})