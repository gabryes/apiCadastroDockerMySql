function fazGet(url, body) {
    
    let request = new XMLHttpRequest ()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type","application/json")
    request.send(JSON.stringify(body))
    request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log('okay')
        var ret = JSON.parse(this.responseText);

        if (ret.erro) {
            document.getElementById("nome").value = "";
            document.getElementById("telefone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("logradouro").value = "";
            document.getElementById("logradouro").value = "";
            document.getElementById("bairro").value = "";
            document.getElementById("complemento").value = "";
            document.getElementById("localidade").value = "";
            document.getElementById("uf").value = "";

            alert("CEP Inválido. tente Novamente!");
        } else {
            document.getElementById("nome").value = ret[0].nome;
            document.getElementById("telefone").value = ret[0].telefone;
            document.getElementById("email").value = ret[0].email;
            document.getElementById("logradouro").value = ret[0].logradouro;
            document.getElementById("cep").value = ret[0].cep;
            document.getElementById("bairro").value = ret[0].bairro;
            document.getElementById("numero").value = ret[0].numero;
            document.getElementById("complemento").value = ret[0].complemento;
            document.getElementById("localidade").value = ret[0].cidade;
            document.getElementById("uf").value = ret[0].uf;
        }
    }
    }
}
function consultar() {
    event.preventDefault()
    let url = "http://localhost:3000/form/find"
     let id = document.getElementById("id").value 
    let email = document.getElementById("email").value 

body = {
     "id" : parseInt(id),
    "email" : email,
}

fazGet(url, body)

}

function fazPost(url, body){
    console.log("body=",body)
    let request = new XMLHttpRequest ()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type","application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText
}

function cadastrar(){
    event.preventDefault()
    let url = "http://localhost:3000/form/register"
    let id = document.getElementById("id").value 
    let nome = document.getElementById("nome").value 
    let email = document.getElementById("email").value 
    let telefone = document.getElementById("telefone").value 
    let cep = document.getElementById("cep").value 
    let logradouro = document.getElementById("logradouro").value 
    let complemento = document.getElementById("complemento").value 
    let numero = document.getElementById("numero").value 
    let bairro = document.getElementById("bairro").value 
    let cidade = document.getElementById("localidade").value 
    let uf = document.getElementById("uf").value 
    let idtipo_cliente = document.getElementById("tipoCliente").value

body = {
    "id" : id,
    "nome" : nome,
    "email" : email,
    "telefone": telefone,
    "cep": cep,
    "logradouro": logradouro,
    "complemento": complemento,
    "numero": numero,
    "bairro": bairro,
    "cidade": cidade,
    "uf": uf,
    "idtipo_cliente": parseInt(idtipo_cliente)
}

fazPost(url, body)

}

function tipos() {

    var server = new XMLHttpRequest();

    server.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var change = JSON.parse(this.responseText);

            console.log(change)

            document.getElementById("tipo1").innerText = change[0].tipo_cliente;
            document.getElementById("tipo2").innerText = change[1].tipo_cliente;
            document.getElementById("tipo3").innerText = change[2].tipo_cliente;

        }
    };

    server.open("GET", "http://localhost:3000/form/clientTypes", true)
    server.send();
}
