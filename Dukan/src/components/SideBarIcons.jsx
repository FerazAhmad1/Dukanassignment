/* eslint-disable react/prop-types */

export const SideBarIcons = ({ Icon, text }) => {
  return (
    <li>
      <div className="flex items-center text-white relative group py-4 pl-6 pr-4 rounded-lg hover:bg-gray-500 ">
        <Icon className="w-6 h-6 mr-4  text-white " />
        <span className="block font-medium text-white ">{text}</span>
      </div>
    </li>
  );
};
