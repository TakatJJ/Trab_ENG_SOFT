package br.ufrgs.uniplace.model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProposalResponse {
    private Long id;
    private User Locador;
    private String State;
    private Anuncio Room;
}
