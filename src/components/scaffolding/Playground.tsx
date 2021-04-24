import { atom, useAtom } from 'jotai';
import { focusAtom } from 'jotai/optics';
import { scaffoldContainer } from './Scaffolding';
import { css } from '@emotion/react';
import { size } from '../../styles/base';
import { controlStyle } from '../../styles/controls';

interface Outer {
  a: {
    b: {
      c: number;
    };
  };
  d: {
    e: string;
  };
}

const initOuter: Outer = { a: { b: { c: 42 } }, d: { e: 'hello' } };
const outer = atom(initOuter);
const c = focusAtom(outer, (optic) => optic.prop('a').prop('b').prop('c'));
const e = focusAtom(outer, (optic) => optic.prop('d').prop('e'));

function Counter() {
  const [counter, setCounter] = useAtom(c);
  console.log('Counter render');
  return (
    <div
      css={css`
        padding: 0 ${size(2)};
      `}
    >
      {counter}s{' '}
      <button css={controlStyle.button} onClick={() => setCounter((counter) => counter + 1)}>
        +1s
      </button>
    </div>
  );
}

function Input() {
  const [text, setText] = useAtom(e);
  console.log('Input render');
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export function Playground() {
  return (
    <div css={scaffoldContainer}>
      <Counter />
      <Input />
      <div>
        庭那來改。遠比由布當怎當生和……不青一中到費下界天電然、高數不定算本世生就得案家文無年樓傷。一她你一想的聲，管推有賣為過界前野以立極樂壓品同小工被達銀。教幾至求有化望的可；馬使行小走事不那紀學兩華：竟腦人一足化們開以天物電裡不公，造性藥麼實。
        要一越以能，間定受。為保一教英東費孩正叫影蘭，會旅得路。另能回居世，中輪媽思斯利才麼習招後友孩了門外自結如趣時了看、覺教男生候性樣我發生品愛在笑我示來因臺，國自操滿有現花利識比不世起不個裡達就收智有預己著去時的個德家問了大兩天是克我效方現。聲一使關哥？加究起生中場過下孩？全相滿有時他紀！說團直重點腦新！想專府小了……帶充加不臺到排少萬形法過母就真一不出太來師影片來不的價利交病像視年理這眾海為改家了變以不。沒心學，者型皮；府沒資期言有受麗此非展只邊投不；四特建各：在新之空的子地可，比能治間那的別活好愛轉要變燈對統深後，麗可事話：低法其氣身法意決口的，度文直樣作。可星她土的們見立政幾智表聲青，題可統一音生見計關進能施葉。反在草你指樂立不：苦以會大！的候子登一空長是際計跑；個專傳發下在異吸。股今地的用細，她等質小專保的關是益因英才的院交手老、的也性氣！
        界你的，決有小是絕與那：會城長裡動把區今觀口有子滿；治向做？沒年建手？改我點無，意任黑至實過士這只布全今。如學唱政業身家線還名府。經好竟後子長民在了。就月的帶失系模羅河北角：演立北市清物一工天了朋日花母其的難，什雄消的。作謝做全著向子必朋育，實好道教表二很的時西點的於黃吃出加、術市身配。二著球新。以因醫之離念得血不團前必興、入在配間立重到害：取著致認像發製的這活孩發專美員的變出車親吃備計看大語一前請。
        好像在團，紙勢生；認往圖地方後的是長能，看無環斷落正內人模進長天言八就麼，了像星成不我，就門時去多心如人生物意環包巴高……人的決展的朋一覺聽遠景歷早職女親一家！不成綠論最中海運的上的平備此，過事因任器天去生放安風民大過對海自立兒們提、自性是文難？由有是般信斷因非？了石示與人得力四情何樹計面車來傷就片家只；平綠了然國都花，什期才規等成土談現這們品車取管可登太有認小研起南。一年時足女我中事條個做！
        間的出見始一員式如準子我山容？信天地親心關，眼物省保人，的意命視幾！
        日我究北安商？了真前花朋老晚馬、歌國已有多發復？園光何時庭使建，論相有朋用質學的美傳後量當上來然，我以病兒到麼南議難關此議甚兒入係合……言心了在什位們場我自車，經口直師靈電義。詩講聞過其卻會頭加母時內可兒、的實們，學物人馬，類自商法這。
        開便政寶以！ 中香多本血大持到個開簡士不後進？痛觀常外華的。 最本視，時行目過？業經臺。
        歷國司車經質值臺童係布麼非那，後口空。府聲了慢進前命展，的傳除備站賽國朋，了如不藥裡於陽母，取學住就我根運，的質主想來輕度幾老加？
        神小什道重多自康，氣員人海好夜當蘭開球嚴。
      </div>
    </div>
  );
}
