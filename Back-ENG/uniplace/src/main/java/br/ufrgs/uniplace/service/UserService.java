package br.ufrgs.uniplace.service;

import br.ufrgs.uniplace.DTO.AnuncioDTOs.AnuncioDTO;
import br.ufrgs.uniplace.DTO.UserDTOs.UserLogged;
import br.ufrgs.uniplace.DTO.UserDTOs.UserOwnerDTO;
import br.ufrgs.uniplace.DTO.UserDTOs.UserRenterDTO;
import br.ufrgs.uniplace.model.User;
import br.ufrgs.uniplace.model.UserLoginRequest;
import br.ufrgs.uniplace.respoitory.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import br.ufrgs.uniplace.model.Proposal;
import br.ufrgs.uniplace.model.ProposalResponse;
import java.util.List;
import java.util.ArrayList;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final AnuncioService anuncioService;
    private final ProposalService proposalService;

    public User findUserById(Long matricula) {
        return userRepository.findById(matricula).orElse(null);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User findUserByMatriculaAndSenha(Long matricula, String senha) {
        return userRepository.findByMatriculaAndSenha(matricula, senha);
    }

    public UserLogged ResolveLogin(UserLoginRequest userLoginRequest) {
        Long matricula = userLoginRequest.getMatricula();
        String senha = userLoginRequest.getSenha();

        User user = this.findUserByMatriculaAndSenha(matricula, senha);

        if (user != null) {
            if (user.getTipoDeUser().equals("Locatário")) {
                List<ProposalResponse> propostasResponses = new ArrayList<ProposalResponse>();
                List<Proposal> propostas = proposalService.findProposalByidLocatario(user.getMatricula());
                for (Proposal proposta : propostas) {
                    ProposalResponse propostaResponse = new ProposalResponse();
                    propostaResponse.setId(proposta.getIdProposal());
                    propostaResponse.setLocatario(new UserRenterDTO( this.findUserById(user.getMatricula())));
                    propostaResponse.setRoom(new AnuncioDTO(this.anuncioService.findAnuncioById(proposta.getIdQuarto())));
                    propostaResponse.setState(proposta.getState());
                    propostasResponses.add(propostaResponse);
                }
                return new UserLogged(user, propostasResponses );
            } else {
                List<ProposalResponse> propostasResponses = new ArrayList<ProposalResponse>();
                List<Proposal> propostas = proposalService.findProposalByidLocador(user.getMatricula());
                for (Proposal proposta : propostas) {
                    ProposalResponse propostaResponse = new ProposalResponse();
                    propostaResponse.setId(proposta.getIdProposal());
                    propostaResponse.setLocatario(new UserRenterDTO( this.findUserById(proposta.getIdLocatario())));
                    propostaResponse.setRoom(new AnuncioDTO(this.anuncioService.findAnuncioById(proposta.getIdQuarto())));
                    propostaResponse.setState(proposta.getState());
                    propostasResponses.add(propostaResponse);
                }
                return new UserLogged(user, propostasResponses );
        
            }

        } else {
            return null;
        }
        
    }



}
