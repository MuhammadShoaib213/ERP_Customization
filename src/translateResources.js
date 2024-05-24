const axios = require('axios');
const fs = require('fs');

const translateText = async (text, targetLang) => {
  const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY';
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  const response = await axios.post(url, {
    q: text,
    target: targetLang,
    format: 'text'
  });

  return response.data.data.translations[0].translatedText;
};

const translateResources = async () => {
  const resources = JSON.parse(fs.readFileSync('src/i18nResources.json'));
  const targetLangs = ['nl'];

  for (const lang of targetLangs) {
    resources[lang] = { translation: {} };

    for (const key in resources.en.translation) {
      const text = resources.en.translation[key];
      const translatedText = await translateText(text, lang);
      resources[lang].translation[key] = translatedText;
    }
  }

  fs.writeFileSync('src/i18nResources.json', JSON.stringify(resources, null, 2));
};

translateResources();
