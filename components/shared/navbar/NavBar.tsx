import Link from 'next/link';
import UserButton from '../../auth/UserButton';
import { SignIn } from '../../auth/sign-in';
import getSession from '@/lib/getSession';
import Image from 'next/image';
import Theme from './Theme';
import MobileNav from './MobileNav';
import GlobalSearch from '../search/GlobalSearch';

export default async function NavBar() {
  // TODO: Show the currently logged-in user

  const session = await getSession();
  const user = session?.user;

  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow"
        />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">flow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />

        <MobileNav />
        {user ? <UserButton user={user} /> : <SignIn />}
      </div>
    </nav>
  );
}
