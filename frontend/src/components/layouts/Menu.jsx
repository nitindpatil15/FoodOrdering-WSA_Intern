import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from "../../actions/menuAction";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import FoodItem from './FoodItem';

export default function Menu() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the restaurant ID from URL parameters

  const { menus, loading, error } = useSelector((state) => state.menus); // Select menu state from Redux store

  useEffect(() => {
    dispatch(getMenus(id)); // Fetch menus based on restaurant ID when component mounts
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <Loader /> // Show loader while data is being fetched
      ) : error ? (
        <Message variant="danger">{error}</Message> // Show error message if there's an error
      ) : menus && menus.length > 0 ? (
        menus.map((menu) => (
          <div key={menu._id}>
            <h2>{menu.category}</h2> {/* Display menu category */}
            <hr />
            {menu.items && menu.items.length > 0 ? (
              <div className="row">
                {menu.items.map((fooditem) => (
                  <FoodItem
                    key={fooditem._id}
                    fooditem={fooditem} // Pass food item to FoodItems component
                    restaurant={id}
                  />
                ))}
              </div>
            ) : (
              <Message variant="info">No FoodItem Found</Message> // Message if no items found
            )}
          </div>
        ))
      ) : (
        <Message variant="info">No Menus Found</Message> // Message if no menus found
      )}
    </div>
  );
};
