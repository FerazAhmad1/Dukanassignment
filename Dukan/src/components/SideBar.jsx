import { GoHome } from "react-icons/go";
import { PiNotepadLight } from "react-icons/pi";
import { SideBarIcons } from "./SideBarIcons.jsx";
import { FiTruck } from "react-icons/fi";
import { RxSpeakerLoud } from "react-icons/rx";
import { PiChartBarBold } from "react-icons/pi";
import { IoMdWallet } from "react-icons/io";
import { LuBadgePercent } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { BsLightningCharge } from "react-icons/bs";

export const SideBar = () => {
  return (
    <div className="ml-0 mt-0 w-fit p-4 bg-blue-950 ">
      <SideBarIcons Icon={GoHome} text={"Home"} />
      <SideBarIcons Icon={PiNotepadLight} text={"orders"} />
      <SideBarIcons Icon={FiTruck} text={"Delihery"} />
      <SideBarIcons Icon={RxSpeakerLoud} text={"Marketing"} />
      <SideBarIcons Icon={PiChartBarBold} text={"Analytics"} />
      <SideBarIcons Icon={IoMdWallet} text={"Payouts"} />
      <SideBarIcons Icon={LuBadgePercent} text={"Discounts"} />
      <SideBarIcons Icon={GoPeople} text={"Audience"} />
      <SideBarIcons Icon={BsLightningCharge} text={"Plugins"} />
    </div>
  );
};
