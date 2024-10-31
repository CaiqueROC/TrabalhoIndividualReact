import React, { useState } from "react";
import "./CalculadoraIMC.css";

function CalculadoraIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {

    if (peso == 0 || peso < 0 || altura == 0 || altura < 0) {
      alert("Insira valores válidos para peso e altura.");
    }

    if (peso && altura) {
      const imcCalculado = peso / (altura * altura);
      setImc(imcCalculado.toFixed(2));

      let classificacaoResultado = "";

      if (imcCalculado < 18.5) {
        classificacaoResultado = "Baixo peso";
      } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
        classificacaoResultado = "Peso ideal";
      } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
        classificacaoResultado = "Sobrepeso";
      } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
        classificacaoResultado = "Obesidade Grau 1";
      } else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
        classificacaoResultado = "Obesidade Grau 2";
      } else {
        classificacaoResultado = "Obesidade Extrema";
      }

      setClassificacao(classificacaoResultado);
    }
  };

  return (
    <div class="body">
      <header>
        <h1>Calculadora de IMC</h1>
      </header>

      <main>
        <form action="">
          <div className="peso">
            <label>
              Peso (kg):
              <input
                type="number"
                onChange={(e) => setPeso(e.target.value)}
              />
            </label>
          </div>

          <div className="altura">
            <label>
              Altura (metros):
              <input
                type="number"
                onChange={(e) => setAltura(e.target.value)}
              />
            </label>
          </div>
        </form>
        <button onClick={calcularIMC}>Calcular IMC</button>

        {imc && (
          <div className="resultado">
            <h2>Seu IMC: {imc}</h2>
            <p>Classificação: {classificacao}</p>
          </div>
        )}
      </main>

      <footer>
        <h2>Desenvolvido por &copy;Caíque Ramos</h2>
      </footer>
    </div>
  );
}

export default CalculadoraIMC;
