import { useNavigate } from "react-router";
import "./Modifications.css";

export default function Modifications() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/recipe`);
  }
  
  return (
    <>
      <div className="modifications-container">
        <section className="modifications-selection-container">
          <p>Modifications page</p>
        </section>
        <section className="modifications-btn-container">
          <button className="modifications-next-btn" onClick={handleClick}>
            Next
          </button>
        </section>
      </div>
    </>
  );
}
