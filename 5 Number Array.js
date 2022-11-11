//Task #5 : Create a program that will add the missing number in given array 
//and print the numbers with Index of each element. 

var number = [11,14,17,19]; 
v= number[0];

for (i=0 ; i<number.length; i++){
    if (number[i] == v){
        console.log("index: "+i+" Element: "+number[i]);
        v++;
    } else if (v != number[i]){
        number.splice(i,0,v);
        console.log("index: "+i+" Element: "+number[i]);
        v++;
        if (v==20){
            break;
        }
    }
}
