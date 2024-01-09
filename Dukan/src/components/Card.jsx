/* eslint-disable react/prop-types */
export const Card = ({
  children,
  backgroundColor = "transparent",
  width = "w-fit",
}) => {
  return (
    <div className={`${width} rounded-md shadow-md ${backgroundColor}`}>
      {children}
    </div>
  );
};
