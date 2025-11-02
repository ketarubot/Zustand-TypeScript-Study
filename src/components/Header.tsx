import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="titleBar">
          <h2>Track Books</h2>
        </div>
        <div className="navBar">
          <button id="homeNav" onClick={() => navigate("/")}>
            Home
          </button>
          <button id="boardNav" onClick={() => navigate("/dashboard")}>
            DashBoard
          </button>
          <button id="listNav" onClick={() => navigate("/list")}>
            List
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
