import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSales } from "../../actions";
import "../Sales/sales.css";

export const Sales = () => {
  const dispatch = useDispatch();
  const allSales = useSelector((state) => state.sales);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const filteredSales = allSales.filter((sale) => {
    const saleDate = new Date(sale.createdAt).getTime();
    const startTimestamp = startDate ? new Date(startDate).getTime() : 0;
    const endTimestamp = endDate
      ? new Date(endDate).getTime()
      : Number.MAX_SAFE_INTEGER;

    return saleDate >= startTimestamp && saleDate <= endTimestamp;
  });

  useEffect(() => {
    // Fetch all sales data
    dispatch(GetSales());
  }, [dispatch]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div className="sales-main">
      <div className="sales-name">Sales History</div>
      <div className="date-filter">
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={handleStartDateChange} />
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </div>
      <div className="sales-layout">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredSales.map((sale, index) => (
              <tr key={index}>
                <td>{sale.name}</td>
                <td>{sale.price}</td>
                <td>{sale.quantity}</td>
                <td>{new Date(sale.createdAt).toLocaleDateString("en-GB")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
