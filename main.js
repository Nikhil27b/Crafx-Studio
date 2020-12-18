// const arraytext = ["Logo Design","Brochure Design","Social Media Designs"];

// const navname = document.querySelector("#navtext");

//  function hello() {
//   var atext = "";

//   for (var i = 0; i < 1; i++) {
//     atext += arraytext[GetRandomText()];
//   }
//   navname.textContent = atext;
// };

// function GetRandomText() {
//   return Math.floor(Math.random() * arraytext.length);
// }

// setInterval(() => {
//     hello();
// }, 4000);

var typed = new Typed(".navtext", {
  strings: ["Logo Design", "Brochure Design", "Social Media Designs"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
  smartBackspace: true,
});

function imgslider(any) {
  document.querySelector(".pro-img").src = any;
}
