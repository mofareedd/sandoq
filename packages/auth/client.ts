import { emailOTPClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

export const {
  signIn,
  signOut,
  signUp,
  useSession,
  emailOtp,
  forgetPassword,
  resetPassword,
} = createAuthClient({ plugins: [emailOTPClient()] });
