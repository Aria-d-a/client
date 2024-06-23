import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Зарегестрироваться</h1>
          <input name="username" type="text" placeholder="Имя пользователя" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Пароль" />
          <button disabled={isLoading}>Зарегестрироваться</button>
          {error && <span>{error}</span>}
          <Link to="/login">У вас уже есть аккаунт?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/img-homePage.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
