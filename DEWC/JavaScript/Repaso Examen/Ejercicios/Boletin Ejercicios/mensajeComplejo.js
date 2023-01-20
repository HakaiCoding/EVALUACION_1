// Visualizar con un único alert el siguiente mensaje, de dos formas diferentes 

// ¡Hola Mundo!
// Qué fácil es incluir ‘comillas simples’
// y “comillas dobles”


alert(`!Hola Mundo!
Que facil es incluir 'comillas simples'
y "comillas dobles"
`);


let simples = "'comillas simples'";
let dobles = `"comillas dobles"`;

alert(`Hola Mundo!
Que facil es incluir ${simples}
y ${dobles}`);