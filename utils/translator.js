// @flow

// const requireContext: Function = require.context('../src', true, /\/translations\/index.js$/);

// const translations: Object = requireContext.keys().reduce((bucket, drop) => (
// {...bucket, ...requireContext(drop).default}
// ), {});

const translations: Object = process.env.TRANSLATIONS.reduce((bucket, drop) => {
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