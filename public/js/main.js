let maVar = prompt('Veuillez saisir un nombre')
let multipl = maVar % 2
switch (multipl) {
    case 0:
        alert('Votre nombre est un multiple de 2')
        break;
    case 1:
        alert("Votre nombre n'est pas un multiple de 2")
        break;
    default:
        alert("Ceci n'est pas un nombre")
        break;
}

//0 s'il n'y a pas de reste et 1 s'il y a un reste (peut importe sa valeur)