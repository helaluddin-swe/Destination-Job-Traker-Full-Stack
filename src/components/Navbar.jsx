import LOGO from "../assets/logo-1.png"
import { Plus } from "lucide-react"

const Navbar = () => {
    return (
        <div className='bg-gray-100 relative gap-8 mr-20 ml-20 px-8 overflow-hidden text-gray-500 h-16 flex items-center justify-between py-4 rounded-full'>
            <div className="w-16 h-16 rounded-2xl  "> <img src={LOGO} alt="logo" className=" w-full h-full rounded-full object-cover " /></div>
            <div className=" flex text-cyan-500"> 
                <Plus className="border rounded-full bg-cyan-400 text-white " />Traker</div>
            <span>Features</span>
            <span>Pricing</span>
            <button>login</button>
            <button className="bg-blue-400 px-4 py-3 rounded-full"> SignUp</button>
          

        </div>
    )
}

export default Navbar
