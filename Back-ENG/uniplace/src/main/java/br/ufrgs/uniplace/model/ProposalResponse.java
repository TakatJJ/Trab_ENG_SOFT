package br.ufrgs.uniplace.model;


import br.ufrgs.uniplace.DTO.AnuncioDTOs.AnuncioDTO;
import br.ufrgs.uniplace.DTO.UserDTOs.UserRenterDTO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProposalResponse {
    private Long id;
    private UserRenterDTO Locatario;
    private String State;
    private AnuncioDTO Room;
}
