import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../actions/restaurantAction";
import Loader from "./Loader";
import Message from "./Message";

export default function CountRestaurant() {
  const dispatch = useDispatch();
  const { loading, error, count, showVegOnly, pureVegRestaurantsCount } =
    useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message></Message>
      ) : (
        <p className="NumOfRestro">
          {showVegOnly ? pureVegRestaurantsCount : count}{" "}
          <span className="Restro">
            {" "}
            {showVegOnly?pureVegRestaurantsCount === 1 ?"Restaurant" : "Restaurants":
            count === 1 ? "Restaurant" : "Restaurants"}
          </span>
        </p>
      )}
      <hr />
    </div>
  );
}
