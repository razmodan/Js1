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

	var alturaEhValida = true;
	var pesoEhValido = true;

	if(peso <= 0 || peso >= 1000){
		console.log("peso inválido!");
		tdImc.textContent = "peso inválido!";
		pesoEhValido = false;

		paciente.classList.add("paciente-invalido");
	}

	if(altura <= 0 || altura >= 3.0){
		console.log("altura inválida!");
		tdImc.textContent = "altura inválida!";
		alturaEhValida = false;

		paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValida){
		imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}
}