document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const globalmenu = document.querySelector('.globalmenu');
    const body = document.querySelector("body")
    hamburger.addEventListener("click", function () {
            // ハンバーガーボタンの挙動
            hamburger.classList.toggle("open");
            // グローバルメニューの挙動
            globalmenu.classList.toggle("open");
            //bodyにvisibility hiddenを付ける
            body.classList.toggle("open");
        });
}); 