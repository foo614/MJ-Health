import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
//Import all translation files
import translationBahasa from './translation/bm/translation.json'
import translationEnglish from './translation/en/translation.json'
import translationChinese from './translation/zh/translation.json'

const resources = {
    en: {
        home: translationEnglish,
    },
    zh: {
        home: translationChinese,
    },
    bm: {
        home: translationBahasa,
    },
}

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', //default language
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18next
