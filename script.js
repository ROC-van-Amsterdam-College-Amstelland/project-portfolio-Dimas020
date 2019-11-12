
var now = new Date();
var days = new Array("Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag");
var months = new Array("januari","februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december");
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
}
today = days[now.getDay()] + " " +
             date + " " +
             months[now.getMonth()] + " " +
               (fourdigits(now.getYear())) ;
document.write(today);