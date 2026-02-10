let inputSection=document.getElementById("inputSection");
const inputValue = document.getElementById("inputText");
const sendBtn = document.getElementById("send-btn");
let messageElement = document.getElementById("clickedDisplay");

let display = document.createElement('h2');
//When the input field is changed and loses focus the event is triggered and change the text of h2
//Or I can use onchange attribute in html input tag
//<input type="text" id="inputText" placeholder="Type Something..." onchange="myFunction()"/>
/*function myFunction(){
    document.getElementById("mouseOutDisplay").innerHTML = "You entered: " + inputValue.value;
}*/
inputValue.addEventListener('mouseout', function (event) {
    display.textContent = event.target.value;
    inputSection.appendChild(display);
});

let isSubmitted=false;
//When the button is clicked the event is triggered and change the text of h2
sendBtn.addEventListener('click', ()=>{
    if(!isSubmitted){
        isSubmitted=true;
        let child = messageElement.firstChild;
        messageElement.removeChild(child);
    }
    let value = inputValue.value;
    let textNode = document.createTextNode(value);
    messageElement.appendChild(textNode);
    let brElement = document.createElement("br");
    messageElement.appendChild(brElement);
});
messageElement.addEventListener('mouseover', ()=>{
    if(isSubmitted){
        this.style.background="green";
    }else{
        this.style.background="red";
    }
        
});
messageElement.addEventListener('mouseout', ()=>{
    this.style.background="white";
});
    /*This will not change the current text of h2 just add it
    .addEventListener('', ()=>{
    let content = document.createTextNode(inputValue.value);
    display.appendChild(content);
    inputSection.appendChild(display);
    */ 

