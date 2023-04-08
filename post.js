




function session_check(){
    $.ajax({
        type: "POST",
        async: true,
        url: "/session-check",
        dataType: "text",
        contentType : "application/x-www-form-urlencoded;charset=UTF-8",
        error: function() {
          console.log('session check error');
        },
        success: function(data) {
            console.log(data);
           loadAll();
        }
      });  
}

function loadAll(){
    $.ajax({
        type: "GET",
        async: true,
        url: "/posts",
        dataType: "text",
        contentType : "application/x-www-form-urlencoded;charset=UTF-8",
        error: function() {
          console.log('page load error');
        },
        success: function(data) {
            console.log(data);
        }
      });  
}


window.addEventListener("DOMContentLoaded",session_check);