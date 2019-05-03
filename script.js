function verificarEdad () {
    var edad = prompt('Introduce tu edad')
    if (edad > 18) {
        document.write('Puedes conducir')
    } else {
        document.write('No puedes conducir')
        verificarEdad()
    }
}
verificarEdad()
