package com.bnta.server.controllers;

import com.bnta.server.models.User;
import com.bnta.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping //INDEX localhost:8080/users
    public ResponseEntity<List<User>> getUsers() {
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}") //localhost:8080/users/1
    public ResponseEntity<Optional<User>> getUser(@PathVariable Long id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping //POST localhost:8080/users
    public ResponseEntity<User> createUser(@RequestBody User newUser){
        userRepository.save(newUser);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}") //DELETE localhost:8080/users/1
    public ResponseEntity<User> deleteUser(@PathVariable Long id){
        userRepository.deleteById(id);
        return new ResponseEntity(id,HttpStatus.OK);
    }
}
