import asyncHandler from 'express-async-handler'
import Events from '../models/eventModel.js'


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getEvents = asyncHandler(async (req, res) => {
    const events = await Events.find({})
    res.json(events)
})

const getEventById = asyncHandler(async (req, res) => {
    const event = await Events.findById(req.params.id)

    if (event){
      res.json(event)
    } else {
      //res.status(404).json({message: 'Event not found')
      res.status(404)
      throw new Error('Event not found')
    }
})

export {getEvents, getEventById}