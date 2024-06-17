
  document.getElementById("second-password").addEventListener("keyup", function() {
  let firstPassword = document.getElementById("first-password").value;
  let secondPassword = document.getElementById("second-password").value;
    if (firstPassword !== secondPassword) {
      document.getElementById("error-message").innerText =
        "كلمة المرور غير متطابقة";  
    }
    else{
      document.getElementById("error-message").innerText =""
    }
  });
document.getElementById("form").addEventListener("submit", function (event) {
  let firstPassword = document.getElementById("first-password").value;
  let secondPassword = document.getElementById("second-password").value;

  if (firstPassword !== secondPassword) {
   
    event.preventDefault();   
  }
});
