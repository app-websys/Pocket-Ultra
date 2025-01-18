function exportarProjeto(nomeProjeto, dadosProjeto) {
      const blob = new Blob([JSON.stringify(dadosProjeto)], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = nomeProjeto + ".json";
      link.click();
    }

    function importarDoArquivo() {
      const input = document.getElementById("importarArquivo");
      const arquivo = input.files[0];

      if (arquivo) {
          const leitor = new FileReader();
          leitor.onload = function (e) {
              try {
                  // Tentando analisar como JSON para validação básica
                  const dadosProjeto = JSON.parse(e.target.result);
                  alert("Projeto importado com sucesso!");
                  console.log(dadosProjeto); // Aqui você pode trabalhar com os dados no editor
              } catch (error) {
                  alert("Arquivo inválido ou corrompido");
              }
          };
          leitor.readAsText(arquivo);
      } else {
          alert("Por favor, selecione um arquivo!");
      }
    }