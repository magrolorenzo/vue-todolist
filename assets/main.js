// Definire una lista di todo e stamparli in pagina in un elenco

//Predisporre un input testuale per aggiungere un nuovo todo:
// al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo
// al click su un item della lista, il todo viene rimosso

// BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo
var app = new Vue({
    el: "#root",

    data:{

        todos: [
            "Fare la spesa",
            "Stendere",
            "Portare fuori il cane",
            "Dare da mangiare al gatto",
            "Fare benzina",
            "Fare esercizio"
        ]

    },
});
