package br.ufrgs.uniplace.DTO.AnuncioDTOs;

import com.fasterxml.jackson.annotation.JsonAlias;

import br.ufrgs.uniplace.DTO.UserDTOs.UserOwnerDTO;
import br.ufrgs.uniplace.model.Anuncio;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class AnuncioDTO {
    
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
    @JsonAlias("owner")
    private UserOwnerDTO dono;
    @JsonAlias("photo")
    private String foto;

    public AnuncioDTO(Anuncio anuncio) {
        this.id = anuncio.getId();
        this.titulo = anuncio.getTitulo();
        this.descricao = anuncio.getDescricao();
        this.preco = anuncio.getPreco();
        this.localizacao = anuncio.getLocalizacao();
        this.numeroQuartos = anuncio.getNumeroQuartos();
        this.campus = anuncio.getCampus();
        this.dono = new UserOwnerDTO(anuncio.getUser());
        this.foto = anuncio.getFoto();
    }

    public AnuncioDTO() {
    }
}
