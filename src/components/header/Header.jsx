import MenuToggleButton from './headercomponents/MenuToggleButton';
import Searchbar from './headercomponents/Searchbar';
import Notification from './headercomponents/Notification';
import UserProfile from "./headercomponents/UserProfile";
import NavBrand from './headercomponents/NavBrand';

const Header = () => {

  return (
    <nav className='w-full'>
      <div className="headerTopSidebar w-2/12">
        <NavBrand />
      </div>

      <div className="headerNavBar">
        <MenuToggleButton />
        <Searchbar />
        <Notification />
        <UserProfile />
      </div>
    </nav>
  )
}

export default Header