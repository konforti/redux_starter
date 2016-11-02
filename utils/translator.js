// @flow

// const requireContext: Function = require.context('../src', true, /\/translations\/index.js$/);

// const translations: Object = requireContext.keys().reduce((bucket, drop) => (
// {...bucket, ...requireContext(drop).default}
// ), {});
const t = process.env.TRANSLATIONS || [];
const T = typeof t === 'string' ? t.split(',').filter(n => n) : t;
console.log(T)
const translations: Object = T.reduce((bucket, drop) => {
    const path: string[] = drop.split('/').slice(1, -1);
    return {
        ...bucket,
        ...require(`../src/${path.join('/')}/translations/index`).default,
    };
}, {});

export default (str: string) => {
    const lang: string = navigator.language || 'en-US';

    return translations[str] && translations[str][lang]
        ? translations[str][lang]
        : str;
};