export const TESTE_LOGIN_LOCADOR = {
  matricula: 304040,
  curso: "Engenharia de Computação",
  email: "oi@ufrgs.br",
  genero: "Masculino ",
  tipoDeUser: "Locador",
  propostas: [
    {
      id: 1,
      Locatario: {
        matricula: 304040,
        curso: "Engenharia de Computação",
        email: "lelele@ufrgs.br",
        genero: "Masculino",
        tipoDeUser: "Locatario",
      },
      State: "Aprovado",
      Room: {
        id: 1,
        titulo: "Quarto 1",
        descricao: "Quarto 1",
        preco: 1000,
        localizacao: "Rua 1",
        numeroQuartos: 5,
        campusProximo: "Campus do Vale",
        owner: {
          matricula: 374040,
          curso: "Engenharia da Computação",
          email: "oi2@ufrgs.br",
          genero: "Masculino Cisgênero",
        },
      },
    },
  ],
};
