import http from './axios';
// const headers = () => {
//     return {
//       authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
//     };
//   };
export const loginRequest = ({ email, password }) => {
    console.log("in login Request")
    return http({
      method: "POST",
      url: '/login',
      data: {
        email,
        password,
      },
    });
  };

  export const registerRequest = ({ name,email, password,confirmPassword,address,phoneNumber }) => {
    console.log("in register Request")
    return http({
      method: "POST",
      url: '/register',
      data: {
        name,
        email,
        password,
        confirmPassword,
        address,
        phoneNumber 
      },
    });
  };


  export const imageDataRequest = (formData) => {
    console.log("in register Request")
    return http({
      method: "POST",
      url: '/multiImage',
      data:formData,
      headers: { "Content-Type": "multipart/form-data" }
    });
  };