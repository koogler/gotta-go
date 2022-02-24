import React from "react";
import LocationDetail from "../LocationDetail/LocationDetail";

import "./LocationReviews.scss"

const LocationReviews = ({ reviews }) => {

  return (
    <div className="row">
      {reviews.map((review) => {
        return (
          <div key={review.id} className="card" style={{ maxWidth: "100%" }}>
            <div>
              <span className="card-header">{review.review_body}</span>
              <br/>
              <span className="rating">⭐ {review.privacy_rating}</span>
            </div>
          </div>
        )
      })}
    </div>

  )

}

export default LocationReviews



// className="card text-white bg-primary mb-3 mr-4"
// className="card-header d-flex justify-content-between"