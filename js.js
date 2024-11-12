var login_user = JSON.parse(localStorage.getItem("log")) || false;

if(localStorage.getItem("log") == "true"){
    document.getElementById("log").innerText = "Sair";
    document.getElementById("log").onclick = mudar;
}

function mudar(){
    localStorage.setItem("log","false");
}



function vazio() {
    document.getElementById("carrinho").setAttribute("src", "imagens/car2.png");
}

function cheio() {
    document.getElementById("carrinho").setAttribute("src", "imagens/car1.png");
}

function entrar() {
    let emaildigitado = document.getElementById("txtemail").value;
    let senhadigitada = document.getElementById("txtsenha").value;
    let emailencontrado = false;
    let senhaencontrada = false;

    document.getElementById("msg").innerText = "";
    document.getElementById("txtemail").style.borderColor = "";
    document.getElementById("txtsenha").style.borderColor = "";

    if (emaildigitado === "" || senhadigitada === "") {
        if (senhadigitada === "") {
            document.getElementById("txtsenha").style.borderColor = "red";
        }
        if (emaildigitado === "") {
            document.getElementById("txtemail").style.borderColor = "red";
        }
        document.getElementById("msg").innerText = "Preencha os campos!";
        document.getElementById("msg").style.color = "red";
    } else {
        document.getElementById("msg").innerText = "";

        for (let i = 0; i < localStorage.length; i++) {
            let chave = localStorage.key(i);
            let usuario = JSON.parse(localStorage.getItem(chave));
            if (usuario.email === emaildigitado) {
                emailencontrado = true;
                if (usuario.senha === senhadigitada) {
                    senhaencontrada = true;
                    break;
                }
            }
        }
        if (emailencontrado) {
            if (senhaencontrada) {
                document.getElementById("msg").innerText = "Login Realizado!";
                document.getElementById("msg").style.color = "green";
                document.getElementById("txtemail").value = "";
                document.getElementById("txtsenha").value = "";
                login_user = true;
                localStorage.setItem("log", true);
                window.location.href = "index.html";

            } else {
                document.getElementById("msg").innerText = "Senha Incorreta!";
                document.getElementById("msg").style.color = "red";
                document.getElementById("txtsenha").style.borderColor = "red";
            }
        } else {
            document.getElementById("msg").innerText = "E-mail não encontrado!";
            document.getElementById("msg").style.color = "red";
        }
    }
}

function cadastrar() {
    let emaildigitado = document.getElementById("txtemail").value;
    let senhadigitada = document.getElementById("txtsenha").value;
    let contador = localStorage.getItem("contador");

    document.getElementById("msg").innerText = "";
    document.getElementById("txtemail").style.borderColor = "";
    document.getElementById("txtsenha").style.borderColor = "";

    if (emaildigitado === "" || senhadigitada === "") {
        if (senhadigitada === "") {
            document.getElementById("txtsenha").style.borderColor = "red";
        }
        if (emaildigitado === "") {
            document.getElementById("txtemail").style.borderColor = "red";
        }
        document.getElementById("msg").innerText = "Preencha os campos!";
        document.getElementById("msg").style.color = "red";
    } else {
        let emailExiste = false;
        let contador = localStorage.getItem("contador");
        if(contador == null){
            contador =0;
        }
        else{
            contador = parseInt(contador)+1;
        }
        localStorage.setItem("contador",contador)
        for (let i = 0; i < localStorage.length; i++) {
            let chave = localStorage.key(i);
            let usuario = JSON.parse(localStorage.getItem(chave));
            if (usuario.email === emaildigitado) {
                emailExiste = true;
                break;
            }
        }

        if (emailExiste) {
            document.getElementById("msg").innerText = "E-mail já cadastrado!";
            document.getElementById("msg").style.color = "red";
        } else {
            localStorage.setItem("user" + contador, JSON.stringify({ email: emaildigitado, senha: senhadigitada }));
            localStorage.setItem("contador", contador);
            document.getElementById("msg").innerText = "Cadastro realizado com sucesso!";
            document.getElementById("msg").style.color = "green";
            document.getElementById("txtemail").value = "";
            document.getElementById("txtsenha").value = "";
        }
    }
}

function sair() {
    localStorage.removeItem("log");
    login_user = false;
    document.getElementById("msg").innerText = "Logout realizado com sucesso!";
    document.getElementById("msg").style.color = "black";
}

function abrircad() {
    window.location.href = "cadastrar.html";
}

function pglogin(){
    window.location.href = "login.html";
}



function carregarProduto(titulo, descricao, imagem, preco, info) {
    localStorage.setItem("titulo_prod", titulo);
    localStorage.setItem("desc_prod", descricao);
    localStorage.setItem("img_prod", imagem);
    localStorage.setItem("preco_prod", preco);
    localStorage.setItem("info_prod", info);


    window.location.href = 'compra.html';
}

function produto1() {
    carregarProduto(
        "Memória Rise 16gb",
        "Memória RAM Rise Mode Z, 16GB, 3200MHz, DDR4, CL19, Preto - RM-D4-16G-3200Z",
        "imagens/memoria-rise-mode-z-16gb.jpeg",
        "329,90",
        "Características: - Marca: Rise Mode Gamer - Modelo: Z Series 16GB Preta - Part Number: RM-D4-16G-3200Z  Peso:54 gramas"
    );
}

