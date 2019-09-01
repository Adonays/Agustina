var deadline = new Date("Sep, 1 2019 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var dias = Math.floor(t / (1000 * 60 * 60 * 24));
var horas = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutos = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var segundos = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("dia").innerHTML = dias ;
document.getElementById("hora").innerHTML = horas;
document.getElementById("minuto").innerHTML = minutos;
document.getElementById("segundo").innerHTML = segundos;
if (t < 0) {
        clearInterval(x);
        var ok = document.getElementById("musica");
        document.getElementById("dia").innerHTML ='0';
        document.getElementById("hora").innerHTML ='0';
        document.getElementById("minuto").innerHTML ='0' ;
        document.getElementById("segundo").innerHTML = '0';
        document.getElementById("mostrar").style.display="block";
        document.getElementById("mostrarFooter").style.display="block";
        document.getElementById("mostrarCarousel").style.display="block";
        ok.play();
       }
}, 1000);
