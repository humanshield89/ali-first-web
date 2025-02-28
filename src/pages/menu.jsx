import fodra from "../assets/foodra.png";
import minLOGO from "../assets/minLOGO.png";
import bgMenu from "/bgMenu.png";
import I1 from "/1.png";
import I2 from "/2.png";
import I3 from "/3.png";
import data from "./data";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [eat, setEat] = useState(data);
  const [search, setSearch] = useState("All");
  const [repas, setRepas] = useState("All");

  return (
    <div className=" flex flex-col mt-[-00px]  h-screen w-full">
      {/* <img src={bgMenu} alt="" className=" h-[500px]" /> */}
      <button className=" h-16 btn btn-error text-xl  m-8 justify-center">
        Menu
      </button>
      <div className=" mt-5 flex  h-hull justify-center  items-start">
        <select
          value={repas}
          onChange={(e) => {
            setRepas(e.target.value);
          }}
          name=""
          id=""
          className=" text-lg pt-3 flex justify-start items-start text-start btn btn-outline   focus: btn-error     w-1/2 h-10 rounded-xl text-black hover:border-b-4"
        >
          <option value={"All"}>All</option>
          <option value={"pizza"}>pizza</option>
          <option value={"burger"}>burger</option>
          <option value={"turque"}>turque</option>
          <option value={"pates"}>pates</option>
          <option value={"indien"}>indien</option>
          <option value={"asiatique"}>asiatique</option>
          <option value={"tacos"}>Tacos</option>
          <option value={"kabab"}>kabab</option>
          <option value={"syrien"}>syrien</option>
          <option value={"street food"}>street food</option>
          <option value={"grillades"}>Grillades</option>
          <option value={"italien"}>italien</option>
          <option value={"traditionel"}>traditionel</option>
          <option value={"sandwiches"}>sandwiches</option>
          <option value={"crepes"}>Crêpes</option>
          <option value={"libanais"}>Libanais</option>
          <option value={"boissons"}>boissons</option>
          <option value={"desserts"}>desserts</option>
          <option value={"patisserie"}>patisserie</option>
        </select>
      </div>

      <div className=" flex justify-center mt-10 flex-wrap  ">
        <p className=" text-xl m-20">
          Thousands of items delivered to your door:{" "}
          <span className="text-2xl text-red-600">foodora Market</span> market
          is Sweden's lightning-fast online supermarket. Order groceries, fresh
          fruit & vegetables, sweet & savory snacks, beverages as well as
          household products and have everything delivered within just 15
          minutes. Discover our rapidly growing offer and order conveniently at
          supermarket prices!
        </p>
        {data.map((key, i) => {
          // if (
          //   (key.type.toLowerCase().includes(search.toLowerCase()) &&repas == "All") ||repas == key.type
          // )
          if (
            repas == "All" ||
            key.type.toLowerCase().includes(search.toLowerCase()) ||
            repas == key.type
          )
            return (
              <div
                key={i}
                className=" bg-gray-200 gap-10  cart w-1/4 flex-wrap text-left m-10 p-4 h-screen border border-black rounded-lg  "
              >
                <img src={key.lien} alt="" className="h-72 w-full" />
                <h1 className=" max-h-min-[10px]:  text-xl font-bold m-2">
                  {key.title}
                </h1>
                <p className=" uppercase">*{key.type}*</p>
                <p className=" my-4 ">
                  <span className=" text-gray-500">le temp est</span>
                  <span className="text-xl  mx-5 underline  text-red-900">
                    {key.time}
                  </span>
                </p>
                <label htmlFor="" className=" text-xl font-bold ">
                  prix =
                </label>
                <button className=" my-4 text-lg text-black ml-3 bg-green-600 w-1/2 h-10 rounded-3xl hover:text-xl ">
                  {key.price}
                </button>
                <div className=" flex gap-1 my-10 ">
                  <button className="btn btn-outline bg-red-600  w-1/2 ">
                    <Link to="/info"> learn mor</Link>
                  </button>
                  <button className="btn  btn-outline btn-error w-1/2 ">
                    Ajoute
                  </button>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Menu;
