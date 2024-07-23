import React from "react";

const Restaurant = () => {
  return (
    <div className="col-sm-12 ol-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/2/50382/bd8dfea96f558f70726e9adeea69ad59.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
          alt="Dominos"
        />

        {/* Heading and Address  */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-tittle">Dominos Pizza</h5>
          <p className="rest_address">123,street,Place,City-42001</p>
          {/* Reviews and Rating  */}
          <div className="ratings-outer">
            <div className="rating-inner"></div>
            <span id="no_of_reviews">(140 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
