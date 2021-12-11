
function checkPosition() {
    // Нам потребуется знать высоту документа и высоту экрана.
    const height = document.body.offsetHeight
    const screenHeight = window.innerHeight
    const header = document.getElementById('header').clientHeight 

    

    // Они могут отличаться: если на странице много контента,
    // высота документа будет больше высоты экрана (отсюда и скролл).

    // Записываем, сколько пикселей пользователь уже проскроллил.
    const scrolled = window.scrollY

    // Обозначим порог, по приближении к которому
    // будем вызывать какое-то действие.
    // В нашем случае — четверть экрана до конца страницы.
    const threshold = header

    // Отслеживаем, где находится низ экрана относительно страницы.
    const position = scrolled 

    if (position > threshold) {
        // Если мы пересекли полосу-порог, вызываем нужное действие.
        document.getElementById("back").style.display = "block"
    }else    
    {
        document.getElementById("back").style.display = "none"
    }
}; (() => {
    window.addEventListener("scroll", checkPosition)
    window.addEventListener("resize", checkPosition)
})()


function back(){
    window.scrollBy({
        top:-500000,
        behavior: 'smooth'
    })
}