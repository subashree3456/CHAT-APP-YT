import React from 'react'

const message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                <img src="https://img.freepik.com/free-vector/lord-ganpati-ganesh-chaturthi-beautiful-green-leaf-holiday-card-background_1035-24526.jpg?size=626&ext=jpg"
                            alt='Tailwind CSS chat bubble component' />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi! what is upp?</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
            </div>
            )
}

            export default message