import "./App.css";
import Seat1 from "./components/Seat1";
import Seat2 from "./components/Seat2";
import Seat3 from "./components/Seat3";
import SeatType1 from "./components/SeatType1";
import SeatType2 from "./components/SeatType2";
import SeatType3 from "./components/SeatType3";
import { useState } from "react";

function App() {
  const [activeSeat, setActiveSeat] = useState("seat1");
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-500 bg-slate-800 text-white z-50 ${
          showHeader ? "opacity-100" : "opacity-0 -translate-y-full"
        }`}
        onMouseEnter={() => setShowHeader(true)}
        onMouseLeave={() => setShowHeader(false)}
      >
        <div className="flex justify-center gap-10 py-4">
          <button
            className={`text-lg hover:underline ${
              activeSeat === "seat1" ? "font-bold text-yellow-300" : ""
            }`}
            onClick={() => setActiveSeat("seat1")}
          >
            Seat 1
          </button>
          <button
            className={`text-lg hover:underline ${
              activeSeat === "seat2" ? "font-bold text-yellow-300" : ""
            }`}
            onClick={() => setActiveSeat("seat2")}
          >
            Seat 2
          </button>
          <button
            className={`text-lg hover:underline ${
              activeSeat === "seat3" ? "font-bold text-yellow-300" : ""
            }`}
            onClick={() => setActiveSeat("seat3")}
          >
            Seat 3
          </button>
          <button
            className={`text-lg hover:underline ${
              activeSeat === "seattype1" ? "font-bold text-yellow-300" : ""
            }`}
            onClick={() => setActiveSeat("seattype1")}
          >
            Seat Type 1
          </button>
          <button
            className={`text-lg hover:underline ${
              activeSeat === "seattype2" ? "font-bold text-yellow-300" : ""
            }`}
            onClick={() => setActiveSeat("seattype2")}
          >
            Seat Type 2
          </button>
          <button
            className={`text-lg hover:underline ${
              activeSeat === "seattype3" ? "font-bold text-yellow-300" : ""
            }`}
            onClick={() => setActiveSeat("seattype3")}
          >
            Seat Type 3
          </button>
        </div>
      </div>

      <div
        className="h-[20px] w-full fixed top-0 z-40"
        onMouseEnter={() => setShowHeader(true)}
      ></div>

      <div className="flex flex-col justify-start items-center mt-0 bg-slate-700" style={{ minHeight: "100vh" }}>
        <ul className="bg-slate-700 pt-5 rounded-lg flex justify-center items-center gap-10 list-none">
          <li className="flex justify-center items-center gap-2 my-10 text-white">
            <div className="h-[30px] w-[35px] m-[5px] bg-slate-800 rounded-t-xl"></div>
            <small className="font-thin text-xl">Empty</small>
          </li>
          <li className="flex justify-center items-center gap-2 my-10 text-white">
            <div className="h-[30px] w-[35px] m-[5px] bg-yellow-500 bg-slate-800 rounded-t-xl"></div>
            <small className="font-thin text-xl">VIP</small>
          </li>
          <li className="flex justify-center items-center gap-2 my-10">
            <div className="h-[30px] w-[35px] m-[5px] bg-green-500 rounded-t-xl"></div>
            <small className="font-thin text-xl text-white">Selected</small>
          </li>
          <li className="flex justify-center items-center gap-2 my-10">
            <div className="h-[30px] w-[35px] m-[5px] bg-white rounded-t-xl"></div>
            <small className="font-thin text-xl text-white">Ordered</small>
          </li>
        </ul>

        {activeSeat === "seat1" && <Seat1 />}
        {activeSeat === "seat2" && <Seat2 />}
        {activeSeat === "seat3" && <Seat3 />}
        {activeSeat === "seattype1" && <SeatType1 />}
        {activeSeat === "seattype2" && <SeatType2 />}
        {activeSeat === "seattype3" && <SeatType3 />}
      </div>
    </>
  );
}

export default App;