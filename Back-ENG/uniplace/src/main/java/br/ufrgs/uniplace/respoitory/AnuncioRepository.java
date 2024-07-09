package br.ufrgs.uniplace.respoitory;

import br.ufrgs.uniplace.model.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {
//    List<Anuncio> findByPrecoAluguelBetweenAndLocalizacaoAndNumQuartosAndGeneroPreferido(
//            Double minPreco, Double maxPreco, String localizacao, Integer numQuartos, String generoPreferido);
}

