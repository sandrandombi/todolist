//faire un bouton
// function cliquerBoutton() {
//     alert('Button clicked')
// }

// // 
// const btn = document.getElementById('btn')
// // btn.onclick = function() {
// //     console.log('le bouton cliquer encore a été cliqué');
// // }
// document.getElementById('btn').onclick = cliquerBoutton



// //-------------------------------- 2 EME METHODE
// document.getElementById("paragraphe").addEventListener('click', function () {
//     document.getElementById("paragraphe").textContent = "paragraphe";
//     document.getElementById("paragraphe").style.color = "red";
// });

// // -------------------------3 eme METHODE RECOMMANDE
// document.getElementById("paragraphe").addEventListener("click", paragrapheStyle)

// function paragrapheStyle() {
//     document.getElementById("paragraphe").textContent = "paragraphe";
//     document.getElementById("paragraphe").style.color = "red";
// }

// ---------------------------------------------------------------------

let task = document.getElementById("task")
// console.log(task);
//2eme méthode pour ajouter # avec queryselector--------------------------------
let add = document.querySelector("#add")
let liste = document.getElementById("Liste")


//bouton avec click------------------ 
add.addEventListener("click", ajouterTache)

let array = JSON.parse (localStorage.getItem("data")) || []

  
    // console.log(task.value , );


function displayText(){
    liste.innerHTML=""
    for(let item of array){
        let li = document.createElement("li")
        li.textContent = item
        let btn = document.createElement("button")
        btn.textContent = "Supprimer"
        li.appendChild(btn)
        liste.appendChild(li)
        btn.addEventListener("click", function (){
            let indice = array.indexOf(item)
            console.log(indice);
            array.splice(indice,1)
            localStorage.setItem("data",JSON.stringify(array))
            displayText
        })     

    }
    
   
//    array.push(task.value)
//    task.value =""
   //pour que le curseur----------------------
//    task.focus()
   //JSON pour transformer en chaine de caractere-------------------
//    localStorage.setItem("data",JSON.stringify(array))
}

function ajouterTache(){
    if( array.find(el => el === task.value==="")){
        alert("La valeur de ${task.value} existe déjà ou la tâche est vide")
        task.focus()
    }else{
        array.push(task.value)
        localStorage.setItem("data",JSON.stringify(array))
        task.value =""
        task.focus()
        displayText()


    }
}




displayText()
add.addEventListener("click",ajouterTache)
