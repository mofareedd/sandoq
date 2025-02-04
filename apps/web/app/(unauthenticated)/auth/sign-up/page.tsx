import { SignupForm } from '../_components/signup-form';
import SocialAuth from '../_components/social-auth';

export default function SignUp() {
  return (
    <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center space-y-12 lg:max-w-lg">
      <div className="text-center">
        <h1 className="font-bold text-8xl">Hi there!</h1>
        <p className="text-muted-foreground">Welcome to tawasul.</p>
      </div>

      <SocialAuth />

      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-border after:border-t">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Or
        </span>
      </div>

      <SignupForm />
    </div>
  );
}
