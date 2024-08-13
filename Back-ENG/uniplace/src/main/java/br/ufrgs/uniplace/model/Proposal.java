package br.ufrgs.uniplace.model;

import com.fasterxml.jackson.annotation.JsonAlias;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "propostas")
@Data

public class Proposal {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @JsonAlias("id")
    private Long idProposal;
    @JsonAlias("idLocatario")
    private Long idLocatario;
    @JsonAlias("idLocador")
    private Long idLocador;
    @JsonAlias("idQuarto")
    private Long idQuarto;
    @JsonAlias("state")
    private String state;

    public Proposal() {
    }

}
