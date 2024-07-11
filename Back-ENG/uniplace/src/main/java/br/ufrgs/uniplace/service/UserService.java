package br.ufrgs.uniplace.service;

import br.ufrgs.uniplace.model.User;
import br.ufrgs.uniplace.respoitory.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public User findUserById(Long matricula) {
        return userRepository.findById(matricula).orElse(null);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User findUserByMatriculaAndSenha(Long matricula, String senha) {
        return userRepository.findByMatriculaAndSenha(matricula, senha);
    }
}
