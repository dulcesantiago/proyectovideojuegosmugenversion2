
//Función de Reloj
function mReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if(str_segundo.length==1)
    segundo="0"+segundo

    str_minuto = new String (minuto)
    if(str_minuto.length==1)
    minuto="0" + minuto

    str_hora = new String (hora)
    if(str_hora.length==1)
    hora="0" + hora

    horaimprimible = hora + " : " + minuto + " : " + segundo
    document.form_reloj.reloj.value=horaimprimible
    setTimeout("mReloj()",1000)
}

//Calendario
var f= new Date();
var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

document.write('<div class="mifecha">');

document.write('<div class="anno">' + f.getFullYear() + '</div>');
document.write('<div class="dia">'+ f.getDate() +'</div>');
document.write('<div class="mes">' + meses[f.getMonth()] + '</div>');

document.write('</div>');