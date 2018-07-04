var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
	event.target.parentNode.classList.add("fadeOut")

	setTimeout(function() {
		//Somente executará nosso código caso o elemento em que clicamos seja um <td>
		//(porém mesmo sem essa verificação não apagou o cabeçalho)
	    if (event.target.tagName == 'TD') {
	        event.target.parentNode.remove()
	    }
	}, 500);
	
});