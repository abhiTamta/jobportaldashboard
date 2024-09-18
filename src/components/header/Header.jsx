import MenuToggleButton from './headercomponents/MenuToggleButton';
import Searchbar from './headercomponents/Searchbar';
import Notification from './headercomponents/Notification';
import UserProfile from "./headercomponents/UserProfile";
import NavBrand from './headercomponents/NavBrand';
import { Space } from 'antd';

const Header = () => {

  return (
    <nav className='w-full flex py-3 px-5 shadow bg-white'>
      <div className="headerTopSidebar w-2/12">
        <NavBrand />
      </div>

      <div className="headerNavBar flex flex-grow items-center">
        <Space size={'large'}>
          <MenuToggleButton />
          <Searchbar />
        </Space>
        <div className="flex flex-grow justify-end items-center gap-5">
          <Notification />
          <UserProfile />
        </div>
      </div>
    </nav>
  )
}

export default Header