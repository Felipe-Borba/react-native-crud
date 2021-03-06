function handlePromiseError() {
  return (error: any) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.warn(error.response.data);
      console.warn(error.response.status);
      alert(error.response.data.message);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.warn(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.warn("Error", error.message);
    }
    console.warn(error.config);
  };
}

export default {
  handlePromiseError
}