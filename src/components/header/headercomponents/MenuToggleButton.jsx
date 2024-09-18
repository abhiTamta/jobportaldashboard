import { Button } from 'antd'
import { HiMenuAlt1 } from "react-icons/hi";

const MenuToggleButton = () => {
  return (
    <Button type="button" icon={<HiMenuAlt1 className="text-slate-600" size={24} />} />
  )
}

export default MenuToggleButton