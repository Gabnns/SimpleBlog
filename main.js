

function search() {
    let input = document.getElementById('NavBar').value;
    

    let x = document.getElementsByClassName('box');

    for(i = 0; i < x.length; i++){
        if(x[i].innerHTML.toLowerCase().includes(input.toLowerCase())){ // AQUI ELE PEGA O QUE FOR INSERIDO COMO TEXTO HTML DENTRO DA BARRA DE PESQUISA(INCLUDES) E BUSCA NO MAIN O CONTEUDO (BOX) COM AS LETRAS DIGITADAS, INDEPENDENTE SE MAIUSCULAS OU MINUSCULAS(toLowerCase);
            x[i].style.display = 'block';
        }else {
            x[i].style.display = 'none';
        }
    }
}
search();

function favoritar(){
    const icon = document.querySelectorAll(".fa-regular");

    icon.forEach(i => {
        i.addEventListener('click', () => {
            i.classList.toggle('fa-solid');
        } )
    })
}
favoritar();
