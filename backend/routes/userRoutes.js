import express from 'express';
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from "../controllers/userController.js";
import { proctect } from '../middleware/authMiddleware.js';
const router = express.Router()



router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(proctect, getUserProfile).put(proctect, updateUserProfile)

export default router
