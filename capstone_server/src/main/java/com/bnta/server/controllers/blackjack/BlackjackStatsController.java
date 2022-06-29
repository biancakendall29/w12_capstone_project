package com.bnta.server.controllers.blackjack;

import com.bnta.server.models.blackjack.BlackjackStats;
import com.bnta.server.repositories.BlackjackStatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("blackjack_stats")
public class BlackjackStatsController {

    @Autowired
    private BlackjackStatsRepository blackjackStatsRepository;

    @GetMapping //INDEX localhost:8080/blackjack_stats
    public ResponseEntity<List<BlackjackStats>> getBlackjackStats() {
        return new ResponseEntity<>(blackjackStatsRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}") //localhost:8080/blackjack_stats/1
    public ResponseEntity<Optional<BlackjackStats>> getBlackjackStat(@PathVariable Long id){
        return new ResponseEntity<>(blackjackStatsRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping //POST localhost:8080/blackjack_stats
    public ResponseEntity<BlackjackStats> createBlackjackStat(@RequestBody BlackjackStats newBlackjackStat){
        blackjackStatsRepository.save(newBlackjackStat);
        return new ResponseEntity<>(newBlackjackStat, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}") //DELETE localhost:8080/blackjack_stats/1
    public ResponseEntity<BlackjackStats> deleteBlackjackStat(@PathVariable Long id){
        blackjackStatsRepository.deleteById(id);
        return new ResponseEntity(id,HttpStatus.OK);
    }
}
