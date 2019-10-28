const express = require('express');
const router = express.Router();

const Alert = require("../model/Alert.model")


router.post('/', async(req, res) =>  {
    try {
        const { email, searchPhrase, frequency } = req.body;
        const timeOf = [2, 10, 30];
        const alert = await Alert.findOne({ email, searchPhrase },
             (res, error) => {})
    

        if(timeOf.indexOf(frequency) > -1)
            return res.json(`The frequency is ${timeOf.join(',')}`)

        const alerts = await Alert.create(req.body);
        return res.send(`Alert created with success`).json({ alerts})
        
    }
    catch(error){
        res.send(error)
    }
})

router.get('/', async(res, send) => {
    try {
        const alerts = await Alert.find({})
        res.send(alerts)
    }
    catch(error) {
        res.send(error)
    }
})
module.exports = app => app.use("/alert", router);
