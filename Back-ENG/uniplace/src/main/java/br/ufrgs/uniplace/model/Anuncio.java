package br.ufrgs.uniplace.model;

import com.fasterxml.jackson.annotation.JsonAlias;

import br.ufrgs.uniplace.DTO.AnuncioDTOs.AnuncioDTO;
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
    @JsonAlias("nearestCampus")
    private String campus;
    @ManyToOne
    private User user;
    @JsonAlias("photo")
    private String foto;

    public Anuncio(AnuncioDTO anuncio, User user) {
        this.id = anuncio.getId();
        this.titulo = anuncio.getTitulo();
        this.descricao = anuncio.getDescricao();
        this.preco = anuncio.getPreco();
        this.localizacao = anuncio.getLocalizacao();
        this.numeroQuartos = anuncio.getNumeroQuartos();
        this.campus = anuncio.getCampus();
        this.user = user;
        this.foto = anuncio.getFoto();
    }

    public Anuncio() {
    }

}
