import React from 'react';
import { 
  Users, Building2, Trees, Repeat, ShieldCheck, Rocket, HeartHandshake, 
  ArrowDownCircle, Coins, Settings, Globe, Search, Hammer, ArrowUpRight, 
  Anchor, Shield, Layers, Network, Activity, Plus, ArrowRight, Quote, 
  Target, Compass, ChevronRight, ExternalLink, Printer, Info, CheckCircle2, 
  Handshake, Maximize, Cpu, RefreshCcw, Tornado, Skull, XCircle, Sprout, 
  GitMerge, Ban, Footprints, Store, PartyPopper, Landmark, Magnet, MapPin, 
  Lightbulb, Briefcase, GraduationCap, Factory, Utensils, ShoppingBag
} from 'lucide-react';

// ==================================================================================
// [CONFIG] 스타일 & 레이아웃 상수 (Design System)
// ==================================================================================

const STYLE = {
  // 레이아웃
  CONTAINER: "max-w-6xl mx-auto px-4 md:px-8",
  SECTION_GAP: "mb-24 md:mb-32",
  CARD_ROUND: "rounded-[2.5rem] md:rounded-[3.5rem]",
  
  // 텍스트 스타일
  TEXT: {
    TITLE_MAIN: "text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight drop-shadow-sm break-keep",
    TITLE_SECTION: "text-3xl md:text-4xl font-bold tracking-tight break-keep",
    DESC: "text-base md:text-lg leading-relaxed font-medium break-keep",
    BADGE: "text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border shadow-sm",
  },

  // 색상 팔레트 (유지보수 용이성 확보)
  COLORS: {
    primary: "indigo",
    secondary: "emerald",
    accent: "rose",
    bg: "slate-50",
    text: "slate-900",
    textSub: "slate-500"
  }
};

// ==================================================================================
// [DATA LAYER] 콘텐츠 데이터 (Content Source of Truth)
// ==================================================================================

const HEADER_DATA = {
  title: "좋은 기업이 좋은 도시를 만든다",
  subTitle: "The Master Thesis: Eco-Futurism Perspective",
  mainDescTitle: (
    <>
      지역경제 활성화 생태계에 <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-extrabold italic">벤처 스튜디오</span>와 파트너인 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-extrabold italic">지역경영회사</span>가 필요한 이유
    </>
  ),
  cards: [
    {
      icon: <Rocket size={40} />,
      color: 'cyan',
      title: '콘텐츠 창조',
      subTitle: 'Content Creation',
      desc: '로컬의 고유성을 비즈니스로 \n전환할 전문 빌더(VS)의 역할'
    },
    {
      icon: <ShieldCheck size={40} />,
      color: 'emerald',
      title: '지속 가능성 수호',
      subTitle: 'Sustainability',
      desc: '활성화 이후의 성과를 지역에 \n고착시킬 운영 주체(AMC)의 책임'
    }
  ],
  outcome: {
    label: "Core Outcome",
    text: (
      <>자생적 성장이 가능한<br/><span className="text-emerald-500">가치 순환 생태계</span></>
    )
  }
};

const MODEL_COMPARISON_DATA = {
  extraction: {
    title: "Extraction Model (자본 추출)",
    icon: <ArrowDownCircle size={24} />,
    theme: "rose",
    items: [
      { iconChar: 'J', title: '단기적 J-커브 지향 (J-Curve)', desc: '빠른 Exit을 위해 지역 자원을 단기에 소진하는 외부 자본 중심의 성장 모델' },
      { icon: <Coins size={24} />, title: '시스템적 가치 유출 (Leakage)', desc: '성공의 과실이 지역을 떠나 외부 자본의 배당으로만 흘러나가는 구조적 한계' }
    ],
    alert: "젠트리피케이션 유발, 지역 고유 정체성 상실, 지역 간 경제적 불균형을 심화시킵니다."
  },
  circulation: {
    title: "Circulation Model (가치 순환)",
    icon: <Repeat size={24} />,
    theme: "emerald",
    items: [
      { icon: <HeartHandshake size={24} />, title: '인내 자본 (Patient Capital)', desc: '단기 수익을 넘어 지역의 잠재력에 투자하며 동반 성장하는 성숙한 투자 방식' },
      { icon: <Repeat size={24} />, title: '선순환 구조 확립 (Circulation)', desc: '수익을 지역 인재 채용과 문화 인프라에 재투자하여 뿌리를 내리는 경제 체계' }
    ],
    alert: "복제 불가능한 지역 고유성을 보존하고, 내부 자본 축적을 통해 도시의 미래를 담보합니다."
  }
};

const JUNGLE_THEORY_DATA = {
  intro: {
    title: "스타트업 정글 이론",
    engTitle: "Startup Jungle Theory",
    desc: "실리콘밸리의 유니콘이 독점하는 평원 대신, 상생이 숨 쉬는 '로컬 정글'을 제안합니다. 수익과 목적의 균형을 맞춘 '얼룩말'들이 다양한 주체들과 공존하는 생태계를 설계합니다."
  },
  entities: [
    {
      icon: <Building2 className="text-emerald-300" size={36} />,
      title: '코끼리',
      engTitle: 'Elephant / 앵커 주체',
      desc: '생태계의 무게 중심을 잡는 주체. 하드웨어를 제공하여 정글의 뼈대를 형성합니다.',
      contextTitle: 'Korean Context',
      contextList: ['향토 중견기업 및 지역 기반 장수 브랜드', '지방 공기업, 공공기관 및 거점 국립대학', '지역 대학 및 핵심 연구 인프라'],
      style: { bg: 'bg-emerald-800/60', text: 'text-emerald-100/80', highlight: false }
    },
    {
      icon: <Users size={36} />,
      title: '얼룩말',
      engTitle: 'Zebra / 기업',
      desc: '수익(Black)과 사회적 가치(White)의 조화를 꾀하는 로컬 스타트업. 지역 성장의 핵심 소프트웨어입니다.',
      contextTitle: 'Venture Core',
      contextList: ['로컬 크리에이터 벤처 및 소셜 벤처', '지역 특화 F&B 및 라이프스타일 브랜드', '목적 기반의 커뮤니티 비즈니스 팀'],
      style: { bg: 'bg-white/10', text: 'text-white', highlight: true }
    },
    {
      icon: <Trees className="text-emerald-300" size={36} />,
      title: '식생',
      engTitle: 'Flora / 다양성',
      desc: '정글의 다양성을 유지하는 토양. 수많은 소상공인과 활동가들이 모여 지역의 정취를 완성합니다.',
      contextTitle: 'Base Elements',
      contextList: ['골목 소상공인 및 소규모 로컬 숍', '독립 예술가 및 문화 활동가', '시민 참여형 자발적 공동체 그룹'],
      style: { bg: 'bg-emerald-800/60', text: 'text-emerald-100/80', highlight: false }
    }
  ],
  diversity: {
    title: "다양한 스케일의 공존 (Coexistence of Scales)",
    desc: "한국형 스타트업 정글은 단일 종의 독점이 아닌, 아래 주체들이 유기적으로 연결될 때 완성됩니다.",
    items: [
      { name: "로컬 크리에이터", icon: <Briefcase size={14}/> },
      { name: "로컬 브랜드 & K-브랜드", icon: <ShoppingBag size={14}/> },
      { name: "공공기관", icon: <Landmark size={14}/> },
      { name: "향토기업 & 중견기업", icon: <Factory size={14}/> },
      { name: "가업승계기업", icon: <RefreshCcw size={14}/> },
      { name: "100년 가게", icon: <Store size={14}/> },
      { name: "기존 소상공인", icon: <Utensils size={14}/> },
      { name: "IT 스타트업", icon: <Cpu size={14}/> },
      { name: "대학 & 병원", icon: <GraduationCap size={14}/> },
    ]
  }
};

