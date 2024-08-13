package br.ufrgs.uniplace.controller;

import br.ufrgs.uniplace.DTO.AnuncioDTOs.AnuncioDTO;
import br.ufrgs.uniplace.DTO.UserDTOs.UserLogged;
import br.ufrgs.uniplace.DTO.UserDTOs.UserRenterDTO;
import br.ufrgs.uniplace.model.*;
import br.ufrgs.uniplace.service.UserService;
import br.ufrgs.uniplace.service.AnuncioService;
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
        UserLogged customResponse = userService.ResolveLogin(userLoginRequest);
        if (customResponse != null) {
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
