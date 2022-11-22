// Task-1

// function Group(){
//     var name = document.getElementById("input").value;
//     if (name.length>=4){
//         var checkname = name.slice(-3,-2);
//         if (checkname == 1){
//             alert(`Salam ${name}`);
//             document.body.style.backgroundColor = `red`;
//         }
//         else if(checkname == 2){
//             alert(`Salam ${name}`);
//             document.body.style.backgroundColor = `blue`;
//         }
//         else if(checkname == 3){
//             alert(`Salam ${name}`);
//             document.body.style.backgroundColor = `pink`;
//         }
//         else{
//             alert(`Qrup adi sehvdir`)
//         }
//     }
//     else{
//         alert(`Duz qrupu daxil edin`)
//     }
// }




// Task-2

// function myFunction() {
//     let text;
//     let Years = prompt("Neçə yaşın var?");
//     if(Years>=0 && Years<=17){
//         text = "AGILLI OL !!!";
//     }
//     else if(Years>=18 && Years<=60 ){
//         text = "Qəşşşşəy Qaqaşım";
//     }
//     else{
//         text = "Pensiya vaxtundu Çix saytdan!!!";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }


// Task-3

// function demo(){
//     let content;
//     if (confirm("Clic a button") === true){
//         content = "Welcome";
//         document.body.style.backgroundColor = "red";
//     }
//     else{
//         content = "Fail attempt"
//         document.body.style.backgroundColor = "orange";
//     }
//     document.getElementById("verify").innerHTML = content;
// }