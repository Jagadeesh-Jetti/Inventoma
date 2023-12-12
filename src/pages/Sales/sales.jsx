import React from "react";
import { useEffect } from "react";
import { GetSales } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "../Sales/sales.css";

export const Sales = () => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(GetSales());
  }, [dispatch]);

  return (
    <div className="sales_main">
      <div className="sales_name">Sales</div>
      <div className="sales_layout">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Data</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index}>
                <td>{sale.name}</td>
                <td>{sale.quantity}</td>
                <td>{new Date(sale.createdAt).toLocaleDateString("en-GB")}</td>
                <td>{sale.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
