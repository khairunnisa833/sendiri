const silang = document.querySelector(".silang");
const card = document.querySelector(".card");
const kotak = document.querySelector("#navbar");

function sidemenu() {
  kotak.style.right = "0";
}
function hidemenu() {
  kotak.style.right = "-300px";
}

document.addEventListener("click", function (e) {
  if (!kotak.contains(e.target) && !card.contains(e.target)) {
    hidemenu();
  }
});

// const nav = document.querySelector('#nav');
// const body = document.body;

// function warna() {
//   const background = window.getComputedStyle(body).backgroundColor;
//   if(background === 'rgb(0,0,0)') {
//     nav.style.color = "white";
//   }
//    else if(background === 'rgb(255,255,255)') {
//     nav.style.color = 'black';
//   }

// }
// warna();

const nav = document.querySelector("#nav");
const body = document.body;

function warna() {
  const background = window.getComputedStyle(body).backgroundColor;

  // Menghapus spasi yang tidak perlu pada perbandingan
  if (background === "rgb(0, 0, 0)") {
    nav.style.backgroundColor = "black";
  } else if (background === "rgb(255, 255, 255)") {
    nav.style.backgroundColor = "white";
  }
}

// Panggil fungsi untuk mengubah warna teks nav saat halaman dimuat
warna();

// Jika ingin mengubah warna teks ketika warna background body berubah, Anda bisa menambahkan event listener:
window.addEventListener("resize", updateNavTextColor); // Atau event lain yang sesuai
