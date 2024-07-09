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

//    public List<Anuncio> findAnunciosByFilters(Double minPreco, Double maxPreco, String localizacao, Integer numQuartos, String generoPreferido) {
//        return anuncioRepository.findByPrecoAluguelBetweenAndLocalizacaoAndNumQuartosAndGeneroPreferido(
//                minPreco, maxPreco, localizacao, numQuartos, generoPreferido);
//    }

}
