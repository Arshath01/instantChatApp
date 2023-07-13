import { collection, query, limit, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import { Message } from "./Message"
import { useState } from "react";
export const ChatBox = () => {
    const [messages,setMessages] = useState([])
   
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy('createdAt'),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                // messages.push(doc.data().name);
                messages.push( {...doc.data(),id :doc.id})
                
            });
            setMessages(messages)
            console.log(messages)
        });

        return () => unsubscribe;
    }, [])
    return (
        <>
            <div className="pb-44 pt-20 messageContainerWrap">
                {messages.map(message => <Message key={message.id} message={message} />)}
            </div>
        </>
    )
}