var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
	var pacientes = document.querySelectorAll(".paciente");

	//console.log(this.value);

	var conteudoCampoFiltro = this.value;

	if(this.value.length > 0){
		pacientes.forEach( function(paciente) {
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;

			var expressao = new RegExp(conteudoCampoFiltro, "i"); //não tem como usar o this.value por causa do forEach

			//código comentado para fazer o filtro sem ReGex(expressões regulares)
			//var comparavel = nome.substring(0, conteudoCampoFiltro.length);
			//var comparavelMinusculo = comparavel.toLowerCase();
			//var conteudoCampoFiltroMinusculo = conteudoCampoFiltro.toLowerCase();

			//if(conteudoCampoFiltroMinusculo == comparavelMinusculo)
			if(expressao.test(nome)){
				paciente.classList.remove("invisivel");
			}
			else{
				paciente.classList.add("invisivel");
			}
		});
			
	}
	else{
		pacientes.forEach( function(paciente) {
			paciente.classList.remove("invisivel");
		});
	}
});