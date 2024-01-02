import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss";
import { useState } from "react";

type ListItem = {
  id: number;
  url: string;
  icon: string;
  title: string;
};

type Menu = {
  id: number;
  listItems: ListItem[];
};

const Menu = () => {
  const [selectedItemId, setselectedItemID] = useState<number | null>(null);

  const handleItemClick = (itemId: number) => {
    setselectedItemID(itemId);
  };

  return (
    <div className="menu">
      {/* Top section */}
      <div className="logo">
        <Link to="/register">
          <img src="./public/logo.svg" alt="logo" />
        </Link>
      </div>
      <hr />
      {/* second section */}
      <div className="account">
        <div className="iconNotification">
          <img
            src="./public/notification_icon.svg"
            alt="notification"
            className="icon"
          />
          <img src="./public/login.svg" className="profileImg" alt="profile" />
          {/* <img src="./public/setting_icon.svg" alt="setting" className="icon" /> */}
          <img src="./public/q&a_icon.svg" alt="q&a" className="icon" />
        </div>
      </div>
      {/* third section */}
      <div className="listMenu">
        <div className="search">
          <input
            type="text"
            className="searchInput"
            placeholder="    SEARCH..."
          />
          <div className="searchBTN">
            <img src="./public/search.svg" />
          </div>
        </div>
        {menu.map((Item: Menu) => (
          <div className="item" key={Item.id}>
            {Item.listItems.map((listItem) => (
              <Link
                key={listItem.id}
                to={listItem.url}
                className={`listItem ${
                  selectedItemId === listItem.id ? "selected" : ""
                }`}
                onClick={() => handleItemClick(listItem.id)}
              >
                <div className="iconImage">
                  <img src={listItem.icon} alt="image" />
                </div>
                <div className="listItemTitle">{listItem.title}</div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
