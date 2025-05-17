const userSessionIdMap = new Map();
//each time when server will be restarted this map will be empty even cookies are still saved in browser but there will be no key pair value for that uid 
function setUserSessionId(id,user){
    userSessionIdMap.set(id,user);
}
function getUserBySessionId(id){
  return  userSessionIdMap.get(id)
}
export {setUserSessionId,getUserBySessionId}