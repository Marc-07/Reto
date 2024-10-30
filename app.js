const mensajeEncriptado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{( )¡[()?=[]\\`\\¬]()¿()[{;+[$__~()`~]=\\]+~";

const caracteres = {
    "?": "a",
    "[": "e",
    "\\": "i",
    "~": "o",
    "+": "u",
    "¬": "ó",
    "(": " ",
    ")": " ",
    "$": "r",
    "^": "m",
    "`": "c",
    "#": "v",
    "%": "b",
    "¡": "d",
    "}": "q",
    "=": "t",
    "{": "s",
    "]": "n",
    "*": "p",
    "/": "l",
    "-": "h",
    "¿": "y",
    "!": "j",
    ";": "f",
    "__": "z"
};

function desencriptar(mensaje) {
    let mensajeDesencriptado = '';

    // Recorrer cada carácter del mensaje
    for (let i = 0; i < mensaje.length; i++) {
        const simbolo = mensaje[i]; 

        if (caracteres[simbolo]) {
            mensajeDesencriptado += caracteres[simbolo];
        } else {
            mensajeDesencriptado += simbolo; 
        }
    }

    return mensajeDesencriptado;
}

const resultado = desencriptar(mensajeEncriptado);
console.log(resultado); 