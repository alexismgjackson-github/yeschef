import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./Restrictions.css";

export default function Restrictions() {
  const [restrictions, setrestrictions] = useState([]);

  const restrictionsListItem = restrictions.map((restriction) => (
    <li className="restrictions-list-item" key={restriction}>
      {restriction}
    </li>
  ));

  function addRestrictions(formData) {
    const newRestriction = formData.get("dietary-restrictions");

    console.log(`Added new restriction: ${newRestriction}`);

    setrestrictions((prevRestrictions) => [
      ...prevRestrictions,
      newRestriction,
    ]);
  }

  // console.log(`${restrictions.length} restrictions total`);

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/quantity`);
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
          <form className="dietary-restrictions-form" action={addRestrictions}>
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
            disabled={restrictions.length === 0}
          >
            Next
          </button>
        </section>
      </div>
    </>
  );
}
