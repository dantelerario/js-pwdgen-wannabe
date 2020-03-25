// chiedere all’utente il suo nome e poi memorizzarlo

var name = prompt('What\'s your name?');

// chiedere poi il suo cognome e memorizzarlo

var surname = prompt('What\'s your surname?');

// chiedere poi il suo colore preferito e memorizzarlo

var color = prompt('What\'s your favourite color?');

// infine scrivere nella pagina le informazioni ottenuti dall’utente, nel formato: nomecognomecolorepreferito20

var password = name + surname + color + 20;

document.getElementById('yourpassword').innerHTML = password;
