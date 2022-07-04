package com.bnta.server.models;

import com.bnta.server.models.blackjack.BlackjackSession;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String username;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private Long wallet;

    @Column
    private int blackjackWins;

    @Column
    private int blackjackLosses;

    @Column
    private int blackjackPushes;

    @Column
    private int blackjackBlackjacks;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"user","sessions"})
    private List<BlackjackSession> sessions;

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.wallet = 1000L;
        this.blackjackWins = 0;
        this.blackjackLosses = 0;
        this.blackjackPushes = 0;
        this.blackjackBlackjacks = 0;
        this.sessions = new ArrayList<>();
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getWallet() {
        return wallet;
    }

    public void setWallet(Long wallet) {
        this.wallet = wallet;
    }

    public int getBlackjackWins() {
        return blackjackWins;
    }

    public void setBlackjackWins(int blackjackWins) {
        this.blackjackWins = blackjackWins;
    }

    public int getBlackjackLosses() {
        return blackjackLosses;
    }

    public void setBlackjackLosses(int blackjackLosses) {
        this.blackjackLosses = blackjackLosses;
    }

    public int getBlackjackPushes() {
        return blackjackPushes;
    }

    public void setBlackjackPushes(int blackjackPushes) {
        this.blackjackPushes = blackjackPushes;
    }

    public int getBlackjackBlackjacks() {
        return blackjackBlackjacks;
    }

    public void setBlackjackBlackjacks(int blackjackBlackjacks) {
        this.blackjackBlackjacks = blackjackBlackjacks;
    }

    public List<BlackjackSession> getSessions() {
        return sessions;
    }

    public void setSessions(List<BlackjackSession> sessions) {
        this.sessions = sessions;
    }
}
