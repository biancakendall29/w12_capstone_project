package com.bnta.server.controllers.blackjack;


import com.bnta.server.models.User;
import com.bnta.server.models.blackjack.BlackjackSave;
import com.bnta.server.repositories.BlackjackSaveRepository;
import com.bnta.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("blackjack_saves")
public class BlackjackSaveController {

    @Autowired
    private BlackjackSaveRepository blackjackSaveRepository;

    @GetMapping //INDEX localhost:8080/blackjack_saves
    public ResponseEntity<List<BlackjackSave>> getBlackjackSaves() {
        return new ResponseEntity<>(blackjackSaveRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}") //localhost:8080/blackjack_saves/1
    public ResponseEntity<Optional<BlackjackSave>> getBlackjackSave(@PathVariable Long id){
        return new ResponseEntity<>(blackjackSaveRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping //POST localhost:8080/blackjack_saves
    public ResponseEntity<BlackjackSave> createBlackjackSave(@RequestBody BlackjackSave newBlackjackSave){
        blackjackSaveRepository.save(newBlackjackSave);
        return new ResponseEntity<>(newBlackjackSave, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}") //DELETE localhost:8080/blackjack_saves/1
    public ResponseEntity<BlackjackSave> deleteBlackjackSave(@PathVariable Long id){
        blackjackSaveRepository.deleteById(id);
        return new ResponseEntity(id,HttpStatus.OK);
    }
}
