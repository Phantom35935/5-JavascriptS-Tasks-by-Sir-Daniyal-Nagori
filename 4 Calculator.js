n1 = parseInt(prompt("Enter first number"));
o = prompt("Enter Math Operators (+,-,*,/)");
n2 = parseInt(prompt("Enter second number"))

if(o == "+"){
    answer = n1 + n2;
} else if (o == "-"){
    answer = n1 - n2;
} else if (o == "*"){
    answer = n1 * n2;
} else if (o == "/"){
    answer = n1 / n2;
}

console.log(n1+" "+o+" "+n2+" = "+answer);