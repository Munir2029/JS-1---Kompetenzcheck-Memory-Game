// let text = "ich bin munir";

// console.log(isIsogram(text));
// console.log(isIsogram(text));



// let x=0
// let temp =text[X]
// text [X]includes.allbuchstaben

// slice (temp,1)

// function isIsogram(text) {

//     let x = alleBuchstaben.length - 1;
//     let result = false;
//     text = text.toLowerCase();
//     let index = length - 1;

//     while (x >= 0 && alleBuchstaben.includes(text[index]) && index >= 0) {
//         console.log(x+"und"+index)
//         let mussLöschen = alleBuchstaben.indexOf(text[index])
//         alleBuchstaben.slice(mussLöschen, 1);
//         x--;
//         index--;

//     }
//     if (x < 0) {
//         result = true;
//     }
//     return result;
// }

// let f=["a","b","b","c"]
// console.log(f)
// console.log(f.indexOf("b"))

// console.log(f.indexOf("4"))

// // f.shift();
// f.pop()
// console.log(f)


// let alleBuchstaben = [
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
// ];

// console.log(alleBuchstaben[2])
// alleBuchstaben.pop("c");
// console.log(alleBuchstaben);




// let temp=text.substring(0,1)
// console.log(temp);
//  text=text.slice(1)

// console.log(text.includes(temp))

// console.log(text)
// console.log(text.indexOf("i"))

// console.log(text)



let text = "bcdfgua";    //b
console.log(isIsogram(text))
console.log(isIsogram("ambidExtRously")); // true 
console.log(isIsogram("patteRN")); //false  


function isIsogram(text) {

    let derBuchstabenIstMehrAlsEinMalVorgekomen = true;
    let index = 0;
    while (derBuchstabenIstMehrAlsEinMalVorgekomen && index < text.length) {


        let temp = text[index];
        // console.log("temp " + temp);

        // console.log("gescnittene text " + text)


        if (text.indexOf(temp, index + 1) !== -1) {
            derBuchstabenIstMehrAlsEinMalVorgekomen = false;
        } else {
            index++;
            derBuchstabenIstMehrAlsEinMalVorgekomen = true;
        }


    }
    return derBuchstabenIstMehrAlsEinMalVorgekomen;

}
