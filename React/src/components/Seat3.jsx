import React, { useState, useEffect } from "react";
import "../components/Seat.css";

const Seat3 = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const numSeatOfRow = [1, 2, 3, 4, 5, 6, 7, 8];

  const vipRows = ["A", "B"];

  const [selectedSeat, setSelectedSeat] = useState(null);
  const [orderedSeats] = useState(["A1", "B2", "C3", "D4", "E5", "F6", "G7", "H8"]);
  const [ticketPrice, setTicketPrice] = useState(0);

  useEffect(() => {
    populateUI();
  }, []);

  const toggleSeat = (row, seatNum) => {
    const seatId = `${row}${seatNum}`;
    if (orderedSeats.includes(seatId)) return;

    if (selectedSeat === seatId) {
      setSelectedSeat(null);
      setTicketPrice(0);
    } else {
      setSelectedSeat(seatId);
      const price = vipRows.includes(row) ? 100000 : 75000;
      setTicketPrice(price);
    }
  };

  const populateUI = () => {
    const savedSeat = localStorage.getItem("selectedSeat");
    const savedPrice = localStorage.getItem("ticketPrice");
    if (savedSeat) setSelectedSeat(savedSeat);
    if (savedPrice) setTicketPrice(+savedPrice);
  };

  useEffect(() => {
    localStorage.setItem("selectedSeat", selectedSeat);
    localStorage.setItem("ticketPrice", ticketPrice);
  }, [selectedSeat, ticketPrice]);

  return (
    <div className="mt-10 flex flex-col justify-center items-center w-[700px] h-[450px] gap-10">
      <div className="screen">Screen</div>
      <div className="w-full flex flex-col justify-start items-center gap-1">
        {rows.map((row) => (
          <div
            key={row}
            className="w-[98%] h-[50px] flex items-center justify-start"
          >
            <span className="w-40 text-white">{row}</span>
            <div className="flex justify-around items-center">
              {numSeatOfRow.map((seatNum) => {
                const seatId = `${row}${seatNum}`;
                const isVIP = vipRows.includes(row);
                const isSelected = selectedSeat === seatId;
                const isOrdered = orderedSeats.includes(seatId);
                return (
                  <div
                    key={seatNum}
                    className={`min-h-[30px] cursor-pointer min-w-[35px] m-[5px] rounded-t-2xl flex justify-center items-center ${
                      isSelected
                        ? "bg-green-500 text-white"
                        : isOrdered
                        ? "bg-white"
                        : isVIP
                        ? "bg-yellow-500"
                        : "bg-slate-800"
                    }`}
                    onClick={() => toggleSeat(row, seatNum)}
                  >
                    {isSelected ? seatId : ""}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {selectedSeat && (
        <div className="text-white mt-5">
          Ghế {selectedSeat} đang được chọn - Với giá: {ticketPrice} VND
        </div>
      )}
    </div>
  );
};

export default Seat3;
