var n =5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        row += "* ";
    }
    console.log(row);
}


var n=5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

var n = 5;

for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}



var n = 5;
var num = 1;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num++;
    }
    console.log(row);
}



var n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }

    console.log(row);
}
