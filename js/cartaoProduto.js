import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
    for(const produtoCatalogo of catalogo) {
        if(produtoCatalogo.imagem.length > 1) {
            // Tem mais de uma imagem, montar o html como slideshow
            // Precisa fazer um loop para pegar a imagem e colocar no html de acordo com a quantidade
            const produtoInit = `<div class="box">
				<div class="w3-content w3-section" style="max-width:100%;">`
            
            for(const imgProduto of produtoCatalogo.imagem) {
                produtoInit + `<img class="mySlides" src="./img/${imgProduto}" style="width:100%">`
            }

            const cartaoProduto = produtoInit + `</div>
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