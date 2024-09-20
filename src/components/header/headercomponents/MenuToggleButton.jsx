import { Button } from "antd";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const MenuToggleButton = () => {
  const [menuSlideToggle, setMenuSlideToggle] = useState(false);

  function menuToggleUnflod() {
    setMenuSlideToggle(!menuSlideToggle);
    console.log(menuSlideToggle)
  }

  return (
    <Button
      onClick={menuToggleUnflod}
      type="button"
      icon={<HiMenuAlt1 className="text-slate-300 shadow-none" size={24} />}
    />
  );
};

export default MenuToggleButton;
