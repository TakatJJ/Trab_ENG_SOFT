package br.ufrgs.uniplace.service;

import br.ufrgs.uniplace.model.Anuncio;
import br.ufrgs.uniplace.respoitory.AnuncioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AnuncioService {
    private final AnuncioRepository anuncioRepository;

    public Anuncio saveAnuncio(Anuncio anuncio) {
        return anuncioRepository.save(anuncio);
    }

    public List<Anuncio> findAllAnuncios() {
        return anuncioRepository.findAll();
    }

    public Anuncio[] findAnunciosByPriceRange(Double minPreco, Double maxPreco) {
        List<Anuncio> anunciosList = anuncioRepository.findByPrecoBetween(minPreco, maxPreco);
        return anunciosList.toArray(new Anuncio[0]);
    }


}
