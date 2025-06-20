import React, { useState } from 'react';
import './SeatType1.scss';

const SeatType1 = () => {
  const rows = ['A','B','C','D','E','F','G','H','I','K','L','M','N'];
  
  // Giới hạn chỉ 8 hàng cho Left và Right, các hàng còn lại sẽ bị bỏ qua
  const seatsLeftCount = rows.slice(0, 8).map(() => 3);  // Chỉ lấy 8 hàng đầu cho left
  const seatsMiddleCount = rows.map(() => 20);
  const seatsRightCount = rows.slice(0, 8).map(() => 3); // Chỉ lấy 8 hàng đầu cho right

  const [selectedSeats, setSelectedSeats] = useState([]);
  const prices = { left: 100000, middle: 75000, right: 50000 };

  const toggleSeat = (area, row, idx) => {
    let seatId;
    switch (area) {
      case 'left':        seatId = `L-${row}${idx+1}`; break;
      case 'right':       seatId = `R-${row}${idx+1}`; break;
      case 'middle-left': seatId = `ML-${row}${idx+1}`; break;
      case 'middle-right':seatId = `MR-${row}${idx+11}`;break;
      default: return;
    }
    setSelectedSeats(prev => 
      prev.includes(seatId)
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  const totalPrice = selectedSeats.reduce((sum, seat) => {
    if (seat.startsWith('L-'))          return sum + prices.left;
    if (seat.startsWith('ML-') 
     || seat.startsWith('MR-'))         return sum + prices.middle;
    if (seat.startsWith('R-'))          return sum + prices.right;
    return sum;
  }, 0);

  return (
    <div className="components__seattype1">
      <h1 className="components__seattype1-title">Seat Map</h1>

      <div className="components__seattype1-seat-map">
        <div className="components__seattype1-left-seats">
          {rows.slice(0, 8).map((r, i) =>  // Chỉ lặp qua 8 hàng đầu
            <div key={r} className="components__seattype1-seat-row">
              <div className="components__seattype1-seat-row-label">{r}</div>
              {Array.from({ length: seatsLeftCount[i] }).map((_, idx) => {
                const id = `L-${r}${idx+1}`;
                return (
                  <div
                    key={idx}
                    className={ 
                      `components__seattype1-seat components__seattype1-seat-left` +
                      (selectedSeats.includes(id) ? ' selected' : '')
                    }
                    onClick={() => toggleSeat('left', r, idx)}
                  >
                    {idx+1}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="components__seattype1-stage">STAGE</div>

        <div className="components__seattype1-right-seats">
          {rows.slice(0, 8).map((r, i) =>  // Chỉ lặp qua 8 hàng đầu
            <div key={r} className="components__seattype1-seat-row">
              {Array.from({ length: seatsRightCount[i] }).map((_, idx) => {
                const id = `R-${r}${idx+1}`;
                return (
                  <div
                    key={idx}
                    className={ 
                      `components__seattype1-seat components__seattype1-seat-right` +
                      (selectedSeats.includes(id) ? ' selected' : '')
                    }
                    onClick={() => toggleSeat('right', r, idx)}
                  >
                    {idx+1}
                  </div>
                );
              })}
              <div className="components__seattype1-seat-row-label">{r}</div>
            </div>
          )}
        </div>

        <div className="components__seattype1-middle-seats">
          <div className="components__seattype1-left-middle-seats">
            {rows.map((r, i) =>
              <div key={r} className="components__seattype1-seat-row">
                {Array.from({ length: Math.min(seatsMiddleCount[i], 10) }).map((_, idx) => {
                  const id = `ML-${r}${idx+1}`;
                  return (
                    <div
                      key={idx}
                      className={ 
                        `components__seattype1-seat components__seattype1-seat-middle` +
                        (selectedSeats.includes(id) ? ' selected' : '')
                      }
                      onClick={() => toggleSeat('middle-left', r, idx)}
                    >
                      {idx+1}
                    </div>
                  );
                })}
                <div className="components__seattype1-seat-row-label-middle">{r}</div>
              </div>
            )}
          </div>
          <div className="components__seattype1-right-middle-seats">
            {rows.map((r, i) =>
              <div key={r} className="components__seattype1-seat-row">
                <div className="components__seattype1-seat-row-label-middle">{r}</div>
                {Array.from({ length: Math.max(seatsMiddleCount[i] - 10, 0) }).map((_, idx) => {
                  const id = `MR-${r}${idx+11}`;
                  return (
                    <div
                      key={idx}
                      className={ 
                        `components__seattype1-seat components__seattype1-seat-middle` +
                        (selectedSeats.includes(id) ? ' selected' : '')
                      }
                      onClick={() => toggleSeat('middle-right', r, idx)}
                    >
                      {idx+11}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="components__seattype1-selected-seats">
        <strong>Selected Seats:</strong> {selectedSeats.join(', ') || 'None'}<br/>
        <strong>Total Price:</strong> {totalPrice.toLocaleString()} VND
      </div>
    </div>
  );
};

export default SeatType1;
