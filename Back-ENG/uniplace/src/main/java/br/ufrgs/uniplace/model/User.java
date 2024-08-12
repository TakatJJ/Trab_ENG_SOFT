package br.ufrgs.uniplace.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "usuarios")
@Data
public class User {
    @Id
    @JsonAlias("matricula")
    private Long matricula;
    @JsonAlias("senha")
    private String senha;
    @JsonAlias("curso")
    private String curso;
    @JsonAlias("email")
    private String email;
    @JsonAlias("genero")
    private String genero;
    @JsonAlias("tipoDeUser")
    private String tipoDeUser;
    @OneToMany
    @JsonAlias("minhasPropostas")
    private List<Proposal> propostas;
    
    
}
