'use client';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    toggleSidebar?: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ toggleSidebar }) => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        if (toggleSidebar) toggleSidebar();  // close sidebar after language change
    };

    return (
        <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="p-1 rounded border"
        >
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ar">العربية</option>
        </select>
    );
};

export default LanguageSwitcher;
