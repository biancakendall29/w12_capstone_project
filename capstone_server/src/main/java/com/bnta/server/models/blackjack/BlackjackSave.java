package com.bnta.server.models.blackjack;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name="blackjack_saves")
public class BlackjackSave {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "save_timestamp")
    private LocalDate timestamp;

    @Column
    private int currentRound;

    @Column
    private int playerMoney;

    @Column
    private String deck;

    @Column
    private String playerHand;

    @Column
    private String dealerHand;

    @Column
    private String roundResult;

    @ManyToOne
    @JoinColumn(name="blackjack_sessions_id")
    @JsonIgnoreProperties({"session","saves"})
    private BlackjackSession session;

    public BlackjackSave(LocalDate timestamp,
                         int currentRound,
                         int playerMoney,
                         String deck,
                         String playerHand,
                         String dealerHand,
                         String roundResult,
                         BlackjackSession session)
    {
        this.timestamp = timestamp;
        this.currentRound = currentRound;
        this.playerMoney = playerMoney;
        this.deck = deck;
        this.playerHand = playerHand;
        this.dealerHand = dealerHand;
        this.roundResult = roundResult;
        this.session = session;
    }

    public BlackjackSave() {};

    public Long getId() {
        return id;
    }

    public LocalDate getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDate timestamp) {
        this.timestamp = timestamp;
    }

    public int getCurrentRound() {
        return currentRound;
    }

    public void setCurrentRound(int currentRound) {
        this.currentRound = currentRound;
    }

    public int getPlayerMoney() {
        return playerMoney;
    }

    public void setPlayerMoney(int playerMoney) {
        this.playerMoney = playerMoney;
    }

    public String getDeck() {
        return deck;
    }

    public void setDeck(String deck) {
        this.deck = deck;
    }

    public String getPlayerHand() {
        return playerHand;
    }

    public void setPlayerHand(String playerHand) {
        this.playerHand = playerHand;
    }

    public String getDealerHand() {
        return dealerHand;
    }

    public void setDealerHand(String dealerHand) {
        this.dealerHand = dealerHand;
    }

    public String getRoundResult() {
        return roundResult;
    }

    public void setRoundResult(String roundResult) {
        this.roundResult = roundResult;
    }

    public BlackjackSession getSession() {
        return session;
    }

    public void setSession(BlackjackSession session) {
        this.session = session;
    }
}
