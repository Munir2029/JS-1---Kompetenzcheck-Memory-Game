
let text = "abcdefghijklmnopqrstuvwxyz";



function isPangram(text){
  let alleBuchstaben = "abcdefghijklmnopqrstuvwxyz"
  let x = alleBuchstaben.length - 1;
  let result = false;
  text = text.toLowerCase();
  while(x>=0 && text.includes(alleBuchstaben[x])){
    x--;
  }
  if(x<0){
    result = true;
  }
  return result;
}
console.log(isPangram(text));
console.log(isPangram("The quick Brown fox jumps over the lazy DOG")); // true   
console.log(isPangram("The quick fox jUMps over the dog")); //false    



//   ABCDEFGHIJKLMNOPQRSTUVWXYZ

// function isPangram(text) {

// let derBuchstabeSchonDa = true;
//   for(let i=0;i<alleBuchstaben.length;i++){
//     if(text.inclides(alleBuchstaben[i])){
//         return derBuchstabeSchonDa;
//     }
//     return !derBuchstabeSchonDa;

//   }
// }

// console.log(isPangram(text));







 // for (let x = 0; x < text.length - 1; x++) {
    // if( alleBuchstaben[i]===text[x])  
    //      console.log("§§§")
    // }



    //   x++;
    
    //         if (text[x] === undefined&&text.length-1>x) {
    //             derBuchstabeSchonDa = false;
    //             console.log(derBuchstabeSchonDa)

    //         }else{console.log(derBuchstabeSchonDa)}

    // console.log(alleBuchstaben[i]);
    //     let x = 0;
        
    //     while (alleBuchstaben[i] !== text[x] && text.length-1 >= x) {
    //      console.log("text "+text[x]);

    //      for(x=0;x<text.length-1&&derBuchstabeSchonDa;x++){
    //     if(text[i]===alleBuchstaben[x]){
    //         !derBuchstabeSchonDa     
    //      }
             
    //     }
    // }










    
//   let alleBuchstaben = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z  a b c d e f g h i j k l m n o p q r s t u v w x y"

// console.log(text.indexOf("m"));