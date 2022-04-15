import express from 'express'
import { getEvents, getEventById } from '../controllers/eventController.js'

const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', getEvents)

// @desc    Fetch single product by id
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', getEventById)

export default router