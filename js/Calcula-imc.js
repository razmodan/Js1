var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i< pacientes.length; i++){

	paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var imc = peso / (altura * altura);

	var tdImc = paciente.querySelector(".info-imc");

	var alturaEhValida = validaAltura(altura);
	var pesoEhValido = validaPeso(peso);

	if(!pesoEhValido){
		console.log("peso inválido!");
		tdImc.textContent = "peso inválido!";
		pesoEhValido = false;

		paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValida){
		console.log("altura inválida!");
		tdImc.textContent = "altura inválida!";
		alturaEhValida = false;

		paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValida){
		imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso){
	if(peso > 0 && peso < 1000)
		return true;
	
	return false;
}

function validaAltura(altura){
	if(altura > 0 && altura < 3.0)
		return true;

	return false;
}

function validaPaciente(paciente){
	var erros = [];

	if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }
    else if(!validaPeso(paciente.peso)){
    	erros.push("Peso é inválido");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }
    else if(!validaAltura(paciente.altura)){
    	erros.push("Altura é inválido");
    }
    
	return erros;
}