/*
* FreeWebTools JavaScript (main.js) by indra87g (https://indra87g.github.io)
* Thanks to :
* ChatGPT (https;//chat.openai.com)
* Haxor Deface Uploader by Prinsh (https://haxor.my.id)

* == Stats ==
* Module : 10
* Version : 1.0.0
* License : GNU General Public License v2
*/

// Preloader
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}

// Clock
window.setTimeout("waktu()", 1000);
    function waktu() {
      var waktu = new Date();
      setTimeout("waktu()", 1000);
          document.getElementById("jam").innerHTML = waktu.getHours();
		document.getElementById("menit").innerHTML = waktu.getMinutes();
		document.getElementById("detik").innerHTML = waktu.getSeconds();
          document.getElementById("tahun").innerHTML = waktu.getFullYear();
		document.getElementById("bulan").innerHTML = waktu.getMonth();
		document.getElementById("tanggal").innerHTML = waktu.getDate();
    }


