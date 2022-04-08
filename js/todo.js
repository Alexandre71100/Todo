/**
 * TODO LIST
 */

/**
 * Notes :
 * ---
 * Un élément ajouté à la liste devra systématiquement posséder ce code HTML :
 * <li class="list-group-item d-flex justify-content-between">
 *     An item
 *     <a href="#" id="deleteItem">
 *         <img src="imgs/trash.svg" alt="Delete item" class="icon-delete">
 *     </a>
 * </li>
 */


// Contiendra les éléments de notre liste à cocher
let todos = [];

/**
 * Récupération de la valeur Input
 */
const form = document.querySelector("form")
form.addEventListener('submit', (event) => {
    // Annule rechargement de page provoqué par le formulaire
    event.preventDefault();

    // Récupère le champs texte
    const msg = document.querySelector("#element");
    //console.log(msg);
    // Ajoute la valeur en fin de tableau
    todos.push(msg.value);
    
    // Vide le champs texte
    msg.value = "";

    console.log(todos);
    
    viewTodo(todos);


});

/**1
 * Etape #2
 * 1. Créer un fichier "fonctions.js"
 * 2. Créer une fonction permettant d'afficher les éléments du 
 *    tableau dans la "ul" du fichier HTML en respectant le code
 *    HTML fourni plus haut
 */

/**
 * Etape #3
 * Appeler la fonction précédente dans l'évènement du formulaire
 * après avoir ajouté la valeur du champs dans le tableau "todos"
 */

/**
 * Supprimer un élément de la liste
 * 
 * 1. Ecouter les images représentant la croix
 * 2. 
 * 2.1 Remonter d'un noeud dans le DOM et supprimer l'élément 
 */

