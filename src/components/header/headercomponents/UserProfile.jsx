import { Avatar, Button, Dropdown } from "antd";
import { LuLogOut } from "react-icons/lu";
import profileIcon from "../../../assets/images/user_profile_img/dummy.png"


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
const UserProfile = () => {
    return (
        <Dropdown menu={{ items }} placement="bottom" className='rounded-none'>
            {/* <a onClick={(e) => e.preventDefault()}></a> */}
            <Button shape='circle' className='p-0 shadow-none border-none'>
                <Avatar src={profileIcon} />
            </Button>
        </Dropdown>
    )
}

export default UserProfile