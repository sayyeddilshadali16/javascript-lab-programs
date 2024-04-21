function validateEmail(email_id){
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regex_pattern.test(email_id)){
        console.log("This email is valid");
    }
    else{
        console.log("This email is not valid");
    }
}
validateEmail('abc123@gmail.com');
validateEmail('hello@com');