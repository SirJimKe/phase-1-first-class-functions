function receivesAFunction(callback){
    return callback();
}

receivesAFunction(function (){return 10**2});


function returnsANamedFunction(){
    return function named(){
        console.log('I am a named function.')
    }
}
 
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return function(){
        console.log('I am an anonymous function')
    }
}

returnsAnAnonymousFunction();