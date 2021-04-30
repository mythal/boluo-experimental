import React from 'react';
import { useAtom } from 'jotai';
import { isSupportedLang, languageAtom, supportedLanguages, useTranslation } from '../../locals/key';
import { paragraph } from '../../styles/atom';

export function LanguagesSelect() {
  const [lang, setLang] = useAtom(languageAtom);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.target.value;
    if (isSupportedLang(value)) {
      setLang(value);
    }
  };
  const options = Object.entries(supportedLanguages).map(([key, name]) => (
    <option value={key} key={key}>
      {name}
    </option>
  ));
  return (
    <select css={[]} value={lang} onChange={handleChange}>
      {options}
    </select>
  );
}

export const Internationalization = () => {
  const _ = useTranslation();
  return (
    <div css={[]}>
      <p css={paragraph}>{_.I18N}</p>
      <LanguagesSelect />
    </div>
  );
};
