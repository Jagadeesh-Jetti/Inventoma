import { useEffect, useState } from "react";
import { GetInventories } from "../../actions";
import { useDispatch } from "react-redux";
import "../Home/home.css";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetInventories());
  }, [dispatch]);

  const [input, setInput] = useState({
    itemName: "",
    quantity: "",
    price: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="add-data-container">
      <h2> Add New Entry </h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-rows">
          <input
            name="itemName"
            type="text"
            value={input.itemName}
            onChange={handleInput}
            placeholder="Item Name"
          />
          <input
            name="quantity"
            type="number"
            value={input.quantity}
            onChange={handleInput}
            placeholder="Quantity"
          />
        </div>

        <div className="form-rows">
          <input
            name="price"
            type="number"
            value={input.price}
            onChange={handleInput}
            placeholder="Price"
          />

          <select name="category" value={input.category} onChange={handleInput}>
            <option value=""> Select category </option>
            <option value="category1"> Inventory </option>
            <option value="category2"> Sales </option>
          </select>
        </div>

        <button type="submit">Add Item to Inventory</button>
      </form>
    </div>
  );
};
