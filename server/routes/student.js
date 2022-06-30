import express from 'express'
import { getStudents } from '../controllers/student.js'
import { createStudent } from '../controllers/student.js';
import student from '../models/student.js'


const router = express.Router();
// take two arguments path, call back function: getStudents from controller
router.get('/students', getStudents);

router.post('/students', createStudent)
export default router;