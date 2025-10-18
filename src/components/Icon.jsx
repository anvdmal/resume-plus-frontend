import React, { useEffect, useState } from 'react';

const Icon = ({ name }) => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        const loadSvg = async () => {
            try {
                const response = await fetch(`/src/assets/${name}.svg`);
                const svgText = await response.text();
                setSvgContent(svgText);
            } catch (err) {
                console.error(`Не удалось загрузить ${name}.svg`, err);
            }
        };

        loadSvg();
    }, [name]);

    return <span dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

export default Icon;