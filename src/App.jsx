import React from "react";

import "./App.css";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import SocialButton from "./components/SocialButton/SocialButton";
import googleIcon from "./assets/ic-google.svg";
import linkedInIcon from "./assets/ic-linkedIn.svg";
import hhIcon from "./assets/ic-hh.svg";

function App() {
  const handleLogin = (provider) => {
    alert(`Попытка входа через ${provider}`);
  };

  return (
    <main className="app-container">
      <section className="showcase-section">
        <h1 className="showcase-title">Компонент: Карточка статьи</h1>
        <div className="cards-grid">
          <ArticleCard
            imageUrl="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1740"
            tag="Структура резюме"
            title="Как структурировать резюме правильно"
            description="Узнайте о ключевых разделах резюме и как их организовать для максимальной эффективности."
            linkUrl="#"
          />
          <ArticleCard
            imageUrl="https://c.files.bbci.co.uk/b026/live/06201860-78f6-11f0-b269-4d857ea3c116.jpg"
            tag="Сопроводительные письма"
            title="Искусство написания мотивационных писем: полное руководство"
            description="В этой статье мы разберем абсолютно все аспекты, от выбора правильного тона до разбора реальных примеров."
            linkUrl="#"
          />
          <ArticleCard
            imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932"
            tag="Портфолио"
            title="Краткость"
            description="Всего пара слов."
            linkUrl="#"
          />
        </div>
      </section>

      <section className="showcase-section">
        <h1 className="showcase-title">Компонент: Кнопка входа</h1>
        <div className="button-container">
          <SocialButton
            icon={googleIcon}
            text="Войти при помощи Google"
            onClick={() => handleLogin("Google")}
          />
          <SocialButton
            icon={linkedInIcon}
            text="Войти при помощи LinkedIn"
            onClick={() => handleLogin("LinkedIn")}
          />
          <SocialButton
            icon={hhIcon}
            text="Войти при помощи Hh"
            onClick={() => handleLogin("Hh")}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
