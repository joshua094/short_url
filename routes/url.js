const express = require('express')
const router = express.Router();
const validUrl = require('valid-url')
const shortid = require('shortid')
const config = require('config')

const Url = require('../models/url')

//POST /api/url/shorten
//@desc Create hort url

router.post('/shorten', async (req,res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl')

    //Check base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url')
    }

    ///create url code
    const urlcode = shortid.generate();

    //check long url
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne
        } catch (err) {
            
        }
    } else {

    }

})



module.exports = router;