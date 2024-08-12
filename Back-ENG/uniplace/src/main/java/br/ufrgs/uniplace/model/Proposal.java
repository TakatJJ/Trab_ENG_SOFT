package br.ufrgs.uniplace.model;

import com.fasterxml.jackson.annotation.JsonAlias;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "propostas")
@Data

public class Proposal {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @JsonAlias("numero")
    private Long idProposal;
    @JsonAlias("LocatárioID")
    private Long idLocatario;
    @JsonAlias("LocadorID")
    private Long idLocador;
    @JsonAlias("RoomId")
    private Long idQuarto;
    @JsonAlias("State")
    private String state;

}
