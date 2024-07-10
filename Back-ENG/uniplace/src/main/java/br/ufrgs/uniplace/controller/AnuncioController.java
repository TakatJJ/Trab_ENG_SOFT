package br.ufrgs.uniplace.controller;


import br.ufrgs.uniplace.model.Anuncio;
import br.ufrgs.uniplace.service.AnuncioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/anuncios")
public class AnuncioController {

    private final AnuncioService anuncioService;

    @PostMapping
    public ResponseEntity<Anuncio> createAnuncio(@RequestBody Anuncio anuncio) {
        Anuncio savedAnuncio = anuncioService.saveAnuncio(anuncio);
        return ResponseEntity.ok(savedAnuncio);
    }

    @GetMapping
    public ResponseEntity<List<Anuncio>> getAnuncios() {
        List<Anuncio> anuncios = anuncioService.findAllAnuncios();
        return ResponseEntity.ok(anuncios);
    }

    @GetMapping("/price")
    public ResponseEntity<List<Anuncio>> getAnunciosByPriceRange(@RequestParam Double minPreco, @RequestParam Double maxPreco) {
        List<Anuncio> anuncios = anuncioService.findAnunciosByPriceRange(minPreco, maxPreco);
        return ResponseEntity.ok(anuncios);
    }

}
