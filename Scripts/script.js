// toggle icon navbar 

//scroll sections
window.onscroll = () => {
    //sticky header
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}