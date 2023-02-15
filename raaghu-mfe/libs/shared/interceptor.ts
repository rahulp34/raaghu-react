// // Define your interceptor function
// const addHeadersInterceptor = (url : any, options :any) => {
//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer <your_token_here>',
//     };
//     // Add headers to options object
//     return { ...options, headers };
//   };
//   // Create a fetch function that applies the interceptor
//   const myFetch = (url :any, options :any) => {
//     const modifiedOptions = addHeadersInterceptor(url, options);
//     return fetch(url, modifiedOptions).then((response) => response.json());
//   };
//   // Use myFetch instead of the normal fetch function in your API calls

//   myFetch('https://api.example.com/data')
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));




