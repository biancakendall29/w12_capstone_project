package com.bnta.server.repositories;

import com.bnta.server.models.blackjack.BlackjackSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlackjackSessionRepository  extends JpaRepository<BlackjackSession, Long> {
}
