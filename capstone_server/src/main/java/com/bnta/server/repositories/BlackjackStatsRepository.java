package com.bnta.server.repositories;

import com.bnta.server.models.blackjack.BlackjackStats;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlackjackStatsRepository  extends JpaRepository<BlackjackStats, Long> {
}
