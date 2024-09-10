export const validatePassword=(password:string)=> {
    // Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return re.test(password);
  }
  