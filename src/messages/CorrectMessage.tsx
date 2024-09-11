import { Bounce, toast } from 'react-toastify';

const CorrectMessage = (message: string) => {
    
  return (
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        })
  )
}

export default CorrectMessage;
