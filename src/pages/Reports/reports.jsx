// Reports.jsx
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetInventories, GetSales } from "../../actions";
import "../Reports/reports.css";

export const Reports = () => {
  const inventories = useSelector((state) => state.inventories);
  const sales = useSelector((state) => state.sales);
  const dispatch = useDispatch();

  const [showReport, setShowReport] = useState("Report Type");
  const [isLoading, setIsLoading] = useState(false);

  const selectedReportData =
    showReport === "Inventory"
      ? inventories
      : showReport === "Sales"
      ? sales
      : [];

  const tableHeader = showReport === "Sales" ? "Quantity" : "Category";

  const handleReport = async () => {
    setIsLoading(true);
    try {
      if (showReport === "Inventory") {
        await dispatch(GetInventories());
      } else if (showReport === "Sales") {
        await dispatch(GetSales());
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleReport();
  }, [dispatch, showReport]);

  return (
    <div className="reports-main">
      <div className="report-name">Reports</div>

      <select
        className="select"
        value={showReport}
        onChange={(e) => setShowReport(e.target.value)}
      >
        <option value="Report Type">Report Type</option>
        <option value="Inventory">Inventory</option>
        <option value="Sales">Sales</option>
      </select>

      <div className="table-div">
        {isLoading ? (
          <h2 className="loading-text">Loading...</h2>
        ) : showReport === "Report Type" ? (
          <h2 className="placeholder-text">
            Select an option to view the report
          </h2>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>{tableHeader}</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {selectedReportData?.map((item) => (
                <tr key={item?._id}>
                  <td>{item?.name}</td>
                  <td>
                    {showReport === "Sales"
                      ? `${item?.quantity}`
                      : `${item?.category}`}
                  </td>
                  <td>₹ {item?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
