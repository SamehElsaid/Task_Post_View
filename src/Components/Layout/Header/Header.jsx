import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div className="header">
      <div className="container header-content">
        <Link to="/" className="nav-link">
          <h1>Logo</h1>
        </Link>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
