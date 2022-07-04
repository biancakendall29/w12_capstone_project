package com.bnta.server.models.blackjack;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "blackjack_sessions")
public class BlackjackSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private boolean isSessionFinished;

    @OneToMany(mappedBy = "session", cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"session","user"})
    private List<BlackjackSave> saves;

    @Column(name = "session_timestamp")
    private LocalDate timestamp;

    @ManyToOne
    @JoinColumn(name= "blackjack_stat_id")
    @JsonIgnoreProperties({"sessions","user"})
    private BlackjackStats stats;

    public BlackjackSession(boolean isSessionFinished,
                            LocalDate timestamp,
                            BlackjackStats stats) {
        this.isSessionFinished = isSessionFinished;
        this.saves = new ArrayList<>();
        this.timestamp = timestamp;
        this.stats = stats;
    }

    public BlackjackSession() {}

    public Long getId() {
        return id;
    }

    public boolean isSessionFinished() {
        return isSessionFinished;
    }

    public void setSessionFinished(boolean sessionFinished) {
        isSessionFinished = sessionFinished;
    }

    public List<BlackjackSave> getSaves() {
        return saves;
    }

    public void setSaves(List<BlackjackSave> saves) {
        this.saves = saves;
    }

    public LocalDate getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDate timestamp) {
        this.timestamp = timestamp;
    }

    public BlackjackStats getStats() {
        return stats;
    }

    public void setStats(BlackjackStats stats) {
        this.stats = stats;
    }
}
