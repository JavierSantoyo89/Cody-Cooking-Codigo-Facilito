import { Link } from "react-router-dom";

export const Head = () => {
  return (
    <div>
      <hr></hr>
      <h2>Head</h2>
      <Link to="/">Home</Link> {" | "}
      <Link to="/login">Login</Link> {" | "}
      <Link to="/perfil">Perfil</Link>
      <hr></hr>
    </div>
  );
};
