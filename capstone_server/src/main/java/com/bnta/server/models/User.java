package com.bnta.server.models;

import com.bnta.server.models.blackjack.BlackjackStats;
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

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"user"})
    private List<BlackjackStats> blackjackStats;

    public User(String username,
                String email,
                String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.wallet = 1000L;
        this.blackjackStats = new ArrayList<>();
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

    public List<BlackjackStats> getBlackjackStats() {
        return blackjackStats;
    }

    public void setBlackjackStats(List<BlackjackStats> blackjackStats) {
        this.blackjackStats = blackjackStats;
    }
}
