import { useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./Introduction.css";

export default function Introduction(props) {
  const navigate = useNavigate();

  function handleClick() {
    props.restart;
    navigate(`/ingredients`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="introduction-container fade-in">
        <section className="introduction-header-container">
          <span className="introduction-header">Yes, Chef!</span>
        </section>
        <section className="introduction-paragraph-container">
          <span className="introduction-paragraph">
            Get your own personalized recipes using ingredients on hand.
          </span>
        </section>
        <section className="introduction-btn-container">
          <button className="start-btn" onClick={handleClick}>
            Start
          </button>
        </section>
      </div>
    </>
  );
}
