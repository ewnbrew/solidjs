var Navbar = () => {
  return (
  <>
  <style>
    {`
      .navbar {
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        background: white;
        border-bottom: solid black;
      }

      nav ul {
        display: flex;
        list-style: none;
      }
      
      nav li {
        padding-left: 1rem;
      }

      nav a {
        text-decoration: none;
        color: #0d47a1
      }
    `}
    </style>
      
    <nav class="navbar" id="navbar">
      <h2>Tiket.com</h2>
      <ul>
        <li><a href="#">Hotel</a></li>
        <li><a href="#">Pesawat</a></li>
        <li><a href="#">Masuk</a></li>
      </ul>
    </nav>  
  </>
  );
}

export default Navbar;