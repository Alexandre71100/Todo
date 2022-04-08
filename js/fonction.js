/**
 * Fonctions JS
 */

 /**
  * Permet d'afficher les éléments dans notre liste
  * Un élément ajouté à la liste devra systématiquement posséder ce code HTML :
  *<li class="list-group-item d-flex justify-content-between">
  *       An item
  *   <a href="#" id="deleteItem">
  *     <img src="imgs/trash.svg" alt="Delete item" class="icon-delete">
  *   </a>
  *</li>
  */
const viewTodo = (todos) => {

    // Récupère la liste dans notre HTML
    const ul  = document.querySelector("ul");
    ul.innerText = "";

    // Boucle sur le tableau contenant les éléments de notre liste
    // ---
    // item : la valeur de l'élément du tableau en cours
    // index : l'index de l'élément du tableau en cours
    todos.forEach((item, index ) => {
        // Création d'une "li"
        // <li class="list-group-item d-flex justify-content-between">
        const li = document.createElement("li")
        li.classList.add("list-group-item","d-flex","justify-content-between");
        li.innerText = item;

        // Création d'un lien hypertexte
        // <a href="#" class="deleteItem"></a>
        const a = document.createElement("a");
        a.id = `item-${index}`;
        a.href = "#";
        a.classList.add("deleteItem");

        // Création d'une "image"
        // <img src="imgs/trash.svg" alt="Delete item" class="icon-delete">
       let img = document.createElement("img");
       img.setAttribute("src", "imgs/trash.svg");
       img.alt = "Delete item",
       img.classList.add("icon-delete");

       // Inclure l'image dans le lien hypertexte
       a.append(img);

       // Inclure le lien hypertexte dans la "li"
        li.appendChild(a);


        // Ajoute la "li" en fin de liste
        ul.appendChild(li);

    });

       // Applique les écouteurs d'évènement sur les liens de suppression
       eventLinks(todos);

       // Applique les écouteurs d'évènement sur les li
       strikeOutItem();

}

/**
 * Applique un écouteur d'évènement sur tous les liens de suppression
 */
const eventLinks = (todos) => {
    // Récupère tous les boutons de suppresion
    const links = document.querySelectorAll(".deleteItem");

    // Ajoute un écouteur d'évènement sur les boutons de suppression
    links.forEach(link => {
        link.addEventListener("click", () => {
            removeItem(link.id, todos);
        });
    });
}
    

/**
 * Supprime un élément de la liste et du tableau
 */
const removeItem = (id, todos) => {
    //console.log(id);
    // Extraire le numéro de la chaîne
    const index = id.split("item-");
    console.log(index[1]);

    // Supprime un élément du tableau todos
    todos.splice(index[1], 1);

    // Rafraichit la liste
    viewTodo(todos);
}


/**
 * Permet de rayer un élément de la liste.
*/
const strikeOutItem = () => {
    const items = document.querySelectorAll("li");
    items.forEach(item => {
        item.addEventListener("click", () => {
            item.style.textDecoration = "line-through"
        });
    });
}




