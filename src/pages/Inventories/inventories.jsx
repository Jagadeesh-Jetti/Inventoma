import { useDispatch, useSelector } from "react-redux";
import "../Inventories/inventories.css";
import { DeleteEntry, GetInventories } from "../../actions";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const Inventories = () => {
  const inventories = useSelector((state) => state.inventories);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(DeleteEntry(id));
  };

  useEffect(() => {
    dispatch(GetInventories());
  }, [dispatch]);

  return (
    <div className="invent-main">
      <div className="invent-name">Inventories</div>
      <div className="invent-layout">
        {inventories?.map((inventory) => (
          <div className="invent-card" key={inventory._id}>
            <p>
              <b> Name: </b> {inventory.name}
            </p>
            <p>
              <b> Quantity: </b> {inventory.quantity}
            </p>
            <p>
              <b> Date: </b>
              {new Date(inventory?.createdAt).toLocaleDateString("en-GB")}
            </p>
            <p>
              <b> Price: </b> {inventory.price}
            </p>
            <div className="icons">
              <FontAwesomeIcon
                icon={faTrash}
                className="trash"
                onClick={() => deleteHandler(inventory._id)}
              />
              <FontAwesomeIcon
                icon={faPenToSquare}
                // onClick={() => modal(true, _id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
