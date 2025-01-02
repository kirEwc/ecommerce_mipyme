import { Bounce, toast } from "react-toastify"

const ErrorMessage = (message: string) => {
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
export default ErrorMessage;