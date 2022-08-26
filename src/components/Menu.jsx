import React, {useContext} from 'react';
import '@styles/Menu.scss';
import AppContext from '@context/AppContext';

const Menu = () => {
  const {state} = useContext(AppContext);
  let classMenu;

  if(state.toggleOrders) {
    classMenu = "menu displayedOrders";
  } else {
    classMenu = "menu";
  };

  return (
    <div className={classMenu} >
      <ul>
        <li>
          <a href="/" className="menu-title">
            My orders
          </a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu