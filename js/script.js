// Catalogo Produtos
const catalogo = [
    {
        id: "1",
        nome: "Maleta de Viagem",
        preco: "R$ 200,00",
        imagem: ["product-1-gimp.jpg", "product-1-1-gimp.jpg"],
        bordado: false,
    },
    {
        id: "2",
        nome: "Estojo com Nome Bordado",
        preco: "R$ 30,00",
        imagem: ["product-2.jpg", "product-2-1.jpg", "product-2-2.jpg", "product-4.jpg"],
        bordado: false,
    },
    {
        id: "3",
        nome: "Rocambole 3 compartimentos",
        preco: "R$ 80,00",
        imagem: ["product-5.jpg", "product-5-1.jpg", "product-5-2-gimp.jpg", "rocambole-3reparticoes1-gimp.jpg", "rocambole-3reparticoes2-gimp.jpg", "rocambole-3reparticoes2-1-gimp.jpg", "rocambole-3reparticoes3.jpg"],
        bordado: false,
    },
    {
        id: "4",
        nome: "Rocambole 4 compartimentos",
        preco: "R$ 90,00",
        imagem: ["product-3.jpg", "product-3-1.jpg", "product-6.jpg", "product-6-1-gimp.jpg", "rocambole-4reparticoes1.jpg", "rocambole-4reparticoes1-1-gimp.jpg", "rocambole-4reparticoes2.jpg", "rocambole-4reparticoes3-gimp.jpg", "rocambole-4reparticoes4-gimp.jpg"],
        bordado: false,
    },
    {
        id: "5",
        nome: "Bolsa Nayla",
        preco: "R$ 250,00",
        imagem: ["bolsa-professor1-gimp.jpg", "bolsa-professor2-gimp.jpg", "bolsa-professor3-gimp.jpg", "bolsa-professor4-gimp.jpg", "bolsa-professor5-gimp.jpg", "bolsa-professor6-gimp.jpg", "bolsa-professor7-gimp.jpg", "bolsa-professor7-1-gimp.jpg", "bolsa-professor8-gimp.jpg", "bolsa-professor9-gimp.jpg"],
        bordado: false,
    },
    {
        id: "6",
        nome: "Kit maternidade modelo 1 - Monte seu kit",
        preco: "Preço a confirmar no whatsapp",
        imagem: ["modelo1-gimp.jpg", "modelo1-1-gimp.jpg", "modelo1-2-gimp.jpg"],
        bordado: false,
    },
    {
        id: "7",
        nome: "Kit maternidade modelo 2 - Monte seu kit",
        preco: "Preço a confirmar no whatsapp",
        imagem: ["modelo2-gimp.jpg", "modelo2-1-gimp.jpg"],
        bordado: false,
    },
    {
        id: "8",
        nome: "Necessaire multiuso",
        preco: "R$ 30,00",
        imagem: ["modelo3-gimp.jpg", "modelo3-1-gimp.jpg"],
        bordado: false,
    },
    {
        id: "9",
        nome: "Mochila quadrada",
        preco: "M: R$ 250,00 | G: R$ 300,00",
        imagem: ["modelo4-gimp.jpg", "modelo4-1-gimp.jpg", "modelo4-2-gimp.jpg", "modelo4-3-gimp.jpg", "modelo4-5-gimp.jpg", "modelo4-7-gimp.jpg", "modelo4-8-gimp.jpg"],
        bordado: false,
    },
    {
        id: "10",
        nome: "Pasta semanário",
        preco: "Pasta Catálogo: R$ 90,00<br/>Caderno: R$ 80,00",
        imagem: ["modelo5-gimp.jpg", "modelo5-1-gimp.jpg", "modelo5-2-gimp.jpg", "modelo5-3-gimp.jpg"],
        bordado: false,
    },
    {
        id: "11",
        nome: "Pasta diário de classe",
        preco: "R$ 90,00",
        imagem: ["modelo6-gimp.jpg"],
        bordado: false,
    },
    {
        id: "12",
        nome: "Pasta A-Z",
        preco: "R$ 110,00",
        imagem: ["modelo9-gimp.jpg"],
        bordado: false,
    },
    {
        id: "13",
        nome: "Mochila retangular com bolso duplo",
        preco: "R$ 350,00",
        imagem: ["modelo13-4-gimp.jpg", "modelo13-5-gimp.jpg"],
        bordado: false,
    },
    {
        id: "14",
        nome: "Mochila Infantil",
        preco: "R$ 200,00",
        imagem: ["modelo14-gimp.jpg", "modelo14-1-gimp.jpg", "modelo14-3-gimp.jpg", "modelo14-4-gimp.jpg", "modelo14-5-gimp.jpg", "modelo14-6-gimp.jpg", "modelo14-7-gimp.jpg", "modelo14-8-gimp.jpg"],
        bordado: false,
    },
    /*{
        id: "16",
        nome: "Bordado Ursinho",
        preco: "",
        imagem: ["ursinho1-gimp.jpg", "ursinho2-gimp.jpg"],
        bordado: true,
    },*/
];

