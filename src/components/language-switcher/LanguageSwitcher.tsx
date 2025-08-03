'use client';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ar">العربية</option>
        </select>
    );
};

export default LanguageSwitcher;
