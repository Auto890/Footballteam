import "./Header.css";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
const Header = ({title, theme, setTheme}) => {

  function  toggleTheme () {
    if(theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return(
  <nav>
  <h1>{title}</h1>
  <span onClick={toggleTheme}>
    {theme === "light" ? <CiSun size={30} /> : <FaMoon size={30}/>}
  </span>
  </nav>
  );
};

export default Header;
