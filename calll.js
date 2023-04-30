let a = "";
let buttons = document.querySelectorAll(".bton");
Array.from(buttons).forEach((bton) => {
    bton.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            a = eval(a);
            document.querySelector("input").value = a;
        } else if (e.target.innerHTML === "C") {
            a = "";
            document.querySelector("input").value = a;
        } else {
            a = a + e.target.innerHTML;
            document.querySelector("input").value = a;
        }
    });
});