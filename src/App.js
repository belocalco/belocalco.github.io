import React from 'react';
import { 
  Users, Building2, Trees, Repeat, ShieldCheck, Rocket, HeartHandshake, 
  ArrowDownCircle, Coins, Settings, Globe, Search, Hammer, ArrowUpRight, 
  Anchor, Shield, Layers, Network, Activity, Plus, ArrowRight, Quote, 
  Target, Compass, ChevronRight, ExternalLink, Printer, Info, CheckCircle2, 
  Maximize, Cpu, RefreshCcw, Tornado, Skull, XCircle, Sprout, 
  GitMerge, Ban, Footprints, Store, PartyPopper, Landmark, Magnet, MapPin, 
  Lightbulb, Briefcase, GraduationCap, Factory, Utensils, ShoppingBag, LayoutGrid, Smartphone
} from 'lucide-react';

// ==================================================================================
// [CONFIG] 디자인 시스템 & 유틸리티
// ==================================================================================

const STYLE = {
  // 레이아웃 & 간격
  LAYOUT: {
    CONTAINER: "max-w-7xl mx-auto px-4 md:px-8", 
    SECTION_GAP: "mb-32 md:mb-40",
    CARD_ROUND: "rounded-[2rem] md:rounded-[3rem]",
    GRID_GAP: "gap-6 md:gap-8",
  },
  
  // 텍스트 타이포그래피
  TEXT: {
    TITLE_MAIN: "text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] drop-shadow-sm break-keep",
    TITLE_SECTION: "text-3xl md:text-5xl font-black tracking-tight break-keep",
    DESC: "text-lg md:text-xl leading-relaxed font-medium text-slate-500 break-keep",
    BADGE: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-sm",
  },

  // 색상 팔레트
  COLORS: {
    bg: "bg-slate-50",
    textMain: "text-slate-900",
    textSub: "text-slate-500",
    primary: "indigo",
    secondary: "emerald",
    accent: "rose",
  },

  // 컴포넌트 스타일
  COMPONENTS: {
    BENTO_CARD: "bg-white border border-slate-100 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
    ICON_BOX: "w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner",
    GLASS_PANEL: "bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg",
  }
};

// [Helper] Tailwind 동적 클래스 매핑
const COLOR_VARIANTS = {
  cyan: {
    bg50: 'bg-cyan-50',
    text600: 'text-cyan-600',
    border100: 'border-cyan-100',
    text900: 'text-cyan-900',
    text500: 'text-cyan-500',
    bg100: 'bg-cyan-100',
    text700: 'text-cyan-700',
  },
  emerald: {
    bg50: 'bg-emerald-50',
    text600: 'text-emerald-600',
    border100: 'border-emerald-100',
    text900: 'text-emerald-900',
    text500: 'text-emerald-500',
    bg100: 'bg-emerald-100',
    text700: 'text-emerald-700',
    bg50020: 'bg-emerald-500/20',
    text400: 'text-emerald-400',
  },
  rose: {
    bg50: 'bg-rose-50',
    text500: 'text-rose-500',
    border100: 'border-rose-100',
    text900: 'text-rose-900',
    text600: 'text-rose-600',
  },
  amber: {
    bg50: 'bg-amber-50',
    text600: 'text-amber-600',
    border100: 'border-amber-100',
    text900: 'text-amber-900',
    text500: 'text-amber-500',
    bg100: 'bg-amber-100',
    text700: 'text-amber-700',
  },
  blue: {
    bg50: 'bg-blue-50',
    text600: 'text-blue-600',
    border100: 'border-blue-100',
    text900: 'text-blue-900',
    text500: 'text-blue-500',
    bg100: 'bg-blue-100',
    text700: 'text-blue-700',
  },
  indigo: {
    bg50: 'bg-indigo-50',
    text600: 'text-indigo-600',
    border100: 'border-indigo-100',
    text900: 'text-indigo-900',
    text500: 'text-indigo-500',
    bg100: 'bg-indigo-100',
    text700: 'text-indigo-700',
  },
   teal: {
    bg50: 'bg-teal-50',
    text600: 'text-teal-600',
    border100: 'border-teal-100',
    text900: 'text-teal-900',
    text500: 'text-teal-500',
    bg100: 'bg-teal-100',
    text700: 'text-teal-700',
  }
};

// ==================================================================================
// [DATA LAYER] 콘텐츠 데이터
// ==================================================================================

const HEADER_DATA = {
  title: "좋은 기업이 좋은 도시를 만든다",
  subTitle: "The Master Thesis: Eco-Futurism Perspective",
  mainDescTitle: (
    <>
      지역경제 활성화 생태계에 <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-extrabold">벤처 스튜디오</span>와 파트너인 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-extrabold">지역경영회사</span>가 필요한 이유
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
      <>자생적 성장이<br className="block" /><span className="text-emerald-500">가능한 가치 순환 생태계</span></>
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
    hash: ['#DeepTech', '#Hardware'], color: 'cyan',
    icon: <Rocket size={20} />, bgIcon: <Rocket size={100} />
  },
  { 
    title: 'Alphabet X', sub: '(미국)', tag: 'Moonshot Factory', 
    desc: '구글의 사내 벤처 스튜디오로, 기후 변화 등 인류 거대 문제를 해결하는 파괴적 혁신 실험.',
    hash: ['#Innovation', '#Impact'], color: 'cyan',
    icon: <Cpu size={20} />, bgIcon: <Cpu size={100} />
  },
  { 
    title: 'Area Management', sub: '(일본)', tag: 'Urban Management', 
    desc: '마루노우치 등 민간 주도의 타운 매니지먼트. 부동산 소유주와 운영사가 협력해 지역 가치 상승.',
    hash: ['#UrbanRegen', '#JapanModel'], color: 'emerald',
    icon: <MapPin size={20} />, bgIcon: <MapPin size={100} />
  },
  { 
    title: 'Station F', sub: '(프랑스)', tag: 'Mega Scale Hub', 
    desc: '철도 기지창을 개조해 만든 세계 최대 스타트업 캠퍼스. 공공의 인프라와 민간의 운영이 결합된 거점.',
    hash: ['#Regeneration', '#ScaleUp'], color: 'amber',
    icon: <Building2 size={20} />, bgIcon: <Building2 size={100} />
  },
  { 
    title: 'Portland', sub: '(미국)', tag: 'Local Lifestyle', 
    desc: "'Keep Portland Weird' 슬로건 아래, 로컬 크리에이터와 소상공인 브랜드가 도시의 주류 문화를 형성.",
    hash: ['#Craftsmanship', '#LocalBrand'], color: 'emerald',
    icon: <Store size={20} />, bgIcon: <Store size={100} />
  },
  { 
    title: 'King\'s Cross', sub: '(영국)', tag: 'Knowledge Quarter', 
    desc: '낙후된 지역을 구글 등 테크 기업, 예술 대학, 로컬 상권이 공존하는 지식 지구로 탈바꿈시킨 사례.',
    hash: ['#Placemaking', '#TechArt'], color: 'amber',
    icon: <Lightbulb size={20} />, bgIcon: <Lightbulb size={100} />
  }
];

