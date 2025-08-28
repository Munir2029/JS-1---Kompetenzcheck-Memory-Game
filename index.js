document.getElementById("startGame").onclick = function () {


    let cardsDieUserAusgewähltHat = prompt("How many Cards")
    let yourName = prompt("Whats your Name");
    /*prmprt هي الشاشة يلي بتنزل من فوق */



    /*if stetment wenn der user ein name schreibt oder nicht*/
    if (yourName == null || yourName == "") {
        document.getElementById("name").textContent = "Unknown";
    } else {
        document.getElementById("name").textContent = yourName;
    }

    document.querySelector(".control-buttons").remove();
};

/* wie lange dauert das dreung von ein karte */
let duration = 1000;       /*1000 milisekunede =1 sekunde*/

//to do 
// function ersteleNewCard(cardsDieUserAusgewähltHat) {
//     while(cardsDieUserAusgewähltHat%2===0&&cardsDieUserAusgewähltHat>=0);
//     for(let x=0;x<cardsDieUserAusgewähltHat;x++){
//     let memoryGameBloks=document.getElementsByClassName(".memory-game-bloks")[x];
//     let div =document.createElement("div")
//     }

// }



// let div = document.createElement("")
// div.classList.add("card")
// div.textContent = "nice try"
// blocksContainer.appendChild(div)






/*تحديد البلوك الكامل الموجد فيه العناصر وحفظه في متغير */
let blocksContainer = document.querySelector(".memory-game-bloks");
/*  وضع كل الابناء في مصفوفة*/











/*Arry.from   تعني انه تستخرج العناصر من العنصر التي تعطيه اياه ويعمل منه مصفوفة*/
let blocks = Array.from(blocksContainer.children);


/*ich muss es noch lernen bsi jz habe nicht ganz verstanden*/
/*الثلاث نقاط تعني تفكيك او نش*/

/*keys=index valeu*/
let orderRange = [...Array(blocks.length).keys()];

console.log(orderRange);

shuffle(orderRange);           //micht die Arry wieder

console.log(orderRange);

/*oder 
let orderRange=Array.from(Array(blocks.length).keys)*/

blocks.forEach((block, index) => {


    block.style.order = orderRange[index];


    //Add click Event

    block.addEventListener('click', function () {   //  هنا تضيف كلاسة جديدة ل بلوك عند الضغط عليه
        //function كلاسة فليب بلوك هو        
        flipBlock(block);// هنا تطبق الفليب بلوك على البلوك





    });


});

// check Matched Block Function

function chckMatchedBlicks(firstBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span');
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');

        }, duration)
    }

}

function shuffle(array) {
    let current = array.length;
    let temp;
    let random;

    while (current > 0) {
        random = Math.floor(Math.random() * current);
        /*floor tut die zhal abrunden oder aufrunden*/
        current--;
        //         1
        //اول خطوة خبي العنصر
        //Save current Element in stash

        temp = array[current]

        //             2
        //current Element=Random Element

        array[current] = array[random];
        //        3
        //random Element= temp;
        array[random] = temp;


    }
    return array;

}



function flipBlock(selectedBlock) {

    /*على العنصر اللذي اضغط عليه is-flipped اضافة كلاس اسمو */
    selectedBlock.classList.add('is-flipped');

    /*في الاعل forEach  اضافة ميزة الضغط على الزر في*/


    //lFlippedBlocks=is-flipped مصفوفة جديدة لحفظ جميع الكروت التي تحتوي على الكلاسة 

    //was ist (flippedBlock)??????

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if (allFlippedBlocks.length == 2) {
        //عند فتح عنصرين يجب ان نوقفه ولانسمح له ان يفتح عنصر اخر
        //         Stop Clicking Function
        stopClicking();

        //check Matched Block Function

        chckMatchedBlicks(allFlippedBlocks[0], allFlippedBlocks[1]);


    }

}


// Stop Clicking Function

function stopClicking() {

    //Add Class No Main Container
    blocksContainer.classList.add('no-clicking');

    /* .memory-game-bloks يلي هي  blocksContainer مع  cssاضفنا هذه الكلاسة  على في     */

    setTimeout(() => {

        //Remove Class No clicking After The Duration
        blocksContainer.classList.remove('no-clicking');


    }, duration)




}






