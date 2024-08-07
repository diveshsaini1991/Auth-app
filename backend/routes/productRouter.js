const ensureAuthanticated = require("../middlewares/auth");


const router = require("express").Router();


router.get("/",ensureAuthanticated,(req,res)=>{
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"tv",
            price:20000
        }
    ])
});


module.exports = router;