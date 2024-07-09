let array =[1, 2, 3, 4, 7, 89,97,45]
 
//savoir la longueur de mon array
console.log(array.length);

//ajouter un élément à un tableau
array.push[10]
console.log(array);

//trier un tableau-----------------------------------------------
// array.sort()
// console.log(array);


if (array.find(element => element === 4)) {
console.log("élément trouvé");
}else {
    console.log("élément non trouvé");
}

//récupérer l'index d'un élément dans un tableau---------------------
//  console.log(array.indexOf(4));
 let index = array.indexOf(4);

 //supprimer un élément--------------------------------- 
//  array.splice(index,5);
//  console.log(array);

//boucle pour parcourir chaque élément du 1er au dernier à la place du x ont peut mettre n'importe qu'elle lettre let i 
 //multiplie son propre chiffre en notifiant i/i 
for(let i of array) {
console.log(i * i );
 }

for (let i = 0; i <= array.length; i++) {
    console.log(i);
 }

//  voir index.html correction to list---------------------------------