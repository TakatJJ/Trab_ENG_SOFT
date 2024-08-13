package br.ufrgs.uniplace.service;

import br.ufrgs.uniplace.DTO.AnuncioDTOs.AnuncioDTO;
import br.ufrgs.uniplace.model.Anuncio;
import br.ufrgs.uniplace.respoitory.AnuncioRepository;
import br.ufrgs.uniplace.respoitory.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.beans.factory.annotation.Value;


import java.util.List;

@RequiredArgsConstructor
@Service
public class AnuncioService {
    private final AnuncioRepository anuncioRepository;
    private final UserRepository userRepository;
    
    @Value("${image.upload.dir}")
    private String uploadDir;

    public Anuncio saveAnuncio(AnuncioDTO anuncioDTO) throws IOException {
        // Gera um nome de arquivo único usando o timestamp
        String fileName = System.currentTimeMillis() + ".txt"; // Timestamp garante um nome único
        Path currentPath = Paths.get("").toAbsolutePath();
        Path uploadPath = Paths.get(currentPath.toString(), uploadDir, fileName);
        Files.createDirectories(uploadPath.getParent());

        // Salva a string base64 no arquivo .txt
        Files.writeString(uploadPath, anuncioDTO.getFoto());
        anuncioDTO.setFoto(uploadPath.toAbsolutePath().toString());
        
        System.out.println("Image saved at: " + uploadPath.toAbsolutePath().toString());

        // Converte o DTO para a entidade e salva no banco de dados
        Anuncio anuncioToBeSaved = new Anuncio(anuncioDTO, userRepository.findById(anuncioDTO.getDono().getMatricula()).orElse(null));
        return anuncioRepository.save(anuncioToBeSaved);
}

    //public List<Anuncio> findAllAnuncios() {
    //   return anuncioRepository.findAll();
    //}

    public List<Anuncio> findAllAnuncios() {
        List<Anuncio> anuncios = anuncioRepository.findAll();

        // Decodificar a imagem em cada anúncio
        for (Anuncio anuncio : anuncios) {
            try {
                Path txtFilePath = Paths.get(anuncio.getFoto());
                String base64Image = Files.readString(txtFilePath);
                anuncio.setFoto(base64Image);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return anuncios;
    }

//    public Anuncio[] findAnunciosByPriceRange(Double minPreco, Double maxPreco) {
//        List<Anuncio> anunciosList = anuncioRepository.findByPrecoBetween(minPreco, maxPreco);
//        return anunciosList.toArray(new Anuncio[0]);
//    }
    public Anuncio[] findAnunciosByPriceRange(Double minPreco, Double maxPreco) {
    List<Anuncio> anunciosList = anuncioRepository.findByPrecoBetween(minPreco, maxPreco);

    // Decodificar a string base64 em cada anúncio
    for (Anuncio anuncio : anunciosList) {
        try {
            // O caminho do arquivo .txt é obtido do atributo 'foto' de cada anúncio
            Path txtFilePath = Paths.get(anuncio.getFoto());
            // Ler o conteúdo do arquivo .txt (que é a string base64)
            String base64Image = Files.readString(txtFilePath);
            // Definir a string base64 lida como a foto do anúncio
            anuncio.setFoto(base64Image);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    return anunciosList.toArray(new Anuncio[0]);
}

    public Anuncio findAnuncioById(Long id) {
        return anuncioRepository.findById(id).orElse(null);
    }


}
