let Users =JSON.parse(localStorage.getItem("Users")) || [{
    username:"varsha",
    password:"varsha15"
},
{
    username:"sha",
    password:"sha15"
}
];
function saveUsers() {
  localStorage.setItem("Users", JSON.stringify(Users));
}


let loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
  alert("Welcome back, " + loggedInUser + "!");
  
}




let login = document.getElementById("loginform");
if(login){
login.addEventListener("submit",function(event){
    event.preventDefault();
    let formdata = new FormData(event.target);
    let userData=Object.fromEntries(formdata.entries());
    // console.log(userData.username);
 // Check if user exists
    let foundUser = Users.find(
      user => user.username === userData.username && user.password === userData.password
    );

    if (foundUser) {
      alert("Welcome, " + userData.username + "!");

      localStorage.setItem("loggedInUser", userData.username);


      window.location.replace("home.html");
    } else {
      alert("User not found! Please register first.");
      window.location.replace("rpage.html");
    }
  });
}
let register = document.getElementById("Registerform");
if (register) {
  register.addEventListener("submit", function(event) {
    event.preventDefault();

    let formdata = new FormData(event.target);
    let newUser = Object.fromEntries(formdata.entries());

    // Check if username already exists
    let existingUser = Users.find(user => user.username === newUser.username);

    if (existingUser) {
      alert("Username already exists. Please login instead.");
      window.location.replace("loginpage.html");
    } else {
      Users.push(newUser);
      saveUsers();

      

      alert("Registration successful! Welcome, " + newUser.username + "!");
      window.location.replace("home.html");
    }
  });
}