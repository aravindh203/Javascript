// sum of N Natural Numbers

let n=parseInt(prompt("n numbers"))
let a=0;
for(i=1;i<=n;i++){
    a=a+i;
}
document.write(a+"<br>");

// Display a sequence of even numbers

let sequence=parseInt(prompt("sequence number"));
for(i=1;i<=sequence;i++){
    if(i%2==0){
        document.write(i+"<br>")
    }
}


// Display the text 10 times

let text=prompt("enter the text")
for(i=1;i<=10;i++){
    document.write(text+"<br>")
}


//sum of positive numbers only

let length=parseInt(prompt("total numbers"));
let c=0;
for(i=1;i<=length;i++){
    b=parseInt(prompt("enter the number"));
    document.write(b+", ")
    if(b>0){
        c=c+b;
    }
}
document.write("<br>"+c)
