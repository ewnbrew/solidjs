const VITE_ENV = import.meta.env["VITE_ENV"]
var HelloWorld = () => {
  return (
    <div>
      <h2>test component {VITE_ENV}</h2>
    </div>
  )
}

export default HelloWorld;