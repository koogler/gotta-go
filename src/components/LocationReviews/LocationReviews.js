import React from "react";
import LocationDetail from "../LocationDetail/LocationDetail";

import "./LocationReviews.scss"

const LocationReviews = ({ reviews }) => {

  return (
    <div className="row">
      {reviews.map((review) => {
        return (
          <div key={review.id} className="card text-white bg-primary mb-3 mr-4" style={{ maxWidth: "40%" }}>
            <div className="card-header d-flex justify-content-between">
              <span>{review.review_body}</span>
              <span>{review.privacy_rating}</span>
            </div>
          </div>
        )
      })}
    </div>

  )

}

export default LocationReviews