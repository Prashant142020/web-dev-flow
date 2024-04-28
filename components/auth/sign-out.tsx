import { signOut } from '@/auth';
import { LogOut } from 'lucide-react';

const SignOut = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button className="flex w-full items-center" type="submit">
        <LogOut className="mr-2 h-4 w-4" /> Sign Out
      </button>
    </form>
  );
};
export default SignOut;
