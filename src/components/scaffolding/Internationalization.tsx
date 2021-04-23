import React from 'react';
import { css } from '@linaria/core';
import { languageAtom, useTranslation } from '../../states/i18n';
import { useAtom } from 'jotai';
import { size } from '../../styles/base';

const styles = {
  container: css``,
  select: css`
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
    border-radius: ${size(0.5)};
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;

    &::-ms-expand {
      display: none;
    }

    &:hover {
      border-color: #888;
    }

    &:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #222;
      outline: none;
    }

    & option {
      font-weight: normal;
    }
  `,
};

export const Internationalization = () => {
  const [lang, setLang] = useAtom(languageAtom)
  const _ = useTranslation();
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    const value = event.target.value;
    if (value === 'zh' || value === 'ja') {
      setLang(value);
    } else {
      setLang('default')
    }
  }
  return (
    <div className={styles.container}>
      <div className={css`max-width: 10rem; padding: ${size(2)}`}>
        <select className={styles.select} value={lang} onChange={handleChange}>
          <option value="en">English</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
        </select>
      </div>

      <div className={css`padding: ${size(2)}`}>
        {_('Internationalization')}
      </div>
    </div>
  )
};