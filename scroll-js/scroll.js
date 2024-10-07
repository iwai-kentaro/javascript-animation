document.addEventListener("DOMContentLoaded",function(){
    scroll();//関数宣言

    function scroll(){//scroll関数を実行
        window.addEventListener("scroll", function () {
            const scrolls = document.querySelectorAll(".scroll-event");
            const wh = window.innerHeight;
            scrolls.forEach(e => {
                const e_scrollHeight = e.getBoundingClientRect().top;
                console.log(e_scrollHeight);
                if(e_scrollHeight <= wh - 200 ){
                    e.classList.add("is-active");
                }else{
                    e.classList.remove("is-active");
                }
            });
        })
    };
})




