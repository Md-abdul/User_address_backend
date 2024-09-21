const Address = require('../models/addressModel');

const getAddress = async(req,res) =>{
    try {
        const userId = req.params.userId;
        const address = await Address.find({user: userId});
        res.status(200).json({address})
    } catch (error) {
        res.status(500).josn({message:'server Error'})
    }
}

module.exports = getAddress;