package com.bnta.server.models.blackjack;

import com.bnta.server.models.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "blackjack_stats")
public class BlackjackStats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "stats", cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"stats","user"})
    private List<BlackjackSession> sessions;

    @Column
    private int wins;

    @Column
    private int losses;

    @Column
    private int pushes;

    @Column
    private int blackjacks;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    @JsonIgnoreProperties({"user"})
    private User user;

    public BlackjackStats(int wins,
                          int losses,
                          int pushes,
                          int blackjacks,
                          User user) {
        this.sessions = new ArrayList<>();
        this.wins = wins;
        this.losses = losses;
        this.pushes = pushes;
        this.blackjacks = blackjacks;
        this.user = user;
    }

    public BlackjackStats() {
    }

    public Long getId() {
        return id;
    }

    public List<BlackjackSession> getSessions() {
        return sessions;
    }

    public void setSessions(List<BlackjackSession> sessions) {
        this.sessions = sessions;
    }

    public int getWins() {
        return wins;
    }

    public void setWins(int wins) {
        this.wins = wins;
    }

    public int getLosses() {
        return losses;
    }

    public void setLosses(int losses) {
        this.losses = losses;
    }

    public int getPushes() {
        return pushes;
    }

    public void setPushes(int pushes) {
        this.pushes = pushes;
    }

    public int getBlackjacks() {
        return blackjacks;
    }

    public void setBlackjacks(int blackjacks) {
        this.blackjacks = blackjacks;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
