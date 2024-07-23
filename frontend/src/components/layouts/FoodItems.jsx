import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";

const FoodItems = () => {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
      <div className="card p-3 rounded">
        <img src="https://b.zmtcdn.com/data/pictures/7/20602117/002ca1fb45428c58cf0716d555c8a09c_o2_featured_v2.jpg" alt="food" className="card-img-top mx-auto" />

        {/* Heading and Desciption  */}
        <div className="card-body d-flex flex-column">
            <h5 className="card-tittle">Swadisht Restaurant</h5>
            <p>Paneer subjii-plate</p>
            <p className="card-text"><FaIndianRupeeSign /> 180 <br /></p>
            <button type='button' id='card_btn' className='btn btn-primary d-inline ml-4'>Add To Card</button><br />
            <p className='text-dark'>Status: <span id='stock_status'>{10>5?(<span className='text-success'>In Stock</span>):(<span className='text-danger'>Out of stock</span>)}</span></p>
        </div>
      </div>
    </div>
  )
}

export default FoodItems
