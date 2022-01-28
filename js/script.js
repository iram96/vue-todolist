/*Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)*/

console.log('JS ok');

const listCommands = new Vue({
    el: '#list',
    data: {
        originalList: [
            {
                name: 'Andare in banca',
                done: false
            },
            {
                name: 'Ritirare la posta',
                done: true
            },
            {
                name: 'Comprare il mangime del cane',
                done: false
            },
            {
                name: 'Chiamare per il caparra',
                done: false
            },
            {
                name: 'Stendere i panni',
                done: false
            }
        ]
    },
    methods: {
        // creo funzione che verifichi com'è done
        isDone(index){
            // const flag = this.done;
            const flag = this.originalList[index].done;
            console.log(flag)
            return flag ;

            // console.log(this.done);
            // if (flag === true){
            //     return true;
            // } else {
            //     return false;
            // }


        }
    } 
})

