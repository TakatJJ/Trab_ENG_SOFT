package br.ufrgs.uniplace.DTO.UserDTOs;
import lombok.Getter;
import lombok.Setter;
import br.ufrgs.uniplace.model.User;

@Getter
@Setter


public class UserDTO {
    private Long matricula;
    private String curso;
    private String email;
    private String genero;
    private String tipoDeUser;
    

    public UserDTO(User user) {
        this.matricula = user.getMatricula();
        this.curso = user.getCurso();
        this.email = user.getEmail();
        this.genero = user.getGenero();
        this.tipoDeUser = user.getTipoDeUser();
    }

    public UserDTO() {
    }
}
