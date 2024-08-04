import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Header = () => {
  const items = [
    {
      label: <Link to={"/"}>Home Page</Link>,
      key: "home",
      icon: <MailOutlined />,
    },
    {
      label: <Link to={"/user"}>User</Link>,
      key: "user",
      icon: <MailOutlined />,
    },
    {
      label: "Welcome",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          label: "Log In",
          key: "login",
        },
        {
          label: "Log Out",
          key: "logout",
        },
      ],
    },
  ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