const TCJTC_DATA = [
  { id: 1, title: '양질의 일자리', engTitle: 'Jobs', icon: <Briefcase size={28}/>, quote: '"청년이 떠나지 않는 도시"', desc: '로컬 벤처가 지역 정체성을 담은 브랜드를 개발하여 청년들이 자부심을 갖고 일할 수 있는 매력적인 일터를 창출합니다.', color: 'blue' },
  { id: 2, title: '관계 인구와 트래픽', engTitle: 'Traffic', icon: <Footprints size={28}/>, quote: '"사람이 모이는 매력적인 거리"', desc: '로컬 크리에이터와 K-브랜드가 만들어내는 독창적인 콘텐츠는 단순 관광객을 넘어 지역의 \'팬(Fan)\'을 만듭니다.', color: 'emerald' },
  { id: 3, title: '자본의 선순환', engTitle: 'Capital', icon: <Coins size={28}/>, quote: '"지역을 살찌우는 돈의 흐름"', desc: '창출된 수익은 외부로 유출(Leakage)되지 않고, 지역 자산화(AMC)를 통해 다시 로컬 생태계의 인프라와 교육에 재투자됩니다.', color: 'amber' }
];

const RIPPLE_EFFECTS_DATA = [
  { icon: <Users size={24} />, color: 'emerald', title: '로컬 팬덤 형성', sub: 'Local Fandom', desc: '단순 방문객이 아닌, 지역 브랜드의 철학을 소비하는 <strong>충성도 높은 팬덤</strong>이 형성됩니다.' },
  { icon: <Store size={24} />, color: 'cyan', title: '골목 상권의 견인', sub: 'Alleyway Revival', desc: '<strong>로컬 크리에이터와 브랜드</strong>가 앵커가 되어 주변 소상공인에게 트래픽을 확산(Spill-over)시킵니다.' },
  { icon: <Landmark size={24} />, color: 'teal', title: '문화적 자부심', sub: 'Cultural Pride', desc: '주민들이 지역을 <strong>\'살고 싶은 힙한 곳\'</strong>으로 재인식하며 도시 재생의 강력한 동력이 됩니다.' }
];

const PARTNERSHIP_DATA = {
  vs: {
    title: "벤처 스튜디오 (VS)",
    subTitle: "Business Creation Engine",
    theme: "blue",
    mainIcon: <Rocket size={32} />,
    desc: "아이디어 발굴부터 팀 빌딩, 자금 투자, 사업화까지 창업의 전 과정을 내부에서 주도하여 자회사로 분사(Spin-off)시키는 ‘스타트업 공장’입니다. 개별 창업의 실패 확률을 낮추고 체계적인 성장을 담보하는 시스템 창업의 거점입니다.",
    steps: [
      { icon: <Search size={22}/>, title: "지역 가치 및 자산 발굴 (Discovery)", text: "방치된 공간과 지역 고유의 자원을 분석하여 고부가가치 비즈니스로 전환" },
      { icon: <Hammer size={22}/>, title: "법인 직접 빌딩 (Company Building)", text: "VS가 팀 구성과 초기 자본을 직접 투입하여 목적 지향적 기업을 탄생시킴" },
      { icon: <ArrowUpRight size={22}/>, title: "지속적 경영 지원 (Management)", text: "전문 노하우와 인내 자본을 지원하여 개별 브랜드의 정착률을 극대화" }
    ],
    tools: [
      { name: "프로젝트 투자", desc: "개별 사업 단위의 마이크로 투자 집행" },
      { name: "스몰 엑시트", desc: "빠른 회수를 통한 자본 유동성 확보" },
      { name: "조인트 벤처", desc: "다양한 파트너와 협력 법인 설립" },
      { name: "특수목적회사(SPC)", desc: "특정 프로젝트를 위한 별도 법인 운용" },
      { name: "모듈형 오퍼레이션", desc: "법률, 재무, HR 등 공통 기능 지원" },
      { name: "데이터 무결성 확보", desc: "실시간 자금/지표 모니터링 시스템" }
    ]
  },
  amc: {
    title: "지역경영회사 (AMC)",
    subTitle: "Town Management Engine",
    theme: "indigo",
    mainIcon: <ShieldCheck size={32} />,
    desc: "행정의 손이 닿지 않는 영역에서 민간의 창의성으로 동네를 기획하고 운영하는 주체입니다. 단순한 부동산 개발이 아니라, 소프트웨어와 휴먼웨어를 결합하여 지역의 지속 가능성을 만드는 실질적인 도시 운영자입니다.",
    steps: [
      { icon: <Anchor size={22}/>, title: "핵심 공간 자산화 (Asset Anchoring)", text: "핵심 부동산의 장기 소유/운영 구조를 설계하여 사업자의 정착 안정성 확보" },
      { icon: <Shield size={22}/>, title: "리스크 방어 및 수호 (Protection)", text: "상한 임대료 협약 및 젠트리피케이션 선제 차단으로 로컬 생태계 보호" },
      { icon: <Layers size={22}/>, title: "통합 생태계 매니지먼트 (Management)", text: "기업 시너지를 위한 공동 브랜딩, 마케팅 및 지역 인프라 운영 플랫폼" }
    ],
    tools: [
      { name: "브랜드 매니지먼트", desc: "골목 내 브랜드 공동 마케팅 및 성장 관리" },
      { name: "지역 브랜딩", desc: "방문객 재방문을 유도하는 통합 이미지 구축" },
      { name: "마스터리스", desc: "공간을 책임 임대하여 공실 리스크 해소" },
      { name: "리츠(REITs)", desc: "다수 투자자가 참여하는 부동산 자산화" },
      { name: "임대료 안정화", desc: "젠트리피케이션 방지를 위한 상생 협약" },
      { name: "타운 매니지먼트", desc: "지역 축제, 청소, 치안 등 통합 관리" }
    ]
  }
};

const GLOBAL_CASES_DATA = [
  { 
    title: 'HighTechXL', sub: '(네덜란드)', tag: 'Deep Tech Builder', 
    desc: 'CERN, Philips 등의 기술을 활용해 하드웨어 스타트업을 직접 빌딩하는 벤처 스튜디오 모델.',
    hash: ['#DeepTech', '#Hardware'], color: 'blue',
    icon: <Rocket size={20} />, bgIcon: <Rocket size={100} />
  },
  { 
    title: 'Alphabet X', sub: '(미국)', tag: 'Moonshot Factory', 
    desc: '구글의 사내 벤처 스튜디오로, 기후 변화 등 인류 거대 문제를 해결하는 파괴적 혁신 실험.',
    hash: ['#Innovation', '#Impact'], color: 'amber',
    icon: <Cpu size={20} />, bgIcon: <Cpu size={100} />
  },
  { 
    title: 'Area Management', sub: '(일본)', tag: 'Urban Management', 
    desc: '마루노우치 등 민간 주도의 타운 매니지먼트. 부동산 소유주와 운영사가 협력해 지역 가치 상승.',
    hash: ['#UrbanRegen', '#JapanModel'], color: 'indigo',
    icon: <MapPin size={20} />, bgIcon: <MapPin size={100} />
  },
  { 
    title: 'Station F', sub: '(프랑스)', tag: 'Mega Scale Hub', 
    desc: '철도 기지창을 개조해 만든 세계 최대 스타트업 캠퍼스. 공공의 인프라와 민간의 운영이 결합된 거점.',
    hash: ['#Regeneration', '#ScaleUp'], color: 'blue',
    icon: <Building2 size={20} />, bgIcon: <Building2 size={100} />
  },
  { 
    title: 'Portland', sub: '(미국)', tag: 'Local Lifestyle', 
    desc: "'Keep Portland Weird' 슬로건 아래, 로컬 크리에이터와 소상공인 브랜드가 도시의 주류 문화를 형성.",
    hash: ['#Craftsmanship', '#LocalBrand'], color: 'teal',
    icon: <Store size={20} />, bgIcon: <Store size={100} />
  },
  { 
    title: 'King\'s Cross', sub: '(영국)', tag: 'Knowledge Quarter', 
    desc: '낙후된 지역을 구글 등 테크 기업, 예술 대학, 로컬 상권이 공존하는 지식 지구로 탈바꿈시킨 사례.',
    hash: ['#Placemaking', '#TechArt'], color: 'indigo',
    icon: <Lightbulb size={20} />, bgIcon: <Lightbulb size={100} />
  }
];

