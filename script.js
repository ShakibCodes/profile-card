const btn = document.querySelectorAll(".theme-btn button");
const imge = document.getElementById("thm-img");
btn.forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.dataset.theme;
        document.documentElement.setAttribute("data-theme", theme);

        if(theme ==="dark"){
            imge.src="dark.png";
        }
        else{
            imge.src="light.png";
        }
    });
});