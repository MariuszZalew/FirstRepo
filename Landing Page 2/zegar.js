function zegar() {
	var dzisiaj = new Date();
	var d = " / ";
	var w = " : ";
	var dzień = dzisiaj.getDate();
	var miesiąc = dzisiaj.getMonth()+1;
	var rok = dzisiaj.getFullYear();

	var godzina = dzisiaj.getHours();
	if (godzina<10) godzina = "0"+godzina;
	var minuta = dzisiaj.getMinutes();
	if (minuta<10) minuta = "0"+minuta;
	var sekunda = dzisiaj.getSeconds();
	if (sekunda<10) sekunda = "0"+sekunda;

	document.getElementById("time").innerHTML = dzień+d+miesiąc+d+rok+d+d+godzina+w+minuta+w+sekunda;
	setTimeout("zegar()",1000);
}
