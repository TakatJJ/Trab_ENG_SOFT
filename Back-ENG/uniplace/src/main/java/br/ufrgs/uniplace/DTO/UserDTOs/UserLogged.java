package br.ufrgs.uniplace.DTO.UserDTOs;

import java.util.List;

import br.ufrgs.uniplace.model.ProposalResponse;
import br.ufrgs.uniplace.model.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLogged 
{
    private Long matricula;
    private String curso;
    private String email;
    private String genero;
    private String tipoDeUser;
    private List<ProposalResponse> propostas;

    public UserLogged(User user,  List<ProposalResponse> propostasResponses) {
        
        this.matricula = user.getMatricula();
        this.curso = user.getCurso();
        this.email = user.getEmail();
        this.genero = user.getGenero();
        this.tipoDeUser = user.getTipoDeUser();
        this.propostas = propostasResponses;
        };

    public UserLogged() {
    }
    
}
