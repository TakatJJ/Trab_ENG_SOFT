package br.ufrgs.uniplace.controller;

import br.ufrgs.uniplace.model.User;
import br.ufrgs.uniplace.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }
}
