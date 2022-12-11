const pop = document.getElementById('popin');
const popUp = document.getElementById('popup');

pop.addEventListener('click', () => {
    popUp.classList.add("open-popup");
});



function closePopup(){
    popup.classList.remove("open-popup");
}

