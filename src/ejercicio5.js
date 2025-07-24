let dia = 'sabado';

switch (dia.toLowerCase()) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log ("laborable");
        break;
    case 'sabado':
    case 'domingo':
        console.log("fin de semana")
}

