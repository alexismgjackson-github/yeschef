import { useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./CookingTime.css";

export default function CookingTime(props) {
  // console.log(props.minutes);

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/servings`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();
  return (
    <>
      <div className="cooking-time-container fade-in">
        <section className="cooking-time">
          <h1>How many minutes do you have available for cooking?</h1>
          <div className="cooking-time-adjustment">
            <button
              className="decrement-time-btn"
              aria-label="Decrement by 10 minutes"
              onClick={props.decrementMinutes}
              disabled={props.minutes === 20}
            >
              {/* disable button when the "minutes" are equal to 20 */}
              <img
                src="/assets/icons/decrement.svg"
                alt="Decrement"
                className="decrement-icon"
              />
            </button>
            <span className="minutes">{props.minutes}</span>
            <button
              className="increment-time-btn"
              aria-label="Increment by 10 minutes"
              onClick={props.incrementMinutes}
              disabled={props.minutes === 90}
            >
              {/* disable button when the "minutes" are equal to 90 */}
              <img
                src="assets/icons/increment.svg"
                alt="Increment"
                className="increment-icon"
              />
            </button>
          </div>
        </section>
        <section className="cooking-time-btn-container">
          <button className="cooking-time-next-btn" onClick={handleClick}>
            Next
          </button>
        </section>
      </div>
    </>
  );
}
