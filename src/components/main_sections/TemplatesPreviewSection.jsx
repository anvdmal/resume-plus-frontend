import Template1 from "../../assets/img-template-one.png";
import Template2 from "../../assets/img-template-one.png"; //заменить на готовые шаблоны
import Template3 from "../../assets/img-template-one.png";
import "../../styles/main_sections/TemplatesPreviewSection.css";

export default function TemplatesPreviewSection() {
    return (
        <div className="templates-preview-section">
            <p className={"section-title"}>Примеры резюме</p>
            <div className="templates-container">
                <div className="template-card">
                    <img src={Template1} alt="Шаблон резюме 1"/>
                </div>
                <div className="template-card">
                    <img src={Template2} alt="Шаблон резюме 2"/>
                </div>
                <div className="template-card">
                    <img src={Template3} alt="Шаблон резюме 3"/>
                </div>
            </div>
        </div>
    );
}
