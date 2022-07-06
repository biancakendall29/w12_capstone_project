package com.bnta.server.components;


import com.bnta.server.models.User;
import com.bnta.server.models.blackjack.BlackjackSave;
import com.bnta.server.models.blackjack.BlackjackSession;
import com.bnta.server.repositories.BlackjackSaveRepository;
import com.bnta.server.repositories.BlackjackSessionRepository;
import com.bnta.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;

@Component
public class Dataloader implements ApplicationRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BlackjackSaveRepository blackjackSaveRepository;

    @Autowired
    private BlackjackSessionRepository blackjackSessionRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {


        User user1 = new User("johndoe123", "johndoe@gmail.com", "JohnRules3");
        userRepository.saveAll(Arrays.asList(user1));

//        BlackjackSession blackjackSession1 = new BlackjackSession(false, LocalDate.of(2022,6,29),user1);
//        blackjackSessionRepository.saveAll(Arrays.asList(blackjackSession1));

//        BlackjackSave save1 = new BlackjackSave(LocalDate.of(2022,6,29), 1, 500, "C2,C3,C4,C5,C6", "C10, SA", "DK,DA", "push", blackjackSession1);
//        blackjackSaveRepository.saveAll(Arrays.asList(save1));


    }
}
