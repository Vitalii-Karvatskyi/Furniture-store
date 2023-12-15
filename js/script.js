
// function number2(arr){

//   return arr.filter(arr => typeof(arr) == "string" && arr.length >= 10);
// };
// console.log(number2([true,10,"James",50,"Sam Fisher fron Nevada"]));





// function number(arr){

//   return String(arr).split("").reverse().join("");
// };
// console.log(number(12345));


$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  
  autoplaySpeed: 2000,
});