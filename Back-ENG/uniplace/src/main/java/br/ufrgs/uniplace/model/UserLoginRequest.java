package br.ufrgs.uniplace.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLoginRequest {
    private Long matricula;
    private String senha;
}
