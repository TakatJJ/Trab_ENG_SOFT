package br.ufrgs.uniplace.controller;


import br.ufrgs.uniplace.model.Anuncio;
import br.ufrgs.uniplace.service.AnuncioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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

//    @GetMapping
//    public ResponseEntity<List<Anuncio>> getAnuncios(@RequestParam Double minPreco, @RequestParam Double maxPreco,
//                                                     @RequestParam String localizacao, @RequestParam Integer numQuartos,
//                                                     @RequestParam String generoPreferido) {
//        List<Anuncio> anuncios = anuncioService.findAnunciosByFilters(minPreco, maxPreco, localizacao, numQuartos, generoPreferido);
//        return ResponseEntity.ok(anuncios);
//    }


}
