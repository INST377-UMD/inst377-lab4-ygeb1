var swapped = false

function alertMe(){
    alert("Hello " + document.getElementById("name").value + "!")
    return false
}
function addText(){
    document.getElementById("addtext").innerHTML += "Add Text ";
}

function validateText(){
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(document.getElementById("validater").value.trim() == ""){
        alert("put something in the box");
    } else if (validation.test(document.getElementById("validater").value)) {
        console.log("Validating: " + document.getElementById("validater").value)
        alert('How about..... nah :(')

    } else{
        alert("all good 2me")
    }
    return false
}

function swapColor(){
    if(!swapped){
        swapped = true
        document.body.style.backgroundColor = 'lightgrey'
    } else{
        swapped = false
        document.body.style.backgroundColor = 'aqua'
    }

}

