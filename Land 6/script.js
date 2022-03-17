// clinets slider
let leftArrow = document.getElementById("leftAr")
let rightArrow = document.getElementById("rightAr")


let commentA = document.querySelector(".comment-a")
let commentB = document.querySelector(".comment-b")



rightArrow.onclick = function () {
    commentA.style.transform = ("translateX(-850px)")
    commentB.style.transform = ("translateX(0px)")
}



leftArrow.onclick = function () {
    commentA.style.transform = ("translateX(0px)")
    commentB.style.transform = ("translateX(850px)")
}





// search input 
let ico = document.getElementById("sico");
let box = document.querySelector(".search-inp");

ico.onclick = function () {
    if (box.style.display == "block"|| box.style.transform == "translateY(0px)") {
        box.style.display = "none"
        box.style.transform = "translateY(-200px)"
    }

    else {
        box.style.display = "block"
        box.style.transform = "translateY(0px)"
    }
}





// company logo
let divs = document.querySelectorAll(".cirs > div");
let footer = document.querySelector(".quick-contact");
let logo = Array.from(divs);

for (let i=0; i < logo.length; i++) {
    
    logo[i].onclick = function () {
        
        if (logo[i].id === "cir3") {
            footer.style.marginTop = "90px"
        }

        else {
            footer.style.marginTop = "0px"
        }

        logo[i].style.zIndex = "30";
        logo[i-1].style.zIndex = "10";
        logo[i].classList.toggle("inactive")
        logo[i].classList.toggle("active")
        


        
    }
}