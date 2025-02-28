import { useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./Restrictions.css";

export default function Restrictions(props) {
  const restrictionsListItem = props.restrictions.map((restriction) => (
    <li className="restrictions-list-item" key={restriction}>
      {restriction}
    </li>
  ));

  console.log(props.restrictions);

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/recipe`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();
  return (
    <>
      <div className="dietary-restrictions-container fade-in">
        <section className="dietary-restrictions">
          <h1>
            Please enter any food allergies, dislikes and/or restrictions?
          </h1>
          <form
            className="dietary-restrictions-form"
            action={props.addRestrictions}
          >
            <input
              type="text"
              name="dietary-restrictions"
              className="dietary-restrictions-input"
              aria-label="Add food allergies or restrictions"
              placeholder="e.g shellfish"
            />
            <div className="dietary-restrictions-btn-container">
              <button className="add-modification-btn">Add Modification</button>
            </div>
          </form>
        </section>
        <section className="dietary-restrictions-list-container">
          <ul className="dietary-restrictions-list">{restrictionsListItem}</ul>
        </section>
        <section className="dietary-restrictions-btn-container">
          <button
            className="get-recipe-btn"
            onClick={handleClick}
            disabled={props.restrictions.length === 0}
          >
            {/* keep this button disabled until the user inputs at least 1 ingredient */}
            Next
          </button>
        </section>
      </div>
    </>
  );
}
