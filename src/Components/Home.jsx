import React from "react";

const skills = [
    {
        title: "Addition",
        description: "Learn basic addition with fun games.",
        image: "https://www.vhv.rs/dpng/d/467-4677846_collection-of-addition-addition-clipart-hd-png-download.png ",
        url:"/addition"
    },
    {
        title: "Multiplication",
        description: "Master multiplication tables easily.",
        image: "https://img.icons8.com/color/96/000000/multiply.png",
    },
    {
        title: "Alphabets Learning",
        description: "Explore and learn alphabets interactively.",
        image: "https://img.icons8.com/color/96/000000/abc.png",
    },
    {
        title: "Reasoning",
        description: "Boost logical thinking with reasoning games.",
        image: "https://img.icons8.com/color/96/000000/brain.png",
    },
];

const Home = () => {
    return (
        <div style={{ padding: "2rem", background: "#f5f7fa", minHeight: "100vh" }}>
            <h1 style={{ textAlign: "center", color: "#2d3a4b" }}>EduPlay - Gaming Education</h1>
            <p style={{ textAlign: "center", color: "#4b5d6e", marginBottom: "2rem" }}>
                Fun and interactive games to learn new skills!
            </p>
            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {skills.map((skill) => (
                    <div
                        key={skill.title}
                        style={{
                            background: "#fff",
                            borderRadius: "16px",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                            padding: "1.5rem",
                            width: "220px",
                            textAlign: "center",
                            transition: "transform 0.2s",
                        }}
                    >
                        <img
                            src={skill.image}
                            alt={skill.title}
                            style={{ width: "64px", height: "64px", marginBottom: "1rem" }}
                        />
                        <h2 style={{ color: "#2d3a4b", fontSize: "1.2rem" }}>{skill.title}</h2>
                        <p style={{ color: "#4b5d6e", fontSize: "1rem" }}>{skill.description}</p>
                        <a href="/addition">
                            <button
                        
                        style={{
                            marginTop: "1rem",
                            padding: "0.5rem 1.2rem",
                            background: "#4b8df8",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                        >
                            Play Now
                        </button>
                            </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;