// @flow

const requireContext: Function = require.context('../src', true, /\/translations\/index.js$/);

const translations: Object = requireContext.keys().reduce((bucket, drop) => (
{...bucket, ...requireContext(drop).default}
), {});

export default (str: string) => {
    const lang: string = navigator.language || 'en-US';

    return translations[str] && translations[str][lang]
        ? translations[str][lang]
        : str;
};