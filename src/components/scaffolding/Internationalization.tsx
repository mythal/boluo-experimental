import React from 'react';
import { useAtom } from 'jotai';
import { isSupportedLang, languageAtom, useTranslation } from '../../locals/key';

export const Internationalization = () => {
  const [lang, setLang] = useAtom(languageAtom);
  const _ = useTranslation();
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.target.value;
    if (isSupportedLang(value)) {
      setLang(value);
    }
  };
  return (
    <div css={[]}>
      <div css={[]}>
        <select css={[]} value={lang} onChange={handleChange}>
          {Object.entries(([key, name]: [string, string]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div css={[]}>{_('Internationalization')}</div>
    </div>
  );
};
