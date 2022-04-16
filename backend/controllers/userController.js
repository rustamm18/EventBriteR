import bcryptjs from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import Users from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
//  @desc   Auth user & get token
//  @route  POST /api/users/login
//  @access Public
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await Users.findOne({email})
    if (user && await user.matchPassword(password)) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password');
    }
})
//  @desc   Get user profile
//  @route  GET /api/users/profile
//  @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.user._id)
  if (user){
    return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await Users.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await Users.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { authUser, registerUser, getUserProfile, updateUserProfile }