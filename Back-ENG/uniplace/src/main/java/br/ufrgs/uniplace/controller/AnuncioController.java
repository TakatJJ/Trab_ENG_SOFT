package br.ufrgs.uniplace.controller;


import br.ufrgs.uniplace.model.Anuncio;
import br.ufrgs.uniplace.service.AnuncioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import br.ufrgs.uniplace.DTO.AnuncioDTOs.AnuncioDTO;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/anuncios")
public class AnuncioController {

    private final AnuncioService anuncioService;

    @PostMapping
    public ResponseEntity<Anuncio> createAnuncio(@RequestBody AnuncioDTO anuncioDTO) throws IOException {
        System.out.println("AnuncioDTO: " + anuncioDTO);
        Anuncio savedAnuncio = anuncioService.saveAnuncio(anuncioDTO);
        return ResponseEntity.ok(savedAnuncio);
    }

    @GetMapping
    public ResponseEntity<List<Anuncio>> getAnuncios() {
        List<Anuncio> anuncios = anuncioService.findAllAnuncios();
        return ResponseEntity.ok(anuncios);
    }

    @GetMapping("/price")
    public ResponseEntity<AnuncioDTO[]> getAnunciosByPriceRange(@RequestParam Double minPreco, @RequestParam Double maxPreco) {
        Anuncio[] anuncios = anuncioService.findAnunciosByPriceRange(minPreco, maxPreco);
        AnuncioDTO[] anunciosDTO = new AnuncioDTO[anuncios.length];
        for (int i = 0; i < anuncios.length; i++) {
            AnuncioDTO anuncioDTO = new AnuncioDTO(anuncios[i]);
            anunciosDTO[i] = anuncioDTO;
        }
        return ResponseEntity.ok(anunciosDTO);
    }

}
