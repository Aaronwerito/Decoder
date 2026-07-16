function encodeText(){
    let textField = document.getElementById("text-field");
    textField.textContent = btoa(textField.textContent)
}

function decodeText(){
    let textField = document.getElementById("text-field");
    textField.textContent = atob(textField.textContent)
}