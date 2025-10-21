import { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pdfInputRef = useRef(null);
    const jsonInputRef = useRef(null);

    const handleImportPDF = () => {
        pdfInputRef.current?.click();
    };

    const handleImportJSON = () => {
        jsonInputRef.current?.click();
    };

    const onPDFFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.type !== 'application/pdf') {
            alert('Пожалуйста, выберите PDF-файл.');
            return;
        }
        alert(`Выбран PDF: ${file.name}`);
        console.log('PDF файл:', file);
    };

    const onJSONFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target.result);
                alert(`Успешно загружен JSON с ${Object.keys(json).length} полями`);
                console.log('JSON данные:', json);
                // eslint-disable-next-line no-unused-vars
            } catch (err) {
                alert('Ошибка: файл не является валидным JSON');
            }
        };
        reader.readAsText(file);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.hamburger')) {
                setIsSidebarOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isSidebarOpen]);

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <button className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    ☰
                </button>

                <h1>Resume+</h1>

                <div className="import-buttons">
                    <button onClick={handleImportPDF} className="import-btn pdf">
                        Импорт из PDF
                    </button>
                    <button onClick={handleImportJSON} className="import-btn json">
                        Импорт из JSON
                    </button>
                </div>

                {}
                <input
                    type="file"
                    ref={pdfInputRef}
                    accept=".pdf"
                    style={{display: 'none'}}
                    onChange={onPDFFileChange}
                />
                <input
                    type="file"
                    ref={jsonInputRef}
                    accept=".json"
                    style={{ display: 'none' }}
                    onChange={onJSONFileChange}
                />


            </main>
        </>
    );
}

export default App;