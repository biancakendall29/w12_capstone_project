package com.bnta.server.models.blackjack;


import com.bnta.server.models.User;
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
    @JsonIgnoreProperties({"user","session","saves"})
    private List<BlackjackSave> saves;

    @Column(name = "session_timestamp")
    private LocalDate timestamp;

    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonIgnoreProperties({"user","sessions","saves"})
    private User user;

    public BlackjackSession(boolean isSessionFinished,
                            LocalDate timestamp,
                            User user) {
        this.isSessionFinished = isSessionFinished;
        this.saves = new ArrayList<>();
        this.timestamp = timestamp;
        this.user = user;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
