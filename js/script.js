// Catalogo Produtos
const catalogo = [
    {
        id: "1",
        nome: "Maleta de Viagem",
        preco: 200,
        imagem: ["product-1-gimp.jpg", "product-1-1-gimp.jpg"],
        bordado: false,
    },
    {
        id: "2",
        nome: "Estojo com Nome Bordado",
        preco: 30,
        imagem: ["product-2.jpg", "product-2-1.jpg", "product-2-2.jpg", "product-4.jpg"],
        bordado: false,
    },
    {
        id: "3",
        nome: "Rocambole 3 compartimentos",
        preco: 80,
        imagem: ["product-5.jpg", "product-5-1.jpg", "product-5-2-gimp.jpg", "rocambole-3reparticoes1-gimp.jpg", "rocambole-3reparticoes2-gimp.jpg", "rocambole-3reparticoes2-1-gimp.jpg", "rocambole-3reparticoes3.jpg"],
        bordado: false,
    },
    {
        id: "4",
        nome: "Rocambole 4 compartimentos",
        preco: 90,
        imagem: ["product-3.jpg", "product-3-1.jpg", "product-6.jpg", "product-6-1-gimp.jpg", "rocambole-4reparticoes1.jpg", "rocambole-4reparticoes1-1-gimp.jpg", "rocambole-4reparticoes2.jpg", "rocambole-4reparticoes3-gimp.jpg", "rocambole-4reparticoes4-gimp.jpg"],
        bordado: false,
    },
    {
        id: "5",
        nome: "Bolsa Nayla",
        preco: 250,
        imagem: ["bolsa-professor1-gimp.jpg", "bolsa-professor2-gimp.jpg", "bolsa-professor3-gimp.jpg", "bolsa-professor4-gimp.jpg", "bolsa-professor5-gimp.jpg", "bolsa-professor6-gimp.jpg", "bolsa-professor7-gimp.jpg", "bolsa-professor7-1-gimp.jpg", "bolsa-professor8-gimp.jpg", "bolsa-professor9-gimp.jpg"],
        bordado: false,
    },
    {
        id: "6",
        nome: "Bordado bailarina",
        preco: "",
        imagem: ["bailarina1-gimp.jpg", "bailarina2-gimp.jpg"],
        bordado: true,
    },
    {
        id: "7",
        nome: "Bordado Boneca",
        preco: "",
        imagem: ["boneca1-gimp.jpg", "boneca2-gimp.jpg"],
        bordado: true,
    },
    {
        id: "8",
        nome: "Bordado Borboleta",
        preco: "",
        imagem: ["borboleta1-gimp.jpg", "borboleta2-gimp.jpg"],
        bordado: true,
    },
    {
        id: "9",
        nome: "Bordado Corujinha",
        preco: "",
        imagem: ["corujinha1-gimp.jpg", "corujinha2-gimp.jpg"],
        bordado: true,
    },
    {
        id: "10",
        nome: "Bordado Girafa",
        preco: "",
        imagem: ["girafa1-gimp.jpg", "girafa2-gimp.jpg"],
        bordado: true,
    },
    {
        id: "11",
        nome: "Bordado Heroi",
        preco: "",
        imagem: ["heroi1-gimp.jpg", "heroi2-gimp.jpg"],
        bordado: true,
    },
    {
        id: "12",
        nome: "Bordado Infantil",
        preco: "",
        imagem: ["infantil1-gimp.jpg", "infantil2-gimp.jpg"],
        bordado: true,
    },
    {
        id: "13",
        nome: "Bordado Mickey e Minnie",
        preco: "",
        imagem: ["mickey-minnie1-gimp.jpg", "mickey-minnie2-gimp.jpg"],
        bordado: true,
    },
    {
        id: "14",
        nome: "Bordado Princesa",
        preco: "",
        imagem: ["princesa1-gimp.jpg", "princesa2-gimp.jpg"],
        bordado: true,
    },
    {
        id: "15",
        nome: "Bordado Unicornio",
        preco: "",
        imagem: ["unicornio1-gimp.jpg", "unicornio2-gimp.jpg"],
        bordado: true,
    },
    {
        id: "16",
        nome: "Bordado Ursinho",
        preco: "",
        imagem: ["ursinho1-gimp.jpg", "ursinho2-gimp.jpg"],
        bordado: true,
    },
];

// Cartao Produto
function renderizarCatalogo() {
    let i = 0;

    for(const produtoCatalogo of catalogo) {
        let produtoMed = ""
        i++;
        if(produtoCatalogo.imagem.length > 1) {
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
                <h5>R$ ${produtoCatalogo.preco}</h5>
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
                <h5>R$ ${produtoCatalogo.preco}</h5>
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
var myIndex16 = 0;


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

function carousel12() {
    var x = document.getElementsByClassName(`mySlides-13`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex12++;
    if (myIndex12 > x.length) {myIndex12 = 1}    
    x[myIndex12-1].style.display = "block";  
    setTimeout(carousel12, 2000); // Change image every 2 seconds
}

carousel12();

function carousel13() {
    var x = document.getElementsByClassName(`mySlides-14`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex13++;
    if (myIndex13 > x.length) {myIndex13 = 1}    
    x[myIndex13-1].style.display = "block";  
    setTimeout(carousel13, 2000); // Change image every 2 seconds
}

carousel13();

function carousel14() {
    var x = document.getElementsByClassName(`mySlides-15`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex14++;
    if (myIndex14 > x.length) {myIndex14 = 1}    
    x[myIndex14-1].style.display = "block";  
    setTimeout(carousel14, 2000); // Change image every 2 seconds
}

carousel14();

function carousel15() {
    var x = document.getElementsByClassName(`mySlides-15`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex15++;
    if (myIndex15 > x.length) {myIndex15 = 1}    
    x[myIndex15-1].style.display = "block";  
    setTimeout(carousel15, 2000); // Change image every 2 seconds
}

carousel15();

function carousel16() {
    var x = document.getElementsByClassName(`mySlides-16`);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex16++;
    if (myIndex16 > x.length) {myIndex16 = 1}    
    x[myIndex16-1].style.display = "block";  
    setTimeout(carousel16, 2000); // Change image every 2 seconds
}

carousel16();

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