const BLUEPRINT_LAYERS_DATA = [
  { 
    icon: <Target size={28} />, 
    color: 'emerald', 
    layer: 'LAYER 01', 
    title: '핵심 가치층 (Value Core)', 
    desc: '모든 도시 생태계의 근원이자 출발점입니다. <strong>지역성(Locality)</strong>은 그 지역만의 고유한 지리적, 문화적 특성을 의미하며, <strong>고유성(Identity)</strong>은 이를 바탕으로 형성된 대체 불가능한 정체성을 뜻합니다. 이 핵심 가치가 단단히 뿌리내리지 않은 비즈니스는 지속 가능한 생명력을 가질 수 없으며, 모든 상위 레이어의 에너지를 공급하는 원천이 됩니다.' 
  },
  { 
    icon: <Compass size={28} />, 
    color: 'indigo', 
    layer: 'LAYER 02', 
    title: '공존 생태계층 (Jungle Loop)', 
    desc: '핵심 가치를 기반으로 다양한 주체들이 상호작용하는 <strong>공존과 순환의 공간</strong>입니다. <strong>코끼리(앵커 기업)</strong>는 묵직한 하드웨어 인프라를 제공하고, <strong>얼룩말(로컬 벤처)</strong>은 창의적인 소프트웨어와 콘텐츠를 채우며, <strong>식생(소상공인/주민)</strong>은 생태계의 다양성과 활력을 유지합니다. 이들은 경쟁이 아닌 협력을 통해 서로의 성장을 견인하며 건강한 정글을 이룹니다.' 
  },
  { 
    icon: <Settings size={28} />, 
    color: 'blue', 
    layer: 'LAYER 03', 
    title: '실행 인프라층 (Action Engine)', 
    desc: '생태계의 최외곽에서 시스템을 보호하고 가속화하는 <strong>실질적인 구동 엔진</strong>입니다. <strong>VS(벤처 스튜디오)</strong>는 끊임없이 새로운 비즈니스 씨앗을 심고 키워내는 "창조"의 역할을, <strong>AMC(지역경영회사)</strong>는 투기 자본과 젠트리피케이션과 같은 외부 위협으로부터 생태계를 지키는 "수호"의 역할을 수행합니다. 이 두 엔진이 맞물려 돌아갈 때, 도시는 멈추지 않는 자생적 성장을 지속합니다.' 
  }
];

// ==================================================================================
// [SUB-COMPONENTS] 재사용 UI 컴포넌트
// ==================================================================================

const Badge = ({ icon, text, className = "", color = "slate" }) => {
  // Use explicit color classes based on the prop to avoid dynamic class issues
  const colorClass = COLOR_VARIANTS[color] || COLOR_VARIANTS.cyan; // default to cyan if not found
  
  return (
    <div className={`${STYLE.TEXT.BADGE} ${colorClass.bg50} ${colorClass.border100} ${colorClass.text600} ${className}`}>
      {icon} {text}
    </div>
  );
};

