// ======================================
// NOMBRE DEL OPERARIO
// ======================================

let nombreOperario = prompt("Ingrese el nombre del operario:");
while (nombreOperario == "" || nombreOperario == null){
nombreOperario = prompt("ERROR.\nIngrese un nombre válido:");
}
// ======================================
// TIPO DE PRODUCTO
// ======================================

let tipoProducto = prompt("Seleccione el código del producto:\n\n" +
    "A --> Componente A\n" +
    "B --> Componente B\n" +
    "C --> Componente C"
);

if(tipoProducto != null) tipoProducto = tipoProducto.toUpperCase();

while(tipoProducto != "A" &&
tipoProducto != "B" &&
tipoProducto != "C")
{

tipoProducto = prompt("ERROR.\nIngrese A, B o C");
if(tipoProducto != null) tipoProducto = tipoProducto.toUpperCase();
}

// ======================================
// SWITCH
// ======================================

let costoUnitario;
let nombreProducto;
switch(tipoProducto)
{
case "A":costoUnitario = 5000;
nombreProducto = "Componente A";
break;

case "B":
costoUnitario = 7000;
nombreProducto = "Componente B";
break;

case "C":costoUnitario = 10000;
nombreProducto = "Componente C";
break;
}

// ======================================
// VARIABLES GENERALES
// ======================================

let numeroDia = 1;
let totalPiezas = 0;
let produccionPorDia = [];
let respuestaContinuar;

// ======================================
// REGISTRO DE PRODUCCIÓN
// ======================================

do{
let piezasDelDia = parseInt(prompt("Ingrese piezas producidas del día " +numeroDia));
while(isNaN(piezasDelDia) || piezasDelDia < 0){
piezasDelDia = parseInt(prompt("ERROR.\nIngrese un número válido:"));
}

produccionPorDia.push(piezasDelDia);
totalPiezas += piezasDelDia;
respuestaContinuar = prompt("¿Desea registrar otro día? (si/no)");

if(respuestaContinuar != null) 
respuestaContinuar = respuestaContinuar.toLowerCase();
while(respuestaContinuar != "si" && respuestaContinuar != "no")
{

respuestaContinuar = prompt("ERROR.\nIngrese si o no");
if(respuestaContinuar != null) respuestaContinuar = respuestaContinuar.toLowerCase();
}

numeroDia++;
}while(respuestaContinuar == "si");
// ======================================
// RENDIMIENTO
// ======================================

let rendimiento;
let claseCSS;

if(totalPiezas < 50){
 rendimiento =
 "Bajo rendimiento ❌";
 claseCSS = "bajo";
}
else if(totalPiezas >= 50 && totalPiezas <= 100)
{
rendimiento ="Rendimiento aceptable ⚠️";
claseCSS = "aceptable";
}
else{
rendimiento ="Rendimiento excelente 🚀";
claseCSS = "excelente";
}

// ======================================
// COSTO TOTAL
// ======================================

let costoTotal =totalPiezas * costoUnitario;

// ======================================
// MOSTRAR RESULTADOS
// ======================================

document.write("<table>");
// OPERARIO
document.write("<tr>"+"<td><b>Operario</b></td>" +"<td>" + nombreOperario + "</td>" +"</tr>");

// PRODUCTO
document.write("<tr>" +"<td><b>Producto</b></td>" +"<td>" + nombreProducto + "</td>" +"</tr>");

// PRODUCCIÓN POR DÍA

for(let i = 0;i < produccionPorDia.length;i++)
{
document.write("<tr>" +"<td><b>Día " + (i+1) + "</b></td>" +"<td>" +produccionPorDia[i] +" piezas</td>" +"</tr>");
}

// TOTAL PIEZAS
document.write("<tr>" +"<td><b>Total piezas</b></td>" +"<td>" + totalPiezas + "</td>" +"</tr>");

// COSTO UNITARIO
document.write("<tr>" +"<td><b>Costo unitario</b></td>" +"<td>$" + costoUnitario + "</td>" +"</tr>");

// COSTO TOTAL
document.write("<tr>" +"<td><b>Costo total</b></td>" +"<td>$" + costoTotal + "</td>" +"</tr>");

// RENDIMIENTO
document.write("<tr>" +"<td><b>Rendimiento</b></td>" +"<td class='" + claseCSS + "'>" +rendimiento +"</td>" +"</tr>");
document.write("</table>");