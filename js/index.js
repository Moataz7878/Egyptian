
// let elment=document.getElementById("elment");
// let span=document.getElementById("span");


// span.addEventListener("click",function(){
//   elment.style.display=block;
//   elment.style.width=0;
//   elment.style.margin=0;
//   span.style.opacity=0;
//   span.style.transition=dur;
// })
// $(".elment").(1000)
// $(".span").click(function(){
//     $(".elment").toggle(800 ,function(){
//         span.style.left=240
//     })
   
// })
function openNav() {
  if ($("#mySidenav").width() == "250") {
  closeNav();
  } else {
    $("#mySidenav").width("250px");
    $("#a").width("250px");
      $("a").fadeIn(1000);

    $("#main").css("margin-left", "250px");
  }
}


function closeNav() {
  $("#mySidenav").width("0px");
      $("a").fadeOut(5);
  $("#main").css("margin-left", "0px");
}
$("a").click(function () {
  let sectionId = $(this).attr("href");

  if ($(sectionId).offset() != undefined) {
    let positionOfSection = $(sectionId).offset().top;

    $("html , body").animate({ scrollTop: positionOfSection},50);
  }
});

$(".open").click(function () {
  openNav();
});
$(".closebtn").click(function () {
  closeNav();
});





    $("#one").click(function(){
        $(".nam").slideToggle(1000)
        $(".mmm").slideUp(1000)
        $(".roe").slideUp(1000)
        $(".pwe").slideUp(1000)
    })
    $("#two").click(function(){
        $(".mmm").slideToggle(1000)
        $(".nam").slideUp(1000)
        $(".roe").slideUp(1000)
        $(".pwe").slideUp(1000)
    })
    $("#three").click(function(){
        $(".roe").slideToggle(1000)
        $(".mmm").slideUp(1000)
        $(".nam").slideUp(1000)
        $(".pwe").slideUp(1000)
    })
    $("#four").click(function(){
        $(".pwe").slideToggle(1000)
        $(".mmm").slideUp(1000)
        $(".roe").slideUp(1000)
        $(".nam").slideUp(1000)
    })


    // let count=new Date("jun 17 ,2022 23:59:59").getTime();
    // let counter=setInterval(()=>{
    //     let dateNow=new Date().getTime();
    //     let dateDiff=count-dateNow
    //     let days=Math.floor(dateDiff /(1000*60*60*24));
    //     let hours=Math.floor((dateDiff %(1000*60*60*24))/(1000*60*60));
    //     let min=Math.floor((dateDiff %(1000*60*60))/(1000*60));
    //     let seconds=Math.floor((dateDiff %(1000*60))/1000);


    // let count=new Date("jun 17 ,2022 23:59:59").getTime();
    //  function getTime(){
    //     let date=new Date()
    //     let dateDiff=count-date
       
    //     document.getElementById("days").innerHTML=`${date.getDate()}`
    //     document.getElementById("hours").innerHTML=`${date.getHours()}`;
    //     document.getElementById("min").innerHTML=`${date.getMinutes()}`;
    //     document.getElementById("seconds").innerHTML=`${date.getSeconds()}`;
    //     setTimeout(getTime,100)
    // };

    // getTime()



  $("#getting-started")
  .countdown("2022/12/29", function(event) {
    $("#days").text(
      event.strftime(`%D D`)
    );
    $("#hours").text(
      event.strftime('%H h')
    );
    $("#min").text(
      event.strftime('%M m')
    );
    $("#seconds").text(
      event.strftime('%S s')
    );
  });


  $(function (){
    let max =100;
    $("textarea").keyup(function (){
      let length =$(this).val().length;
      let character = max -length;
      if(character <= 0){
        $("#ren").text("your available character finished");
        $("#pul").css("display","block")
      } else{
        $("#ren").text(character);
      
      }
    })
  })
