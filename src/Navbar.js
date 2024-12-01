export default function Navbar(){
    return<nav className="nav">
      <a href="/" className="site-name">Gojo food Domain</a>
      <ul>
        <li className="active ">
          <a href="/Home">Home</a>
          </li>
          <li className="active ">
          <a href="/List">List</a>
        </li>
          <li className="active ">
         
          <a href="/ReviewPage">Reviews</a>
        </li>
          <li className="act">
          <a href="/Login">Login</a>
        </li>
          
      </ul>
    </nav>
  }