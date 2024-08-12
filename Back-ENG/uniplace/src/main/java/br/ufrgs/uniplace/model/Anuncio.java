package br.ufrgs.uniplace.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "anuncios")
@Getter
@Setter
public class Anuncio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonAlias("matricula")
    private Long id;
    @JsonAlias("title")
    private String titulo;
    // private String fotos;
    @JsonAlias("description")
    private String descricao;
    @JsonAlias("price")
    private Double preco;
    @JsonAlias("location")
    private String localizacao;
    @JsonAlias("numberOfRooms")
    private Long numeroQuartos;
    @JsonAlias("campusProximo")
    private String campus;
    @ManyToOne
    private User user;

}
