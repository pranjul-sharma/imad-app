console.log('Loaded!');

//Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
    //Create a request.
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable.
    request.onreadystatechange = function(){
      
      if ( request.readyState === XMLHttpRequest.DONE ) {
          if ( request.status == 200 ) {
              var counter = request.responseText ;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }  
    };
    
    //make a request.
    request.open('GET','http://sharmapranjul1998.imad.hasura-app.io/counter',true);
    request.send(null);
};
