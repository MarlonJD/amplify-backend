import {
  funcCustomEmailSender,
  funcNoMinify,
  funcWithAwsSdk,
  funcWithSchedule,
  funcWithSsm,
  funcProvided,
} from './function.js';
import { auth } from './auth/resource.js';

export const authAndFunctions = {
  auth,
  funcWithSsm,
  funcWithAwsSdk,
  funcWithSchedule,
  funcNoMinify,
  funcCustomEmailSender,
  funcProvided,
};
