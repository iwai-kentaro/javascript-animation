document.addEventListener("DOMContentLoaded",function(){
  $(function(){
    $(window).on("scroll", function(){
      const scrolls = $(".scroll-event");
      const st = $(window).scrollTop();
      const wh = $(window).height();
      scrolls.each(function(){
        const s_top = $(this).offset().top;
        console.log(s_top);
        if(s_top <= st + wh - 200){
          $(this).addClass("is-active");
        }else{
          $(this).removeClass("is-active");
        }
      })
    })
  })
});