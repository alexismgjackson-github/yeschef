import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./CookingTime.css";

export default function CookingTime() {
  const [minutes, setMinutes] = useState(20);

  function decrementMinutes() {
    setMinutes((prevMinutes) => prevMinutes - 10);
  }

  function incrementMinutes() {
    setMinutes((prevMinutes) => prevMinutes + 10);
  }

  const navigate = useNavigate();

  // console.log(`Cooking time is ${minutes} minutes`);

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
              onClick={decrementMinutes}
              disabled={minutes === 20}
            >
              <img
                src="/assets/icons/decrement.svg"
                alt="Decrement"
                className="decrement-icon"
              />
            </button>
            <span className="minutes">{minutes}</span>
            <button
              className="increment-time-btn"
              aria-label="Increment by 10 minutes"
              onClick={incrementMinutes}
              disabled={minutes === 90}
            >
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
