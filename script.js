const OUTPUT = document.getElementById("JavaScriptOutput");

function start (){
    OUTPUT.innerHTML = "<h1>testing</h1>";
}

 function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<h1>Your name is "+userName+"</h1>";
 }