import axios from "axios";
import {
  ADD_TO_CART,
  FETCH_CART,
  REMOVE_ITEM_CART,
  UPDATE_CART_ITEM,
} from "../constants/cardConstant";

// Fetch Current user Carts
export const fetchCartItems = (alert) => async (dispatch) => {
  try {
    const response = await axios.get("/api/v1/eats/cart/get-cart");
    dispatch({ type: FETCH_CART, payload: response.data.data });
  } catch (error) {
    console.error("Fetched cart error: ", error);
    alert.info("Cart is Hungry");
  }
};

// ADD To cart
export const addToCart =
  (foodItemId, restaurant, quantity, alert) => async (dispatch, getState) => {
    try {
      const { user } = getState().auth;
      const response = await axios.post("/api/v1/eats/cart/add-to-cart", {
        userId: user._id,
        foodItemId,
        restaurantId:restaurant,
        quantity,
      });
      alert.success("Item added to cart", response.data.cart);
      dispatch({ type: ADD_TO_CART, payload: response.data.cart });
    } catch (error) {
      console.log("Error from add-to-cat: ",error)
      alert.error(error.response ? error.response.data.message : error.message);
    }
  };

// Update cart Item Quantity
export const updateCartQuantity =(foodItemId, quantity, alert) => async (dispatch, getState) => {
    try {
      const { user } = getState().auth;
      if (typeof foodItemId === "object") {
        foodItemId = foodItemId._id;
      }
      const response = await axios.post("/api/v1/eats/cart/update-cart-item", {
        userId: user._id,
        foodItemId: foodItemId,
        quantity,
      });
      dispatch({
        type: UPDATE_CART_ITEM,
        payload: response.data.cart,
      });
    } catch (error) {
      alert.error(error.response ? error.response.data.message : error.message);
    }
  };

//   remove item from cart
export const removeItemFromCart = (foodItemId) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    if (typeof foodItemId === "object") {
      foodItemId = foodItemId._id;
    }
    const response = await axios.delete("/api/v1/eats/cart/delete-cart-item", {
      data:{userId: user._id,
      foodItemId,}
    });
    dispatch({
      type: REMOVE_ITEM_CART,
      payload: response.data,
    });
  } catch (error) {
    console.error(error.response ? error.response.data.message : error.message);
  }
};
