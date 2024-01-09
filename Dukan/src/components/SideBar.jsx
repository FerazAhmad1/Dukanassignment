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
    <aside className=" bg-blue-950 border-gray-200 z-40 h-screen overflow-y-auto">
      <div className="py-4 px-6">
        <ul className="mt-6">
          <SideBarIcons Icon={GoHome} text={"Home"} />
          <SideBarIcons Icon={PiNotepadLight} text={"Orders"} />
          <SideBarIcons Icon={FiTruck} text={"Delivery"} />
          <SideBarIcons Icon={RxSpeakerLoud} text={"Marketing"} />
          <SideBarIcons Icon={PiChartBarBold} text={"Analytics"} />
          <SideBarIcons Icon={IoMdWallet} text={"Payouts"} />
          <SideBarIcons Icon={LuBadgePercent} text={"Discounts"} />
          <SideBarIcons Icon={GoPeople} text={"Audience"} />
          <SideBarIcons Icon={BsLightningCharge} text={"Plugins"} />
        </ul>
      </div>
    </aside>
  );
};
