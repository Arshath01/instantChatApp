import { collection,addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react"
import { UserAuth } from "../context/authContext";
import { db } from "../firebase";

export const SendMessage = () => {
    const [value, setValue] = useState('');
    const { currentUser } = UserAuth();
    const handleSendMessage = async (event) => {
        event.preventDefault();
        if(value.trim()===''){
            alert('Enter Valid Message...!')
        }
        try {
            const {uid,displayName,photoURL} = currentUser;
            await addDoc(collection(db,"messages"),{
                text:value,
                name:displayName,
                avatar:photoURL,
                createdAt :serverTimestamp(),
                uid
            })
        }
        catch (error) {
            console.log(error)
        }
        console.log(value);
        setValue("")
    }
    return (
        <>
            <div className="fixed bottom-0 bg-base-200 w-full py-10 shadow-lg px-5">
                <form className="containerWrap flex" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        placeholder="Type Message"
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        className="input input-bordered rounded-r-none focus:outline-none w-full"
                    />
                    <button
                        className="btn btn-neutral  rounded-l-none rounded-r-lg text-sm w-auto">
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}