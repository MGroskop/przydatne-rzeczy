function Login()
{
        var Email       = document.getElementById('email').value;
        var Password    = document.getElementById('password').value;
        
        $('#login_error').css("display","none");
        
         if(Email.length < 3)
         {
             $('#login_error').css("display","block");
             document.getElementById('email').focus();
             return false;
         }
         
          if(Password.length < 8)
         {
             $('#login_error').css("display","block");
             document.getElementById('password').focus();
             return false;
         }
         
         
             var dataJSON = {
                       username: Email,
                       password: Password,               
                       driver_name: "pc",
                       driver_os: ""
                     };

                     const myJSON = JSON.stringify(dataJSON);  


                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", "/rest,login");
                        xhr.setRequestHeader("Accept", "application/json");
                        xhr.setRequestHeader("Content-Type", "application/json");

                        xhr.onreadystatechange = function () {
                           if (xhr.readyState === 4) {

                              var response = JSON.parse(xhr.responseText);                              
                    
                              if(response.apiKey.length > 5)
                              {
                                  $('#login_error').css("display","none");
                                  document.location.href = response.url;
                                  
                              }else
                              {
                                  $('#login_error').css("display","block");
                              }

                           }};
   
                        xhr.send(myJSON ); 
         
}
