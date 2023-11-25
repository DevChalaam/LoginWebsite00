document.getElementById("form-contriner").addEventListener("submit", function(event) {
    event.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if (username == "" && password == "") {
        console.log("Login Seccuess")
    } else {
        console.log("Login Failed!")
    }

    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
})