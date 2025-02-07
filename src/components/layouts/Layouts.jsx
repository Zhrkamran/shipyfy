import Navbar from "../navbar/Navbar"


function Layouts({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layouts