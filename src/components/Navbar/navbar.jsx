import { useNavigate } from "react-router-dom";
import "../Navbar/navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="hero_name"> Inventoma </div>
      <div className="nav_options">
        <p onClick={() => navigate("/inventories")}> Inventories </p>
        <p onClick={() => navigate("/sales")}> Sales </p>
        <p onClick={() => navigate("/reports")}> Reports </p>
        <p onClick={() => navigate("/")}> Add Entry </p>
      </div>
    </div>
  );
};
