var Footer = () => {
  return (
    <>
    <style>
      {`
        footer {
          text-align: center;
          border-top: solid black;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 2.5rem;  
      `}
    </style>
    <footer>
      <p style={{ "color": "black" }}>Tiket.com<br/>
      <a href="mailto:hege@example.com">hege@example.com</a></p>
    </footer>
    </>
  )
}

export default Footer;