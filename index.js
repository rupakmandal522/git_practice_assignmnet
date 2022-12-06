// let str = "Rupak";
// let bag= "";
// for(let i=str.length-1; i>=0; i--){
//     bag=bag+str[i]
// }
// if(bag===str){
//     console.log(console.log("true"))
// }
// else{
//   console.log("false");
// }

let num = 13; 
let count = 0
for(let i=0; i<=num; i++){
  if(num%i==0){
    count++
  }
}
if(count<=1){
  console.log("true")
}
else{
  console.log("false");
}