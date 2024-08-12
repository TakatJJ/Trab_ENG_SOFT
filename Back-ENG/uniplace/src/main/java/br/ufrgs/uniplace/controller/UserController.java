package br.ufrgs.uniplace.controller;

import br.ufrgs.uniplace.model.*;
import br.ufrgs.uniplace.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @GetMapping("/{matricula}")
    public ResponseEntity<User> getUser(@PathVariable Long matricula) {
        User user = userService.findUserById(matricula);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/{matricula}/{senha}")
    public ResponseEntity<User> getUserByMatriculaAndSenha(@PathVariable Long matricula, @PathVariable String senha) {
        User user = userService.findUserByMatriculaAndSenha(matricula, senha);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> getUser(@RequestBody UserLoginRequest userLoginRequest) {
        Long matricula = userLoginRequest.getMatricula();
        String senha = userLoginRequest.getSenha();

        User user = userService.findUserByMatriculaAndSenha(matricula, senha);

        if (user != null) {
            // Cria uma lista de respostas para as propostas
            List<ProposalResponse> propostasResponses = new ArrayList<>();

            for (Proposal proposal : user.getPropostas()) {
                ProposalResponse response = new ProposalResponse();
                response.setId(proposal.getIdProposal());
                response.setState(proposal.getState());

                if (user.getTipoDeUser().equals("Locador")) {
                    // Pega o locatário da proposta
                    User locatario = userService.findUserById(proposal.getIdLocatario());
                    response.setLocador(locatario);
                } else if (user.getTipoDeUser().equals("Locatário")) {
                    // Pega o anúncio (quarto) da proposta
                    //Anuncio anuncio = anuncioService.findAnuncioById(proposal.getIdQuarto());
                    Anuncio anuncio = null;
                    response.setRoom(anuncio);
                }

                propostasResponses.add(response);
            }

            // Cria um objeto customizado para a resposta que inclui o User e as propostas personalizadas
            Map<String, Object> customResponse = new HashMap<>();
            customResponse.put("user", user);
            customResponse.put("propostas", propostasResponses);

            return ResponseEntity.ok(customResponse);
        } else {
            return ResponseEntity.status(404).build();
        }
    }


    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        savedUser.setPropostas(new ArrayList<>());
        return ResponseEntity.ok(savedUser);
    }
}
