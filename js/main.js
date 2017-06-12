function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}

function displayVal(val) {
    document.getElementById("display").value+=val;
}

function clearVal(val) {
    document.getElementById("display").value=val;
}

function calcVal() {
    clearVal(eval(document.getElementById("display").value))
}