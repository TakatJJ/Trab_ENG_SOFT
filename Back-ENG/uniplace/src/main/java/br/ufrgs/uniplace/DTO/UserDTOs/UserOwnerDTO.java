package br.ufrgs.uniplace.DTO.UserDTOs;

import lombok.Getter;
import lombok.Setter;
import br.ufrgs.uniplace.model.User;

@Getter
@Setter
public class UserOwnerDTO extends UserDTO {

    public UserOwnerDTO(User user) {
        super(user);
    }

    public UserOwnerDTO() {
    }
}
