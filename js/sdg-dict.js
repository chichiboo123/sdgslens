// SDGs Dictionary data (trilingual)
// Source: United Nations, "Transforming our world: the 2030 Agenda for Sustainable Development"
// (UN General Assembly Resolution A/RES/70/1, 2015) and UN SDGs official site (https://sdgs.un.org/goals).
// Subtarget summaries are paraphrased for child-friendly reading.

const SDG_DICT = {
  ko: {
    intro: {
      title: 'SDGs(지속가능발전목표)란?',
      body: [
        'SDGs(Sustainable Development Goals)는 2015년 9월 유엔(UN) 총회에서 193개 모든 회원국이 만장일치로 채택한 <b>2030년까지의 인류 공동 약속</b>이에요.',
        '지구와 사람, 그리고 미래 세대 모두가 행복하게 살 수 있도록 <b>17개의 큰 목표(Goals)</b>와 <b>169개의 세부목표(Targets)</b>로 이루어져 있어요.',
        '"누구도 뒤처지지 않게 한다(Leave No One Behind)"라는 약속 아래, 빈곤·교육·환경·평화 등 우리가 함께 풀어야 할 문제들을 다룬답니다.',
      ],
      keys: [
        { k: '시작', v: '2015년 9월 25일 UN 정상회의에서 채택' },
        { k: '기간', v: '2016년 ~ 2030년 (15년 계획)' },
        { k: '구성', v: '17개 목표 + 169개 세부목표 + 232개 지표' },
        { k: '핵심 가치', v: '5P — 사람(People)·지구(Planet)·번영(Prosperity)·평화(Peace)·파트너십(Partnership)' },
      ],
    },
    goals: [
      { name: '빈곤퇴치', desc: '모든 곳에서 모든 형태의 빈곤을 끝내요. 가난 때문에 굶거나, 학교에 못 가거나, 아파도 치료받지 못하는 사람이 없도록 합니다.', targets: ['1.1 하루 1.90달러 미만으로 사는 극심한 빈곤을 끝내기', '1.2 각국 기준 빈곤층을 절반으로 줄이기', '1.3 모두를 위한 사회보장제도 마련', '1.4 가난한 사람도 땅·재산·기본 서비스를 누리도록 보장', '1.5 재난·기후 충격에 약한 사람들의 회복력 강화'] },
      { name: '기아종식', desc: '굶주림을 끝내고, 누구나 안전하고 영양가 있는 음식을 먹을 수 있게 해요. 농업도 지속가능하게 발전시켜요.', targets: ['2.1 굶주리는 사람이 없도록 충분한 음식 보장', '2.2 5세 미만 영양실조와 발육부진 종식', '2.3 소규모 농민의 생산성·소득 두 배 늘리기', '2.4 환경을 지키는 지속가능한 농업 시스템 구축', '2.5 농작물·가축의 유전적 다양성 보존'] },
      { name: '건강과 복지', desc: '모든 사람이 나이에 상관없이 건강하게 살 수 있도록 해요. 아이와 임산부, 노인 모두를 보호해요.', targets: ['3.1 산모 사망률을 10만 명당 70명 이하로', '3.2 신생아·5세 미만 아동 사망 예방', '3.3 에이즈·결핵·말라리아 등 전염병 종식', '3.4 만성질환·정신건강·자살 예방', '3.6 교통사고 사망·부상 절반으로', '3.7 모두의 성·생식 건강 서비스 보장'] },
      { name: '양질의 교육', desc: '모든 어린이와 청소년이 차별 없이 좋은 교육을 받을 수 있게 해요. 평생학습 기회도 제공해요.', targets: ['4.1 모두에게 무상·공평한 초중등 교육', '4.2 모든 아동에게 영유아 교육·보육 보장', '4.3 직업·고등교육 기회 균등', '4.5 성별·장애·소수자에 대한 교육 차별 없애기', '4.7 지속가능발전·세계시민 교육 확대'] },
      { name: '성평등', desc: '여성과 남성이 모두 평등한 기회를 갖도록 해요. 여성·여아에 대한 차별과 폭력을 끝냅니다.', targets: ['5.1 여성·여아에 대한 모든 차별 종식', '5.2 가정폭력·성폭력·인신매매 근절', '5.3 조혼·아동 결혼·여성 할례 폐지', '5.4 가사·돌봄 노동의 공정한 분담', '5.5 정치·경제·공적 영역에서 여성 리더십 확대'] },
      { name: '깨끗한 물과 위생', desc: '모든 사람이 깨끗한 물을 마시고, 안전한 화장실과 위생시설을 사용할 수 있게 해요.', targets: ['6.1 모두에게 안전한 식수 보장', '6.2 화장실·위생시설 보장, 노상 배변 종식', '6.3 수질 개선·오염물질 배출 절반으로', '6.4 물 사용 효율 높이고 물 부족 해결', '6.6 강·습지·호수 등 수생태계 보호'] },
      { name: '깨끗한 에너지', desc: '모두가 부담 없는 가격으로 깨끗하고 안전한 에너지를 쓸 수 있게 해요. 재생에너지를 확대해요.', targets: ['7.1 모두에게 현대적 에너지 서비스 제공', '7.2 전 세계 재생에너지 비중 크게 늘리기', '7.3 에너지 효율 두 배 향상', '7.a 청정에너지 기술·투자 국제협력 강화'] },
      { name: '양질의 일자리와 경제성장', desc: '모두가 안전하고 좋은 일자리에서 일할 수 있게 해요. 강제노동·아동노동을 끝냅니다.', targets: ['8.1 지속가능한 경제성장 달성', '8.5 모두에게 양질의 일자리·동일임금', '8.6 일도, 교육도, 훈련도 받지 못하는 청년 줄이기', '8.7 강제노동·현대판 노예제·아동노동 근절', '8.8 안전하고 안정된 근로환경 보장'] },
      { name: '산업·혁신·인프라', desc: '튼튼하고 안전한 도로·다리·인터넷을 만들고, 새로운 기술과 혁신으로 사회를 발전시켜요.', targets: ['9.1 회복력 있는 양질의 인프라 구축', '9.2 포용적·지속가능한 산업화', '9.3 중소기업의 금융 접근 보장', '9.4 친환경 산업·청정기술로 전환', '9.c 모두에게 인터넷·정보통신 접근 보장'] },
      { name: '불평등 감소', desc: '나라 안과 나라 사이의 불평등을 줄여요. 나이·성별·장애·인종에 상관없이 누구나 존중받게 해요.', targets: ['10.1 소득 하위 40%의 소득 증가율 높이기', '10.2 모든 사람의 사회·경제·정치 참여 보장', '10.3 차별적인 법·제도·관행 철폐', '10.6 개발도상국의 국제 의사결정 참여 확대', '10.7 안전하고 질서 있는 이주·이민 보장'] },
      { name: '지속가능한 도시와 공동체', desc: '도시를 더 안전하고, 살기 좋고, 지속가능한 곳으로 만들어요. 누구나 좋은 집과 교통을 누리게 해요.', targets: ['11.1 모두에게 안전하고 적절한 주거 보장', '11.2 안전하고 저렴한 대중교통 제공', '11.4 세계 문화·자연 유산 보호', '11.5 재난으로 인한 사망·피해 크게 줄이기', '11.6 도시 대기오염·쓰레기 관리 개선', '11.7 모두에게 안전한 공원·녹지 공간 보장'] },
      { name: '책임 있는 소비와 생산', desc: '필요한 만큼만 만들고, 쓰고, 버려요. 음식물 쓰레기와 자원 낭비를 줄여요.', targets: ['12.2 천연자원의 지속가능한 관리·효율적 이용', '12.3 1인당 식품 폐기물 절반으로 줄이기', '12.4 화학물질·폐기물의 안전한 관리', '12.5 재활용·재사용으로 폐기물 크게 줄이기', '12.8 모두에게 지속가능한 생활방식 정보 제공'] },
      { name: '기후변화 대응', desc: '기후변화와 그 영향에 맞서 행동해요. 온실가스를 줄이고, 자연재해에 대비해요.', targets: ['13.1 기후 관련 재난·재해 대응 능력 강화', '13.2 기후 행동을 국가 정책·계획에 반영', '13.3 기후변화 교육·인식 향상', '13.a 개발도상국 기후 대응 자금 지원(녹색기후기금)'] },
      { name: '해양 생태계', desc: '바다와 바닷속 생물을 보호해요. 해양 쓰레기·오염을 줄이고, 어업도 지속가능하게 해요.', targets: ['14.1 해양 오염·플라스틱 쓰레기 크게 줄이기', '14.2 해양·연안 생태계 지속가능한 관리', '14.3 해양 산성화 영향 최소화', '14.4 과잉어업·불법어업 종식', '14.5 해양 보호구역 최소 10% 지정'] },
      { name: '육상 생태계', desc: '숲·산·사막의 생태계와 동식물을 보호해요. 사막화와 생물 다양성 손실을 막아요.', targets: ['15.1 숲·습지·산악 생태계 보전·복원', '15.2 모든 종류의 숲의 지속가능한 관리', '15.3 사막화 방지·황폐화된 토지 복원', '15.5 자연 서식지 파괴와 생물 다양성 손실 막기', '15.7 멸종위기 동식물 밀렵·밀거래 근절'] },
      { name: '평화·정의·강력한 제도', desc: '폭력 없는 평화로운 사회를 만들고, 모두에게 정의로운 제도를 제공해요. 부패도 줄여요.', targets: ['16.1 모든 형태의 폭력과 폭력으로 인한 사망 줄이기', '16.2 아동 학대·착취·인신매매 근절', '16.3 법치주의·공정한 사법 보장', '16.5 부패·뇌물 크게 줄이기', '16.9 모두에게 법적 신분 등록(출생신고) 보장', '16.10 정보 접근·기본적 자유 보장'] },
      { name: '글로벌 파트너십', desc: '나라들이 서로 협력해 SDGs를 함께 달성해요. 돈·기술·지식을 함께 나눠요.', targets: ['17.1 개발도상국의 세수 확보 지원', '17.2 선진국 ODA(공적개발원조) 약속 이행(GNI 0.7%)', '17.6 과학·기술·혁신 협력 강화', '17.16 다자간 파트너십 활성화', '17.18 데이터·통계 역량 강화'] },
    ],
    sources: {
      title: '출처',
      list: [
        'United Nations General Assembly (2015). <i>Transforming our world: the 2030 Agenda for Sustainable Development</i>, A/RES/70/1.',
        'United Nations — Sustainable Development Goals 공식 사이트: <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener">sdgs.un.org/goals</a>',
        'UN Department of Economic and Social Affairs (UN DESA) — SDG 지표 프레임워크',
        '대한민국 K-SDGs (통계청 SDG 데이터플랫폼) — <a href="https://kostat.go.kr/sdg/" target="_blank" rel="noopener">kostat.go.kr/sdg</a>',
        'UNICEF Korea SDGs 교육자료 / UNDP Korea SDGs 자료실',
      ],
      note: '세부목표 설명은 어린이·청소년 학습을 위해 쉽게 풀어 쓴 요약본이에요. 정확한 원문은 위 UN 공식 문서를 확인해 주세요.',
    },
    ui: {
      title: 'SDGs 사전',
      introHeading: 'SDGs 기본 정보',
      goalsHeading: '17개 목표 자세히 보기',
      tapHint: '카드를 눌러 세부목표를 펼쳐 보세요',
      targetsLabel: '주요 세부목표',
    },
  },

  en: {
    intro: {
      title: 'What are the SDGs?',
      body: [
        'The Sustainable Development Goals (SDGs) are a <b>shared promise to 2030</b>, adopted by all 193 UN Member States in September 2015.',
        'They consist of <b>17 Goals</b> and <b>169 Targets</b> to make sure people, the planet and future generations can all thrive together.',
        'Under the promise of <b>"Leave No One Behind"</b>, the SDGs tackle the biggest problems we share — poverty, education, environment, peace and more.',
      ],
      keys: [
        { k: 'Adopted', v: 'UN Summit, 25 September 2015' },
        { k: 'Period', v: '2016 – 2030 (15-year plan)' },
        { k: 'Structure', v: '17 Goals + 169 Targets + 232 Indicators' },
        { k: 'Core values', v: '5P — People, Planet, Prosperity, Peace, Partnership' },
      ],
    },
    goals: [
      { name: 'No Poverty', desc: 'End poverty in all its forms everywhere — so that no one goes hungry, misses school, or lacks medical care because they are poor.', targets: ['1.1 End extreme poverty (under $1.90/day)', '1.2 Halve poverty by national definitions', '1.3 Social protection systems for all', '1.4 Equal rights to land, property and basic services', '1.5 Build resilience to disasters and climate shocks'] },
      { name: 'Zero Hunger', desc: 'End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.', targets: ['2.1 End hunger; safe nutritious food for all', '2.2 End child malnutrition and stunting', '2.3 Double small-scale farmer productivity & income', '2.4 Build sustainable food production systems', '2.5 Conserve genetic diversity of seeds & livestock'] },
      { name: 'Good Health & Well-being', desc: 'Ensure healthy lives and well-being for all at all ages — protecting children, mothers, and elders.', targets: ['3.1 Reduce maternal mortality (<70/100,000)', '3.2 End preventable child deaths', '3.3 End AIDS, TB, malaria & epidemics', '3.4 Tackle non-communicable diseases & mental health', '3.6 Halve road traffic deaths', '3.7 Universal sexual & reproductive health care'] },
      { name: 'Quality Education', desc: 'Ensure inclusive, equitable quality education and promote lifelong learning for everyone.', targets: ['4.1 Free, equitable primary & secondary education for all', '4.2 Quality early childhood care & education', '4.3 Equal access to vocational & higher education', '4.5 Eliminate gender, disability & income disparities', '4.7 Education for sustainable development & global citizenship'] },
      { name: 'Gender Equality', desc: 'Achieve gender equality and empower all women and girls. End all discrimination and violence.', targets: ['5.1 End all forms of discrimination against women & girls', '5.2 Eliminate violence against women & girls', '5.3 End child marriage & female genital mutilation', '5.4 Value unpaid care & domestic work', '5.5 Ensure women’s full leadership & participation'] },
      { name: 'Clean Water & Sanitation', desc: 'Ensure safe water, sanitation and hygiene for all.', targets: ['6.1 Universal access to safe drinking water', '6.2 Adequate sanitation; end open defecation', '6.3 Improve water quality, halve untreated wastewater', '6.4 Use water more efficiently; reduce scarcity', '6.6 Protect water-related ecosystems'] },
      { name: 'Affordable & Clean Energy', desc: 'Ensure access to affordable, reliable, sustainable and modern energy for all.', targets: ['7.1 Universal access to modern energy services', '7.2 Substantially increase renewable energy', '7.3 Double the rate of energy efficiency', '7.a Expand clean-energy research & investment'] },
      { name: 'Decent Work & Economic Growth', desc: 'Promote sustained, inclusive economic growth, full and productive employment and decent work for all.', targets: ['8.1 Sustained per-capita economic growth', '8.5 Full employment & equal pay for equal work', '8.6 Reduce youth not in employment or education', '8.7 End forced labour, modern slavery & child labour', '8.8 Safe and secure working environments'] },
      { name: 'Industry, Innovation & Infrastructure', desc: 'Build resilient infrastructure, promote inclusive industrialization and foster innovation.', targets: ['9.1 Resilient, sustainable infrastructure for all', '9.2 Inclusive and sustainable industrialization', '9.3 Financial services for small businesses', '9.4 Upgrade industries with clean technologies', '9.c Universal & affordable internet access'] },
      { name: 'Reduced Inequalities', desc: 'Reduce inequality within and among countries — so everyone is respected regardless of age, gender, disability or race.', targets: ['10.1 Income growth for bottom 40%', '10.2 Social, economic & political inclusion for all', '10.3 Eliminate discriminatory laws & practices', '10.6 Greater voice for developing countries', '10.7 Safe, orderly & responsible migration'] },
      { name: 'Sustainable Cities & Communities', desc: 'Make cities and human settlements inclusive, safe, resilient and sustainable.', targets: ['11.1 Safe and affordable housing for all', '11.2 Safe, affordable public transport', '11.4 Protect world cultural & natural heritage', '11.5 Reduce deaths and losses from disasters', '11.6 Reduce city air pollution & waste impact', '11.7 Safe, inclusive green & public spaces'] },
      { name: 'Responsible Consumption & Production', desc: 'Make only what we need, use it wisely, and waste less.', targets: ['12.2 Sustainable management of natural resources', '12.3 Halve global food waste per capita', '12.4 Safe management of chemicals & waste', '12.5 Reduce waste via reuse & recycling', '12.8 Information for sustainable lifestyles'] },
      { name: 'Climate Action', desc: 'Take urgent action to combat climate change and its impacts.', targets: ['13.1 Strengthen resilience to climate hazards', '13.2 Integrate climate measures into policy', '13.3 Improve climate education & awareness', '13.a Mobilize finance for developing countries (Green Climate Fund)'] },
      { name: 'Life Below Water', desc: 'Conserve and sustainably use the oceans, seas and marine resources.', targets: ['14.1 Reduce marine pollution, esp. plastics', '14.2 Sustainably manage marine & coastal ecosystems', '14.3 Minimize ocean acidification', '14.4 End overfishing & illegal fishing', '14.5 Conserve at least 10% of coastal & marine areas'] },
      { name: 'Life on Land', desc: 'Protect, restore and promote sustainable use of forests, deserts, mountains and biodiversity.', targets: ['15.1 Conserve forests, wetlands and mountain ecosystems', '15.2 Sustainably manage all forests', '15.3 Combat desertification & restore degraded land', '15.5 Halt biodiversity loss & habitat destruction', '15.7 End poaching & trafficking of protected species'] },
      { name: 'Peace, Justice & Strong Institutions', desc: 'Promote peaceful societies, provide access to justice for all, and build effective, accountable institutions.', targets: ['16.1 Reduce all forms of violence & related deaths', '16.2 End abuse, trafficking & violence against children', '16.3 Rule of law & equal access to justice', '16.5 Reduce corruption & bribery', '16.9 Legal identity for all, including birth registration', '16.10 Public access to information & fundamental freedoms'] },
      { name: 'Partnerships for the Goals', desc: 'Strengthen global partnerships to achieve the SDGs together — sharing money, knowledge and technology.', targets: ['17.1 Strengthen domestic tax & revenue', '17.2 Developed countries to meet ODA target (0.7% GNI)', '17.6 Cooperate on science, tech & innovation', '17.16 Enhance multi-stakeholder partnerships', '17.18 Improve data, monitoring & accountability'] },
    ],
    sources: {
      title: 'Sources',
      list: [
        'United Nations General Assembly (2015). <i>Transforming our world: the 2030 Agenda for Sustainable Development</i>, A/RES/70/1.',
        'United Nations — Official Sustainable Development Goals site: <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener">sdgs.un.org/goals</a>',
        'UN Department of Economic and Social Affairs (UN DESA) — SDG Indicators Framework',
        'UNICEF & UNDP — SDG educational materials',
      ],
      note: 'Target summaries are simplified for learners. Please refer to the official UN documents above for the exact wording.',
    },
    ui: {
      title: 'SDGs Dictionary',
      introHeading: 'About the SDGs',
      goalsHeading: 'Explore the 17 Goals',
      tapHint: 'Tap a goal card to see its key targets',
      targetsLabel: 'Key Targets',
    },
  },

  ja: {
    intro: {
      title: 'SDGs(持続可能な開発目標)とは?',
      body: [
        'SDGs(Sustainable Development Goals)は、2015年9月の国連サミットで193の加盟国すべてが採択した、<b>2030年までの世界共通の約束</b>です。',
        '人と地球、そして未来の世代がともに幸せに暮らせるように、<b>17のゴール(目標)</b>と<b>169のターゲット(細目)</b>で構成されています。',
        '「<b>誰一人取り残さない(Leave No One Behind)</b>」という約束のもと、貧困・教育・環境・平和など、世界みんなで取り組むべき課題を扱います。',
      ],
      keys: [
        { k: '採択', v: '2015年9月25日 国連サミット' },
        { k: '期間', v: '2016年〜2030年(15年計画)' },
        { k: '構成', v: '17ゴール + 169ターゲット + 232指標' },
        { k: '5つの理念', v: '5P — People(人)・Planet(地球)・Prosperity(繁栄)・Peace(平和)・Partnership(連携)' },
      ],
    },
    goals: [
      { name: '貧困をなくそう', desc: 'あらゆる場所で、あらゆる形の貧困をなくします。お金がないために学校に行けない、ご飯が食べられない、病気が治せない人をなくします。', targets: ['1.1 1日1.90ドル未満の極度の貧困を終わらせる', '1.2 各国基準の貧困を半減', '1.3 すべての人に社会保障を', '1.4 土地・財産・基本サービスへの平等なアクセス', '1.5 災害・気候ショックへの強さを高める'] },
      { name: '飢餓をゼロに', desc: '飢えをなくし、誰もが安全で栄養のある食べ物を食べられるようにします。農業も持続可能なものにします。', targets: ['2.1 飢餓を終わらせ、安全な食料を確保', '2.2 子どもの栄養失調・発育阻害をなくす', '2.3 小規模農家の生産性・所得を倍に', '2.4 持続可能な食料生産システムへ', '2.5 種・家畜の遺伝的多様性を守る'] },
      { name: 'すべての人に健康と福祉を', desc: '年齢にかかわらず、誰もが健康で幸せに暮らせるようにします。子ども・妊婦・お年寄りも守ります。', targets: ['3.1 妊産婦死亡率を10万人あたり70人未満に', '3.2 新生児・5歳未満児の予防可能な死亡をなくす', '3.3 エイズ・結核・マラリアなどを終息', '3.4 慢性疾患・メンタルヘルス対策', '3.6 交通事故死を半減', '3.7 性と生殖の保健サービスを普及'] },
      { name: '質の高い教育をみんなに', desc: 'すべての子ども・青少年が、差別なく良い教育を受けられるようにします。生涯学べる機会も提供します。', targets: ['4.1 無償で公平な初等・中等教育', '4.2 質の高い乳幼児教育・保育', '4.3 職業教育・高等教育への平等なアクセス', '4.5 性別・障がいなどによる教育格差をなくす', '4.7 持続可能な開発・グローバル市民の教育を'] },
      { name: 'ジェンダー平等を実現しよう', desc: '女性と男性が同じように機会を持てるようにします。女性・女の子への差別や暴力をなくします。', targets: ['5.1 女性・女の子へのあらゆる差別をなくす', '5.2 女性・女の子への暴力をなくす', '5.3 児童婚・女性器切除をなくす', '5.4 家事・ケア労働を公平に分担', '5.5 政治・経済での女性のリーダーシップ'] },
      { name: '安全な水とトイレを世界中に', desc: '誰もが安全な水を飲み、清潔なトイレと衛生施設を使えるようにします。', targets: ['6.1 安全な飲み水へのアクセス', '6.2 適切なトイレ・衛生施設、野外排泄をなくす', '6.3 水質改善・汚染を減らす', '6.4 水の利用効率を上げ、水不足に対応', '6.6 水に関わる生態系を守る'] },
      { name: 'エネルギーをみんなに、そしてクリーンに', desc: '誰もが手ごろな価格で、クリーンで安全なエネルギーを使えるようにします。再生可能エネルギーを増やします。', targets: ['7.1 現代的エネルギーサービスを普及', '7.2 再生可能エネルギーの大幅増加', '7.3 エネルギー効率を倍に', '7.a クリーンエネルギー研究・投資の国際協力'] },
      { name: '働きがいも経済成長も', desc: '誰もが安全で良い仕事ができるようにします。強制労働・児童労働をなくします。', targets: ['8.1 持続的な経済成長', '8.5 完全雇用と同一労働同一賃金', '8.6 ニート青年の割合を減らす', '8.7 強制労働・現代の奴隷制・児童労働の根絶', '8.8 安全で安定した労働環境'] },
      { name: '産業と技術革新の基盤をつくろう', desc: '丈夫で安全な道路・橋・インターネットを整え、新しい技術と革新で社会を発展させます。', targets: ['9.1 強靭で持続可能なインフラ', '9.2 包摂的・持続可能な産業化', '9.3 中小企業への金融アクセス', '9.4 環境に優しい産業への転換', '9.c 誰もがインターネットを使えるように'] },
      { name: '人や国の不平等をなくそう', desc: '国の中、国と国の間の不平等を減らします。年齢・性別・障がい・人種にかかわらず、誰もが尊重されるようにします。', targets: ['10.1 下位40%の所得増加', '10.2 すべての人の社会・経済・政治参加', '10.3 差別的な法律・慣行をなくす', '10.6 途上国の国際意思決定への参加拡大', '10.7 安全で秩序ある移住'] },
      { name: '住み続けられるまちづくりを', desc: '街をもっと安全で、住みやすく、持続可能な場所にします。誰もが良い家と交通を利用できるようにします。', targets: ['11.1 安全で適切な住居をすべての人に', '11.2 安全で安価な公共交通機関', '11.4 世界の文化・自然遺産の保護', '11.5 災害による死者・損失を大幅に減らす', '11.6 都市の大気汚染・廃棄物管理を改善', '11.7 安全で誰でも使える公園・緑地'] },
      { name: 'つくる責任つかう責任', desc: '必要な分だけつくり、大切に使い、捨てるものを減らします。食品ロスや資源の無駄を減らします。', targets: ['12.2 天然資源の持続可能な管理', '12.3 1人あたりの食品廃棄物を半減', '12.4 化学物質・廃棄物の安全な管理', '12.5 再利用・リサイクルで廃棄物を大幅削減', '12.8 持続可能なライフスタイルの情報提供'] },
      { name: '気候変動に具体的な対策を', desc: '気候変動とその影響に対して、すぐに行動します。温室効果ガスを減らし、災害に備えます。', targets: ['13.1 気候災害への対応力を強化', '13.2 気候対策を国家政策に組み込む', '13.3 気候変動の教育・啓発', '13.a 途上国への気候資金(緑の気候基金)'] },
      { name: '海の豊かさを守ろう', desc: '海と海の生き物を守ります。海洋ごみ・汚染を減らし、漁業も持続可能にします。', targets: ['14.1 海洋汚染・プラごみを大幅削減', '14.2 海洋・沿岸生態系の持続可能な管理', '14.3 海洋酸性化の影響を最小化', '14.4 過剰漁業・違法漁業をなくす', '14.5 沿岸・海洋域の10%以上を保護'] },
      { name: '陸の豊かさも守ろう', desc: '森・山・砂漠の生態系や動植物を守ります。砂漠化や生物多様性の損失を防ぎます。', targets: ['15.1 森林・湿地・山岳生態系の保全', '15.2 すべての森林の持続可能な管理', '15.3 砂漠化防止・劣化した土地の回復', '15.5 自然生息地の破壊と生物多様性の損失を止める', '15.7 絶滅危惧種の密猟・違法取引をなくす'] },
      { name: '平和と公正をすべての人に', desc: '暴力のない平和な社会をつくり、すべての人に公正な制度を提供します。汚職も減らします。', targets: ['16.1 あらゆる暴力と暴力による死亡を減らす', '16.2 子どもへの虐待・人身売買をなくす', '16.3 法の支配・公正な司法を', '16.5 汚職・贈収賄を大幅に減らす', '16.9 すべての人に出生登録など法的身分を', '16.10 情報へのアクセス・基本的自由の保護'] },
      { name: 'パートナーシップで目標を達成しよう', desc: '世界の国々が協力してSDGsを達成します。お金・技術・知識を分かち合います。', targets: ['17.1 途上国の税収確保支援', '17.2 先進国のODA(GNI 0.7%)目標達成', '17.6 科学・技術・イノベーション協力', '17.16 多様な主体のパートナーシップ', '17.18 データと統計の能力強化'] },
    ],
    sources: {
      title: '出典',
      list: [
        'United Nations General Assembly (2015). <i>Transforming our world: the 2030 Agenda for Sustainable Development</i>, A/RES/70/1.',
        '国際連合 — 持続可能な開発目標 公式サイト: <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener">sdgs.un.org/goals</a>',
        'UN DESA — SDG指標フレームワーク',
        '外務省 JAPAN SDGs Action Platform — <a href="https://www.mofa.go.jp/mofaj/gaiko/oda/sdgs/" target="_blank" rel="noopener">mofa.go.jp/mofaj/gaiko/oda/sdgs</a>',
        'ユニセフ・UNDP のSDGs教材',
      ],
      note: 'ターゲットの説明は、子ども・青少年向けにやさしくまとめたものです。正確な表現はUNの公式文書をご確認ください。',
    },
    ui: {
      title: 'SDGs事典',
      introHeading: 'SDGsの基本',
      goalsHeading: '17の目標を見てみよう',
      tapHint: 'カードを押すとターゲットが見られるよ',
      targetsLabel: '主なターゲット',
    },
  },
};
