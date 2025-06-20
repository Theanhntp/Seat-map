import React, { useState, useEffect } from 'react';
import './SeatType3.scss';

const SeatType3 = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O'];
    
    // Dữ liệu giả lập cho số lượng ghế và giá trị
    const seatsLeftCount = rows.slice(0, 8).map(() => 13);  // Giả lập 13 ghế cho mỗi hàng bên trái
    const seatsRightCount = rows.slice(0, 8).map(() => 13); // Giả lập 13 ghế cho mỗi hàng bên phải

    const [selectedSeats, setSelectedSeats] = useState([]);
    const prices = { left: 100000, right: 50000 };  // Giả lập giá vé cho các khu vực

    // Hàm toggle khi người dùng chọn hoặc bỏ chọn ghế
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

    // Tính toán tổng giá trị dựa trên các ghế đã chọn
    const totalPrice = selectedSeats.reduce((sum, seat) => {
        if (seat.startsWith('L-')) return sum + prices.left;
        if (seat.startsWith('R-')) return sum + prices.right;
        return sum;
    }, 0);

    return (
        <div className="components__seattype3">
            <h1 className="components__seattype3-title">Select ticket</h1>

            <div className="components__seattype3-details">
                <span className="components__seattype3-legend">
                    <span className="components__seattype3-legend-circle components__seattype3-available"></span> Available
                </span>
                <span className="components__seattype3-legend">
                    <span className="components__seattype3-legend-circle components__seattype3-selected"></span> Selected
                </span>
                <span className="components__seattype3-legend">
                    <span className="components__seattype3-legend-circle components__seattype3-unavailable"></span> Not Available
                </span>
            </div>

            <div className="components__seattype3-stage-wrapper">
                <div className="components__seattype3-stage">STAGE</div>
            </div>

            <div className="components__seattype3-layout-wrapper">
                <div className="components__seattype3-seat-layout">
                    <div className="components__seattype3-sections">
                        <div className="components__seattype3-left-section">
                            {rows.slice(0, 8).map((row, rowIndex) => (
                                <div key={row} className="components__seattype3-row">
                                    <span className="components__seattype3-row-label">{row}</span>
                                    <div className="components__seattype3-seats">
                                        {seatsLeftCount[rowIndex] && Array.from({ length: seatsLeftCount[rowIndex] }).map((_, index) => {
                                            const seatNum = index * 2 + 1;
                                            const seatId = `L-${row}${seatNum}`;
                                            const isSelected = selectedSeats.includes(seatId);
                                            return (
                                                <span
                                                    key={`${row}-${seatNum}`}
                                                    className={`components__seattype3-seat ${isSelected ? 'components__seattype3-seat-selected' : 'components__seattype3-seat-available'}`}
                                                    onClick={() => toggleSeat('left', row, index)}
                                                >
                                                    {seatNum}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="components__seattype3-divider"></div>

                        <div className="components__seattype3-right-section">
                            {rows.slice(0, 8).map((row, rowIndex) => (
                                <div key={row} className="components__seattype3-row">
                                    <span className="components__seattype3-row-label">{row}</span>
                                    <div className="components__seattype3-seats">
                                        {seatsRightCount[rowIndex] && Array.from({ length: seatsRightCount[rowIndex] }).map((_, index) => {
                                            const seatNum = index * 2 + 2;
                                            const seatId = `R-${row}${seatNum}`;
                                            const isSelected = selectedSeats.includes(seatId);
                                            return (
                                                <span
                                                    key={`${row}-${seatNum}`}
                                                    className={`components__seattype3-seat ${isSelected ? 'components__seattype3-seat-selected' : 'components__seattype3-seat-available'}`}
                                                    onClick={() => toggleSeat('right', row, index)}
                                                >
                                                    {seatNum}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="components__seattype3-event-information">
                    <h4>Event: Seat Selection</h4>
                    <div className="components__seattype3-pricing">
                        <h3>Pricing</h3>
                        <ul>
                            <li>
                                <div className="components__seattype3-price-detail components__seattype3-left-seat"></div>
                                Left Section: <span className="components__seattype3-price-green">{prices.left.toLocaleString()} ₫</span>
                            </li>
                            <li>
                                <div className="components__seattype3-price-detail components__seattype3-right-seat"></div>
                                Right Section: <span className="components__seattype3-price-green">{prices.right.toLocaleString()} ₫</span>
                            </li>
                        </ul>
                    </div>

                    <div className="components__seattype3-info-btn">
                        {selectedSeats.length === 0 ? (
                            <button className="components__seattype3-info-btn-continue-disabled">Please select ticket</button>
                        ) : (
                            <>
                                <p>Selected Seat: {selectedSeats.join(', ')}</p>
                                <button className="components__seattype3-info-btn-continue">
                                    Continue - {totalPrice.toLocaleString()} VND
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatType3;
