package br.ufrgs.uniplace.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "usuarios")
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    private Long matricula;
    private String name;
    private String email;
    private String genero;
    private String curso;



}
