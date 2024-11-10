import React, { useEffect, useRef } from "react";
import "./Achievements.css"; // Import the CSS file

const Achievements = () => {
  const achievements = [
    { title: "Among top 22.38% of Leetcode coders" },
    {
      title: "Certified in Full Stack Development using MERN",
      details: "by Dr. Angela Yu (Udemy)",
    },
    { title: "Qualified GATE (EC) 2024" },
    { title: "Solved 300+ problems of DSA" },
    { title: "Participated in the AWS DeepRacer contest" },
    {
      title: "Completed the course on Introduction to Machine Learning and Reinforcement Learning",
      details: "by AWS"
    },
    {
      title: "Certified in Python learning",
      details: "by FreeCodeCamp",
    },
    { title: "Participated in Smart India Hackathon (SIH) 2023" },
    { title: "Certified for attending workshops on Embedded Systems" }
  ];

  // Reference for the achievements section
  const achievementsRef = useRef(null);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Unobserve once animated
        }
      },
      { threshold: 0.1 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => {
      if (achievementsRef.current) observer.unobserve(achievementsRef.current);
    };
  }, []);

  return (
    <section className="achievements-background">
      <div className="achievements-section" ref={achievementsRef}>
        <h2 className="achievements-heading">Achievements</h2>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <li key={index} className="achievements-item">
              <strong>{achievement.title}</strong>
              {achievement.details && ` - ${achievement.details}`}
              {achievement.link && (
                <>
                  {" "}
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                    [Certificate]
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
