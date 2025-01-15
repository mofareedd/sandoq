import { emailOtp, forgetPassword, resetPassword, signIn } from '@sandoq/auth';
import { useMutation } from '@tanstack/react-query';

export function useOtp() {
  return useMutation({
    mutationFn: async ({
      email,
      type,
    }: {
      email: string;
      type: 'forget-password' | 'email-verification';
    }) => {
      return await emailOtp.sendVerificationOtp({
        email,
        type,
      });
    },
  });
}

export function useSignIn() {
  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      return await signIn.email({
        email,
        password,
      });
    },
  });
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: async ({
      email,
    }: {
      email: string;
    }) => {
      return await forgetPassword({
        email,
        redirectTo: '/auth/reset-password',
      });
    },
  });
}

export function useResetPassword() {
  return useMutation({
    mutationFn: async ({
      newPassword,
    }: {
      newPassword: string;
    }) => {
      return await resetPassword({
        newPassword,
      });
    },
  });
}
