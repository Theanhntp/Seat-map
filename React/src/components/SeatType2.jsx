import React, { useState, useEffect } from 'react';
import './SeatType2.scss';

const SeatType2 = ({ id }) => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O'];
  const seatsLeftCount = rows.slice(0, 10).map(() => 6);
  const seatsRightCount = rows.slice(0, 10).map(() => 6);
  
  const [selectedSeats, setSelectedSeats] = useState([]);
  const prices = { left: 100000, right: 50000 };

  const toggleSeat = (area, row, idx) => {
    let seatId;
    switch (area) {
      case 'left': seatId = `L-${row}${idx+1}`; break;
      case 'right': seatId = `R-${row}${idx+1}`; break;
      default: return;
    }

    setSelectedSeats(prev =>
      prev.includes(seatId) 
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  const totalPrice = selectedSeats.reduce((sum, seat) => {
    if (seat.startsWith('L-')) return sum + prices.left;
    if (seat.startsWith('R-')) return sum + prices.right;
    return sum;
  }, 0);

  return (
    <div className="components__seattype2">
      <h1 className="components__seattype2-title">Select ticket</h1>

      <div className="components__seattype2-details">
        <span className="components__seattype2-legend">
          <span className="components__seattype2-legend-circle components__seattype2-available"></span> Available
        </span>
        <span className="components__seattype2-legend">
          <span className="components__seattype2-legend-circle components__seattype2-selected"></span> Selected
        </span>
        <span className="components__seattype2-legend">
          <span className="components__seattype2-legend-circle components__seattype2-unavailable"></span> Not Available
        </span>
      </div>

      <div className="components__seattype2-content-container">
        <div className="components__seattype2-column">
          <div className="components__seattype2-screen">Screen</div>
          <div className="components__seattype2-seat-map">
            <div className="components__seattype2-section components__seattype2-section-left">
              {rows.slice(0, 8).map((row, rowIndex) => (
                <div key={row} className="components__seattype2-row">
                  <span className="components__seattype2-row-label">{row}</span>
                  {Array.from({ length: seatsLeftCount[rowIndex] }).map((_, seatNum) => {
                    const seatId = `L-${row}${seatNum + 1}`;
                    const isSelected = selectedSeats.includes(seatId);
                    const seatClass = `components__seattype2-seat ${isSelected ? 'components__seattype2-selected' : ''}`;
                    return (
                      <div
                        key={seatNum}
                        className={seatClass}
                        onClick={() => toggleSeat('left', row, seatNum)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="components__seattype2-section components__seattype2-section-right">
              {rows.slice(0, 8).map((row, rowIndex) => (
                <div key={row} className="components__seattype2-row">
                  {Array.from({ length: seatsRightCount[rowIndex] }).map((_, seatNum) => {
                    const seatId = `R-${row}${seatNum + 1}`;
                    const isSelected = selectedSeats.includes(seatId);
                    const seatClass = `components__seattype2-seat ${isSelected ? 'components__seattype2-selected' : ''}`;
                    return (
                      <div
                        key={seatNum}
                        className={seatClass}
                        onClick={() => toggleSeat('right', row, seatNum)}
                      />
                    );
                  })}
                  <span className="components__seattype2-row-label">{row}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="components__seattype2-event-info">
          <h2>Event: {id}</h2>
          <p><strong>Selected Seats:</strong> {selectedSeats.join(', ') || 'None'}</p>
          <p><strong>Total Price:</strong> {totalPrice.toLocaleString()} VND</p>
          <button
            className={`components__seattype2-info-btn-continue ${!selectedSeats.length && 'disabled'}`}
            onClick={() => alert(`Proceeding with selected seats: ${selectedSeats.join(', ')}`)}
          >
            Continue - {totalPrice.toLocaleString()} VND
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatType2;
