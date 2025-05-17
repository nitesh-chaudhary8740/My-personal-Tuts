function deleteURL(shortURL) {
    console.log("its working")
  fetch(`url/delete/${shortURL}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => { location.reload(); 
    console.log('data',data)})
  .catch(error => console.log(error))
}