function produto2() {
    carregarProduto(
        "Placa de Vídeo RTX4060 1-Click",
        "Placa de Vídeo RTX4060 1-Click OC 2X TecLab Lite GALAX NVIDIA GeForce, 8GB GDDR6, G-SYNC, DLSS, Ray Tracing",
        "imagens/placa-de-video-rtx-4060.jpeg",
        "1.948,99",
        "Equipada com uma memória GDDR17 de 8 Gbps 128GB e 6 bits, a GeForce RTX 4060 1-Click OC 2X suporta até 2490MHz para o seu exclusivo OC de 1 clique, com um cooler de slot duplo leve e as ventoinhas duplas de 92 mm, tornando-se o 2º design mais compacto das placas gráficas GALAX GeForce RTX série 40. Com o design ultra-eficiente do refrigerador, proporciona desempenhos impressionantes à temperatura ideal, mantendo uma operação extremamente silenciosa.Suportado pelo aplicativo Xtreme Tuner para OC móvel de 1 clique, exibição de informações da GPU na tela e configurações avançadas de OC."
    );
}

function produto3() {
    carregarProduto(
        "Headset Sem Fio Logitech",
        "Headset Sem Fio Logitech Zone Vibe 100, Drivers 40 mm, USB, Bluetooth, PC, Mobile, Grafite - 981-001214",
        "imagens/headset-sem-fio-logitech.jpeg",
        "539,90",
        "Headset sem fio. Cabo de carregamento USB-C. Bolsa de transporte. Documentação do usuário. Garantia de 1 ano da fabricante. Bateria com duração de até 20 horas. Conectividade Bluetooth. Alcance sem fio de até 30 m. Drivers de 40 mm. Cabo de carregamento USB-C de 1,5 m. 25% de plástico reciclado pós consumo."
    );
}

function produto4() {
    carregarProduto(
        "Notebook Dell 8Gb",
        "Notebook Gamer Dell Intel Core i5-13450HX, 8GB RAM, GeForce RTX 3050 6GB, SSD 512GB, 15.6 Full HD 120Hz, Windows 11, Preto - G15-i1300-A25P",
        "imagens/Notebook-Dell-I5-5th-8Gb-SSD-240Gb.jpeg",
        "5.499,99",
        "Com o novo notebook Dell G15 Gaming você terá uma incrível experiência em um notebook com um desempenho excepcional. Este notebook conta com a 13ª geração de processadores Intel Core, que fornecem um desempenho poderoso. As placas gráficas NVIDIA GeForce RTX utilizam a arquitetura NVIDIA Ampere, com novos núcleos RT, núcleos Tensor e multiprocessadores de streaming para recursos gráficos realistas com Ray Tracing."
    );
}

function produto5() {
    carregarProduto(
        "Monitor Empresarial PCFort T2403 23.8",
        "Monitor Empresarial PCFort T2403 23.8, Full HD, 70Hz, HDMI e VGA, Angulo Ajustável, VESA - T2403",
        "imagens/monitor.png",
        "1.948,99",
        "Desenvolvido para você desempenhar suas atividades do dia a dia com total tranquilidade, entregando muita qualidade com seu painel VA 23,8”, com resolução FullHD de 1920x1080. Com incríveis 23,8 o monitor empresarial PcFort chegou para entregar muita qualidade com seu painel VA."
    );
}

function carrinho(){
    let cont_carrinho = localStorage.getItem("cont_carrinho");
        if(cont_carrinho == null){
            cont_carrinho =0;
        }
        else{
            cont_carrinho = parseInt(cont_carrinho)+1;
        }
        localStorage.setItem("cont_carrinho",cont_carrinho);
        localStorage.setItem("item" + cont_carrinho, JSON.stringify({ nome: localStorage.getItem("titulo_prod"), preco: localStorage.getItem("preco_prod"), imagem: localStorage.getItem("img_prod")}));
        window.location.href = 'carrinho.html';
}

function limpar(){
    localStorage.clear();
    window.location.href = 'carrinho.html';
}


if (window.location.pathname.includes("carrinho.html")) {
    let soma = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let chave = localStorage.key(i);
        let itemStr = localStorage.getItem(chave);

        let item;
        try {
            item = JSON.parse(itemStr);
        } catch (e) {
            item = null;
        }

        if (item && chave.startsWith("item")) {
            let art = document.createElement("article");
            art.setAttribute("class", "produto");

            let img_car = document.createElement("img");
            img_car.setAttribute("src", item.imagem);
            img_car.setAttribute("class", "imagen_produto");

            let titulo_car = document.createElement("h3");
            titulo_car.innerText = item.nome;

            let espaco = document.createElement("br");

            let preco_car = document.createElement("p");
            preco_car.innerText = item.preco;

            document.querySelector("section").appendChild(art);
            art.appendChild(img_car);
            art.appendChild(titulo_car);
            art.appendChild(espaco);
            art.appendChild(preco_car);

            let precoNumerico = parseFloat(item.preco.replace(".", "").replace(",", "."));
            if (!isNaN(precoNumerico)) {
                soma += precoNumerico;
            } else {
                console.warn(`Preço inválido para o item: ${item.preco}`);
            }
        }
    }

    localStorage.setItem("soma", soma);
    document.getElementById("total").innerText = soma.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}



   


function totalcar(){
    let soma = parseFloat(localStorage.getItem("soma"))||0;

    for (let i = 0; i < localStorage.length; i++) {
        let chave = localStorage.key(i);
        let itemStr = localStorage.getItem(chave);

        let item;
        try {
            item = JSON.parse(itemStr);
        } catch (e) {
            item = null;
        }
        
        if (item && chave.startsWith("item")){
            soma += parseFloat(item.preco);
            
        }
        
}
}