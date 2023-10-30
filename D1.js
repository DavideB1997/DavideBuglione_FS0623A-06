/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* variabile int, una variabile con valore un numero*/
var int = 3;
console.log(int + " variabile int, una variabile che ha come valore un numero")


var float = 3.3;
console.log(float + " variabile float, una variabile che ha come valore decimale")

var string = "Giovanni";
console.log(string + " variabile string, una variabile che ha come valore dei caratteri")

var boolean = true;
console.log(boolean + " una variabile boolean, una variabile con valore true o false")



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name ="Davide";
console.log(typeof name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var numero1=12;
var numero2=20;
var risultato= numero1 + numero2;

console.log("la somma fra " + numero1 + " e " + numero2 + " è " +  risultato)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
console.log("il valore di x è " + x )


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(name);
name = "Buglione";
console.log(name);


const anno = 2023
console.log(anno)
/* REMOVE /* per vedere che const non si puà riassegnare.
/* anno=2020;
console.log(anno); */




/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var y = 4;
var xy = x - y;

console.log("la differenza fra " + x + " e " + y + " è " +  xy)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = "john";
var name2 = "John";

console.log("la variabile " + name1 +" e la variabile "+ name2 + " sono diversi: "+ (name1!== name2)+ " perché javascript è case sensitive" );


console.log("il tipo della variabile " + name1 +" e il tipo della variabile "+ name2+ " sono diversi: "+ (typeof name1 !== typeof name2))

// name1 = "John";

console.log(name1)
console.log("Aggiungnedo .toLowerCase() a " + name2 +" sarà uguale alla variabile "+ name1  + "? "+ (name1 === (name2.toLowerCase())))






/* FAHRENHEIT to CELSIUS*/

var f1 = parseInt(prompt("Inserisci il valore F da portare in C"));

var c1 = (f1-32)*5/9;
console.log(c1);

alert(f1 + " gradi fahrenheit sono " + ((f1-32)*5/9) +  " gradi celsius" )


/*celsius to f */

var c2 = parseInt(prompt("Inserisci il valore C da portare in F"))

var f2 = (9/5)*c2 + 32;
console.log(f2);
alert(c2 + " gradi celsius sono " + ((9/5)*c2 + 32) +  " gradi fahrenheit" )




