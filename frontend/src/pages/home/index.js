import { useRef, useState } from "react";
import Header from "../../components/header";
import useClickOutisde from "../../helpers/clickOutside";

export default function Home() {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);

  useClickOutisde(el, () => {
    setVisible(false);
  });

  return (
    <div>
      <Header />
      {/*{visible && <div className="card" ref={el}></div>} */}
    </div>
  );
}
