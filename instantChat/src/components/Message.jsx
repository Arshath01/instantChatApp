import { UserAuth } from "../context/authContext"

export const Message = ({ message }) => {
    const {currentUser} = UserAuth();
    return (
        <>
            <div className={`chat ${message.uid === currentUser.uid} ? chat-end : chat-start`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message.avatar} />
                    </div>
                </div>
                <div className="chat-header">
                    {message.name}
                </div>
                <div className="chat-bubble">{message.text}</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
        </>
    )
}