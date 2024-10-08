document.addEventListener("DOMContentLoaded", function () {
    // アコーディオンメニューの実装JQ
    $(function () {
        const qs = $(".p-top-faq__box-q");
        const ans = ".p-top-faq__box-a";
        const vertical = ".p-top-faq__box-q-cross-vertical"
        qs.each((index, q) => {
            $(q).on("click", function () {
                $(q).next(ans).slideToggle();
                $(q).find(vertical).toggleClass("open");
            });
        });
    })
})