// Generatore di password non tanto sicuro

// Verifica collegamento javascript
console.log("JAVASCRIPT COLLEGATO");


//Richiesta all'utente del nome,del cognome e del colore preferto
// Nome
const nome= prompt("Ciao,sono un generatore di password insicuro ma funzionale, puoi dirmi il tuo nome?");
console.log(nome);
// Cognome
const cognome= prompt("Bene "+nome+" adesso potresti dirmi il tuo cognome?");
console.log(cognome);
// Colore
let colore= prompt("Ok "+nome+" ultimo passaggio,puoi dirmi qual è il tuo colore preferito?");
console.log(colore);
// Numero password costante
const numeroPassword=21;
console.log(numeroPassword);


// Salvo la password completa in una varibile e mi assicuro che sia una stringa
let password= nome+cognome+colore+numeroPassword;
console.log(password,"tipo variabile:",typeof password);
// Trascrizione password sulla pagina
document.getElementById("password-utente").innerHTML=password;