const wait = (duree) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duree)
    })
}

const animation = async (text_to_animate) => {
    let text = document.getElementById("text-to-animate")
    let animated_text = ""
    for (let i = 0; i < text_to_animate.length; i++){
        await wait(100)
        animated_text = animated_text + text_to_animate.slice(i, i+1)
        text.textContent = animated_text
    }
}

animation(localStorage.getItem("user-text"))






