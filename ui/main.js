console.log('Loaded!');




//Submit code
var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        
        if (request.readState === XMLHttpRequest.DONE ) {
            
            //Take some action
            if (request.status === 200 ){
                alert("Login successful!");
            } else if ( request.status === 403 ) {
                alert("username/password is incorrect!");
            } else if ( request.status === 500 ) {
                alert("something went wrong at server!");
            }
        }
        //Not done yet
    };
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    
    request.open('POST', 'http://sharmapranjul1998.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username, password:password }));
    
};