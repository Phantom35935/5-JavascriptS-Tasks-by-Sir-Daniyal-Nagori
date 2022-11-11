// Make Quiz app (MCQs Based)

var q1 = prompt("Q1) What language People speak in China?\n\nA) English\nB) Chinese\nC) French\nD) German"); // B) Chinese
var q2 = prompt("Q2) What language people Speak in UK?\n\nA) English\nB) Chinese\nC) French\nD) German"); // A) English
var q3 = prompt("Q3) Where Paris is located?\n\nA) Landon \nB) Russia \nC) France \nD) China"); // c) France
var q4 = prompt("Q4) Which Language Peaople speak in Maxico\n\nA) Spanish \nB) Maxican \nC) French \nD) Portugese"); // A) Spanish

var score = 0

if(q1 === null ){
  
    console.log("Q1 is Canceled")
}else{q1 = q1.toLowerCase();
    if (q1 == "b"){           //Q1
        console.log("Q1 Correct");
        score = score +25;
    } else if (q1 != "b"){
        console.log("Q1 Wrong");
    
    } 
} 


if(q2 === null){
    console.log('Q2 is Canceled');

}else{q2 = q2.toLowerCase(); 
    if (q2 == "a"){                //Q2
        console.log("Q2 Correct");
        score = score +25;


    } else if (q2 != "a"){
        console.log("Q2 Wrong");
    
    } 
} 

if(q3 === null){
    console.log('Q3 is Canceled');

}else{q3 = q3.toLowerCase(); 
    if (q3 == "c"){                //Q3
        console.log("Q3 Correct")
        score = score +25;

    } else if (q3 != "c"){
        console.log("Q3 Wrong")
    
    } 
} 

if(q4 === null){
     console.log("Q4 is Canceled")
}else{q4 = q4.toLowerCase();

    if (q4 == "a"){                //Q4
        console.log("Q4 Correct")
        score = score +25;

    } else if (q4 != "a"){
        console.log("Q4 Wrong")
    }
} 


if(q1 === null || q2 == null || q3 === null || q4 === null){
    console.log( "\n You have to Answer all the question.");
    alert(" You have to answer all the question")
}else {inputCheck()}

 
function inputCheck() {
if(q1 != "a" 
&& q1 != "b" 
&& q1 != "c" 
&& q1 != "d"){
    alert('Please only write "A","B","C" and "D"');
    console.log('Please only write "A","B","C" and "D"');
}
}

console.log("\nMarks: "+score);
alert("Marks: \n"+score);

