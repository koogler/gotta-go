import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import LocationFind from "../../api/LocationFind";

const AddReview = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const [reviewBody, setReviewBody] = useState("")
  const [privacyRating, setPrivacyRating] = useState(0)

  const handleSubmitReview = async (event) => {
    event.preventDefault()
    const res = await LocationFind.post(`locations/${id}/addreview`, {
      review_body: reviewBody,
      privacy_rating: privacyRating
    })
    navigate('/')
    navigate(``)
  }

  return (
    <div>
      <form>
        <div className="form-row">

          <div className="form-group col-8">
            <label htmlFor="Review">Review</label>
            <textarea
              id="Review"
              placeholder="Give us your thoughts!"
              type="text"
              className="form-control"
              value={reviewBody}
              onChange={(event) => setReviewBody(event.target.value)}
            />
          </div>

          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={privacyRating}
              onChange={(event) => setPrivacyRating(event.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button className="btn btn-primary" onClick={handleSubmitReview}>Submit</button>

        </div>
      </form>
    </div>
  )
}

export default AddReview