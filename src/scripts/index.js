function handleModal(){
    const buttonHeader = document.querySelector(".header__button");
    const modalController = document.querySelector(".modalController");
    const buttonFAQ = document.querySelector(".faq__button");

    buttonHeader.addEventListener("click", function(){
        modalController.showModal();

        closeModal();
    });

    buttonFAQ.addEventListener("click", function(){
        modalController.showModal();

        closeModal();
    })
}

function closeModal(){
    const buttonClose = document.querySelector(".closeModal");
    const modalController = document.querySelector(".modalController");

    buttonClose.addEventListener("click", function(){
        modalController.close();
    })
}

handleModal()