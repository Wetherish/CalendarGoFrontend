import {
  BsPlus,
  BsFillLightningFill,
  BsFillCalendarFill,
} from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import Link from "next/link";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-blue-300 shadow-lg"
    >
      <Link href={"/"}>
        <SideBarIcon icon={<FaFire size="28" />} />
      </Link>
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <Link href={"/StudentList"}>
        <SideBarIcon icon={<PiStudentBold size="26" />} text="Student List" />
      </Link>
      <Link href={"/Calendar"}>
        <SideBarIcon icon={<BsFillCalendarFill size="22" />} text="Calendar" />
      </Link>
      <Link href={"/Login"}>
        <SideBarIcon icon={<BiSolidLogIn size="26" />} text="Login" />{" "}
      </Link>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
