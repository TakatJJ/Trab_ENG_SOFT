package br.ufrgs.uniplace.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "usuarios")
@Data
public class User {
    @Id
    private Long matricula;
    private String email;
    private String genero;
    private String curso;
    private String senha;
}
