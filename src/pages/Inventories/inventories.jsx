import { useDispatch, useSelector } from "react-redux";
import "../Inventories/inventories.css";
import { GetInventories } from "../../actions";
import { useEffect } from "react";

export const Inventories = () => {
  const inventories = useSelector((state) => state.inventories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetInventories());
  }, [dispatch]);

  return (
    <div className="invent_main">
      <div className="invent_name">Inventories</div>
      <div className="invent_layout">
        {inventories.map((inventory) => (
          <div className="invent_card">
            <p>
              <b> Name: </b> {inventory.name}
            </p>
            <p>
              <b> Quantity: </b> {inventory.quantity}
            </p>
            <p>
              <b> Data: </b>{" "}
              {new Date(inventory?.createdAt).toLocaleDateString("en-GB")}
            </p>
            <p>
              <b> Price: </b> {inventory.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
