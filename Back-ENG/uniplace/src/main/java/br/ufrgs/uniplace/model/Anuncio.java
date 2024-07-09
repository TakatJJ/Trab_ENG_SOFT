package br.ufrgs.uniplace.model;

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
    private Long id;
    private Long titulo;
    private String fotos;
    private String descricao;
    private Double preco;
    private String localizacao;
    private Long numeroQuartos;
    @ManyToOne
    private User user;

}
