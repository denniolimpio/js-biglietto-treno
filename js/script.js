// input

// età del passeggero
var etaUtente = parseInt (prompt ('Quanti anni hai?') );
console.log (etaUtente + ' anni');

// - km viaggio
var kmDistance = parseInt (prompt ('Quanti km percorrerai?') );
console.log (kmDistance + ' km');

// - prezzo per km
var priceKm = 0.21;

// - full price ticket
var fullTicketPrice = kmDistance * priceKm;
console.log ('prezzo pieno ' + fullTicketPrice + ' euro');

//- sconto 20% minorenni
var coupon20 = ((fullTicketPrice * 20) / 100);
console.log ('sconto under 18: ' + coupon20 + ' euro');

//- prezzo finale per giovani
var ticketPrice20 = fullTicketPrice - coupon20;
console.log ('prezzo under 18: ' + ticketPrice20 + ' euro');

// - sconto 40% over 65
var coupon40 = ((fullTicketPrice * 40) / 100);
console.log ('sconto over 65: ' + coupon40 + ' euro');

//- prezzo finale per over 65
var ticketPrice40 = fullTicketPrice - coupon40;
console.log ('prezzo over 65: ' + ticketPrice40 + ' euro');


if ( etaUtente <= 18) {
  alert ( 'Complimenti! hai ottenuto uno sconto del 20%');
  document.getElementById('price').innerHTML = 'Prezzo totale: ' + ticketPrice20 + ' euro';

}

else if  (etaUtente >= 65){
  alert ( 'Complimenti! hai ottenuto uno sconto del 40%');
  document.getElementById('price').innerHTML =' Prezzo totale: ' + ticketPrice40 + ' euro';


}
else {
  document.getElementById('price').innerHTML = 'Prezzo totale ' + fullTicketPrice + ' euro';
}
