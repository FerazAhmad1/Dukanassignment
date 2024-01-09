import { CiCircleQuestion } from "react-icons/ci";
import { Card } from "./Card.jsx";
import { FaAngleRight } from "react-icons/fa6";
export const CardFirst = () => {
  return (
    <Card id="parent" backgroundColor="bg-[#126EB4]">
      <div className="p-4">
        <div id="status">
          <div className="flex  items-center gap-3 text-white mb-4 ">
            <p className=" text-sm">Next Payouts</p>
            <span>
              <CiCircleQuestion className="text-sm " />
            </span>
          </div>
        </div>

        <div
          id="amount"
          className="flex items-center text-white justify-between"
        >
          <p className="text-2xl font-semibold "> ₹2312.23 </p>
          <div className="flex gap-1 items-center ml-6">
            <a className="underline text-gray-50 text-sm"> 23 orders</a>
            <FaAngleRight className="text-sm mt-[2px]" />{" "}
          </div>
        </div>
      </div>

      <Card backgroundColor="bg-blue-950" width="w-full ">
        <div className=" text-xs flex justify-between py-1 px-2 text-gray-300 ">
          <p>Next payout date:</p>
          <p>Today, 4:00pm</p>
        </div>
      </Card>
    </Card>
  );
};
