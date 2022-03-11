const axios = require("axios")
exports.getAllProducts = (req,res)=>{
    res.status(200).json({
        message:"Route is Working fine"
    })
}

exports.printData = (req,res)=>{
    console.log(req.body)
    const data = req.body

    axios.post("https://www.crmgoaway.online/api/send/lead", data).then((response)=>{
        // console.log(response)
        res.status(200).json({
            message:response.status
        })
    }).catch(err)
    {   
        console.log(err)
        res.status(400).json({
            message:err
        })
    }
    

    res.status(200).json({
        message:"success"
    })
}