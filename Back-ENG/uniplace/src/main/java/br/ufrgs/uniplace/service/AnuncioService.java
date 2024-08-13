package br.ufrgs.uniplace.service;

import br.ufrgs.uniplace.DTO.AnuncioDTOs.AnuncioDTO;
import br.ufrgs.uniplace.model.Anuncio;
import br.ufrgs.uniplace.respoitory.AnuncioRepository;
import br.ufrgs.uniplace.respoitory.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import br.ufrgs.uniplace.service.UserService;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AnuncioService {
    private final AnuncioRepository anuncioRepository;
    private final UserRepository userRepository;

    public Anuncio saveAnuncio(AnuncioDTO anuncioDTO) {
        Anuncio anuncioToBeSaved = new Anuncio(anuncioDTO, userRepository.findById(anuncioDTO.getDono().getMatricula()).orElse(null));
        return anuncioRepository.save(anuncioToBeSaved);
    }

    public List<Anuncio> findAllAnuncios() {
        return anuncioRepository.findAll();
    }

    public Anuncio[] findAnunciosByPriceRange(Double minPreco, Double maxPreco) {
        List<Anuncio> anunciosList = anuncioRepository.findByPrecoBetween(minPreco, maxPreco);
        return anunciosList.toArray(new Anuncio[0]);
    }

    public Anuncio findAnuncioById(Long id) {
        return anuncioRepository.findById(id).orElse(null);
    }


}
