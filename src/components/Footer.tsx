import Image from "next/image";

import { logoutAccount } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const Footer = ({ user, type = 'desktop' }: FooterProps) => {

  const router = useRouter();

  const layoutClass1 = type === 'mobile' ? 'footer_name-mobile' : 'footer_name';
  const layoutClass2 = type === 'mobile' ? 'footer_email-mobile' : 'footer_email';

  const handleLogout = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push('/sign-in');
  };

  return (
    <footer className="footer">

      <div className={layoutClass1}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0]}
        </p>
      </div>

      <div className={layoutClass2}>
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogout}>
        <Image src="icons/logout.svg" alt="jsm" fill />
      </div>

    </footer>
  );
};

export default Footer;