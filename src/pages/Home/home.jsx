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
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(AddEntry(input));
    setInput({
      name: "",
      quantity: "",
      price: "",
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

          <select name="type" value={input.type} onChange={handleInput}>
            <option> Select category </option>
            <option value="inventories"> Inventory </option>
            <option value="sales"> Sales </option>
          </select>
        </div>

        <button type="submit">Add Item to Inventory</button>
      </form>
    </div>
  );
};