const BLUEPRINT_LAYERS_DATA = [
  { icon: <Target size={28} />, color: 'emerald', layer: 'LAYER 01', title: '핵심 가치층 (Value Core)', desc: '가장 안쪽에 위치한 <strong>지역성(Locality)</strong>과 <strong>고유성(Identity)</strong>은 도시의 유전자입니다. 어떤 비즈니스도 지역의 정체성이라는 뿌리 없이는 자생력을 가질 수 없음을 상징합니다.' },
  { icon: <Compass size={28} />, color: 'indigo', layer: 'LAYER 02', title: '공존 생태계층 (Jungle Loop)', desc: '<strong>코끼리, 얼룩말, 식생</strong>이 어우러지는 공생의 층입니다. 핵심 가치를 양분 삼아 각기 다른 규모의 주체들이 경쟁이 아닌 협력을 통해 생태계의 다양성을 유지합니다.' },
  { icon: <Settings size={28} />, color: 'blue', layer: 'LAYER 03', title: '실행 인프라층 (Action Engine)', desc: '최외곽에서 생태계를 감싸는 <strong>VS(창조)</strong>와 <strong>AMC(수호)</strong> 엔진입니다. 투기 자본과 같은 외부 충격을 막아내고 시스템이 멈추지 않고 순환하도록 기동력을 공급합니다.' }
];

// ==================================================================================
// [SUB-COMPONENTS] 재사용 UI 컴포넌트
// ==================================================================================

