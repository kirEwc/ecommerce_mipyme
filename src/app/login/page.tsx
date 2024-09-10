"use client";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Email, Password, User, WeuiEyesOffOutlined, WeuiEyesOnOutlined } from "@/icons/Icons";
import { validateEmail } from "@/auth/validateEmail";
import { validatePassword } from "@/auth/validatePassword";


const Login = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [valueForm, setValueForm] = useState({
    email: '',
    password: '',
  });

  const [validationState, setValidationState] = useState({
    email: null,
    password: null,
  });


  const { email, password } = valueForm;



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValueForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
     
  };



  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    if (!validateEmail(email)) {
      console.log('email inválido!');
      return;
    }

    if (!validatePassword(password)) {
      console.log('contraseña inválida!');
      return;
    }

    console.log(email + password)

  };




  return (
    <>
      <div className="h-screen w-screen">
        <div className="flex justify-center items-center h-full ">
          <div className="border border-t-small border-solid w-80 h-80 rounded-2xl bg-gradient-to-br from-pink-400  to-purple-700 ">
            <div className="flex justify-center mb-4 mt-4">
              <User className="text-5xl text-white opacity-90" />
            </div>

            <form onSubmit={handleLogin}>
              <div className="flex items-center justify-center flex-grow flex-col">
                <div className="mb-4">
                  <Input
                    type="email"
                    name="email"                        
                    onChange={handleInputChange}                    
                    placeholder="you@example.com"
                    labelPlacement="outside"
                    startContent={
                      <Email className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                  />
                </div>

                <div className="w-2/3">
                  <Input
                    placeholder="password"
                    name="password"                    
                    onChange={handleInputChange}
                    endContent={
                      <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                        {isVisible ? (
                          <WeuiEyesOffOutlined className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          < WeuiEyesOnOutlined className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs"

                    startContent={
                      <Password className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                  />
                </div>

                <div className="mt-4">
                  <Button
                    type="submit"
                    radius="full"
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-52"
                  >
                    Iniciar seccion
                  </Button>
                </div>

              </div>
            </form>




          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
