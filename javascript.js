const inp = document.getElementById("tname")

const lst = document.getElementById("lcont")

function addtsk() {
    if (inp.value === "") {
        alert("YOU MUST ENTER A TASK")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inp.value
        lst.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inp.value = ""
    svedata()
}

lst.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("ch")
        svedata()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        svedata()
    }
}, false)

function svedata() {
    localStorage.setItem("data", lst.innerHTML)
}

function loaddata() {
    lst.innerHTML = localStorage.getItem("data")
}
loaddata()
