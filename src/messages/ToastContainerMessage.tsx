import React from 'react'
import { Bounce, ToastContainer } from 'react-toastify'
const ToastContainerMessage = () => {
  return (
    <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}  
                limit={2}      
                />
  )
}
export default ToastContainerMessage;
