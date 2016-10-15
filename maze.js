window.onload = function main(){

  var bound = document.querySelectorAll(".boundary");
  var maze = document.getElementById("maze");
  var status = false;

  document.getElementById('start').onclick=function(){
    status=true;
    document.getElementById('status').innerHTML = "Move your mouse over the S to Begin."
  }

  document.getElementById('start').onmouseover=function(){
    if (status == false) {
      status = true;
    			for (var h=0;h< bound.length;h++){
    				bound[h].setAttribute("class","boundary");
    			}
      document.getElementById('status').innerHTML = "Move your mouse over the E to Win."
      console.log(status);
    }
    else {
      status = false;
      console.log(status);
    }
  }

  document.getElementById('end').onmouseover=function(){
    if (status == true) {
      document.getElementById('status').innerHTML = "Congratulations click the S to start again";
      status = null;
    }
  }

  document.body.onmousemove=function(num) {
      var x = num.clientX;
      var y = num.clientY;
      var leftwall=maze.offsetLeft;
      if (status==true) {
        if (x<=leftwall) {
          for (var h=0;h< bound.length;h++){
    				bound[h].setAttribute("class","youlose boundary");
            document.getElementById('status').innerHTML = "No cheating start again";
            status =false;
    			}
        }
      }
  }

  for(var i=0;i< bound.length;i++){
  	bound[i].onmouseover=function(){
  		if(status){
  			for (var h=0;h< bound.length;h++){
  				bound[h].setAttribute("class","youlose boundary");
          document.getElementById('status').innerHTML = "Oops a Touched a Boundary start again";
          status =false;
  			}
  		}
  	}
  }

}
