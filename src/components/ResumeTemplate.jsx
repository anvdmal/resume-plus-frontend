import React from "react";
import "../styles/ResumeTemplate.css";

const ResumeTemplate = ({data, template}) => {
    const {personal, contacts, experience, education, skills} = data;

    return (
        <div className={`resume-template resume-template--${template}`}>
            <header className="resume-header">
                {personal.photo && (
                    <img src={personal.photo} alt="Фото" className="avatar"/>
                )}

                <div className="info">
                    <h1>
                        {personal.firstName} {personal.lastName}
                    </h1>
                    <p>{personal.desiredPosition}</p>
                </div>

                <div className="contacts">
                    {contacts.social.map((s, i) => (
                        <p key={i}>
                            {s.type}: {s.link}
                        </p>
                    ))}
                </div>
            </header>

            <main className="main-content">
                <section className="education">
                    <h2>Образование</h2>
                    {education.map((e, i) => (
                        <div key={i}>
                            <h3>{e.institution}</h3>
                            <p>{e.specialization}</p>
                            <p>{e.level}, {e.graduationYear}</p>
                        </div>
                    ))}
                </section>

                {skills.aboutMe && (
                    <section className="aboutMe">
                        <h2>О себе</h2>
                        <p>{skills.aboutMe}</p>
                    </section>
                )}

                <section className="experience">
                    <h2>Опыт работы</h2>
                    {experience.map((exp, i) => (
                        <div key={i}>
                            <h3>{exp.position} — {exp.company}</h3>
                            <p>{exp.startDate} — {exp.endDate || "по наст. время"}</p>
                            <p>{exp.responsibilities}</p>
                        </div>
                    ))}
                </section>

                {skills.languages?.length > 0 && (
                    <section className="languages">
                        <h2>Языки</h2>
                        {skills.languages.map((l, i) => (
                            <p key={i}>{l.language} — {l.level}</p>
                        ))}
                    </section>
                )}

                {skills.list?.length > 0 && (
                    <section className="skills">
                        <h2>Навыки</h2>
                        <ul>
                            {skills.list.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>

        </div>
    );
};

export default ResumeTemplate;
