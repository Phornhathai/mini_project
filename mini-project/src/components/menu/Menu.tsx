import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img src="./public/logo.svg" alt="logo" />
      </div>
      <div className="account">
        <div className="profile">
          <img src="./public/login.svg" className="profileImg" alt="profile" />
        </div>
        <div className="iconNotification">
          <img
            src="./public/notification_icon.svg"
            alt="notification"
            className="icon"
          />
          <img src="./public/setting_icon.svg" alt="setting" className="icon" />
          <img src="./public/q&a_icon.svg" alt="q&a" className="icon" />
        </div>
      </div>
      <div className="search">
        <label htmlFor="searchLabel">Search</label>
        <input type="text" className="searchInput" placeholder="..." />
      </div>
      {menu.map((Item) => (
        <div className="item" key={Item.id}>
          {Item.listItems.map((listItem) => (
            <Link key={listItem.id} to={listItem.url} className="listItem">
              <img src={listItem.icon} alt="image" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
