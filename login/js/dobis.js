window.onload=init;
function init(){
  loadlookup();
}
function loadlookup(){
  // getgendertype();
  // getregionsoforigin();
  // getmaritalstatus();
  // getstaffstatus();
  // getclassmaster();
  // viewStudents();
  // viewstaffs();
  // getacademic();
  // getMedicalstatus();
getRole();
}

//loginUser();
function loginUser(){

  var p_username = document.getElementById('username').value;
  var p_password = document.getElementById('password').value;

   var url ="ws/webservice.php" ;
   var fd = new FormData();

    fd.append('op', 'loginUser');
    fd.append('username', p_username);
    fd.append('password', p_password);
  
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
   {
      var response;
      try {
      
        response = JSON.parse(xmlhttp.responseText);
      }catch(e) {
        console.error(this.responseText);
        var responseText = this.responseText;
        alert ('Username/Password incorrect');
        
      }
      if (response) {
        console.log(response);
        function getRole(p_username) {
  var url ="ws/webservice.php" ; 
    var param6 = "op=getRole&ssid="+ p_username;
//console.log(param6);
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
   {
      var response;
      try {
      
        response = JSON.parse(xmlhttp.responseText);
      }catch(e) {
        console.error(this.responseText);
      }
      if (response) {
        console.log(response);

window.location.href ='Novus/home.php';
      }
    }

 };

 xmlhttp.open('POST', url, true);
 xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xmlhttp.send(param6);
}
      }
    }

 };

 xmlhttp.open('POST', url, true);
 xmlhttp.send(fd);
}

function logoutUser(p_userName){

   var url ="ws/webservice.php" ;
   var fd = new FormData();

    fd.append('op', 'logoutUser');
    fd.append('l_id', p_userName);

 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
   {
      var response;
      try {
      
        response = JSON.parse(xmlhttp.responseText);
      }catch(e) {
        console.error(this.responseText);
        var responseText = this.responseText;
        alert ('couldnt logout user');
        
      }
      if (response) {
        console.log(response);
         // alert('logout');
          window.location.href ='index.php';
      }
    }

 };

 xmlhttp.open('POST', url, true);
 xmlhttp.send(fd);
}

