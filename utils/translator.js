const requireContext = require.context('../src', true, /\/translations\/index.js$/);

const translations = requireContext.keys().reduce((bucket, drop) => (
    {...bucket, ...requireContext(drop).default}
), {});

export default (str) => {
    const lang = navigator.language || 'en-US';

    return translations[str] && translations[str][lang]
        ? translations[str][lang]
        : str;
};