const Badge = ({ icon, text, className = "", color = "slate" }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${className}`}>
    {icon} {text}
  </div>
);

const SectionTitle = ({ children, align = "center", className = "" }) => (
  <h2 className={`text-3xl md:text-4xl font-bold tracking-tight text-slate-900 break-keep ${align === "center" ? "text-center" : "text-left"} ${className}`}>
    {children}
  </h2>
);

// ==================================================================================
// [MAIN COMPONENT] App
// ==================================================================================

const App = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen font-sans transition-all duration-500 overflow-x-hidden bg-${STYLE.COLORS.bg} text-${STYLE.COLORS.text} print:bg-white print:p-0`}>
      
      {/* 0. Top Navigation / Actions */}
      <div className={`${STYLE.CONTAINER} pt-8 mb-12 flex flex-col sm:flex-row gap-4 justify-between items-center print:hidden`}>
        <a 
          href="https://www.belocal.kr/news/articleList.html?sc_sub_section_code=S2N95&sc_section_code=S1N8&view_type=sm" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-500 transition-all hover:shadow-lg overflow-hidden w-full sm:w-auto justify-center sm:justify-start"
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600 group-hover:w-2 transition-all"></div>
          <div className="bg-slate-50 p-2 rounded-xl text-indigo-600 group-hover:scale-110 transition-transform border border-slate-100">
            <ExternalLink size={18} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Article Insight</p>
            <p className="text-sm font-semibold text-slate-700 tracking-tight">비로컬 12부작 공동 칼럼 전체 보기</p>
          </div>
          <div className="ml-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all">
            <ChevronRight size={18} />
          </div>
        </a>

        <button 
          onClick={handlePrint}
          className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-3xl shadow-xl hover:bg-slate-800 transition-all active:scale-95 group w-full sm:w-auto justify-center"
        >
          <Printer size={18} className="text-emerald-400 group-hover:animate-pulse" />
          <span className="font-semibold text-sm tracking-tight">PDF로 저장 / 인쇄하기</span>
        </button>
      </div>

      {/* 1. Header Section */}
      <header className={`${STYLE.CONTAINER} text-center ${STYLE.SECTION_GAP} relative`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 opacity-[0.03] pointer-events-none hidden md:block">
            <Network size={450} className="text-slate-900" />
        </div>
        
        <div className="relative z-10 px-2">
            <div className={`inline-block ${STYLE.TEXT.BADGE} bg-slate-800 text-white border-transparent mb-6 shadow-lg`}>
                {HEADER_DATA.subTitle}
            </div>
            <h1 className={`${STYLE.TEXT.TITLE_MAIN} mb-10 text-slate-900`}>
                {HEADER_DATA.title}
            </h1>
            
            <div className={`max-w-5xl mx-auto bg-white p-6 md:p-14 ${STYLE.CARD_ROUND} shadow-2xl border border-slate-100 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                    <Activity size={120} className="text-slate-900" />
                </div>
                
                <h2 className="text-xl md:text-3xl font-bold text-slate-800 mb-12 tracking-tight leading-snug break-keep">
                    {HEADER_DATA.mainDescTitle}
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                    {HEADER_DATA.cards.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="flex-1 text-center space-y-4 group w-full">
                            <div className={`w-20 h-20 bg-${item.color}-50 rounded-3xl mx-auto flex items-center justify-center text-${item.color}-600 border border-${item.color}-100 shadow-sm group-hover:scale-105 transition-transform`}>
                                {item.icon}
                            </div>
                            <p className="font-bold text-lg text-slate-800">{item.title}<br/><span className="text-xs font-normal text-slate-400 uppercase tracking-widest">{item.subTitle}</span></p>
                            <p className="text-sm text-slate-500 font-normal leading-relaxed px-4 whitespace-pre-line">{item.desc}</p>
                        </div>
                        {index === 0 && (
                          <div className="shrink-0 flex items-center justify-center">
                            <Plus size={32} className="text-slate-200 animate-pulse hidden md:block" />
                            <Plus size={24} className="text-slate-200 animate-pulse md:hidden" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}

                    <div className="shrink-0 flex items-center justify-center md:rotate-0 rotate-90 text-slate-200">
                        <ArrowRight size={32} />
                    </div>

                    <div className="flex-1 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl border-t-4 border-emerald-500 w-full">
                        <p className="text-[10px] font-semibold text-emerald-400 uppercase tracking-widest mb-3 opacity-80">{HEADER_DATA.outcome.label}</p>
                        <p className="font-bold text-xl leading-tight italic text-emerald-50">{HEADER_DATA.outcome.text}</p>
                    </div>
                </div>
            </div>
        </div>
      </header>

      <main className={`${STYLE.CONTAINER} space-y-24`}>
        
        {/* 2. Extraction vs Circulation Models */}
        <section className="grid md:grid-cols-2 gap-10">
          {/* Extraction Model */}
          <div className={`bg-white p-8 md:p-10 ${STYLE.CARD_ROUND} shadow-sm border border-slate-200 border-t-[10px] border-t-rose-400 relative overflow-hidden`}>
            <h3 className="text-xl font-bold mb-10 flex items-center gap-3 text-rose-500 uppercase tracking-tight">
              {MODEL_COMPARISON_DATA.extraction.icon} {MODEL_COMPARISON_DATA.extraction.title}
            </h3>
            <div className="space-y-10">
              {MODEL_COMPARISON_DATA.extraction.items.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className={`shrink-0 w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm ${item.iconChar ? 'font-black italic text-2xl' : ''}`}>
                    {item.icon || item.iconChar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-base mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="p-5 bg-rose-50/50 rounded-2xl text-rose-700 font-medium border border-rose-100 flex items-start gap-4 italic text-xs leading-relaxed">
                <Info size={18} className="shrink-0 mt-0.5" />
                <p>{MODEL_COMPARISON_DATA.extraction.alert}</p>
              </div>
            </div>
          </div>

          {/* Circulation Model */}
          <div className={`bg-white p-8 md:p-10 ${STYLE.CARD_ROUND} shadow-sm border border-slate-200 border-t-[10px] border-t-emerald-400 relative overflow-hidden`}>
            <h3 className="text-xl font-bold mb-10 flex items-center gap-3 text-emerald-600 uppercase tracking-tight text-left">
              {MODEL_COMPARISON_DATA.circulation.icon} {MODEL_COMPARISON_DATA.circulation.title}
            </h3>
            <div className="space-y-10 text-left">
              {MODEL_COMPARISON_DATA.circulation.items.map((item, idx) => (
                <div key={idx} className="flex gap-6 text-left">
                  <div className={`shrink-0 w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-base mb-1 text-left">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal text-left">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="p-5 bg-emerald-50/50 rounded-2xl text-emerald-800 font-medium border border-emerald-100 flex items-start gap-4 italic text-xs leading-relaxed text-left">
                <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                <p>{MODEL_COMPARISON_DATA.circulation.alert}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Startup Jungle Theory */}
        <section className={`bg-emerald-900 text-white p-8 md:p-12 lg:p-20 ${STYLE.CARD_ROUND} shadow-2xl overflow-hidden relative text-center`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')] opacity-10 pointer-events-none"></div>
          <div className="relative z-10 text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-800/50 px-4 py-1 rounded-full mb-6 border border-emerald-700">
                <Info size={14} className="text-emerald-300" />
                <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-200">The Zebras Unite Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight text-center break-keep">{JUNGLE_THEORY_DATA.intro.title}</h2>
            <p className="text-emerald-100/90 max-w-4xl mx-auto text-base leading-relaxed font-normal text-center px-4 break-keep">
              {JUNGLE_THEORY_DATA.intro.desc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10 text-left mb-16">
            {JUNGLE_THEORY_DATA.entities.map((entity, idx) => (
              <div key={idx} className={`${entity.style.bg} p-8 md:p-10 rounded-3xl ${entity.style.highlight ? 'border border-emerald-400/30 transform md:scale-105 shadow-2xl relative' : 'backdrop-blur-md border border-emerald-700/50 group transition-all'}`}>
                {entity.style.highlight && (
                  <div className="absolute top-4 right-4 bg-amber-400 text-emerald-900 p-2 rounded-xl shadow-lg rotate-12 animate-pulse text-emerald-900 font-black text-xs">HOT</div>
                )}
                <div className={`w-14 h-14 ${entity.style.highlight ? 'bg-white text-emerald-900 shadow-lg' : 'bg-emerald-100/10 text-emerald-300 border border-emerald-100/20 shadow-inner'} rounded-2xl flex items-center justify-center mb-10`}>
                  {entity.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{entity.title} <span className={`text-xs font-normal opacity-60 italic ml-1 ${entity.style.highlight ? 'text-emerald-100' : ''}`}>{entity.engTitle}</span></h4>
                <p className={`text-sm ${entity.style.text} leading-relaxed mb-10 font-normal`}>{entity.desc}</p>
                <div className={`space-y-3 border-t ${entity.style.highlight ? 'border-emerald-100/20' : 'border-emerald-100/10'} pt-8`}>
                    <p className={`text-[10px] font-bold uppercase ${entity.style.highlight ? 'text-emerald-200' : 'text-emerald-400'} tracking-[0.2em] mb-2 opacity-80`}>{entity.contextTitle}</p>
                    <ul className={`text-xs space-y-3 font-medium opacity-80 italic ${entity.style.highlight ? 'text-emerald-50' : ''}`}>
                      {entity.contextList.map((li, liIdx) => (
                        <li key={liIdx}>• {li}</li>
                      ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Diversity List */}
          <div className="relative z-10 bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-emerald-300 mb-2 flex items-center justify-center gap-2">
                <Maximize size={20} /> {JUNGLE_THEORY_DATA.diversity.title}
              </h3>
              <p className="text-slate-300 text-sm mb-8">{JUNGLE_THEORY_DATA.diversity.desc}</p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {JUNGLE_THEORY_DATA.diversity.items.map((item, idx) => (
                  <div key={idx} className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/5 rounded-full transition-all hover:scale-105 cursor-default">
                    <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">{item.icon}</span>
                    <span className="text-xs font-bold text-emerald-100 group-hover:text-white transition-colors">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* 3.5 Unicorn vs Zebra Analysis */}
        <section className={STYLE.CONTAINER}>
            <div className="text-center mb-12">
                <span className="text-rose-500 font-bold text-xs uppercase tracking-[0.4em] block mb-2">Column Insight Analysis</span>
                <SectionTitle>유니콘의 역설 vs 얼룩말의 공존</SectionTitle>
                <p className="text-slate-500 mt-4 text-base italic break-keep">"왜 지역에는 유니콘보다 얼룩말 떼가 필요한가?"</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* 1. Unicorn (Warning) */}
                <div className={`bg-rose-50 ${STYLE.CARD_ROUND} p-8 md:p-10 border border-rose-100 relative overflow-hidden group`}>
                    <div className="absolute top-0 right-0 p-8 opacity-10 text-rose-900 group-hover:scale-110 transition-transform duration-700">
                        <Tornado size={180} />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-rose-200 text-rose-800 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                            <Ban size={12} /> Warning: Monopoly
                        </div>
                        <h4 className="text-2xl font-bold text-rose-900 mb-6 break-keep">유니콘 독점의 위험성<br/><span className="text-xs font-normal text-rose-700">The Danger of Unicorn Monopoly</span></h4>
                        
                        {/* Visualization: Black Hole */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-8 flex flex-col items-center justify-center relative min-h-[260px] border border-rose-200 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-100/50 via-transparent to-transparent animate-[spin_10s_linear_infinite]"></div>
                            
                            {/* Particles */}
                            <div className="absolute inset-0">
                                <div className="absolute top-4 left-4 animate-[bounce_2s_infinite]">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                    <ArrowDownCircle className="text-rose-400 w-4 h-4 rotate-[-45deg] mt-1" />
                                </div>
                                <div className="absolute top-4 right-4 animate-[bounce_2.2s_infinite]">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                    <ArrowDownCircle className="text-rose-400 w-4 h-4 rotate-[45deg] mt-1" />
                                </div>
                                <div className="absolute bottom-4 left-4 animate-[bounce_1.8s_infinite]">
                                    <ArrowUpRight className="text-rose-400 w-4 h-4 rotate-[-135deg] mb-1" />
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                </div>
                                <div className="absolute bottom-4 right-4 animate-[bounce_2.5s_infinite]">
                                    <ArrowUpRight className="text-rose-400 w-4 h-4 rotate-[-45deg] mb-1" />
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                </div>
                            </div>

                            {/* Core */}
                            <div className="z-10 w-36 h-36 bg-gradient-to-br from-rose-600 to-red-700 rounded-full flex flex-col items-center justify-center text-white shadow-[0_0_30px_rgba(225,29,72,0.6)] animate-pulse">
                                <Magnet size={32} className="mb-2 text-rose-200" />
                                <span className="font-black text-lg">UNICORN</span>
                                <span className="text-[9px] bg-rose-800 px-2 py-0.5 rounded-full mt-1">Resource Vacuum</span>
                            </div>
                            
                            <p className="absolute bottom-4 text-[10px] font-bold text-rose-500 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full shadow-sm">
                                Winner Takes All (승자독식)
                            </p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 bg-white/50 p-4 rounded-2xl border border-rose-100">
                                <div className="shrink-0 text-rose-500 mt-1"><Skull size={20} /></div>
                                <div>
                                    <h5 className="font-bold text-rose-900 text-sm">생태계 사막화 (Desertification)</h5>
                                    <p className="text-xs text-rose-800/80 mt-1 leading-relaxed">거대 플랫폼이 지역의 인재와 자본을 블랙홀처럼 흡수하여, 주변의 자생적 기업들이 말라죽는 현상 초래</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-white/50 p-4 rounded-2xl border border-rose-100">
                                <div className="shrink-0 text-rose-500 mt-1"><XCircle size={20} /></div>
                                <div>
                                    <h5 className="font-bold text-rose-900 text-sm">J-커브의 함정 (Exit Trap)</h5>
                                    <p className="text-xs text-rose-800/80 mt-1 leading-relaxed">투자 회수(Exit)만을 목표로 한 초고속 성장은 결국 지역을 떠나거나 매각되어 '먹튀' 논란을 야기함</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2. Zebra (Solution) */}
                <div className={`bg-emerald-50 ${STYLE.CARD_ROUND} p-8 md:p-10 border border-emerald-100 relative overflow-hidden group`}>
                    <div className="absolute top-0 right-0 p-8 opacity-10 text-emerald-900 group-hover:scale-110 transition-transform duration-700">
                        <GitMerge size={180} />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-200 text-emerald-800 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                            <Sprout size={12} /> Solution: Coexistence
                        </div>
                        <h4 className="text-2xl font-bold text-emerald-900 mb-6 break-keep">벤처 스튜디오 & 얼룩말 공존<br/><span className="text-xs font-normal text-emerald-700">VS & Zebra Symbiosis</span></h4>

                        {/* Visualization: Network */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-8 flex flex-col items-center justify-center relative min-h-[260px] border border-emerald-200">
                            {/* Protection Zone */}
                            <div className="absolute inset-4 border-2 border-dashed border-blue-300 rounded-[2rem] flex items-center justify-center pointer-events-none">
                                <div className="absolute -top-3 bg-blue-100 text-blue-700 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                    <Shield size={10} /> VS Protection Zone
                                </div>
                            </div>

                            {/* Nodes */}
                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg"><Users size={20} /></div>
                                    <span className="text-[9px] font-bold text-emerald-800">Zebra A</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 mt-6">
                                    <div className="w-10 h-10 bg-indigo-400 rounded-full flex items-center justify-center text-white shadow-md"><Building2 size={16} /></div>
                                    <span className="text-[9px] font-bold text-indigo-700">Local B</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 -mt-6">
                                    <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-md"><Lightbulb size={16} /></div>
                                    <span className="text-[9px] font-bold text-amber-700">Tech C</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-12 h-12 bg-emerald-400 rounded-xl flex items-center justify-center text-white shadow-lg"><Store size={20} /></div>
                                    <span className="text-[9px] font-bold text-emerald-800">Shop D</span>
                                </div>
                            </div>

                            {/* SVG Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}}>
                                <line x1="40%" y1="40%" x2="60%" y2="60%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="60%" y1="40%" x2="40%" y2="60%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="30%" x2="50%" y2="70%" stroke="#cbd5e1" strokeWidth="1" />
                            </svg>
                            
                            <p className="absolute bottom-4 text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full shadow-sm">
                                Resilient Network (회복탄력성)
                            </p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 bg-white/50 p-4 rounded-2xl border border-emerald-100">
                                <div className="shrink-0 text-emerald-500 mt-1"><Handshake size={20} /></div>
                                <div>
                                    <h5 className="font-bold text-emerald-900 text-sm">벤처 스튜디오(VS)의 역할 (Gardener)</h5>
                                    <p className="text-xs text-emerald-800/80 mt-1 leading-relaxed">개별 얼룩말 기업이 척박한 환경에서 생존할 수 있도록 <strong>자본+팀+전략</strong>을 패키지로 공급하는 '정원사' 역할 수행</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-white/50 p-4 rounded-2xl border border-emerald-100">
                                <div className="shrink-0 text-emerald-500 mt-1"><Network size={20} /></div>
                                <div>
                                    <h5 className="font-bold text-emerald-900 text-sm">다양성 기반의 회복력 (Resilience)</h5>
                                    <p className="text-xs text-emerald-800/80 mt-1 leading-relaxed">하나가 무너져도 전체가 붕괴되지 않는 촘촘한 네트워크를 형성하여 도시의 경제적 안전망 구축</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. TCJTC Engine */}
        <section className={`max-w-6xl mx-auto bg-white p-8 md:p-20 ${STYLE.CARD_ROUND} shadow-sm border border-slate-200 overflow-hidden mb-12 text-center relative`}>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
          
          <div className="text-center mb-12 md:mb-20 relative z-10">
            <div className="inline-block bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-4 border border-indigo-100">
               Core Mechanism
            </div>
            <h2 className={`${STYLE.TEXT.TITLE_SECTION} mb-6 text-slate-900`}>
               TCJTC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">선순환 메커니즘</span>
            </h2>
            <p className="text-slate-500 font-medium tracking-tight text-lg break-keep">
                Triple Circulation: Jobs <span className="text-slate-300 mx-2">|</span> Traffic <span className="text-slate-300 mx-2">|</span> Capital
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-around gap-20 relative z-10">
            {/* Wheel Visualization */}
            <div className="relative w-[340px] h-[340px] shrink-0">
                <div className="absolute inset-0 rounded-full animate-spin-slow opacity-90 blur-sm"
                     style={{
                         background: 'conic-gradient(from 0deg, #06b6d4 0deg, #10b981 120deg, #d97706 240deg, #06b6d4 360deg)',
                         maskImage: 'radial-gradient(transparent 60%, black 61%)',
                         WebkitMaskImage: 'radial-gradient(transparent 60%, black 61%)'
                     }}
                ></div>
                
                {/* Core */}
                <div className="absolute inset-8 rounded-full bg-slate-900 flex flex-col items-center justify-center text-white shadow-2xl z-20 border-8 border-white">
                    <RefreshCcw size={40} className="text-cyan-400 mb-2 animate-spin-slow"/>
                    <span className="font-black text-3xl italic tracking-tighter">TCJTC</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">Flywheel Effect</span>
                </div>

                {/* Nodes */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 group cursor-pointer">
                    <div className="w-20 h-20 bg-cyan-600 rounded-3xl shadow-xl flex items-center justify-center text-white ring-4 ring-white group-hover:scale-110 transition-transform">
                        <Briefcase size={32} />
                    </div>
                    <div className="mt-3 bg-white border border-cyan-100 px-4 py-2 rounded-xl shadow-lg text-center min-w-[120px]">
                        <p className="font-bold text-slate-800 text-sm">일자리</p>
                        <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider">Jobs</p>
                    </div>
                </div>

                <div className="absolute bottom-4 -right-8 flex flex-col items-center z-30 group cursor-pointer">
                    <div className="w-20 h-20 bg-emerald-600 rounded-3xl shadow-xl flex items-center justify-center text-white ring-4 ring-white group-hover:scale-110 transition-transform">
                        <Footprints size={32} />
                    </div>
                    <div className="mt-3 bg-white border border-emerald-100 px-4 py-2 rounded-xl shadow-lg text-center min-w-[120px]">
                        <p className="font-bold text-slate-800 text-sm">관계인구</p>
                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Traffic</p>
                    </div>
                </div>

                <div className="absolute bottom-4 -left-8 flex flex-col items-center z-30 group cursor-pointer">
                    <div className="w-20 h-20 bg-amber-500 rounded-3xl shadow-xl flex items-center justify-center text-white ring-4 ring-white group-hover:scale-110 transition-transform">
                        <Coins size={32} />
                    </div>
                    <div className="mt-3 bg-white border border-amber-100 px-4 py-2 rounded-xl shadow-lg text-center min-w-[120px]">
                        <p className="font-bold text-slate-800 text-sm">자본</p>
                        <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Capital</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6 max-w-xl text-left mt-12 lg:mt-0">
              {TCJTC_DATA.map((item) => (
                <div key={item.id} className={`p-6 bg-${item.color}-50/40 rounded-[2.5rem] border-l-4 border-${item.color}-400 group hover:bg-${item.color}-50 transition-colors`}>
                  <h4 className={`font-bold text-${item.color}-900 text-base mb-1 flex items-center gap-2`}>
                      <div className={`w-2 h-2 rounded-full bg-${item.color}-500`}></div> 0{item.id}. {item.title} <span className={`text-xs bg-${item.color}-100 text-${item.color}-700 px-2 py-0.5 rounded font-bold ml-auto`}>{item.engTitle}</span>
                  </h4>
                  <p className={`text-xs font-bold text-${item.color}-600 mb-2 pl-4`}>{item.quote}</p>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal pl-4 break-keep">
                      {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.5 Ripple Effects */}
        <section className={`${STYLE.CONTAINER} mb-24 relative`}>
            <div className="absolute left-1/2 -top-12 h-12 w-0.5 bg-gradient-to-b from-slate-200 to-indigo-200 hidden md:block"></div>
            
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10"><PartyPopper size={200} /></div>
                
                <div className="relative z-10 text-center mb-12">
                    <span className="bg-white/10 text-indigo-200 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10">Outcome</span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-2 break-keep">TCJTC 엔진이 만드는 도시의 변화<br/><span className="text-lg font-medium text-indigo-200">Positive Ripple Effects</span></h3>
                    <p className="text-slate-400 text-sm">"순환 메커니즘이 정상 작동할 때, 도시는 이렇게 살아납니다"</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                    {RIPPLE_EFFECTS_DATA.map((effect, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                          <div className={`w-12 h-12 bg-${effect.color}-500/20 rounded-xl flex items-center justify-center text-${effect.color}-400 mb-6`}>
                              {effect.icon}
                          </div>
                          <h4 className="text-xl font-bold mb-2">{effect.title}<br/><span className="text-xs font-normal opacity-60">{effect.sub}</span></h4>
                          <p className="text-sm text-slate-300 leading-relaxed font-light break-keep" dangerouslySetInnerHTML={{ __html: effect.desc }} />
                      </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 5. Partnership (VS & AMC) */}
        <section className={`${STYLE.CONTAINER} space-y-12 mb-24 text-center`}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 border-b border-slate-100 pb-2">
                <Handshake size={20} className="text-indigo-600/60" />
                Strategic Partnership
            </div>
            <h2 className={`${STYLE.TEXT.TITLE_SECTION} mb-6 text-slate-900`}>창조와 수호: 두 엔진의 파트너십<br/><span className="text-xl font-normal text-slate-500">Creation & Protection</span></h2>
            <p className="text-slate-500 font-medium max-w-4xl mx-auto text-base leading-relaxed italic break-keep">
                비즈니스를 빌딩하는 VS와 도시 토양을 수호하는 AMC는 <strong>'상호 의존적 동반자'</strong>로서 지역의 성장을 설계합니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 pt-10 text-left">
            {/* VS Card */}
            <div className={`bg-white ${STYLE.CARD_ROUND} p-8 md:p-10 border border-slate-200 shadow-xl relative overflow-hidden group`}>
              <div className="flex items-center gap-5 mb-10">
                <div className={`w-16 h-16 bg-${PARTNERSHIP_DATA.vs.theme}-600 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-6`}>{PARTNERSHIP_DATA.vs.mainIcon}</div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-slate-900 leading-none mb-1">{PARTNERSHIP_DATA.vs.title}</h3>
                  <span className={`text-[11px] font-bold text-${PARTNERSHIP_DATA.vs.theme}-500 uppercase tracking-[0.2em] block italic opacity-70`}>{PARTNERSHIP_DATA.vs.subTitle}</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-10 pl-2 border-l-4 border-blue-100">{PARTNERSHIP_DATA.vs.desc}</p>
              <div className="space-y-8 relative mb-12">
                <div className={`absolute left-[27px] top-4 bottom-4 w-px bg-slate-100 border-l border-dashed border-${PARTNERSHIP_DATA.vs.theme}-200`}></div>
                {PARTNERSHIP_DATA.vs.steps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative z-10 items-start">
                    <div className={`w-14 h-14 shrink-0 bg-white border-2 border-${PARTNERSHIP_DATA.vs.theme}-100 rounded-full flex items-center justify-center text-${PARTNERSHIP_DATA.vs.theme}-500 shadow-sm transition-all group-hover:bg-${PARTNERSHIP_DATA.vs.theme}-50`}>
                      {step.icon}
                    </div>
                    <div className="text-left mt-1">
                      <h4 className="font-bold text-slate-900 text-base mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed break-keep">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Tools */}
              <div className="pt-8 border-t border-slate-100">
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <Settings size={18} className={`text-${PARTNERSHIP_DATA.vs.theme}-500`}/> 
                    <span className="text-sm">6 Strategic Tools</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PARTNERSHIP_DATA.vs.tools.map((tool, tIdx) => (
                      <div key={tIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col justify-center hover:bg-blue-50 transition-colors">
                        <p className={`text-xs font-bold text-${PARTNERSHIP_DATA.vs.theme}-700 mb-0.5`}>{tool.name}</p>
                        <p className="text-[10px] text-slate-400 leading-tight break-keep">{tool.desc}</p>
                      </div>
                    ))}
                  </div>
              </div>
            </div>

            {/* AMC Card */}
            <div className={`bg-white ${STYLE.CARD_ROUND} p-8 md:p-10 border border-slate-200 shadow-xl relative overflow-hidden group`}>
              <div className="flex items-center gap-5 mb-10">
                <div className={`w-16 h-16 bg-${PARTNERSHIP_DATA.amc.theme}-700 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:-rotate-6`}>{PARTNERSHIP_DATA.amc.mainIcon}</div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-slate-900 leading-none mb-1">{PARTNERSHIP_DATA.amc.title}</h3>
                  <span className={`text-[11px] font-bold text-${PARTNERSHIP_DATA.amc.theme}-500 uppercase tracking-[0.2em] block italic opacity-70`}>{PARTNERSHIP_DATA.amc.subTitle}</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-10 pl-2 border-l-4 border-indigo-100">{PARTNERSHIP_DATA.amc.desc}</p>
              <div className="space-y-8 relative mb-12">
                <div className={`absolute left-[27px] top-4 bottom-4 w-px bg-slate-100 border-l border-dashed border-${PARTNERSHIP_DATA.amc.theme}-200`}></div>
                {PARTNERSHIP_DATA.amc.steps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative z-10 items-start">
                    <div className={`w-14 h-14 shrink-0 bg-white border-2 border-${PARTNERSHIP_DATA.amc.theme}-100 rounded-full flex items-center justify-center text-${PARTNERSHIP_DATA.amc.theme}-700 shadow-sm transition-all group-hover:bg-${PARTNERSHIP_DATA.amc.theme}-50`}>
                      {step.icon}
                    </div>
                    <div className="text-left mt-1">
                      <h5 className="font-bold text-slate-900 text-base mb-1 leading-tight">{step.title}</h5>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed break-keep">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Tools */}
              <div className="pt-8 border-t border-slate-100">
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <Settings size={18} className={`text-${PARTNERSHIP_DATA.amc.theme}-500`}/> 
                    <span className="text-sm">6 Strategic Tools</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PARTNERSHIP_DATA.amc.tools.map((tool, tIdx) => (
                      <div key={tIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col justify-center hover:bg-indigo-50 transition-colors">
                        <p className={`text-xs font-bold text-${PARTNERSHIP_DATA.amc.theme}-700 mb-0.5`}>{tool.name}</p>
                        <p className="text-[10px] text-slate-400 leading-tight break-keep">{tool.desc}</p>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5.5 Global Benchmarking */}
        <section className={`${STYLE.CONTAINER} mb-24 relative`}>
             <div className="text-center mb-12">
                <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.4em] block mb-2">Global Case Studies</span>
                <SectionTitle>글로벌 벤치마킹 사례</SectionTitle>
                <p className="text-slate-500 mt-4 text-base italic break-keep">"세계는 이미 벤처 스튜디오와 지역 경영 모델로 혁신하고 있습니다"</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                {GLOBAL_CASES_DATA.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-[0.05]">{item.bgIcon}</div>
                      <div className="flex items-center gap-3 mb-6">
                           <div className={`bg-${item.color}-100 text-${item.color}-600 p-2 rounded-lg`}>{item.icon}</div>
                           <div className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">{item.tag}</div>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title} <span className="text-sm font-normal text-slate-500 ml-1">{item.sub}</span></h4>
                      <p className={`text-xs font-bold text-${item.color}-600 uppercase tracking-widest mb-4`}>Key Point</p>
                      <p className="text-sm text-slate-600 leading-relaxed break-keep">{item.desc}</p>
                      <div className="mt-6 pt-6 border-t border-slate-100 flex gap-2">
                           {item.hash.map((tag, tIdx) => (
                             <span key={tIdx} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-200">{tag}</span>
                           ))}
                      </div>
                  </div>
                ))}
            </div>
        </section>

        {/* 6. Master Blueprint */}
        <section className={`${STYLE.CONTAINER} bg-white p-6 md:p-24 ${STYLE.CARD_ROUND} border border-slate-200 shadow-2xl relative overflow-hidden mb-24 text-center`}>
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '40px 40px'}}></div>

          <div className="relative z-10 space-y-32">
            <div className="text-center space-y-6">
              <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.6em] block underline underline-offset-8 decoration-indigo-100">Final Grand Synthesis</span>
              <h2 className={`${STYLE.TEXT.TITLE_MAIN} italic text-slate-900`}>마스터 블루프린트:<br/>도시 통합 설계도</h2>
              <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto italic leading-relaxed break-keep">
                좋은 기업이라는 씨앗이 어떻게 좋은 도시라는 숲을 이루는지 <br className="hidden md:block"/> 
                전체 시스템의 인과 관계(Causality)를 한눈에 확인해 보세요.
              </p>
            </div>

            {/* Orbit Diagram (Preserved) */}
            <div className="relative flex items-center justify-center py-20 md:py-32 min-h-[600px] md:min-h-[800px] rounded-[3rem] md:rounded-[5rem] overflow-hidden md:overflow-visible">
               
               {/* Center Core */}
               <div className="relative z-50 text-center scale-75 md:scale-100">
                  <div className="w-64 h-64 bg-slate-900 rounded-full flex flex-col items-center justify-center p-10 border-[8px] border-slate-700 shadow-[0_0_70px_rgba(16,185,129,0.2)]">
                     <Globe size={48} className="text-emerald-400 mb-4" />
                     <span className="text-white font-black text-2xl tracking-tighter italic">좋은 도시</span>
                     <span className="text-slate-500 text-[10px] font-bold mt-2 uppercase tracking-[0.3em]">(Good City Outcome)</span>
                  </div>
                  
                  {/* Rotating Ring */}
                  <div className="absolute inset-[-40px] rounded-full border-2 border-dashed border-indigo-400/50 animate-[spin_20s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-[11px] font-bold shadow-lg whitespace-nowrap border-2 border-white">지역성 Locality</div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-[11px] font-bold shadow-lg whitespace-nowrap border-2 border-white">고유성 Identity</div>
                  </div>
               </div>

               {/* Static Ring 1 */}
               <div className="absolute w-[340px] h-[340px] md:w-[500px] md:h-[500px] border-[2px] border-slate-200 rounded-full flex items-center justify-center pointer-events-none">
                  <div className="absolute top-0 md:top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-100/95 px-6 py-3 rounded-[2rem] border-2 border-emerald-500/50 flex items-center gap-3 shadow-xl scale-90 md:scale-100 z-10">
                     <Building2 size={24} className="text-emerald-700" />
                     <div className="text-left leading-none"><p className="font-bold text-xs uppercase text-emerald-900">코끼리 Elephant</p><p className="text-[9px] font-semibold text-emerald-600 mt-0.5">앵커 기업</p></div>
                  </div>
                  <div className="absolute bottom-[15%] left-[5%] md:left-[10%] bg-blue-100/95 px-6 py-3 rounded-[2rem] border-2 border-blue-500/50 flex items-center gap-3 shadow-xl scale-90 md:scale-100 z-10">
                     <Users size={24} className="text-blue-700" />
                     <div className="text-left leading-none"><p className="font-bold text-xs uppercase text-blue-900">얼룩말 Zebra</p><p className="text-[9px] font-semibold text-blue-600 mt-0.5">로컬 벤처</p></div>
                  </div>
                  <div className="absolute bottom-[15%] right-[5%] md:right-[10%] bg-amber-100/95 px-6 py-3 rounded-[2rem] border-2 border-amber-500/50 flex items-center gap-3 shadow-xl scale-90 md:scale-100 z-10">
                     <Trees size={24} className="text-amber-700" />
                     <div className="text-left leading-none"><p className="font-bold text-xs uppercase text-amber-900">식생 Flora</p><p className="text-[9px] font-semibold text-amber-600 mt-0.5">다양성</p></div>
                  </div>
               </div>

               {/* Static Ring 2 */}
               <div className="absolute w-[500px] h-[500px] md:w-[750px] md:h-[750px] border-[2px] border-slate-300 rounded-full flex items-center justify-center pointer-events-none">
                  <div className="absolute top-1/2 left-[-20px] md:left-0 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-6 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] flex flex-col items-center gap-2 z-20 border-4 border-white scale-90 md:scale-100">
                     <Rocket size={32} className="animate-bounce" />
                     <span className="text-[10px] font-bold text-blue-100 absolute -bottom-8 bg-blue-900 px-3 py-1 rounded-full shadow-sm whitespace-nowrap border border-blue-400">벤처 스튜디오 VS</span>
                  </div>
                  <div className="absolute top-1/2 right-[-20px] md:right-0 translate-x-1/2 -translate-y-1/2 bg-indigo-700 text-white p-6 rounded-full shadow-[0_0_30px_rgba(67,56,202,0.4)] flex flex-col items-center gap-2 z-20 border-4 border-white scale-90 md:scale-100">
                     <ShieldCheck size={32} className="animate-pulse" />
                     <span className="text-[10px] font-bold text-indigo-100 absolute -bottom-8 bg-indigo-900 px-3 py-1 rounded-full shadow-sm whitespace-nowrap border border-indigo-400">지역경영회사 AMC</span>
                  </div>
               </div>

               {/* SVG Paths */}
               <div className="absolute inset-0 pointer-events-none overflow-visible hidden md:block">
                  <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <marker id="arr-blue" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#06b6d4" /></marker>
                      <marker id="arr-indigo" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#6366f1" /></marker>
                      <marker id="arr-emerald" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#10b981" /></marker>
                    </defs>
                    <path d="M 100 300 Q 200 300, 250 400" fill="none" stroke="#06b6d4" strokeWidth="3" strokeDasharray="10,6" markerEnd="url(#arr-blue)" />
                    <text x="120" y="280" className="text-[11px] font-bold fill-cyan-600 italic">로컬 기업 창조 Creation</text>
                    <path d="M 300 450 Q 400 500, 500 450" fill="none" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arr-indigo)" />
                    <text x="360" y="520" className="text-[11px] font-bold fill-indigo-600 italic">가치 전이 Value Transfer</text>
                    <path d="M 700 300 Q 600 300, 500 300" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arr-emerald)" />
                    <text x="580" y="280" className="text-[11px] font-bold fill-emerald-600 italic">도시 활성화 Activation</text>
                  </svg>
               </div>
            </div>

            {/* Layer Info */}
            <div className="bg-slate-900 rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 text-left relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-emerald-500/10 blur-[100px] rounded-full"></div>
                <div className="relative z-10 space-y-16">
                    <div className="border-l-4 border-emerald-500 pl-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-4 italic break-keep">도시 통합 설계도의 작동 원리</h3>
                        <p className="text-slate-400 font-medium text-base break-keep">설계도를 안쪽(뿌리)에서 바깥쪽(수호)으로 따라가며 시스템의 유기적 작동 방식을 이해해 보세요.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {BLUEPRINT_LAYERS_DATA.map((layer, idx) => (
                          <div key={idx} className="space-y-4 group">
                              <div className={`w-14 h-14 bg-${layer.color}-500/20 rounded-2xl flex items-center justify-center text-${layer.color}-400 group-hover:bg-${layer.color}-500 group-hover:text-white transition-all`}>
                                  {layer.icon}
                              </div>
                              <div>
                                  <h4 className="text-white font-bold text-lg leading-tight italic mb-3">{layer.layer}<br/><span className={`text-${layer.color}-400 not-italic`}>{layer.title}</span></h4>
                                  <p className="text-slate-400 text-sm leading-relaxed font-normal break-keep" dangerouslySetInnerHTML={{ __html: layer.desc }} />
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Conclusion */}
            <div className={`mt-20 bg-slate-50 p-8 md:p-16 ${STYLE.CARD_ROUND} border border-slate-200 relative overflow-hidden shadow-inner text-left`}>
                <div className="absolute top-0 left-0 p-12 opacity-[0.05] text-indigo-600"><Quote size={80} /></div>
                <div className="relative z-10 space-y-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 border-b-4 border-indigo-500 inline-block pb-2 mb-8 tracking-tighter italic break-keep">
                        맺음말: 도시의 미래를 설계하는 방식
                    </h3>
                    <div className="space-y-8">
                        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium tracking-tight break-keep">
                            이 인포그래픽이 담고 있는 구조는 단순한 비즈니스 모델이 아닌, 우리가 함께 살아가야 할 도시의 <strong>지속 가능한 생존 전략</strong>입니다. 
                            벤처 스튜디오(VS)가 지역의 숨겨진 고유성을 발견해 <span className="text-blue-600 font-bold italic">'좋은 기업'</span>이라는 생명의 씨앗을 심고, 
                            지역경영회사(AMC)가 그 성과가 외부 투기 자본에 의해 유출되지 않도록 토양을 견고하게 수호할 때, 
                            비로소 자본이 내부에서 건강하게 순환하는 <span className="text-emerald-600 font-bold underline underline-offset-8 decoration-emerald-200">TCJTC 시스템</span>이 완성됩니다.
                        </p>
                        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium tracking-tight break-keep">
                            결국 우리가 꿈꾸는 '좋은 도시'는 위에서 아래로 강요되는 거창한 마스터플랜이 아니라, 
                            <strong>좋은 기업들이 만들어내는 건강한 정글 생태계</strong> 속에서 스스로 숨 쉬며 자라나는 유기적인 공간입니다. 
                            건물을 세우는 외형 성장의 시대를 넘어, 기업과 도시가 하나의 운명 공동체로서 함께 호흡하고 
                            성장하는 <span className="text-indigo-600 font-bold italic underline underline-offset-12 decoration-indigo-200">선순환의 시대</span>를 함께 만들어가야 합니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`bg-slate-900 ${STYLE.CARD_ROUND} p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden group`}>
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-emerald-500/10 to-amber-500/10 opacity-30"></div>
               <div className="relative z-10 space-y-10">
                  <h3 className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight italic text-white underline decoration-white/10 underline-offset-12 break-keep">
                    "도시를 추출의 대상이 아닌, <br className="md:hidden"/> <span className="text-emerald-400 font-bold">공존과 순환의 정글</span>로 만드는 일"
                  </h3>
                  <div className="pt-10 flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-slate-400">
                     <span className="flex items-center gap-2 md:gap-4"><Maximize size={18} className="text-indigo-500"/> Resiliency (회복탄력성)</span>
                     <span className="flex items-center gap-2 md:gap-4"><Cpu size={18} className="text-emerald-500"/> Intelligence (지능적 설계)</span>
                     <span className="flex items-center gap-2 md:gap-4"><RefreshCcw size={18} className="text-amber-500"/> Circulation (선순환)</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Footer Insight */}
        <section className="text-center pb-20 print:mt-24 px-4">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-white px-10 py-6 rounded-[2rem] md:rounded-full shadow-2xl border border-slate-100 transition-all hover:scale-105">
            <div className="text-indigo-600 font-bold flex items-center gap-3">
               <Globe size={28} className="animate-pulse" /> 
               <span className="text-lg font-bold uppercase tracking-widest">로컬의 시대</span>
            </div>
            <div className="hidden md:block h-8 w-px bg-slate-200"></div>
            <p className="text-slate-600 font-semibold text-base md:text-lg break-keep">
              도시의 성장은 건물을 높이는 것이 아니라, 
              <span className="text-slate-900 font-bold ml-2">기업이 뿌리내릴 건강한 토양</span>을 만드는 과정입니다.
            </p>
          </div>
        </section>
      </main>

      <footer className={`${STYLE.CONTAINER} text-center border-t border-slate-200 py-20 text-slate-400 px-4`}>
        <div className="mb-10 flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center opacity-40">
          <div className="hidden md:block h-[2px] w-24 bg-slate-300"></div>
          <div className="text-center">
            <p className="font-black text-slate-500 text-lg tracking-tight mb-1">좋은 기업이 좋은 도시를 만든다</p>
            <p className="font-bold tracking-[0.3em] uppercase text-[10px] text-slate-400">Good Companies Make Good Cities</p>
          </div>
          <div className="hidden md:block h-[2px] w-24 bg-slate-300"></div>
        </div>
        
        <div className="space-y-4">
            <p className="font-medium text-slate-500 tracking-tight text-sm text-center leading-relaxed break-keep">
                지역의 미래를 고민하는 <a href="http://cspinc.kr" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 font-bold hover:underline transition-all">씨에스피</a> & <a href="https://belocal.co" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold hover:underline transition-all">비로컬</a>의 12부작 공동 연구 프로젝트를 기반으로 생성된 인포그래픽입니다.
            </p>
            <p className="text-[11px] text-slate-400 font-mono">
                &copy; 2025 ~ 2026 CSP & BELOCAL All Rights Reserved.
            </p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: A4; margin: 15mm; }
          .print-hidden { display: none !important; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default App;
