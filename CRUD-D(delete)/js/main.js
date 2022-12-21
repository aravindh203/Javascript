                            /*D-delete*/
let b=["a","b","c","d","e"];
console.log(b);
let del=parseInt(prompt("delete index"));
for(i=del;i<b.length;i++){
   b[i]=b[i+1];
}
b.length-=1;
console.log(b);