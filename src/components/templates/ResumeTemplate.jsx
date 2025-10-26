import React from "react";
import "../../styles/ResumeTemplate.css";

const ResumeTemplate = ({data = {}, template = "default"}) => {
    const {
        personal = {},
        contacts = {social: []},
        experience = [],
        education = [],
        additionalEducation = [],
        skills = {languages: [], driverCategories: {}},
    } = data;

    return (
        <div className={`resume-template resume-template-${template}`}>
            <header className="resume-header">
                {personal.photo && (
                    <img
                        src={personal.photo}
                        alt="Фото"
                        className="avatar"
                    />
                )}
                <div>
                    <h1>
                        {personal.lastName} {personal.firstName}{" "}
                        {personal.middleName}
                    </h1>
                    <p className="desired-position">{personal.desiredPosition}</p>

                    {(personal.city || personal.country || personal.birthDate) && (
                        <p className="personal-meta">
                            {[personal.city, personal.country, personal.birthDate]
                                .filter(Boolean)
                                .join(" • ")}
                        </p>
                    )}
                </div>
            </header>

            <aside className="sidebar">
                <section>
                    <h3>Контакты</h3>
                    {contacts.phone && <p>{contacts.phone}</p>}
                    {contacts.email && <p>{contacts.email}</p>}
                    {contacts.social?.map((s, i) => (
                        <p key={i}>
                            {s.type}:{" "}
                            <a href={s.link} target="_blank" rel="noreferrer">
                                {s.link}
                            </a>
                        </p>
                    ))}
                </section>

                {skills.aboutMe && (
                    <section>
                        <h3>О себе</h3>
                        <p>{skills.aboutMe}</p>
                    </section>
                )}

                {skills.languages?.length > 0 && (
                    <section>
                        <h3>Языки</h3>
                        {skills.languages.map((l, i) => (
                            <p key={i}>
                                {l.language} — {l.level}
                            </p>
                        ))}
                    </section>
                )}

                {(Object.values(skills.driverCategories || {}).some(Boolean) ||
                    skills.medicalSkills ||
                    skills.militarySkills) && (
                    <section>
                        <h3>Дополнительные навыки</h3>
                        <ul>
                            {Object.entries(skills.driverCategories || {}).map(
                                ([cat, has]) =>
                                    has && <li key={cat}>Категория {cat}</li>
                            )}
                            {skills.medicalSkills && <li>Медицинская книжка</li>}
                            {skills.militarySkills && <li>Военный билет</li>}
                        </ul>
                    </section>
                )}
            </aside>

            <main className="main-content">
                {education?.length > 0 && (
                    <section>
                        <h2>Образование</h2>
                        {education.map((e, i) => (
                            <div key={i} className="education-item">
                                <h3>{e.institution}</h3>
                                <p>{e.specialization}</p>
                                <p>
                                    {e.level} • {e.graduationYear}
                                </p>
                            </div>
                        ))}
                    </section>
                )}

                {additionalEducation?.length > 0 && (
                    <section>
                        <h2>Курсы и дополнительное обучение</h2>
                        {additionalEducation.map((a, i) => (
                            <div key={i} className="additional-education-item">
                                <h3>{a.course}</h3>
                                <p>{a.provider} • {a.year}</p>
                            </div>
                        ))}
                    </section>
                )}

                {experience?.length > 0 && (
                    <section>
                        <h2>Опыт работы</h2>
                        {experience.map((exp, i) => (
                            <div key={i} className="experience-item">
                                <h3>
                                    {exp.position} — {exp.company}
                                </h3>
                                <p>
                                    {exp.startDate} —{" "}
                                    {exp.endDate || "по настоящее время"}
                                </p>
                                <p>
                                    {[exp.city, exp.country].filter(Boolean).join(", ")}
                                </p>
                                <p>{exp.responsibilities}</p>
                            </div>
                        ))}
                    </section>
                )}
            </main>
        </div>
    );
};

export default ResumeTemplate;
