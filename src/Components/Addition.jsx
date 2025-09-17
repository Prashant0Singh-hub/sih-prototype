import React, { useState } from "react";


const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const Addition = () => {
    const [num1, setNum1] = useState(getRandomNumber());
    const [num2, setNum2] = useState(getRandomNumber());
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [score, setScore] = useState(0);

    const handleChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const checkAnswer = (e) => {
        e.preventDefault();
        if (parseInt(userAnswer) === num1 + num2) {
            setFeedback("Correct! 🎉");
            setScore(score + 1);
            setNum1(getRandomNumber());
            setNum2(getRandomNumber());
            setUserAnswer("");
        } else {
            setFeedback("Try again!");
        }
    };

    return (
        <div style={{ maxWidth: 350, margin: "auto", textAlign: "center", padding: 20 }}>
            <h2>Addition Game</h2>
            <p>Score: {score}</p>
            <form onSubmit={checkAnswer}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>
                    {num1} + {num2} = ?
                </div>
                <input
                    type="number"
                    value={userAnswer}
                    onChange={handleChange}
                    placeholder="Your answer"
                    style={{ fontSize: 18, width: 100 }}
                    required
                />
                <br />
                <button type="submit" style={{ marginTop: 10, fontSize: 16 }}>
                    Submit
                </button>
            </form>
            <div style={{ marginTop: 15, fontSize: 18, color: feedback === "Correct! 🎉" ? "green" : "red" }}>
                {feedback}
            </div>
        </div>
    );
};

export default Addition;