import { useEffect } from "react";
import { GetInventories } from "../../actions";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetInventories());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1> Add entry</h1>
        <div></div>
      </div>
    </div>
  );
};
