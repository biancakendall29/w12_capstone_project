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
    public ResponseEntity<List<User>> getAllUsersAndFilters(@RequestParam(required = false, name="username") String username ) {
        if (username != null) {
            return new ResponseEntity<>(userRepository.findUserByUsername(username) , userRepository.findUserByUsername(username).isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK);
        } else {
            return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
        }

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

    @PutMapping(value = "/{id}") //UPDATE localhost:8080/users/1
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long id, @RequestBody User upUser) throws Exception {
        Optional<User> user = userRepository.findById(id);
        if(user.isEmpty()){
            throw new Exception("User with Id: " + id + "not found");
        } else {
            User u = user.get();
            u.setBlackjackWins(upUser.getBlackjackWins());
            u.setBlackjackLosses(upUser.getBlackjackLosses());
            u.setBlackjackPushes(upUser.getBlackjackPushes());
            u.setBlackjackBlackjacks(upUser.getBlackjackBlackjacks());
            u.setSessions(upUser.getSessions());
            User updatedUser = userRepository.save(u);
            return new ResponseEntity<>(updatedUser,HttpStatus.OK);
        }
    }
}
