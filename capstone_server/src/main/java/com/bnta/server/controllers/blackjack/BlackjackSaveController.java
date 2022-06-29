package com.bnta.server.controllers.blackjack;


import com.bnta.server.models.blackjack.BlackjackSave;
import com.bnta.server.repositories.BlackjackSaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("blackjack_saves")
public class BlackjackSaveController {

    @Autowired
    private BlackjackSaveRepository blackjackSaveRepository;

    @GetMapping
    public ResponseEntity<List<BlackjackSave>> getBlackjackSaves() {
        return new ResponseEntity<>(blackjackSaveRepository.findAll(), HttpStatus.OK);
    }

}
