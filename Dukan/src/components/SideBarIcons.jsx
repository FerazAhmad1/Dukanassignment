/* eslint-disable react/prop-types */

export const SideBarIcons = ({ Icon, text }) => {
  return (
    <div>
      <label className="flex justify-center items-center ">
        <div className="text-white  items-start  ">
          <Icon />
        </div>{" "}
        <p className="text-white">{text}</p>
      </label>
    </div>
  );
};
