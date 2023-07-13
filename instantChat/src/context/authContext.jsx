import { useContext,createContext,useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect,signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";

const AuthContext   = createContext();

export const AuthProvider =({children}) =>{

    const [currentUser,setCurrentUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const signInWithGoogle =()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
    }

    const logOut =() => signOut(auth)
    const value = {
        currentUser,
        setCurrentUser,
        signInWithGoogle,
        logOut
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false)
        });
        return unSubscribe
    },[])
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth =()=>{
    return useContext(AuthContext)
}