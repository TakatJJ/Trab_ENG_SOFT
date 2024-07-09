package br.ufrgs.uniplace.respoitory;

import br.ufrgs.uniplace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
