function login(){
    const username = document.getElementById("form2Example18").value.toLowerCase().trim();
    
    const password = document.getElementById("form2Example28").value;
    
    
      
    if(username==""){
        alert("No username entered");
    }else if(password==""){
        alert("No password entered");
    }else{
        sendLoginDetails(username, password);
    }
}

function sendLoginDetails(username, password){
    const xmlhttp = new XMLHttpRequest();
  const url = "login.php?username="+username+"&password="+password;
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if(this.responseText.trim()!=""){
          
          let response = this.responseText;
          alert(response);
    
        }
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}