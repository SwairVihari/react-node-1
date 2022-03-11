exports.getAllProducts = (req,res)=>{
    res.status(200).json({
        message:"Route is Working fine"
    })
}

exports.printData = (req,res)=>{
    console.log(req.body)
    const data = req.body


    res.status(200).json({
        data
    })
}