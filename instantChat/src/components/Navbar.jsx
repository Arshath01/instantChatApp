import { UserAuth } from "../context/authContext";
export const Navbar = () => {
    const {currentUser,logOut} = UserAuth();
    const handleLogOut =async()=>{
        try{
            await logOut();
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <div className=" bg-gray-800 text-white px-3">
            <div className="containerWrap navbar flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">instantChat</a>
               {currentUser ?  <button onClick={handleLogOut}
                className="btn bg-gray-200">Logout</button>:""}
            </div>
        </div>
    )
}