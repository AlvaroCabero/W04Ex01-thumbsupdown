import { useState } from "react";

const FlipIcon = ({ icon1, icon2 }) => {
  const [iconActive, setIconActive] = useState(icon1);

  const flip = () => {
    setIconActive(iconActive === icon1 ? icon2 : icon1);
  };

  return <i className={`fas ${iconActive}`} onClick={flip}></i>;
};

//return (<i {className === "icon1" ? className = "fas fa-thumbs-up": className = "fas fa-thumbs-up"} ></i>)

/*const [printON, setPrintOn] = useState(true);
  return (
    <div>
      {<i className={printON ? fas ${icon1} iconTrue : fas ${icon1} iconFalse} onClick={() => setShow(!show)}></i>}
      {<i className={printON ? fas ${icon2} iconFalse : fas ${icon2} iconTrue} onClick={() => setShow(!show)}></i>}
    </div>
  )
};*/

export default FlipIcon;
