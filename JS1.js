var tab;
var content;
window.onload = function () {
    tab = document.getElementsByClassName("tab");
    content = document.getElementsByClassName("content");
    hideContents(1);
};

function hideContents(a) {
for (var i = a; i<=content.length; i++){
    content[i].classList.remove("show");
    content[i].classList.add("hide");
    tab[i].classList.remove("open");
}
}

function showContent(event) {
    var element = event.target;
    if (element.className == "tab") {
        for (var i =0; i<=tab.length; i++){
            if (element == tab[i]){
                hideContents(0);
                content[i].classList.remove("hide");
                content[i].classList.add("show");
            }
        }
    }
}
document.getElementById("tabs").addEventListener("click", showContent);


