const express = require('express');
const Enquirie = require('../models/enquiries');
const enquiriesRouter = new express.Router();

enquiriesRouter.post('/enquiries', async (req, res) => {
    const enquirie = new Enquirie({
        ...req.body,
        'creation_date': new Date().getTime(),
        'status': 0
    })
    try {
        await enquirie.save()
        res.status(201).send(enquirie);
    } catch (e) {
        res.status(400).send(err);
    }
})

enquiriesRouter.get('/enquiries', async (req, res) => {
    try {
        const enquirie = await Enquirie.find({})
        res.status(200).send(enquirie);
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = enquiriesRouter;