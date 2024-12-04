let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const qtd = document.getElementsByName('quantidade');
const boxprodutos = document.getElementById('produtos');
const boxself = document.getElementById('self');
const actions = document.querySelectorAll('.actions');

function updatStyleCart() {
    const carrinhobox = document.getElementById('carrinhobox');
    setTimeout(() => {
        carrinhobox.style.top = `-${carrinhobox.clientHeight}px`
    }, 1000)
}

let conteudoprodutosprato = '';
let conteudoprodutositem = '';



produtos.forEach((item,index) => {
    
    let result = "";

    result +=  `<div class="produto">`
    result +=  `<img src="${item.img}" alt="Produto 1"></img>`
    result +=  `<h2>${item.nome}</h2>`
    result +=  `<p>${item.descricao}</p> `  
    result +=  `<button class="add-carrinho" data-id="${item.id}" data-qtd="1" data-index="${index}">Comprar</button>`
    result +=  `</div>`


    if(item.type === 'prato') conteudoprodutosprato += result;
    if(item.type === 'item') conteudoprodutositem += result;

    
    
});

boxprodutos.innerHTML = conteudoprodutosprato;
boxself.innerHTML = conteudoprodutositem;
const addCarrinho = document.querySelectorAll('.add-carrinho');
addCarrinho.forEach(item => {
    item.addEventListener('click', (event) => {
        item.disabled = true;
        const id = parseInt(event.target.getAttribute('data-id'));
        const qtd = parseInt(event.target.getAttribute('data-qtd'));
        const produto = produtos.find(produto => produto.id === id);

        adicionarCarrinho(id, qtd, produto.nome, produto.preco);

        item.disabled = false;
    });
});

function adicionarCarrinho(id, qtd, nome, preco) {

    const produto = carrinho.findIndex(item => item.id === id);
    //console.log(carrinho[produto])
    if(produto !== -1){
        carrinho[produto].qtd += 1;
    }
    else {
        carrinho.push({
            id: id,
            qtd: qtd,
            nome: nome,
            preco: preco
        })
    }    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    loadCart()
}

exibircarrinho.addEventListener('click', () => {
    carrinhobox.classList.toggle("mostrar-carrinho");
})

function loadCart(){
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const count_prod = document.getElementById('count_prod')
    const produtoscarrinho = document.getElementById('produtoscarrinho')
    count_prod.innerText = carrinho.length

    let contentProds = ""
    if(carrinho.length){
        carrinho.forEach(item => {
            const itemProd = produtos.find(produto => produto.id === item.id);
            let totalItemPrice = (itemProd.preco) * (item.qtd)
            contentProds += `<div class="item-prod">`
            contentProds += `<div class="qtd-cart"><span class="qtd-action" onclick="addQtd(${item.id})"><i class="fa-solid fa-arrow-up"></i></span><span>${item.qtd}</span><span class="qtd-action" onclick="removeQtd(${item.id})"><i class="fa-solid fa-arrow-down"></i></span></div>`
            contentProds += `<div class="thumb"><img src="${itemProd.img}" alt=""></div>`
            contentProds += `<div class="infos">`
            contentProds += `<p>${itemProd.nome}</p>`
            contentProds += `</div>`
            contentProds += `<div class="price">${totalItemPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>`
            contentProds += `<div class="actions" onclick="removeItem(${item.id})"><i class="fa-solid fa-trash"></i></div>`
            contentProds += `</div>`
        })
    }else{
        contentProds += `<div class="item-prod empty-cart">Seu carrinho está vazio</div>`
    }
    produtoscarrinho.innerHTML = contentProds;
    updatStyleCart()
    updatePrice()
}

function addQtd(id){
    const index = carrinho.findIndex(item => item.id === id);
    carrinho[index].qtd += 1;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    loadCart();    
}

function removeQtd(id){
    const index = carrinho.findIndex(item => item.id === id);
    if(carrinho[index].qtd > 1){
        carrinho[index].qtd -= 1;
    }else{
        removeItem(id)
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    loadCart();
}
function removeItem(id){
        if(!confirm("Deseja remover este item?")) return
        const index = carrinho.findIndex(item => item.id === id);
        carrinho.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        loadCart();
}
function updatePrice(){

    sum = carrinho.reduce(function(accumulator,object){ 
        let finalPrice = object.preco * object.qtd
        return accumulator + finalPrice
      },0); 
      sum = sum.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
      totalGeral.innerHTML = sum;
}
function finalizarCompra(){
    if(!carrinho.length){
        alert("Seu carrinho esta vazio")
        return
    }
    window.location.href = 'pagamento.html'
}


updatStyleCart()
loadCart();

