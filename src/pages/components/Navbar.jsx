import { useContext } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">ChatBox</span>
      <div className="user">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar