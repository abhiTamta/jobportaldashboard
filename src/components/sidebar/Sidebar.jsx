import { Button, Menu } from "antd";
import { useState } from "react";
import { RiMenuFold2Fill } from "react-icons/ri";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import "./sidebarStyle.css";

const items = [
  {
    key: "1",
    label: "Option 1",
  },
  {
    key: "2",
    label: "Option 2",
  },
  {
    key: "3",
    label: "Option 3",
  },
  {
    key: "sub1",
    label: "Navigation One",
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "7",
        label: "Option 7",
      },
      {
        key: "8",
        label: "Option 8",
      },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "11",
            label: "Option 11",
          },
          {
            key: "12",
            label: "Option 12",
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div className="flex flex-col h-screen bg-white shadow-lg">
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {collapsed ? <RiMenuFold2Fill /> : <RiMenuUnfold2Fill />}
        </Button>
        <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
      </div>
      
    </>
  );
};

export default Sidebar;
