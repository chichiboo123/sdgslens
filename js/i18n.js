// i18n translations for SDGs Lens
const I18N = {
  ko: {
    htmlLang: 'ko',
    brand: {
      title: 'SDGs <span>렌즈</span>',
      subtitle: 'SDGs 렌즈로 살펴보는 세계 뉴스',
    },
    meta: { streak: '탐구 완료' },
    steps: {
      s1: '뉴스 보기',
      s2: 'SDGs 고르기',
      s3: '분석 결과',
    },
    news: {
      placeholderSource: '준비 중',
      placeholderTitle: '“뉴스 가져오기” 버튼을 눌러 시작해요',
      placeholderBody: 'UN·UNICEF·UNDP 공식 기사를 가져와, SDGs 17개 목표와 연결해 봅니다.',
      readOriginal: '원문 보기',
    },
    actions: {
      fetch: '뉴스 가져오기',
      fetchAgain: '다른 뉴스 보기',
      fetching: '불러오는 중...',
      hint: '힌트',
      hintHide: '힌트 숨기기',
      analyze: 'SDGs 렌즈로 분석하기',
      next: '다음 뉴스 탐구하기',
      retry: '이 뉴스 다시 풀기',
    },
    sdg: {
      heading: '이 기사와 관련 있는 SDGs를 골라보세요',
      help: '여러 개 선택할 수 있어요. 골라야 다음 단계가 열립니다.',
    },
    life: {
      heading: '이 문제가 우리 생활과 어떻게 연결될까요?',
      placeholder: '예) 우리가 물을 낭비하면 물이 부족한 나라에도 영향을 줄 수 있어요...',
      prompts: ['우리가 매일 쓰는 ', '우리 학교에서는 ', '나는 이 문제를 위해 ', '한국에서도 비슷하게 '],
    },
    result: {
      lensTitle: '렌즈 분석 결과',
      lifeTitle: '우리 생활과의 연결',
      bonusTitle: '오늘의 실천 미션',
      scoreSub: (hit, total, pct) => `정답 ${total}개 중 ${hit}개 (${pct}%)`,
      perfect: '완벽한 SDGs 렌즈!',
      good: '훌륭한 탐구 실력!',
      try: '다음엔 더 잘할 수 있어요!',
    },
    footer: {
      creator: '교육뮤지컬 꿈꾸는 치수쌤',
      purpose: '세계시민 교육을 위한 비영리 학습 도구입니다.',
    },
    help: {
      title: '사용법',
      steps: [
        '<b>뉴스 가져오기</b> 버튼을 누르면 UN·UNICEF·UNDP의 공식 뉴스 한 편을 보여줘요.',
        '기사를 차분히 읽어보고, 어려우면 <b>힌트</b> 버튼을 눌러요.',
        '아래 17개 SDGs 카드에서 <b>관련 있는 목표</b>를 모두 골라요. (여러 개 선택 가능)',
        '이 문제가 <b>우리 생활과 어떻게 연결되는지</b> 한두 문장 적어봐요.',
        '<b>SDGs 렌즈로 분석하기</b>를 누르면, 정답 SDGs·피드백·실천 미션이 나와요.',
        '<b>다음 뉴스</b>로 넘어가서 계속 탐구해 보세요!',
      ],
      tip: '정답이 하나만 있는 게 아니에요. 사회 문제는 여러 SDGs와 동시에 연결돼 있답니다.',
    },
    sdgLabels: ['빈곤퇴치','기아종식','건강과복지','양질의교육','성평등','깨끗한물','청정에너지','양질의일자리','산업과혁신','불평등감소','지속가능도시','책임있는소비','기후행동','해양생태계','육상생태계','평화와정의','글로벌파트너십'],
  },
  en: {
    htmlLang: 'en',
    brand: {
      title: 'SDGs <span>Lens</span>',
      subtitle: 'World news through the SDGs Lens',
    },
    meta: { streak: 'Completed' },
    steps: { s1: 'Read News', s2: 'Pick SDGs', s3: 'See Results' },
    news: {
      placeholderSource: 'Getting ready',
      placeholderTitle: 'Tap "Get News" to begin',
      placeholderBody: 'Explore real articles from UN, UNICEF and UNDP, and connect them to the 17 Sustainable Development Goals.',
      readOriginal: 'Read original',
    },
    actions: {
      fetch: 'Get News',
      fetchAgain: 'Get Another News',
      fetching: 'Loading...',
      hint: 'Hint',
      hintHide: 'Hide Hint',
      analyze: 'Analyze with SDGs Lens',
      next: 'Explore Next News',
      retry: 'Retry this news',
    },
    sdg: {
      heading: 'Which SDGs relate to this article?',
      help: 'You can select multiple. Pick at least one to continue.',
    },
    life: {
      heading: 'How does this connect to our daily life?',
      placeholder: 'e.g. When we waste water, it can affect countries that already face water shortages...',
      prompts: ['Every day we ', 'At our school we ', 'I can help by ', 'Where I live this looks like '],
    },
    result: {
      lensTitle: 'Lens Analysis',
      lifeTitle: 'Our Daily Life Connection',
      bonusTitle: "Today's Action Mission",
      scoreSub: (hit, total, pct) => `${hit} of ${total} correct (${pct}%)`,
      perfect: 'Perfect SDGs Lens!',
      good: 'Great exploration!',
      try: 'You can do even better next time!',
    },
    footer: {
      creator: 'Edu-Musical Dreaming Teacher Chisu',
      purpose: 'A non-profit learning tool for global citizenship education.',
    },
    help: {
      title: 'How to use',
      steps: [
        'Tap <b>Get News</b> to load an article from UN, UNICEF or UNDP.',
        'Read it carefully. If it feels hard, tap the <b>Hint</b> button.',
        'Pick every <b>related goal</b> from the 17 SDG cards below. (Multiple allowed)',
        'Write one or two sentences about how this connects to <b>your daily life</b>.',
        'Tap <b>Analyze with SDGs Lens</b> to see the correct SDGs, feedback and an action mission.',
        'Tap <b>Explore Next News</b> and keep going!',
      ],
      tip: 'There is rarely just one answer. Real-world problems usually link to several SDGs at once.',
    },
    sdgLabels: ['No Poverty','Zero Hunger','Good Health','Quality Education','Gender Equality','Clean Water','Clean Energy','Decent Work','Innovation','Reduced Inequality','Sustainable Cities','Responsible Use','Climate Action','Life Below Water','Life on Land','Peace & Justice','Partnerships'],
  },
  ja: {
    htmlLang: 'ja',
    brand: {
      title: 'SDGs <span>レンズ</span>',
      subtitle: 'SDGsレンズで読み解く世界のニュース',
    },
    meta: { streak: '探究完了' },
    steps: { s1: 'ニュースを読む', s2: 'SDGsを選ぶ', s3: '結果を見る' },
    news: {
      placeholderSource: '準備中',
      placeholderTitle: '「ニュース取得」ボタンを押して始めよう',
      placeholderBody: 'UN・UNICEF・UNDPの公式記事を取り出し、17のSDGsとつなげて考えてみよう。',
      readOriginal: '原文を見る',
    },
    actions: {
      fetch: 'ニュース取得',
      fetchAgain: '別のニュースを見る',
      fetching: '読み込み中...',
      hint: 'ヒント',
      hintHide: 'ヒントを隠す',
      analyze: 'SDGsレンズで分析',
      next: '次のニュースへ',
      retry: 'このニュースをやり直す',
    },
    sdg: {
      heading: 'この記事に関係するSDGsを選ぼう',
      help: '複数選べます。1つ以上選ぶと次に進めます。',
    },
    life: {
      heading: 'この問題は私たちの生活とどうつながる?',
      placeholder: '例)私たちが水を無駄にすると、水が不足している国にも影響を与えるかもしれません...',
      prompts: ['私たちが毎日使う ', '私たちの学校では ', 'この問題のために私は ', '日本でも同じように '],
    },
    result: {
      lensTitle: 'レンズ分析結果',
      lifeTitle: '生活とのつながり',
      bonusTitle: '今日のアクションミッション',
      scoreSub: (hit, total, pct) => `${total}個中${hit}個正解 (${pct}%)`,
      perfect: '完璧なSDGsレンズ!',
      good: 'すばらしい探究力!',
      try: '次はもっとよくできるよ!',
    },
    footer: {
      creator: '教育ミュージカル 夢見るチス先生',
      purpose: 'グローバル市民教育のための非営利学習ツールです。',
    },
    help: {
      title: '使い方',
      steps: [
        '<b>ニュース取得</b>ボタンを押すと、UN・UNICEF・UNDPの公式ニュースが1本表示されます。',
        '記事をじっくり読んでみよう。難しいときは<b>ヒント</b>を押してね。',
        '下の17枚のSDGsカードから<b>関係する目標</b>をすべて選ぼう。(複数選択OK)',
        'この問題が<b>自分たちの生活</b>とどうつながるか、1〜2文で書いてみよう。',
        '<b>SDGsレンズで分析</b>を押すと、正解SDGs・フィードバック・実践ミッションが表示されます。',
        '<b>次のニュース</b>に進んで、探究を続けよう!',
      ],
      tip: '答えは1つだけではありません。社会の課題は複数のSDGsに同時につながっています。',
    },
    sdgLabels: ['貧困','飢餓','保健','教育','ジェンダー','水','エネルギー','働きがい','産業革新','不平等','まちづくり','責任ある消費','気候変動','海洋資源','陸の豊かさ','平和と公正','パートナーシップ'],
  },
};

let CURRENT_LANG = 'ko';
function t(path) {
  const parts = path.split('.');
  let v = I18N[CURRENT_LANG];
  for (const p of parts) { if (v == null) return ''; v = v[p]; }
  return v;
}
