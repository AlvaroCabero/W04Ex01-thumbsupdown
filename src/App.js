import "./App.css";

import FlipIcon from "./FlipIcon";

function App() {
  /*const [icon, setIcon] = useState("icon1");

  const flip = () => {
    if (icon === "icon1") {
      setIcon("icon2");
    } else {
      setIcon("icon2");
    }
  };*/

  return (
    <>
      <FlipIcon icon1="fa-thumbs-up" icon2="fa-thumbs-down" />
    </>
  );
}
export default App;
