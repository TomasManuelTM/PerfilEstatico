
let $ = (e) => document.querySelector(e);


$(".fecha").addEventListener("click", function(){
    $('.sobre_').classList.add("none");
})

$("._sobre").addEventListener("click", function(){
  $('.sobre_').className.split(' ').forEach(element => {
    if(element.toString() == "none")
      $('.sobre_').classList.remove("none");  
    console.log(element.toString());
  });
})

