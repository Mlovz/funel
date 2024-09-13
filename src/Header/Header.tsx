import './header.css'
import Logo from "../assets/photo_2024-06-03_10-06-00 1@2x.png";

export const Header = () => {
    return (
<header className="header">
  <div className="header-wrap">
    <div className="header-logo">
      <img src={Logo} alt="Valorant Logo" />
    </div>
    <nav className="header-nav">
      <a href="#courses">Courses</a>
      <a href="#resources">Resources</a>
      <a href="#community">Community</a>
    </nav>
    <div className="header-button">
      <a href="#signup">Vip Client</a>
    </div>
  </div>
</header>


    )
}