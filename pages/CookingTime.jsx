import { useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./CookingTime.css";

export default function CookingTime() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/restrictions`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();
  return (
    <>
      <div className="cooking-time-container fade-in">
        <section className="cooking-time">
          <h1>How many minutes do you have available for cooking?</h1>
          <form className="cooking-time-form">
            <input
              type="number"
              name="cooking-time"
              className="cooking-time-input"
              placeholder="e.g. 60"
              aria-label="Add cooking time"
              maxLength={3}
              required
            />
            <div className="cooking-time-btn-container">
              <button className="add-cooking-time-btn">Add Time</button>
            </div>
          </form>
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
