import { FaSearch } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { BiSortAlt2 } from "react-icons/bi";
export const CardWithTable = () => {
  const orders = [
    {
      id: 281209,
      status: "Successful",
      transactionId: 1316354495747,
      refundDate: "2023-12-25",
      refundAmount: 4500.5,
    },
    {
      id: 281212,
      status: "Successful",
      transactionId: 1316354495876,
      refundDate: "2023-12-25",
      refundAmount: 10500.5,
    },
    {
      id: 211299,
      status: "Processing",
      transactionId: 2336354495747,
      refundDate: "2023-12-25",
      refundAmount: 14500.5,
    },
    {
      id: 481209,
      status: "Successful",
      transactionId: 4316354495747,
      refundDate: "2023-12-25",
      refundAmount: 4500.5,
    },
    {
      id: 283309,
      status: "Processing",
      transactionId: 1916354495747,
      refundDate: "2023-12-25",
      refundAmount: 4500.5,
    },
    {
      id: 381209,
      status: "Successful",
      transactionId: 1716354495747,
      refundDate: "2023-12-25",
      refundAmount: 4500.5,
    },
  ];

  return (
    <div className=" mx-auto flex flex-col rounded overflow-hidden shadow-md my-4">
      <div className="flex justify-between my-4 mx-2 ">
        <div className="relative w-full max-w-md ">
          <input
            type="text"
            className="w-full bg-white rounded-md pl-10 pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search..."
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex gap-4 items-center ">
          <button className="flex items-center gap-2 justify-between p-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            Sort
            <BiSortAlt2 className="text-xl text-gray-400" />
          </button>
          <button className=" h-full  px-2 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <TbDownload className=" text-xl font-normal text-gray-400" />
          </button>
        </div>
      </div>
      <table className="w-full">
        <thead className="bg-gray-200 text-gray-600">
          <tr>
            <th className="min-w-fit py-2 px-4 text-left text-sm ">Order ID</th>
            <th className="min-w-fit py-2 px-4 text-left text-sm ">Status</th>
            <th className="min-w-fit py-2 px-4 text-left text-sm">
              Transaction ID
            </th>
            <th className="min-w-fit py-2 px-4 text-left text-sm">
              Refund Date
            </th>
            <th className="min-w-fit py-2 px-4 text-right text-sm">
              Refund Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b  border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-4 text-sm text-[#126EB4] ">#{order.id}</td>
              <td className="py-3 px-4 text-sm">
                <span
                  className={`inline-block w-2 h-2 rounded-full mr-2 ${
                    order.status === "Successful"
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                />
                {order.status}
              </td>
              <td className="py-3 px-4 text-sm">{order.transactionId}</td>
              <td className="py-3 px-4 text-sm">{order.refundDate}</td>
              <td className="py-3 px-4 text-right text-sm">
                ₹{order.refundAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
