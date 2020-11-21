
export const Peticiones =  (url,name) => {
 
   var requestOptions = {
    method:"GET",
    redirect: 'follow'
  };
  
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(result =>localStorage.setItem(name,JSON.stringify(result)))
    .catch(error => console.log('error', error))
  let DataResult = JSON.parse(localStorage.getItem(name))


  return DataResult
  };