// Cartao Produto
function renderizarCatalogo() {
    let i = 0;

    for(const produtoCatalogo of catalogo) {
        let produtoMed = ""
        if(produtoCatalogo.imagem.length > 1) {
            i++;
            // Tem mais de uma imagem, montar o html como slideshow
            // Precisa fazer um loop para pegar a imagem e colocar no html de acordo com a quantidade
            const produtoInit = `<div class="box">
				<div class="w3-content w3-section" style="max-width:100%;">`;
            
            for(const imgProduto of produtoCatalogo.imagem) {
                if(produtoMed == "") {
                    produtoMed = `<img class="mySlides-${i}" src="./img/${imgProduto}" style="width:100%">
                    `;
                } else {
                    produtoMed += `<img class="mySlides-${i}" src="./img/${imgProduto}" style="width:100%">
                    `;
                }
            }

            const cartaoProduto = produtoInit + produtoMed + `</div>
                <h4>${produtoCatalogo.nome}</h4>
                <h5>${produtoCatalogo.preco}</h5>
                <div class="cart">
                    <a href="#"><i class='bx bx-cart' ></i></a>
                </div>
            </div>`

            document.getElementById("shop-container").innerHTML += cartaoProduto;
        } else {
            // Só tem uma imagem, montar o html como quadro normal
            const cartaoProduto = `<div class="box">
                <img src="img/${produtoCatalogo.imagem[0]}">
                <h4>${produtoCatalogo.nome}</h4>
                <h5>${produtoCatalogo.preco}</h5>
                <div class="cart">
                    <a href="#"><i class='bx bx-cart' ></i></a>
                </div>
            </div>`;

            document.getElementById("shop-container").innerHTML += cartaoProduto;
        }
    }
}

renderizarCatalogo();

// MENU

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let icons = document.querySelector(".icons");

console.log(icons)

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
};


// Slideshow
var myIndex0 = 0;
var myIndex1 = 0;
var myIndex2 = 0;
var myIndex3 = 0;
var myIndex4 = 0;
var myIndex5 = 0;
var myIndex6 = 0;
var myIndex7 = 0;
var myIndex8 = 0;
var myIndex9 = 0;
var myIndex10 = 0;
var myIndex11 = 0;
var myIndex12 = 0;
var myIndex13 = 0;
var myIndex14 = 0;
var myIndex15 = 0;


