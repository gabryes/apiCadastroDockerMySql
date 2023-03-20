function buscar() {
    var fcep = document.getElementById("cep").value

    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (this.readyState ==4 && this.status == 200) {
            
            var ret = JSON.parse(this.responseText);

            if (ret.erro) {
                alert("passou!");
                document.getElementById("logradouro").value = "";
                document.getElementById("bairro").value = "";
                document.getElementById("complemento").value = "";
                document.getElementById("localidade").value = "";
                document.getElementById("uf").value = "";
                
                alert("CEP Inválido. tente Novamente!");
            } else {
                
                document.getElementById("logradouro").value = ret.logradouro;
                document.getElementById("bairro").value = ret.bairro;
                document.getElementById("complemento").value = ret.complemento;
                document.getElementById("localidade").value = ret.localidade;
                document.getElementById("uf").value = ret.uf;
            }
        }
    
    
    };

    request.open("GET", "https://viacep.com.br/ws/"+fcep+"/json", true);
    request.send();
}