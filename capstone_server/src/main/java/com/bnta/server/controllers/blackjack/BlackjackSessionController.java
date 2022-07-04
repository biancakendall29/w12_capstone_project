package com.bnta.server.controllers.blackjack;


import com.bnta.server.models.User;
import com.bnta.server.models.blackjack.BlackjackSession;
import com.bnta.server.repositories.BlackjackSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("blackjack_sessions")
public class BlackjackSessionController {

    @Autowired
    private BlackjackSessionRepository blackjackSessionRepository;

    @GetMapping //INDEX localhost:8080/blackjack_sessions
    public ResponseEntity<List<BlackjackSession>> getBlackjackSessions() {
        return new ResponseEntity<>(blackjackSessionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}") //localhost:8080/blackjack_sessions/1
    public ResponseEntity<Optional<BlackjackSession>> getBlackjackSession(@PathVariable Long id){
        return new ResponseEntity<>(blackjackSessionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping //POST localhost:8080/blackjack_sessions
    public ResponseEntity<BlackjackSession> createBlackjackSession(@RequestBody BlackjackSession newBlackjackSession){
        blackjackSessionRepository.save(newBlackjackSession);
        return new ResponseEntity<>(newBlackjackSession, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}") //DELETE localhost:8080/blackjack_sessions/1
    public ResponseEntity<BlackjackSession> deleteBlackjackSession(@PathVariable Long id){
        blackjackSessionRepository.deleteById(id);
        return new ResponseEntity(id,HttpStatus.OK);
    }
}
