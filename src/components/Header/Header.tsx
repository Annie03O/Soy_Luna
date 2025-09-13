import "./Header.css";
import { Nav } from "../Nav/Nav";
export const Header = () => {
      
    return (
        <header className="header">
            <div className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Disney_Soy_Luna_logo.svg/2560px-Disney_Soy_Luna_logo.svg.png" alt="" /></div>
            <Nav />
        </header>
    );
};