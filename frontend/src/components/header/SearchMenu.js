import { useEffect, useRef, useState } from "react";
import useClickOutisde from "../../helpers/clickOutside";
import { Return, Search } from "../../svg";

export default function SearchMenu({ color, setShowSearchMenu }) {
  const [iconVisible, setIconVisible] = useState(true);
  const menu = useRef(null);
  const input = useRef(null);

  useClickOutisde(menu, () => setShowSearchMenu(false));
  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className="header_left search_areas scrollbar" ref={menu}>
      <div className="search_wrap">
        <div className="header_logo">
          <div
            className="circle hover1"
            onClick={() => setShowSearchMenu(false)}
          >
            <Return />
          </div>
        </div>
        <div
          className="search"
          onClick={() => {
            input.current.focus();
          }}
        >
          {iconVisible && (
            <div>
              <Search color={color} />
            </div>
          )}

          <input
            type="text"
            placeholder="Search Facebook"
            ref={input}
            onFocus={() => setIconVisible(false)}
            onBlur={() => setIconVisible(true)}
          />
        </div>
      </div>
      <div className="search_history_header">
        <span>Recent Searches</span>
        <a>Edit</a>
      </div>
      <div className="search_history"></div>
      <div className="search_reslut scrolbar"></div>
    </div>
  );
}
