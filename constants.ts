import { Brain, Target, Zap, Lock, Globe, Clock } from 'lucide-react';
import { Feature, FAQItem, PricePlan, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'MECとは', href: '#concept' },
  { label: '理論', href: '#theory' },
  { label: 'サービス・料金', href: '#service' },
  { label: 'プロフィール', href: '#profile' },
  { label: 'FAQ', href: '#faq' },
];

export const FEATURES: Feature[] = [
  {
    title: "ホメオスタシス",
    description: "現状（コンフォートゾーン）を維持しようとする脳の恒常性維持機能を逆手にとり、理想の未来を「新しいコンフォートゾーン」に設定します。",
    icon: Globe
  },
  {
    title: "RASとスコトーマ",
    description: "脳幹網様体賦活系（RAS）のフィルター機能を書き換え、これまで見えていなかった「ゴール達成の道筋（スコトーマの裏側）」を認識させます。",
    icon: Lock
  },
  {
    title: "未来からの時間",
    description: "「過去が現在を作る」のではなく、「未来が現在を作る」という認知科学的な時間論に基づき、過去の制約から解放された意思決定を促します。",
    icon: Clock
  }
];

export const PLANS: PricePlan[] = [
  {
    title: "初回トライアルセッション",
    price: "6,000円",
    note: "(税込)",
    features: [
      "MEC理論の基礎解説",
      "現状のヒアリング",
      "認知科学的アプローチの体感",
      "コーチとの相性確認",
      "オンライン / 対面"
    ],
    isPrimary: false
  },
  {
    title: "MEC本コース",
    price: "214,000円",
    period: "6ヶ月間 (月1回 × 6回)",
    note: "※初回を除いた5回分・税込",
    features: [
      "完全パーソナルコーチング",
      "月1回 30分〜の集中セッション",
      "マインドの使い方の徹底指導",
      "非言語による内部表現の書き換え",
      "オンライン / 対面"
    ],
    isPrimary: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "具体的なアドバイスはくれないのですか？",
    answer: "はい、原則として具体的な行動のアドバイスは行いません。答えは「現状の外側（スコトーマの裏）」にあり、他者から与えられた答えでは脳が重要性を認識せず、RASが働きません。あなた自身が答えを見つけるための「脳（マインド）の使い方」を指導します。"
  },
  {
    question: "ゴールが見つかっていない、または達成方法がわからなくても大丈夫ですか？",
    answer: "むしろ「達成方法がわからない」ゴールこそが正解です。今の自分に見えている方法で達成できる目標は「現状の内側」にすぎません。方法が見えないほどの高いゴールを設定することで、脳がクリエイティブに働き始めます。"
  },
  {
    question: "オンラインでも効果はありますか？",
    answer: "はい、効果に変わりはありません。言葉と言語外の働きかけ（非言語）を通じて内部表現（マインド）に介入するため、Google Meet等のオンライン環境でも十分に機能します。"
  },
  {
    question: "どのような人が受講していますか？",
    answer: "経営者、個人事業主、管理職などビジネスリーダー層が多いですが、「今の延長線上の未来にワクワクしない」と感じている全ての方が対象です。年齢や職業に関わらず、現状を打破したい強い意志を持つ方が受講されています。"
  }
];