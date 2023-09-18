let username = prompt("whats your username", "")
if (username === "Admin"){ 
  let password = prompt("whats your password", "")
  if (password === "Admin") {
  alert("Welcome!")
 }else if (password === "" || password === null){
  alert("Cancelled!")
 }else{
  alert("wrong password")
 } 
 }else if (username === "" || username === null) {
  alert("cancelled")
 }else {
  alert("wrong password")
}

