import CryptoJS from 'crypto-js';

const secretKey = 'eclpseCE46D985F2DB819C6AC3DC5B73CAFFE8109DB1FF392C90295EE9976C9B48DACF';

// Función para cifrar los datos
export const encryptData = (data: object | string | number | boolean) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

// Función para descifrar los datos
export const decryptData = (encryptedData: string) => {
  try {
    if (!encryptedData) {
      return null;
    }
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    
    if (!decryptedData) {
      return null;
    }
    
    return JSON.parse(decryptedData);
  } catch (error) {
    console.error('Error al descifrar los datos:', error);
    return null;
  }
};