const SectionTitle = ({ children, align = "center", className = "" }) => (
  <h2 className={`${STYLE.TEXT.TITLE_SECTION} ${STYLE.COLORS.textMain} ${align === "center" ? "text-center" : "text-left"} mb-6 ${className}`}>
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
    <div className={`min-h-screen font-sans transition-all duration-500 overflow-x-hidden ${STYLE.COLORS.bg} ${STYLE.COLORS.textMain} print:bg-white print:p-0 pb-32`}>
      
      {/* 0. Top Navigation / Actions */}
      <div className={`${STYLE.LAYOUT.CONTAINER} pt-8 mb-16 flex flex-col sm:flex-row gap-4 justify-between items-center print:hidden`}>
        {/* Mobile Landscape Alert */}
        <div className="md:hidden w-full mb-4 bg-indigo-50 border border-indigo-100 p-3 rounded-xl flex items-center justify-center gap-3 animate-pulse">
            <Smartphone className="text-indigo-500 rotate-90" size={20} />
            <span className="text-xs font-bold text-indigo-700">가로 모드로 보시면 더 선명하게 보입니다.</span>
        </div>

        <a 
          href="https://www.belocal.kr/news/articleList.html?sc_sub_section_code=S2N95&sc_section_code=S1N8&view_type=sm" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`group relative flex items-center gap-4 ${STYLE.COMPONENTS.GLASS_PANEL} px-6 py-4 rounded-2xl shadow-sm hover:border-indigo-500 transition-all hover:shadow-lg overflow-hidden w-full sm:w-auto justify-center sm:justify-start`}
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600 group-hover:w-2 transition-all"></div>
          <div className="bg-indigo-50/80 p-2 rounded-xl text-indigo-600 group-hover:scale-110 transition-transform border border-indigo-100">
            <ExternalLink size={18} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Article Insight</p>
            <p className="text-sm font-bold text-slate-700 tracking-tight">비로컬 12부작 공동 칼럼 전체 보기</p>
          </div>
          <div className="ml-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all">
            <ChevronRight size={18} />
          </div>
        </a>

        <button 
          onClick={handlePrint}
          className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full shadow-xl hover:bg-slate-800 transition-all active:scale-95 group w-full sm:w-auto justify-center border border-slate-700"
        >
          <Printer size={18} className="text-emerald-400 group-hover:animate-pulse" />
          <span className="font-semibold text-sm tracking-tight">PDF 저장</span>
        </button>
      </div>

      {/* 1. Header Section (Eco-Futurism Hero) */}
      <header className={`${STYLE.LAYOUT.CONTAINER} text-center ${STYLE.LAYOUT.SECTION_GAP} relative`}>
        {/* Background Network Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 opacity-[0.04] pointer-events-none hidden md:block">
            <Network size={500} className="text-indigo-900" />
        </div>
        
        <div className="relative z-10 px-2">
            <div className={`inline-block px-5 py-2 bg-slate-900 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.3em] mb-8 shadow-2xl border-t border-slate-700`}>
                {HEADER_DATA.subTitle}
            </div>
            <h1 className={`${STYLE.TEXT.TITLE_MAIN} mb-12 text-slate-900`}>
                {HEADER_DATA.title}
            </h1>
            
            <div className={`max-w-5xl mx-auto bg-white/80 backdrop-blur-2xl p-8 md:p-16 ${STYLE.LAYOUT.CARD_ROUND} shadow-2xl border border-slate-200/60 relative overflow-hidden ring-1 ring-slate-900/5`}>
                <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                    <Activity size={160} className="text-indigo-600" />
                </div>
                
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-14 tracking-tight leading-snug break-keep">
                    {HEADER_DATA.mainDescTitle}
                </h2>

                <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 relative">
                    {HEADER_DATA.cards.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="flex-1 text-center space-y-5 group w-full bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                            {/* [Fix] Using explicit color classes */}
                            <div className={`w-20 h-20 ${COLOR_VARIANTS[item.color].bg50} rounded-3xl mx-auto flex items-center justify-center ${COLOR_VARIANTS[item.color].text600} ${COLOR_VARIANTS[item.color].border100} border shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>
                            <div>
                                <p className="font-bold text-xl text-slate-900 leading-tight">{item.title}</p>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mt-1">{item.subTitle}</span>
                            </div>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed px-2 whitespace-pre-line">{item.desc}</p>
                        </div>
                        {index === 0 && (
                          <div className="shrink-0 flex items-center justify-center">
                            <Plus size={28} className="text-slate-300 animate-pulse hidden md:block" />
                            <Plus size={24} className="text-slate-300 animate-pulse md:hidden my-2" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}

                    <div className="shrink-0 flex items-center justify-center md:rotate-0 rotate-90 text-slate-300">
                        <ArrowRight size={28} />
                    </div>

                    <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-[2rem] shadow-2xl border-t-4 border-emerald-500 w-full flex flex-col justify-center items-center">
                        <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-3 opacity-90">{HEADER_DATA.outcome.label}</p>
                        <p className="font-bold text-2xl leading-tight italic text-emerald-50">{HEADER_DATA.outcome.text}</p>
                    </div>
                </div>
            </div>
        </div>
      </header>

      <main className={`${STYLE.LAYOUT.CONTAINER} space-y-32`}>
        
        {/* 2. Extraction vs Circulation Models (Bento Grid) */}
        <section className={`grid md:grid-cols-2 ${STYLE.LAYOUT.GRID_GAP}`}>
          {/* Extraction Model */}
          <div className={`${STYLE.COMPONENTS.BENTO_CARD} ${STYLE.LAYOUT.CARD_ROUND} p-10 border-t-[8px] border-t-rose-400`}>
            <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500"><ArrowDownCircle size={120} /></div>
            <h3 className="text-2xl font-black mb-10 flex items-center gap-3 text-rose-500 uppercase tracking-tight relative z-10">
              {MODEL_COMPARISON_DATA.extraction.icon} {MODEL_COMPARISON_DATA.extraction.title}
            </h3>
            <div className="space-y-8 relative z-10">
              {MODEL_COMPARISON_DATA.extraction.items.map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start group">
                  <div className={`shrink-0 w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm border border-rose-100 group-hover:scale-110 transition-transform ${item.iconChar ? 'font-black italic text-2xl' : ''}`}>
                    {item.icon || item.iconChar}
                  </div>
                  <div>
                    <h4 className={`font-bold ${STYLE.COLORS.textMain} text-lg mb-1`}>{item.title}</h4>
                    <p className={`text-sm ${STYLE.COLORS.textSub} leading-relaxed font-medium`}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="mt-6 p-5 bg-rose-50 rounded-2xl text-rose-700 font-bold text-xs border border-rose-100 flex items-start gap-3 shadow-inner">
                <Info size={16} className="shrink-0 mt-0.5" />
                <p className="leading-relaxed">{MODEL_COMPARISON_DATA.extraction.alert}</p>
              </div>
            </div>
          </div>

          {/* Circulation Model */}
          <div className={`${STYLE.COMPONENTS.BENTO_CARD} ${STYLE.LAYOUT.CARD_ROUND} p-10 border-t-[8px] border-t-emerald-400`}>
            <div className="absolute top-0 right-0 p-8 opacity-5 text-emerald-600"><Repeat size={120} /></div>
            <h3 className="text-2xl font-black mb-10 flex items-center gap-3 text-emerald-600 uppercase tracking-tight relative z-10">
              {MODEL_COMPARISON_DATA.circulation.icon} {MODEL_COMPARISON_DATA.circulation.title}
            </h3>
            <div className="space-y-8 relative z-10">
              {MODEL_COMPARISON_DATA.circulation.items.map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start group">
                  <div className={`shrink-0 w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold ${STYLE.COLORS.textMain} text-lg mb-1`}>{item.title}</h4>
                    <p className={`text-sm ${STYLE.COLORS.textSub} leading-relaxed font-medium`}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="mt-6 p-5 bg-emerald-50 rounded-2xl text-emerald-800 font-bold text-xs border border-emerald-100 flex items-start gap-3 shadow-inner">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                <p className="leading-relaxed">{MODEL_COMPARISON_DATA.circulation.alert}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Startup Jungle Theory (Eco-Futurism Style) */}
        <section className={`bg-gradient-to-b from-emerald-900 to-slate-900 text-white p-8 md:p-16 lg:p-24 ${STYLE.LAYOUT.CARD_ROUND} shadow-2xl overflow-hidden relative text-center border-t border-emerald-500/30`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')] opacity-5 pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-8 border border-emerald-500/30 backdrop-blur-md">
                <Info size={14} className="text-emerald-400" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-300">The Zebras Unite Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-center break-keep leading-tight">{JUNGLE_THEORY_DATA.intro.title}</h2>
            <p className="text-emerald-100/80 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center px-4 break-keep">
              {JUNGLE_THEORY_DATA.intro.desc}
            </p>
          </div>
          
          <div className={`grid md:grid-cols-3 ${STYLE.LAYOUT.GRID_GAP} relative z-10 text-left mb-20`}>
            {JUNGLE_THEORY_DATA.entities.map((entity, idx) => (
              <div key={idx} className={`${entity.style.bg} p-8 md:p-12 rounded-[2.5rem] ${entity.style.highlight ? 'border border-emerald-400/30 transform md:-translate-y-4 shadow-2xl relative ring-1 ring-white/20' : 'backdrop-blur-md border border-white/5 hover:bg-white/5 transition-colors'}`}>
                {entity.style.highlight && (
                  <div className="absolute top-6 right-6 bg-amber-400 text-emerald-950 px-3 py-1.5 rounded-full shadow-lg rotate-6 animate-pulse text-[10px] font-black uppercase tracking-wider">Core</div>
                )}
                <div className={`w-16 h-16 ${entity.style.highlight ? 'bg-white text-emerald-900 shadow-xl' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'} rounded-2xl flex items-center justify-center mb-8`}>
                  {entity.icon}
                </div>
                <h4 className="text-2xl font-bold mb-2">{entity.title}</h4>
                <p className={`text-xs font-bold uppercase tracking-widest mb-6 opacity-60 ${entity.style.highlight ? 'text-emerald-200' : 'text-emerald-400'}`}>{entity.engTitle}</p>
                <p className={`text-sm ${entity.style.text} leading-relaxed mb-8 font-normal min-h-[4rem]`}>{entity.desc}</p>
                
                <div className={`pt-6 border-t ${entity.style.highlight ? 'border-white/20' : 'border-white/10'}`}>
                    <p className={`text-[10px] font-bold uppercase ${entity.style.highlight ? 'text-emerald-200' : 'text-emerald-500'} tracking-[0.2em] mb-4`}>{entity.contextTitle}</p>
                    <ul className={`text-xs space-y-3 font-medium opacity-80 ${entity.style.highlight ? 'text-emerald-50' : 'text-emerald-200/70'}`}>
                      {entity.contextList.map((li, liIdx) => (
                        <li key={liIdx} className="flex items-center gap-2"><div className={`w-1 h-1 rounded-full ${entity.style.highlight ? 'bg-emerald-200' : 'bg-emerald-600'}`}></div>{li}</li>
                      ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Diversity Bento */}
          <div className="relative z-10 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-12 backdrop-blur-md">
              <h3 className="text-xl font-bold text-emerald-300 mb-2 flex items-center justify-center gap-2">
                <Maximize size={20} /> {JUNGLE_THEORY_DATA.diversity.title}
              </h3>
              <p className="text-slate-400 text-sm font-medium mb-8 max-w-2xl mx-auto">{JUNGLE_THEORY_DATA.diversity.desc}</p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {JUNGLE_THEORY_DATA.diversity.items.map((item, idx) => (
                  <div key={idx} className="group flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full transition-all hover:scale-105 cursor-default">
                    <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">{item.icon}</span>
                    <span className="text-xs font-bold text-emerald-100 group-hover:text-white transition-colors tracking-wide">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* 3.5 Unicorn vs Zebra Analysis (Card Visuals) */}
        <section className={STYLE.LAYOUT.CONTAINER}>
            <div className="text-center mb-16">
                <Badge icon={<Ban size={12}/>} text="Comparative Analysis" color="rose" className="mb-4" />
                <SectionTitle>유니콘의 역설 vs 얼룩말의 공존</SectionTitle>
                <p className={`${STYLE.COLORS.textSub} mt-4 text-lg italic break-keep`}>"왜 지역에는 유니콘보다 얼룩말 떼가 필요한가?"</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* 1. Unicorn (Warning) */}
                <div className={`${STYLE.COMPONENTS.BENTO_CARD} ${STYLE.LAYOUT.CARD_ROUND} p-10 bg-gradient-to-br from-rose-50 to-white border-rose-100`}>
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-rose-900 group-hover:scale-110 transition-transform duration-700">
                        <Tornado size={200} />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 border border-rose-200">
                            <Ban size={12} /> Warning
                        </div>
                        <h4 className="text-3xl font-black text-rose-900 mb-8 break-keep leading-tight">유니콘 독점의 위험성<br/><span className="text-sm font-bold text-rose-400 mt-1 block">The Danger of Unicorn Monopoly</span></h4>
                        
                        {/* Visualization: Black Hole (Restored Animation) */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 mb-8 flex flex-col items-center justify-center relative min-h-[300px] border border-rose-100 overflow-hidden shadow-inner">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-100/50 via-transparent to-transparent animate-[spin_10s_linear_infinite]"></div>
                            
                            {/* Particles */}
                            <div className="absolute inset-0">
                                <div className="absolute top-6 left-6 animate-[bounce_2s_infinite]">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                    <ArrowDownCircle className="text-rose-400 w-5 h-5 rotate-[-45deg] mt-1" />
                                </div>
                                <div className="absolute top-6 right-6 animate-[bounce_2.2s_infinite]">
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                    <ArrowDownCircle className="text-rose-400 w-5 h-5 rotate-[45deg] mt-1" />
                                </div>
                                <div className="absolute bottom-6 left-6 animate-[bounce_1.8s_infinite]">
                                    <ArrowUpRight className="text-rose-400 w-5 h-5 rotate-[-135deg] mb-1" />
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                </div>
                                <div className="absolute bottom-6 right-6 animate-[bounce_2.5s_infinite]">
                                    <ArrowUpRight className="text-rose-400 w-5 h-5 rotate-[-45deg] mb-1" />
                                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                                </div>
                            </div>

                            {/* Core */}
                            <div className="z-10 w-40 h-40 bg-gradient-to-br from-rose-500 to-red-700 rounded-full flex flex-col items-center justify-center text-white shadow-[0_0_40px_rgba(225,29,72,0.4)] animate-pulse border-4 border-rose-200">
                                <Magnet size={36} className="mb-2 text-rose-100" />
                                <span className="font-black text-xl tracking-tight">UNICORN</span>
                                <span className="text-[9px] bg-rose-900/40 px-2 py-0.5 rounded-full mt-1 border border-white/20">Resource Vacuum</span>
                            </div>
                            
                            <p className="absolute bottom-5 text-[10px] font-bold text-rose-600 uppercase tracking-[0.2em] bg-white px-4 py-1.5 rounded-full shadow-sm border border-rose-100">
                                Winner Takes All
                            </p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="shrink-0 text-rose-500 mt-0.5"><Skull size={20} /></div>
                                <div>
                                    <h5 className="font-bold text-rose-900 text-sm mb-1">생태계 사막화 (Desertification)</h5>
                                    <p className="text-xs text-slate-500 leading-relaxed">거대 플랫폼이 지역의 인재와 자본을 블랙홀처럼 흡수하여, 주변의 자생적 기업들이 말라죽는 현상 초래</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="shrink-0 text-rose-500 mt-0.5"><XCircle size={20} /></div>
                                <div>
                                    <h5 className="font-bold text-rose-900 text-sm mb-1">J-커브의 함정 (Exit Trap)</h5>
                                    <p className="text-xs text-slate-500 leading-relaxed">투자 회수(Exit)만을 목표로 한 초고속 성장은 결국 지역을 떠나거나 매각되어 '먹튀' 논란을 야기함</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2. Zebra (Solution) */}
                <div className={`${STYLE.COMPONENTS.BENTO_CARD} ${STYLE.LAYOUT.CARD_ROUND} p-10 bg-gradient-to-br from-emerald-50 to-white border-emerald-100`}>
                    <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-emerald-900 group-hover:scale-110 transition-transform duration-700">
                        <GitMerge size={200} />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 border border-emerald-200">
                            <Sprout size={12} /> Solution
                        </div>
                        <h4 className="text-3xl font-black text-emerald-900 mb-8 break-keep leading-tight">벤처 스튜디오 & 얼룩말 공존<br/><span className="text-sm font-bold text-emerald-500 mt-1 block">VS & Zebra Symbiosis</span></h4>

                        {/* Visualization: Network (Restored Animation) */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 mb-8 flex flex-col items-center justify-center relative min-h-[300px] border border-emerald-100 overflow-hidden shadow-inner">
                            {/* Protection Zone */}
                            <div className="absolute inset-6 border-2 border-dashed border-indigo-300 rounded-[2.5rem] flex items-center justify-center pointer-events-none">
                                <div className="absolute -top-3 bg-indigo-100 text-indigo-700 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm border border-indigo-200">
                                    <Shield size={10} /> VS Protection Zone
                                </div>
                            </div>

                            {/* Nodes */}
                            <div className="grid grid-cols-2 gap-8 relative z-10">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Users size={20} /></div>
                                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">Zebra A</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 mt-8">
                                    <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-md"><Building2 size={16} /></div>
                                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Local B</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 -mt-8">
                                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-md"><Lightbulb size={16} /></div>
                                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Tech C</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Store size={20} /></div>
                                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">Shop D</span>
                                </div>
                            </div>

                            {/* SVG Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}}>
                                <line x1="40%" y1="40%" x2="60%" y2="60%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="60%" y1="40%" x2="40%" y2="60%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="30%" x2="50%" y2="70%" stroke="#cbd5e1" strokeWidth="1" />
                            </svg>
                            
                            <p className="absolute bottom-5 text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] bg-white px-4 py-1.5 rounded-full shadow-sm border border-emerald-100">
                                Resilient Network
                            </p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="shrink-0 text-emerald-500 mt-0.5"><HeartHandshake size={20} /></div>
                                <div>
                                    <h5 className="font-bold text-emerald-900 text-sm mb-1">벤처 스튜디오(VS)의 역할 (Gardener)</h5>
                                    <p className="text-xs text-slate-500 leading-relaxed">개별 얼룩말 기업이 척박한 환경에서 생존할 수 있도록 <strong>자본+팀+전략</strong>을 패키지로 공급하는 '정원사' 역할 수행</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="shrink-0 text-emerald-500 mt-0.5"><Network size={20} /></div>
                                <div>
                                    <h5 className="font-bold text-emerald-900 text-sm mb-1">다양성 기반의 회복력 (Resilience)</h5>
                                    <p className="text-xs text-slate-500 leading-relaxed">하나가 무너져도 전체가 붕괴되지 않는 촘촘한 네트워크를 형성하여 도시의 경제적 안전망 구축</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. TCJTC Engine (Eco-Futurism Wheel) */}
        <section className={`max-w-6xl mx-auto bg-white p-10 md:p-24 ${STYLE.LAYOUT.CARD_ROUND} shadow-xl border border-slate-200 overflow-hidden mb-12 text-center relative ring-1 ring-slate-100`}>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
          
          <div className="text-center mb-16 md:mb-24 relative z-10">
            <Badge icon={<RefreshCcw size={12}/>} text="Core Mechanism" color="indigo" className="mb-4" />
            <h2 className={`${STYLE.TEXT.TITLE_SECTION} mb-6 ${STYLE.COLORS.textMain}`}>
               TCJTC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">선순환 메커니즘</span>
            </h2>
            <p className={`${STYLE.COLORS.textSub} font-bold tracking-tight text-lg break-keep`}>
                Triple Circulation: Jobs <span className="text-slate-300 mx-2">|</span> Traffic <span className="text-slate-300 mx-2">|</span> Capital
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-around gap-20 relative z-10">
            {/* Wheel Visualization (Restored) */}
            <div className="relative w-[360px] h-[360px] shrink-0">
                {/* [수정됨] 그라데이션 서클: 시계 방향 회전 (기존 코드 유지하되 그라데이션 색상 배치로 회전감 강화) */}
                <div className="absolute inset-0 rounded-full animate-spin-slow opacity-80 blur-lg"
                     style={{
                         background: 'conic-gradient(from 0deg, #06b6d4 0deg, #10b981 120deg, #d97706 240deg, #06b6d4 360deg)',
                     }}
                ></div>
                
                {/* Core */}
                {/* [수정됨] RefreshCcw 아이콘 제거, 텍스트만 유지 */}
                <div className="absolute inset-6 rounded-full bg-slate-900 flex flex-col items-center justify-center text-white shadow-2xl z-20 border-[6px] border-white">
                    <span className="font-black text-4xl italic tracking-tighter">TCJTC</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 mt-2">Flywheel Effect</span>
                </div>

                {/* Nodes (Floating) */}
                {/* 1. Jobs (Top Center) */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 group cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-20 h-20 bg-cyan-600 rounded-3xl shadow-xl flex items-center justify-center text-white ring-4 ring-white border-2 border-cyan-100">
                        <Briefcase size={32} />
                    </div>
                    <div className="mt-3 bg-white border border-cyan-100 px-4 py-2 rounded-xl shadow-lg text-center min-w-[120px]">
                        <p className="font-bold text-slate-800 text-sm">일자리</p>
                        <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider">Jobs</p>
                    </div>
                     {/* [수정됨] 화살표 제거 */}
                </div>

                {/* 2. Traffic (Bottom Right) */}
                <div className="absolute bottom-0 -right-10 flex flex-col items-center z-30 group cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-20 h-20 bg-emerald-600 rounded-3xl shadow-xl flex items-center justify-center text-white ring-4 ring-white border-2 border-emerald-100">
                        <Footprints size={32} />
                    </div>
                    <div className="mt-3 bg-white border border-emerald-100 px-4 py-2 rounded-xl shadow-lg text-center min-w-[120px]">
                        <p className="font-bold text-slate-800 text-sm">관계인구</p>
                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Traffic</p>
                    </div>
                     {/* [수정됨] 화살표 제거 */}
                </div>

                {/* 3. Capital (Bottom Left) */}
                <div className="absolute bottom-0 -left-10 flex flex-col items-center z-30 group cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-20 h-20 bg-amber-500 rounded-3xl shadow-xl flex items-center justify-center text-white ring-4 ring-white border-2 border-amber-100">
                        <Coins size={32} />
                    </div>
                    <div className="mt-3 bg-white border border-amber-100 px-4 py-2 rounded-xl shadow-lg text-center min-w-[120px]">
                        <p className="font-bold text-slate-800 text-sm">자본</p>
                        <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Capital</p>
                    </div>
                    {/* [수정됨] 화살표 제거 */}
                </div>
            </div>

            <div className="space-y-6 max-w-xl text-left mt-16 lg:mt-0">
              {TCJTC_DATA.map((item) => (
                <div key={item.id} className={`p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 relative group`}>
                  <div className={`absolute top-0 left-0 w-2 h-full bg-${item.color}-500 rounded-l-[2rem]`}></div>
                  <h4 className={`font-black text-${item.color}-900 text-lg mb-2 flex items-center gap-3`}>
                      <span className={`text-${item.color}-500`}>0{item.id}.</span> {item.title} 
                      {/* [수정됨] 꺽은 괄호 및 화살표 제거: 뱃지 스타일만 유지 */}
                      <span className={`text-[10px] bg-${item.color}-50 text-${item.color}-700 px-2 py-1 rounded font-bold ml-auto uppercase tracking-wide`}>{item.engTitle}</span>
                  </h4>
                  <p className={`text-xs font-bold text-${item.color}-600 mb-3 pl-1`}>{item.quote}</p>
                  <p className={`${STYLE.COLORS.textSub} text-sm leading-relaxed font-medium pl-1 break-keep`}>
                      {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Partnership (VS & AMC) - Bento Style */}
        <section className={`${STYLE.LAYOUT.CONTAINER} space-y-12 mb-24 text-center`}>
          <div className="text-center">
            <Badge icon={<HeartHandshake size={12}/>} text="Strategic Partnership" color="indigo" className="mb-4" />
            <h2 className={`${STYLE.TEXT.TITLE_SECTION} mb-6 ${STYLE.COLORS.textMain}`}>창조와 수호: 두 엔진의 파트너십<br/><span className="text-xl font-normal text-slate-500">Creation & Protection</span></h2>
            <p className={`${STYLE.COLORS.textSub} font-medium max-w-4xl mx-auto text-lg leading-relaxed italic break-keep`}>
                비즈니스를 빌딩하는 VS와 도시 토양을 수호하는 AMC는 <strong>'상호 의존적 동반자'</strong>로서 지역의 성장을 설계합니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 text-left">
            {/* VS Card */}
            <div className={`${STYLE.COMPONENTS.BENTO_CARD} ${STYLE.LAYOUT.CARD_ROUND} p-10 group`}>
              <div className="flex items-center gap-6 mb-10">
                <div className={`w-20 h-20 bg-${PARTNERSHIP_DATA.vs.theme}-600 rounded-3xl flex items-center justify-center text-white shadow-xl transition-transform group-hover:rotate-6`}>{PARTNERSHIP_DATA.vs.mainIcon}</div>
                <div className="text-left">
                  <h3 className={`text-3xl font-black ${STYLE.COLORS.textMain} leading-none mb-1.5`}>{PARTNERSHIP_DATA.vs.title}</h3>
                  <span className={`text-xs font-bold text-${PARTNERSHIP_DATA.vs.theme}-500 uppercase tracking-[0.2em] block`}>{PARTNERSHIP_DATA.vs.subTitle}</span>
                </div>
              </div>
              <p className={`text-sm ${STYLE.COLORS.textSub} leading-relaxed font-medium mb-12 pl-4 border-l-4 border-blue-100`}>{PARTNERSHIP_DATA.vs.desc}</p>
              
              <div className="space-y-8 relative mb-12">
                <div className={`absolute left-[27px] top-4 bottom-4 w-px bg-slate-100 border-l border-dashed border-${PARTNERSHIP_DATA.vs.theme}-200`}></div>
                {PARTNERSHIP_DATA.vs.steps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative z-10 items-start">
                    <div className={`w-14 h-14 shrink-0 bg-white border-2 border-${PARTNERSHIP_DATA.vs.theme}-100 rounded-full flex items-center justify-center text-${PARTNERSHIP_DATA.vs.theme}-500 shadow-sm transition-all group-hover:bg-${PARTNERSHIP_DATA.vs.theme}-50`}>
                      {step.icon}
                    </div>
                    <div className="text-left mt-1.5">
                      <h4 className={`font-bold ${STYLE.COLORS.textMain} text-base mb-1`}>{step.title}</h4>
                      <p className={`text-xs ${STYLE.COLORS.textSub} font-normal leading-relaxed break-keep`}>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* [수정됨] Tools Grid (Enhanced Visuals for Importance) */}
              <div className="pt-8 border-t border-slate-100">
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <Settings size={16} className={`text-${PARTNERSHIP_DATA.vs.theme}-500`}/> 
                    6 Strategic Tools
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {PARTNERSHIP_DATA.vs.tools.map((tool, tIdx) => (
                      <div key={tIdx} className={`bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center hover:bg-${PARTNERSHIP_DATA.vs.theme}-50 hover:border-${PARTNERSHIP_DATA.vs.theme}-300 hover:shadow-md transition-all cursor-default group/tool`}>
                        <p className={`text-xs font-black text-${PARTNERSHIP_DATA.vs.theme}-700 mb-1 group-hover/tool:text-${PARTNERSHIP_DATA.vs.theme}-900`}>{tool.name}</p>
                        <p className="text-[10px] text-slate-400 leading-tight break-keep font-medium group-hover/tool:text-slate-600">{tool.desc}</p>
                      </div>
                    ))}
                  </div>
              </div>
            </div>

            {/* AMC Card */}
            <div className={`${STYLE.COMPONENTS.BENTO_CARD} ${STYLE.LAYOUT.CARD_ROUND} p-10 group`}>
              <div className="flex items-center gap-6 mb-10">
                <div className={`w-20 h-20 bg-${PARTNERSHIP_DATA.amc.theme}-700 rounded-3xl flex items-center justify-center text-white shadow-xl transition-transform group-hover:-rotate-6`}>{PARTNERSHIP_DATA.amc.mainIcon}</div>
                <div className="text-left">
                  <h3 className={`text-3xl font-black ${STYLE.COLORS.textMain} leading-none mb-1.5`}>{PARTNERSHIP_DATA.amc.title}</h3>
                  <span className={`text-xs font-bold text-${PARTNERSHIP_DATA.amc.theme}-500 uppercase tracking-[0.2em] block`}>{PARTNERSHIP_DATA.amc.subTitle}</span>
                </div>
              </div>
              <p className={`text-sm ${STYLE.COLORS.textSub} leading-relaxed font-medium mb-12 pl-4 border-l-4 border-indigo-100`}>{PARTNERSHIP_DATA.amc.desc}</p>
              
              <div className="space-y-8 relative mb-12">
                <div className={`absolute left-[27px] top-4 bottom-4 w-px bg-slate-100 border-l border-dashed border-${PARTNERSHIP_DATA.amc.theme}-200`}></div>
                {PARTNERSHIP_DATA.amc.steps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative z-10 items-start">
                    <div className={`w-14 h-14 shrink-0 bg-white border-2 border-${PARTNERSHIP_DATA.amc.theme}-100 rounded-full flex items-center justify-center text-${PARTNERSHIP_DATA.amc.theme}-700 shadow-sm transition-all group-hover:bg-${PARTNERSHIP_DATA.amc.theme}-50`}>
                      {step.icon}
                    </div>
                    <div className="text-left mt-1.5">
                      <h4 className={`font-bold ${STYLE.COLORS.textMain} text-base mb-1`}>{step.title}</h4>
                      <p className={`text-xs ${STYLE.COLORS.textSub} font-normal leading-relaxed break-keep`}>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tools Grid (Enhanced Visuals for Importance) */}
              <div className="pt-8 border-t border-slate-100">
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <Settings size={16} className={`text-${PARTNERSHIP_DATA.amc.theme}-500`}/> 
                    6 Strategic Tools
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {PARTNERSHIP_DATA.amc.tools.map((tool, tIdx) => (
                      <div key={tIdx} className={`bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center hover:bg-${PARTNERSHIP_DATA.amc.theme}-50 hover:border-${PARTNERSHIP_DATA.amc.theme}-100 transition-all cursor-default group/tool`}>
                        <p className={`text-xs font-black text-${PARTNERSHIP_DATA.amc.theme}-700 mb-1 group-hover/tool:text-${PARTNERSHIP_DATA.amc.theme}-900`}>{tool.name}</p>
                        <p className="text-[10px] text-slate-400 leading-tight break-keep font-medium group-hover/tool:text-slate-600">{tool.desc}</p>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5.5 Global Benchmarking (Bento Cards) */}
        <section className={`${STYLE.LAYOUT.CONTAINER} mb-24 relative`}>
             <div className="text-center mb-16">
                <Badge icon={<Globe size={12}/>} text="Global Case Studies" color="indigo" className="mb-4" />
                <SectionTitle>글로벌 벤치마킹 사례</SectionTitle>
                <p className={`${STYLE.COLORS.textSub} mt-4 text-lg italic break-keep`}>"세계는 이미 벤처 스튜디오와 지역 경영 모델로 혁신하고 있습니다"</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                {GLOBAL_CASES_DATA.map((item, idx) => (
                  <div key={idx} className={`${STYLE.COMPONENTS.BENTO_CARD} p-8 rounded-[2rem]`}>
                      <div className="absolute top-0 right-0 p-6 opacity-[0.05] scale-150 transition-transform group-hover:scale-125">{item.bgIcon}</div>
                      <div className="flex items-center gap-3 mb-6 relative z-10">
                           <div className={`bg-${item.color}-100 text-${item.color}-600 p-3 rounded-2xl shadow-sm`}>{item.icon}</div>
                           <div className="text-[10px] font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-500 uppercase tracking-wide">{item.tag}</div>
                      </div>
                      <h4 className={`text-xl font-bold ${STYLE.COLORS.textMain} mb-2`}>{item.title} <span className="text-xs font-medium text-slate-400 block mt-0.5">{item.sub}</span></h4>
                      <div className="w-8 h-1 bg-slate-100 mb-4 rounded-full"></div>
                      <p className="text-sm text-slate-600 leading-relaxed break-keep min-h-[4rem]">{item.desc}</p>
                      <div className="mt-6 pt-6 border-t border-slate-50 flex gap-2 flex-wrap">
                           {item.hash.map((tag, tIdx) => (
                             <span key={tIdx} className="text-[10px] bg-slate-50 text-slate-400 px-2 py-1 rounded border border-slate-100 font-medium">{tag}</span>
                           ))}
                      </div>
                  </div>
                ))}
            </div>
        </section>

        {/* 6. Master Blueprint */}
        <section className={`${STYLE.LAYOUT.CONTAINER} bg-white p-6 md:p-24 ${STYLE.LAYOUT.CARD_ROUND} border border-slate-200 shadow-2xl relative overflow-hidden mb-24 text-center ring-1 ring-slate-100`}>
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '40px 40px'}}></div>

          <div className="relative z-10 space-y-24">
            <div className="text-center space-y-6">
              <span className="text-indigo-600 font-black text-xs uppercase tracking-[0.6em] block underline underline-offset-8 decoration-indigo-200">Final Grand Synthesis</span>
              {/* [수정됨] 타이틀 텍스트 변경 */}
              <h2 className={`${STYLE.TEXT.TITLE_MAIN} italic ${STYLE.COLORS.textMain}`}>마스터 블루프린트:<br/>건강한 지역 경제 생태계 설계도</h2>
              <p className={`${STYLE.COLORS.textSub} font-medium text-xl max-w-3xl mx-auto italic leading-relaxed break-keep`}>
                좋은 기업이라는 씨앗이 어떻게 좋은 도시라는 숲을 이루는지 <br className="hidden md:block"/> 
                전체 시스템의 인과 관계(Causality)를 한눈에 확인해 보세요.
              </p>
            </div>

            {/* Orbit Diagram (Preserved) */}
            <div className="relative flex items-center justify-center py-20 md:py-32 min-h-[600px] md:min-h-[800px] rounded-[3rem] md:rounded-[5rem] overflow-hidden md:overflow-visible bg-slate-50/30">
               
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
                    
                    {/* VS -> Zebra Connection (Adjusted text position) */}
                    <path d="M 100 300 Q 200 300, 250 400" fill="none" stroke="#06b6d4" strokeWidth="3" strokeDasharray="10,6" markerEnd="url(#arr-blue)" />
                    {/* Moved text up and slightly right to avoid overlapping with VS Engine */}
                    <text x="140" y="260" className="text-[11px] font-bold fill-cyan-600 italic">로컬 기업 창조 Creation</text>
                    
                    {/* Zebra/Elephant -> Flora Connection */}
                    <path d="M 300 450 Q 400 500, 500 450" fill="none" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arr-indigo)" />
                    <text x="360" y="520" className="text-[11px] font-bold fill-indigo-600 italic">가치 전이 Value Transfer</text>
                    
                    {/* AMC -> Good City Connection (Adjusted text position) */}
                    {/* [수정됨] 곡률 조정: 시작점(670,300) -> 제어점(600,180) -> 끝점(480,270) */}
                    {/* 시작점을 AMC 아이콘 아래로 */}
                    {/* 제어점을 높여(180) 위로 완만하게 둥글게 휘게 함 */}
                    {/* 끝점을 중앙 서클 테두리에 맞춤 */}
                    <path d="M 680 300 Q 580 180, 520 280" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arr-emerald)" />

                    {/* [수정됨] 텍스트 위치 조정: 화살표 위쪽(y=190)으로 이동 및 좌측으로 이동(x=610) */}
                    <text x="530" y="210" className="text-[11px] font-bold fill-emerald-600 italic">지역경제 활성화 Activation</text>
                  </svg>
               </div>
            </div>

            {/* Layer Info (Updated Description) */}
            <div className="bg-slate-900 rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 text-left relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-emerald-500/10 blur-[100px] rounded-full"></div>
                <div className="relative z-10 space-y-16">
                    <div className="border-l-4 border-emerald-500 pl-8">
                        {/* [수정됨] 타이틀 텍스트 변경 */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-4 italic break-keep">건강한 지역 경제 생태계 설계도</h3>
                        {/* [수정됨] 설명 텍스트 렌더링 */}
                        <p className="text-slate-400 font-medium text-lg break-keep">설계도를 안쪽(뿌리)에서 바깥쪽(수호)으로 따라가며 시스템의 유기적 작동 방식을 이해해 보세요.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {BLUEPRINT_LAYERS_DATA.map((layer, idx) => (
                          <div key={idx} className="space-y-4 group">
                              <div className={`w-16 h-16 bg-${layer.color}-500/20 rounded-2xl flex items-center justify-center text-${layer.color}-400 group-hover:bg-${layer.color}-500 group-hover:text-white transition-all duration-300`}>
                                  {layer.icon}
                              </div>
                              <div>
                                  <h4 className="text-white font-bold text-xl leading-tight italic mb-3">{layer.layer}<br/><span className={`text-${layer.color}-400 not-italic`}>{layer.title}</span></h4>
                                  {/* [수정됨] 설명 텍스트 렌더링 */}
                                  <p className="text-slate-400 text-sm leading-relaxed font-normal break-keep" dangerouslySetInnerHTML={{ __html: layer.desc }} />
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Conclusion */}
            <div className={`mt-24 bg-slate-50 p-10 md:p-20 ${STYLE.LAYOUT.CARD_ROUND} border border-slate-200 relative overflow-hidden shadow-inner text-left`}>
                <div className="absolute top-0 left-0 p-16 opacity-[0.05] text-indigo-600"><Quote size={100} /></div>
                <div className="relative z-10 space-y-12">
                    <h3 className="text-2xl md:text-4xl font-black text-slate-900 border-b-4 border-indigo-500 inline-block pb-4 mb-8 tracking-tighter italic break-keep">
                        맺음말: 도시의 미래를 설계하는 방식
                    </h3>
                    <div className="space-y-8">
                        <p className={`text-lg md:text-2xl ${STYLE.COLORS.textMain} leading-relaxed font-medium tracking-tight break-keep`}>
                            이 인포그래픽이 담고 있는 구조는 단순한 비즈니스 모델이 아닌, 우리가 함께 살아가야 할 도시의 <strong>지속 가능한 생존 전략</strong>입니다. 
                            벤처 스튜디오(VS)가 지역의 숨겨진 고유성을 발견해 <span className="text-blue-600 font-bold italic">'좋은 기업'</span>이라는 생명의 씨앗을 심고, 
                            지역경영회사(AMC)가 그 성과가 외부 투기 자본에 의해 유출되지 않도록 토양을 견고하게 수호할 때, 
                            비로소 자본이 내부에서 건강하게 순환하는 <span className="text-emerald-600 font-bold underline underline-offset-8 decoration-emerald-200">TCJTC 시스템</span>이 완성됩니다.
                        </p>
                        <p className={`text-lg md:text-2xl ${STYLE.COLORS.textMain} leading-relaxed font-medium tracking-tight break-keep`}>
                            결국 우리가 꿈꾸는 '좋은 도시'는 위에서 아래로 강요되는 거창한 마스터플랜이 아니라, 
                            <strong>좋은 기업들이 만들어내는 건강한 정글 생태계</strong> 속에서 스스로 숨 쉬며 자라나는 유기적인 공간입니다. 
                            건물을 세우는 외형 성장의 시대를 넘어, 기업과 도시가 하나의 운명 공동체로서 함께 호흡하고 
                            성장하는 <span className="text-indigo-600 font-bold italic underline underline-offset-12 decoration-indigo-200">선순환의 시대</span>를 함께 만들어가야 합니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`bg-slate-900 ${STYLE.LAYOUT.CARD_ROUND} p-10 md:p-24 text-center text-white shadow-2xl relative overflow-hidden group`}>
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-emerald-500/10 to-amber-500/10 opacity-30"></div>
               <div className="relative z-10 space-y-12">
                  <h3 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight italic text-white underline decoration-white/10 underline-offset-12 break-keep">
                    "도시를 추출의 대상이 아닌, <br className="md:hidden"/> <span className="text-emerald-400 font-bold">공존과 순환의 정글</span>로 만드는 일"
                  </h3>
                  <div className="pt-10 flex flex-wrap justify-center gap-6 md:gap-16 text-[11px] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400">
                     <span className="flex items-center gap-2 md:gap-4"><Maximize size={20} className="text-indigo-500"/> Resiliency (회복탄력성)</span>
                     <span className="flex items-center gap-2 md:gap-4"><Cpu size={20} className="text-emerald-500"/> Intelligence (지능적 설계)</span>
                     <span className="flex items-center gap-2 md:gap-4"><RefreshCcw size={20} className="text-amber-500"/> Circulation (선순환)</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Footer Insight */}
        <section className="text-center pb-20 print:mt-24 px-4">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-white px-12 py-8 rounded-[2rem] md:rounded-full shadow-2xl border border-slate-100 transition-all hover:scale-105">
            <div className="text-indigo-600 font-bold flex items-center gap-3">
               <Globe size={32} className="animate-pulse" /> 
               <span className="text-xl font-bold uppercase tracking-widest">로컬의 시대</span>
            </div>
            <div className="hidden md:block h-10 w-px bg-slate-200"></div>
            <p className="text-slate-600 font-semibold text-lg md:text-xl break-keep">
              도시의 성장은 건물을 높이는 것이 아니라, 
              <span className="text-slate-900 font-bold ml-2">기업이 뿌리내릴 건강한 토양</span>을 만드는 과정입니다.
            </p>
          </div>
        </section>
      </main>

      <footer className={`${STYLE.LAYOUT.CONTAINER} text-center border-t border-slate-200 py-24 text-slate-400 px-4`}>
        <div className="mb-12 flex flex-col md:flex-row justify-center gap-4 md:gap-10 items-center opacity-40">
          <div className="hidden md:block h-[2px] w-24 bg-slate-300"></div>
          <div className="text-center">
            <p className="font-black text-slate-500 text-xl tracking-tight mb-1">좋은 기업이 좋은 도시를 만든다</p>
            <p className="font-bold tracking-[0.4em] uppercase text-xs text-slate-400">Good Companies Make Good Cities</p>
          </div>
          <div className="hidden md:block h-[2px] w-24 bg-slate-300"></div>
        </div>
        
        <div className="space-y-4">
            <p className="font-medium text-slate-500 tracking-tight text-sm text-center leading-relaxed break-keep">
                지역의 미래를 고민하는 <a href="http://cspinc.kr" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 font-bold hover:underline transition-all">씨에스피</a> & <a href="https://belocal.co" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold hover:underline transition-all">비로컬</a>의 12부작 공동 연구 프로젝트를 기반으로 생성된 인포그래픽입니다.
            </p>
            <p className="text-xs text-slate-400 font-mono">
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
