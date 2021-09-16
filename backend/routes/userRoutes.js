import express from 'express'
import  {authUser, deleteUser, getUserById, getUserProfile, getUsers, registerUser, updateUser, updateUserProfile } from '../controllers/userControllers.js'
import { protect, admin } from '../middlewares/authMiddleware.js'

const router = express.Router()

//post register  get: all users
router.route('/').post(registerUser).get(protect, admin, getUsers)

//another way to call route , login user
router.post('/login', authUser)

// profile  ( get => userProfile , put => updateProfile)
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)


// :id ( get => getUserById, put => updateUser, delete => deleteUser )
router.route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)



export default router