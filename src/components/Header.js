import { BsBell } from "react-icons/bs";

function Header() {
  return (
    <div className="py-8 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="flex items-center gap-8">
        <BsBell className="text-xl text-black cursor-pointer"/>
        <img 
          className="w-10 h-10 rounded-full object-cover border border-primary cursor-pointer"
          src="https://avatars.githubusercontent.com/u/60606778?v=4" 
          alt="admin-user" 
        />
      </div>
    </div>
  )
}

export default Header