document.getElementById("textbox").value = ""
let submit_btn = document.querySelector(".submit-button")

const transfer = () => {
    submit_btn.addEventListener("click", () => {
    let user_text = document.getElementById("textbox").value
        if (user_text !== ""){
            localStorage.setItem("user-text", user_text)
            window.location.href = "main.html"
        }
    })
}

transfer()


