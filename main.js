


function favoritar(){
    const icon = document.querySelectorAll(".fa-regular");

    icon.forEach(i => {
        i.addEventListener('click', () => {
            i.classList.toggle('fa-solid');
        } )
    })
}
favoritar();