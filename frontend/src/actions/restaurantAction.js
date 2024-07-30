import { ALL_RESTAURANTS_REQUEST, ALL_RESTAURANTS_SUCCESS, CLEAR_ERROR, SORT_BY_RATINGS, SORT_BY_REVIEWS, TOGGLE_BY_VEG_ONLY } from "../constants/restaurantConstant";
import axios from 'axios';

export const getRestaurants = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ALL_RESTAURANTS_REQUEST });
      const { data } = await axios.get("/api/v1/eats/stores");
      console.log("API Data:", data); // Add this line
      dispatch({
        type: ALL_RESTAURANTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const sortByReviews=()=>{
  return{
    type:SORT_BY_REVIEWS
  }
}

export const sortByRatings=()=>{
  return{
    type:SORT_BY_RATINGS
  }
}

export const toggleVegOnly=()=>{
  return{
    type:TOGGLE_BY_VEG_ONLY
  }
}
export const clearErrors=()=>{
  return{
    type:CLEAR_ERROR
  }
}