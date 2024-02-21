import { useEffect, useState } from "react";
import { AddEntry, GetInventories } from "../../actions";
import { useDispatch } from "react-redux";
import "../Home/home.css";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetInventories());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddEntry(input));
    setInput({
      name: "",
      quantity: "",
      price: "",
      category: "",
      type: "",
    });
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
            name="name"
            type="text"
            value={input.name}
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

          <input
            name="category"
            type="text"
            value={input.category}
            onChange={handleInput}
            placeholder="Category"
          />
        </div>
        <div className="form-rows">
          <select
            name="type"
            value={input.type}
            onChange={handleInput}
            className="form-button"
          >
            <option> Select Type </option>
            <option value="inventories"> Inventory </option>
            <option value="sales"> Sales </option>
          </select>
          <button type="submit" className="form-button">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};
