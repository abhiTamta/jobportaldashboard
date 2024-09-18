import { Avatar, Badge, Button, Dropdown, Form, Input, Space } from 'antd'
import { LuLogOut } from 'react-icons/lu';
import { TbBriefcase } from "react-icons/tb";
import profileIcon from "../../assets/images/user_profile_img/dummy.png"
import { RiMenuFold2Fill } from "react-icons/ri";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiNotificationLine } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";


const items = [
  {
    key: 'profile',
    label: "Profile",
    icon: <LuLogOut size={14} />
  },
  {
    key: 'support',
    label: "Support",
    icon: <LuLogOut size={14} />
  },
  {
    key: 'logout',
    label: "Logout",
    icon: <LuLogOut size={14} />
  },
];


const Header = () => {

  return (
    <nav className='w-full bg-slate-500 h-14 px-5 flex justify-between items-center'>
      <div className="headerTopSidebar w-2/12">
        <div className="brand flex items-center gap-2">
          <div className="text-orange-400"><TbBriefcase size={24} /></div>
          <div className="text-xl font-bold text-slate-100">Pixels Jobs</div>
        </div>
      </div>

      <div className="headerNavBar flex flex-grow gap-5 items-center">
        <div className="text-white">
          <Button type="button" icon={<HiMenuAlt1 className="text-white" size={24} />} />
        </div>

        <Form name='search'>
          <Form.Item className='m-0'>
            <Input.Search></Input.Search>
          </Form.Item>
        </Form>
        <Badge count={5} size='small'>
          <Avatar icon={<RiNotificationLine />} shape="square" size="small" />
        </Badge>

        <Dropdown menu={{ items }} className='rounded-none'>
          {/* <a onClick={(e) => e.preventDefault()}></a> */}
          <Button shape='circle' className='p-0 shadow-none border-none'>
            <Avatar src={profileIcon} />
          </Button>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Header