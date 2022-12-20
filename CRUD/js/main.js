                        /*
                          C-creat
                          R-read
                                */                        
let array=[];
let length=parseInt(prompt("length of array"));
for(i=0;i<length;i++){
    array[i]=parseInt(prompt("enter the value"))
}
console.log(array)

                            /*U-update*/
let a=[1,2,3,4,5];
console.log(a);
let replace=parseInt(prompt("replace index"));
a[replace]=parseInt(prompt("replace value"));
console.log(a);

                            /*D-delete*/
let b=["a","b","c","d","e"]
console.log(b);
let del=parseInt(prompt("delete index"))
delete b[del];
console.log(b);