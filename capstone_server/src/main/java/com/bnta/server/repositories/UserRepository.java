package com.bnta.server.repositories;

import java.util.List;
import com.bnta.server.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

        List<User> findUserByUsername (String name);
}
