import { useRef } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import ImportCard from './components/import-card/ImportCard';
import CreateResumeCard from './components/create-card/CreateResumeCard';
import Footer from './components/footer/Footer';
import './components/Layout.css';
import './App.css';

function App() {
    const pdfInputRef = useRef(null);
    const jsonInputRef = useRef(null);

    const handleImportPDF = () => pdfInputRef.current?.click();
    const handleImportJSON = () => jsonInputRef.current?.click();

    const onPDFFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.type !== 'application/pdf') {
            alert('Пожалуйста, выберите PDF-файл.');
            return;
        }
        alert(`Выбран PDF: ${file.name}`);
    };

    const onJSONFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target.result);
                alert(`Успешно загружен JSON с ${Object.keys(json).length} полями`);
                // eslint-disable-next-line no-unused-vars
            } catch (err) {
                alert('Ошибка: файл не является валидным JSON');
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="app-container">
            <Sidebar />
            <main className="main-content">
                <div className="content-wrapper">
                    <h1 className="greeting">Привет, Анна!</h1>

                    <section>
                        <h2 className="section-title">Импорт данных</h2>
                        <div className="import-cards-container">
                            <ImportCard
                                iconSrc="/ic-file-export.svg"
                                title="PDF"
                                description="Загрузи свое старое резюме в формате .pdf и преобразуй его"
                                onClick={handleImportPDF}
                                backgroundColor="rgba(77, 167, 179, 0.25)"
                            />
                            <ImportCard
                                iconSrc="/ic-hh.svg"
                                title="hh.ru"
                                description="Быстро создай новое резюме благодаря импорту данных из hh.ru"
                                onClick={handleImportJSON}
                                backgroundColor="rgba(167, 89, 120, 0.25)"
                            />
                        </div>
                    </section>

                    <section>
                        <h2 className="section-title">Создание идеального резюме</h2>
                        <div className="create-resume-cards-container">
                            <CreateResumeCard
                                iconSrc="/ic-file-edit.svg"
                                title="Конструктор резюме"
                                description="Создавай и редактируй свои резюме при помощи ИИ"
                                onClick={() => alert('Конструктор резюме')}
                                backgroundColor="rgba(218, 183, 133, 0.25)"
                            />
                            <CreateResumeCard
                                iconSrc="/ic-cover-letter.svg"
                                title="Сопроводительное письмо"
                                description="Дополни резюме – рекрутер точно обратит внимание"
                                onClick={() => alert('Сопроводительное письмо')}
                                backgroundColor="rgba(218, 183, 133, 0.25)"
                            />
                            <CreateResumeCard
                                iconSrc="/ic-website-builder.svg"
                                title="Конструктор сайта"
                                description="Преврати свое резюме в персональный веб-сайт одним кликом"
                                onClick={() => alert('Конструктор сайта')}
                                backgroundColor="rgba(218, 183, 133, 0.25)"
                            />
                        </div>
                    </section>
                </div>

                <input type="file" ref={pdfInputRef} accept=".pdf" style={{ display: 'none' }} onChange={onPDFFileChange} />
                <input type="file" ref={jsonInputRef} accept=".json" style={{ display: 'none' }} onChange={onJSONFileChange} />
            </main>
            {/*<Footer /> {}*/}
        </div>
    );
}

export default App;