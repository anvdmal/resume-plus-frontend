import React from "react";
import "../styles/ResumeTemplate.css";

const ResumeTemplate = ({data, template}) => {
    const {personal, contacts, experience, education, skills} = data;

    return (
        <div className={`resume-template resume-template--${template}`}>
            <header className="resume-header">
                {personal.photo && <img src={personal.photo} alt="Фото" className="avatar"/>}
                <div>
                    <h1>{personal.firstName} {personal.lastName}</h1>
                    <p>{personal.desiredPosition}</p>
                </div>
            </header>

            <aside className="sidebar">
                <section>
                    <h3>Контакты</h3>
                    {contacts.social.map((s, i) => (
                        <p key={i}>{s.type}: {s.link}</p>
                    ))}
                </section>

                <section>
                    <h3>О себе</h3>
                    <p>{skills.aboutMe}</p>
                </section>

                <section>
                    <h3>Языки</h3>
                    {skills.languages.map((l, i) => (
                        <p key={i}>{l.language} — {l.level}</p>
                    ))}
                </section>
            </aside>

            <main className="main-content">
                <section>
                    <h2>Образование</h2>
                    {education.map((e, i) => (
                        <div key={i}>
                            <h3>{e.institution}</h3>
                            <p>{e.specialization}</p>
                            <p>{e.level}, {e.graduationYear}</p>
                        </div>
                    ))}
                </section>

                <section>
                    <h2>Опыт работы</h2>
                    {experience.map((exp, i) => (
                        <div key={i}>
                            <h3>{exp.position} — {exp.company}</h3>
                            <p>{exp.startDate} — {exp.endDate || "по наст. время"}</p>
                            <p>{exp.responsibilities}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default ResumeTemplate;