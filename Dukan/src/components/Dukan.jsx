import { CardFirst } from "./CardFirst.jsx";
import { Header } from "./Header.jsx";
import { SideBar } from "./SideBar.jsx";
import { CardWithTable } from "./Table.jsx";

export const Dukan = () => {
  return (
    <>
      <div className=" flex ">
        <SideBar />
        <div className="flex-1 mx-8">
          <Header />
          <section className="flex justify-between m-4">
            <CardFirst />
          </section>
          <CardWithTable />
        </div>
      </div>
    </>
  );
};
