import { useEffect, useRef, useState } from "react";
import useClickOutisde from "../../helpers/clickOutside";
import { Return, Search } from "../../svg";
import { search } from "../../functions/user";
import { Link } from "react-router-dom";

export default function SearchMenu({ color, setShowSearchMenu, token }) {
  const [iconVisible, setIconVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const menu = useRef(null);
  const input = useRef(null);

  useClickOutisde(menu, () => setShowSearchMenu(false));
  useEffect(() => {
    input.current.focus();
  }, []);

  const searchHandler = async () => {
    if (searchTerm === "") {
      setResults("");
    } else {
      const res = await search(searchTerm, token);
      setResults(res);
    }
  };

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={searchHandler}
            onFocus={() => setIconVisible(false)}
            onBlur={() => setIconVisible(true)}
          />
        </div>
      </div>
      <div className="search_history_header">
        <span>Recent Searches</span>
        <a>Edit</a>
      </div>
      <div className="search_history scrolbar"></div>
      <div className="search_results scrolbar">
        {results &&
          results.map((user) => (
            <Link
              to={`/profile/${user.username}`}
              className="search_user_item hover1"
              key={user._id}
            >
              <img src={user.picture} alt="" />
              <span>
                {user.first_name} {user.last_name}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