function carousel() {
    var x = document.getElementsByClassName(`mySlides-1`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex0++;
    if (myIndex0 > x.length) {myIndex0 = 1}    
    x[myIndex0-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
  
carousel();

function carousel1() {
    var x = document.getElementsByClassName(`mySlides-2`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex1++;
    if (myIndex1 > x.length) {myIndex1 = 1}    
    x[myIndex1-1].style.display = "block";  
    setTimeout(carousel1, 2000); // Change image every 2 seconds
}

carousel1();

function carousel2() {
    var x = document.getElementsByClassName(`mySlides-3`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}    
    x[myIndex2-1].style.display = "block";  
    setTimeout(carousel2, 2000); // Change image every 2 seconds
}

carousel2();

function carousel3() {
    var x = document.getElementsByClassName(`mySlides-4`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex3++;
    if (myIndex3 > x.length) {myIndex3 = 1}    
    x[myIndex3-1].style.display = "block";  
    setTimeout(carousel3, 2000); // Change image every 2 seconds
}

carousel3();

function carousel4() {
    var x = document.getElementsByClassName(`mySlides-5`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex4++;
    if (myIndex4 > x.length) {myIndex4 = 1}    
    x[myIndex4-1].style.display = "block";  
    setTimeout(carousel4, 2000); // Change image every 2 seconds
}

carousel4();

function carousel5() {
    var x = document.getElementsByClassName(`mySlides-6`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex5++;
    if (myIndex5 > x.length) {myIndex5 = 1}    
    x[myIndex5-1].style.display = "block";  
    setTimeout(carousel5, 2000); // Change image every 2 seconds
}

carousel5();

function carousel6() {
    var x = document.getElementsByClassName(`mySlides-7`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex6++;
    if (myIndex6 > x.length) {myIndex6 = 1}    
    x[myIndex6-1].style.display = "block";  
    setTimeout(carousel6, 2000); // Change image every 2 seconds
}

carousel6();

function carousel7() {
    var x = document.getElementsByClassName(`mySlides-8`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex7++;
    if (myIndex7 > x.length) {myIndex7 = 1}    
    x[myIndex7-1].style.display = "block";  
    setTimeout(carousel7, 2000); // Change image every 2 seconds
}

carousel7();

function carousel8() {
    var x = document.getElementsByClassName(`mySlides-9`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex8++;
    if (myIndex8 > x.length) {myIndex8 = 1}    
    x[myIndex8-1].style.display = "block";  
    setTimeout(carousel8, 2000); // Change image every 2 seconds
}

carousel8();

function carousel9() {
    var x = document.getElementsByClassName(`mySlides-10`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex9++;
    if (myIndex9 > x.length) {myIndex9 = 1}    
    x[myIndex9-1].style.display = "block";  
    setTimeout(carousel9, 2000); // Change image every 2 seconds
}

carousel9();

function carousel10() {
    var x = document.getElementsByClassName(`mySlides-11`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex10++;
    if (myIndex10 > x.length) {myIndex10 = 1}    
    x[myIndex10-1].style.display = "block";  
    setTimeout(carousel10, 2000); // Change image every 2 seconds
}

carousel10();

function carousel11() {
    var x = document.getElementsByClassName(`mySlides-12`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex11++;
    if (myIndex11 > x.length) {myIndex11 = 1}    
    x[myIndex11-1].style.display = "block";  
    setTimeout(carousel11, 2000); // Change image every 2 seconds
}

carousel11();

/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent);
    
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            document.getElementById("modal_container").style.display = "block";
            modalContainer.classList.add('show-modal');
        })
    }
}
showModal('open-modal','modal-container');

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal');

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    document.getElementById("modal_container").style.display = "none";
    modalContainer.classList.remove('show-modal');
}
closeBtn.forEach(c => c.addEventListener('click', closeModal));


/* Send Whatsapp Message */

function sendWhatsappMessage() {
    nomeCliente = document.getElementById("clientName").value;
    
    window.open(`https://api.whatsapp.com/send?phone=5511915696174&text=Olá%2C%20me%20chamo%20${nomeCliente}%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos`);

    closeModal();
}

document.getElementById("send_whatsapp_message").addEventListener("click", sendWhatsappMessage);