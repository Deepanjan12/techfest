function nmr(val) {
    document.getElementById('userinput').value += val;
}

function eqn() {

    var value1 = document.getElementById("userinput").value;
    var res;
    try {
        // Code to run
        res = eval(value1);

    } catch (e) {
        // Code to run if an exception occurs
        res = "Invalid Expression";
        document.getElementById('res').style.color = "red";
    }
    document.getElementById('res').value = res;
}

function clrall() {
    document.getElementById('userinput').value = "";
    document.getElementById('res').value = "";
}

function back() {
    var value = document.getElementById("userinput").value;
    document.getElementById("userinput").value = value.substr(0, value.length - 1);
}