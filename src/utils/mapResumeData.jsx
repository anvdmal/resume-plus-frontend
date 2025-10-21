export const mapFormToResumeData = (form) => ({
    personal: {
        firstName: form.firstName,
        lastName: form.lastName,
        desiredPosition: form.desiredPosition,
        photo: form.photo || "",
    },
    contacts: {
        phone: form.phone,
        email: form.email,
        social: form.socialLinks?.map(s => ({
            type: s.platform,
            link: s.link,
        })) || [],
    },
    experience: form.workExperience || [],
    education: form.education || [],
    additionalEducation: form.additionalEducation || [],
    skills: {
        aboutMe: form.aboutMe || "",
        languages: form.languages || [],
        professionalSkills: form.professionalSkills || "",
    },
});

export const mapResumeDataToForm = (resume) => ({
    firstName: resume.personal?.firstName || "",
    lastName: resume.personal?.lastName || "",
    desiredPosition: resume.personal?.desiredPosition || "",
    photo: resume.personal?.photo || "",
    phone: resume.contacts?.phone || "",
    email: resume.contacts?.email || "",
    socialLinks: resume.contacts?.social?.map(s => ({
        platform: s.type,
        link: s.link,
    })) || [{ platform: "", link: "" }],
    workExperience: resume.experience || [],
    education: resume.education || [],
    additionalEducation: resume.additionalEducation || [],
    languages: resume.skills?.languages || [],
    aboutMe: resume.skills?.aboutMe || "",
    professionalSkills: resume.skills?.professionalSkills || "",
});
