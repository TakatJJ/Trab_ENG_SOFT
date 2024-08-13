export const TESTE_LOGIN_LOCATARIO = {
  matricula: 304040,
  curso: "Engenharia de Computação",
  email: "oi@ufrgs.br",
  genero: "Masculino ",
  tipoDeUser: "Locatário",
  propostas: [
    {
      id: 1,
      locatario: {
        matricula: 304040,
        curso: "Engenharia de Computação",
        email: "lelele@ufrgs.br",
        genero: "Masculino",
        tipoDeUser: "Locatario",
      },
      state: "Aceito",
      room: {
        id: 1,
        titulo: "Quarto 1",
        descricao: "Quarto 1",
        foto: "",
        preco: 1000,
        localizacao: "Rua 1",
        numeroQuartos: 5,
        campusProximo: "Campus do Vale",
        dono: {
          matricula: 374040,
          curso: "Engenharia da Computação",
          email: "oi2@ufrgs.br",
          genero: "Masculino Cisgênero",
        },
      },
    },
  ],
};
