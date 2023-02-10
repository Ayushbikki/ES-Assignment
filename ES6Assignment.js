const a = [1, 3, 5, 2, 4]
const result1= a.filter((e,ind)=> ind%2===0)
console.log(result1); // [1,5,4]

const result2= a.map((e,ind)=> e*e)
console.log(result2)  //[1,9,25,4,16]

const result3= new Array();
for(let i in a){
    if(i%2===0){
        result3.push(a[i]*a[i])
    }
}
console.log(result3)   // [1,25,16]