import React from "react";
import axios from "axios";
import "./NavBar.css";

interface NavBarProps {
  token: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const onClickHandler = async () => {
    if (props.token.length > 0) {
      await logout(props.token);
      await deleteAssets(props.token);
      window.location.href = "/login";
    } else {
      return;
    }
  };

  return (
    <ul className="navContainer">
      <li onClick={() => onClickHandler()}>
        {props.token.length > 0 ? "Logout" : "Welcome To Truck Viewer"}
      </li>
    </ul>
  );
};

const logout = async (token: string) => {
  await axios.delete("http://localhost:1337/api/sessions", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};

const deleteAssets = async (token: string) => {
  await axios.delete("http://localhost:1337/assets", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export default NavBar;
