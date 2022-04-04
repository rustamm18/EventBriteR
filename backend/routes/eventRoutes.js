import express from 'express'
import asyncHandler from 'express-async-handler'
import Events from '../models/eventModel.js'




const router = express.Router()

// @desc Fetch all events
// @route GET /api/events
// @access Public
router.get('/', asyncHandler(async (req, res) => {
    const events = await Events.find({})
    res.json(events)
}))

// @desc Fetch single event
// @route GET /api/events/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
    const event = await Events.findById(req.params.id)

    if (event) {
        res.json(event)
    } else {
        res.status(404).json({message: 'Event not found'})
    }
}))

export default router