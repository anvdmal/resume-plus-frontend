export const mapFormToResumeData = (form) => ({
    personal: {
        firstName: form.firstName,
        lastName: form.lastName,
        middleName: form.middleName || "",
        desiredPosition: form.desiredPosition || "",
        birthDate: form.birthDate || "",
        country: form.country || "",
        city: form.city || "",
        photo: form.photo || "",
    },

    contacts: {
        phone: form.phone || "",
        email: form.email || "",
        social:
            form.socialLinks?.map((s) => ({
                type: s.platform,
                link: s.link,
            })) || [],
    },

    experience:
        form.workExperience?.map((exp) => ({
            company: exp.company || "",
            position: exp.position || "",
            country: exp.country || "",
            city: exp.city || "",
            startDate: exp.startDate || "",
            endDate: exp.endDate || "",
            responsibilities: exp.description || "",
        })) || [],

    education:
        form.education?.map((e) => ({
            institution: e.institution || "",
            specialization: e.specialty || "",
            level: e.level || "",
            graduationYear: e.endYear || "",
        })) || [],

    additionalEducation:
        form.additionalEducation?.map((a) => ({
            course: a.course || "",
            provider: a.provider || "",
            year: a.year || "",
            hasCertificate: a.hasCertificate || false,
        })) || [],

    skills: {
        aboutMe: [form.personalQualities, form.professionalSkills, form.about]
            .filter(Boolean)
            .join("\n\n"),

        languages:
            form.languages?.map((l) => ({
                language: l.language || "",
                level: l.level || "",
            })) || [],

        driverCategories: form.driverCategories || {},
        medicalSkills: !!form.medicalSkills,
        militarySkills: !!form.militarySkills,
    },
});

export const mapResumeDataToForm = (resume) => ({
    firstName: resume.personal?.firstName || "",
    lastName: resume.personal?.lastName || "",
    middleName: resume.personal?.middleName || "",
    desiredPosition: resume.personal?.desiredPosition || "",
    birthDate: resume.personal?.birthDate || "",
    country: resume.personal?.country || "",
    city: resume.personal?.city || "",
    photo: resume.personal?.photo || "",

    phone: resume.contacts?.phone || "",
    email: resume.contacts?.email || "",
    socialLinks:
        resume.contacts?.social?.map((s) => ({
            platform: s.type,
            link: s.link,
        })) || [{ platform: "", link: "" }],

    workExperience:
        resume.experience?.map((exp) => ({
            company: exp.company || "",
            position: exp.position || "",
            country: exp.country || "",
            city: exp.city || "",
            startDate: exp.startDate || "",
            endDate: exp.endDate || "",
            description: exp.responsibilities || "",
        })) || [],

    education:
        resume.education?.map((e) => ({
            institution: e.institution || "",
            specialty: e.specialization || "",
            level: e.level || "",
            endYear: e.graduationYear || "",
        })) || [],

    additionalEducation:
        resume.additionalEducation?.map((a) => ({
            course: a.course || "",
            provider: a.provider || "",
            year: a.year || "",
            hasCertificate: a.hasCertificate || false,
        })) || [],

    languages:
        resume.skills?.languages?.map((l) => ({
            language: l.language || "",
            level: l.level || "",
        })) || [],

    driverCategories: resume.skills?.driverCategories || {},
    medicalSkills: !!resume.skills?.medicalSkills,
    militarySkills: !!resume.skills?.militarySkills,

    personalQualities: resume.skills?.aboutMe?.split("\n\n")[0] || "",
    professionalSkills: resume.skills?.aboutMe?.split("\n\n")[1] || "",
    about: resume.skills?.aboutMe?.split("\n\n")[2] || "",
});
