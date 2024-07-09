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

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }
}
