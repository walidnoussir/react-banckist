import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import LoginInput from "../ui/LoginInput";
import Row from "../ui/Row";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setAccount } from "../redux/accountSlice";

function LoginPage() {
  const navigate = useNavigate();

  const accounts = useSelector((state) => state.account.accounts);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();

    const currAccount = accounts.find(
      (acc) =>
        acc.user
          .toLowerCase()
          .split(" ")
          .map((name) => name[0])
          .join("") === username && acc.pin === Number(password)
    );

    setUsername("");
    setPassword("");

    currAccount ? navigate("/home") : console.log("error");
    dispatch(setAccount(currAccount));
  }

  return (
    <div className="h-screen w-full flex flex-col items-center md:flex-row">
      <img
        className="hidden md:w-[50%] md:block md:h-[100%]"
        src="https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="loginImage"
      />

      <form className="flex flex-col items-center w-[50%] h-[100%] justify-center gap-6">
        <Row type="vertical">
          <label>Username</label>
          <LoginInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Row>
        <Row type="vertical">
          <label>Password</label>
          <LoginInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Row>

        <Button type="primary" onClick={login}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
