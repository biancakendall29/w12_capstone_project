package com.bnta.server.repositories;

import com.bnta.server.models.blackjack.BlackjackSave;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlackjackSaveRepository  extends JpaRepository<BlackjackSave, Long> {
}
