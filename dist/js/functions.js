$(function() {
    // $("#loading").hide()
    // $("#wrapper").hide()


    $("#loading").fadeIn("slow").delay(1500).fadeOut("slow")
    $("#wrapper").delay(3500).fadeIn("slow")
});

// Função do relógio
function clock(){
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = 'AM';

    // Converter 24 horas em 12 horas  do formato AM e PM
    if ( h > 12){
       h = h - 12;
       var am = 'PM';
    }
    // Adicionar o 0 no começo se o número for menos de 10
    h = ( h < 10 ) ? '0' + h : h;
    m = ( m < 10 ) ? '0' + m : m;
    s = ( s < 10 ) ? '0' + s : s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}

var interval = setInterval(clock, 1000);

// Função do navigation bar
    const navigation = document.querySelector('.navigation');
    document.querySelector('.toggle').onclick = function(){
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    }
