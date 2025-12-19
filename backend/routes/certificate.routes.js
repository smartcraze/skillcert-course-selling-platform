import { Router } from 'express';
import {
  generateCertificate,
  getMyCertificates,
  getCertificate,
  viewCertificate,
  verifyCertificate,
} from '../controller/certificate.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const certificateRouter = Router();

// Public verification endpoint
certificateRouter.get('/verify/:certificateId', verifyCertificate);

// Protected routes
certificateRouter.use(authenticate);

certificateRouter.get('/my', getMyCertificates);
certificateRouter.get('/course/:courseId', getCertificate);
certificateRouter.post('/generate/:courseId', generateCertificate);
certificateRouter.get('/view/:courseId', viewCertificate);

export default certificateRouter;
