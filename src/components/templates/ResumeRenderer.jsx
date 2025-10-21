import React from "react";
import ResumeTemplate from "./ResumeTemplate.jsx";

const ResumeRenderer = ({ data, template }) => {
    return <ResumeTemplate data={data} template={template} />;
};

export default ResumeRenderer;