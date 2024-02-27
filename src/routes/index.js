import express from 'express';
import {  register, login } from '../controllers/authentication.js';

const router = express.Router();

router.post('/auth/register', register);

router.post('/auth/login', login);

export default router;
