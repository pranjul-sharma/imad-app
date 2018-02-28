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


//Submit code
var nameInput = document.getElementById('name');
var name = nameInput.value;

var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    //make a request to the server and send a name
    //capture a list of name and render it as a list
    
    var names = ['name1', 'name2', 'name3','name4'];
    var list = '';
    for ( var i = 0; i< names.length; i++ ) {
        list += '<li>' + names[i] + '</li>';
    }
    
    var ul = document.getElementById('name_list');
    ul.innerHTML = list;
};