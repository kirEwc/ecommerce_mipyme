import { Bounce, toast } from "react-toastify"

const errorMessage = (message: string) => {
  return (
    toast.error(message, {
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
export default errorMessage;
