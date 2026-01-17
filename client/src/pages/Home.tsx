import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, FileText, Mail, Phone, MapPin, Star, CheckCircle2, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ナビゲーション */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/95 shadow-lg border-b border-slate-200" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">
            吉田のポートフォリオ
          </div>
          
          {/* デスクトップメニュー */}
          <div className="hidden md:flex gap-8">
            <a href="#profile" className="text-slate-700 hover:text-blue-900 transition font-medium">プロフィール</a>
            <a href="#qualifications" className="text-slate-700 hover:text-blue-900 transition font-medium">資格・経験</a>
            <a href="#services" className="text-slate-700 hover:text-blue-900 transition font-medium">サービス</a>
            <a href="#portfolio" className="text-slate-700 hover:text-blue-900 transition font-medium">実績</a>
            <a href="#faq" className="text-slate-700 hover:text-blue-900 transition font-medium">FAQ</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-900 transition font-medium">お問い合わせ</a>
          </div>

          {/* モバイルメニューボタン */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-2">
            <a href="#profile" className="block py-2 text-slate-700 hover:text-blue-900">プロフィール</a>
            <a href="#qualifications" className="block py-2 text-slate-700 hover:text-blue-900">資格・経験</a>
            <a href="#services" className="block py-2 text-slate-700 hover:text-blue-900">サービス</a>
            <a href="#portfolio" className="block py-2 text-slate-700 hover:text-blue-900">実績</a>
            <a href="#faq" className="block py-2 text-slate-700 hover:text-blue-900">FAQ</a>
            <a href="#contact" className="block py-2 text-slate-700 hover:text-blue-900">お問い合わせ</a>
          </div>
        )}
      </nav>

      {/* ヒーロー セクション（改善版） */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-background.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="mb-4 inline-block">
                <Badge className="bg-yellow-500 text-blue-900 px-4 py-2 text-sm font-semibold">
                  複数の専門資格を持つプロフェッショナル
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                社会保険労務士 × ファイナンシャルプランナー × ライター
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                金融機関での実務経験と専門資格を活かし、複雑な社会保障制度や資産運用、人事労務に関する記事執筆から、わかりやすい解説コンテンツまで、幅広い業務に対応いたします。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  クラウドワークスで依頼する
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                  詳細を見る
                </Button>
              </div>

              {/* 信頼性指標 */}
              <div className="mt-12 pt-8 border-t border-white/30 flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-yellow-400">50+</p>
                  <p className="text-blue-100">実績件数</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400">4.8/5.0</p>
                  <p className="text-blue-100">平均評価</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400">5年+</p>
                  <p className="text-blue-100">金融経験</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <img 
                src="/images/professional-character.png" 
                alt="プロフェッショナルキャラクター" 
                className="w-full max-w-md drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* プロフィール セクション */}
      <section id="profile" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">プロフィール</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            複数の専門資格と金融機関での実務経験を活かし、質の高いコンテンツとコンサルティングを提供します
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">自己紹介</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  社会保険労務士と1級ファイナンシャルプランニング技能士の資格を持つ、複数分野の専門家です。金融機関での5年以上の実務経験を通じて、複雑な制度や金融商品をわかりやすく説明する能力を磨きました。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  現在は、その知識とライティングスキルを活かし、社会保障制度に関する記事執筆、資産運用・投資に関するコンテンツ制作、人事労務コンサルティング、ビジネス文書・提案書の作成など、幅広い業務に携わっています。
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                  <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">対応地域</p>
                    <p className="text-slate-600">全国（リモート対応）</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                  <Briefcase className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">職業</p>
                    <p className="text-slate-600">フリーランス ライター・コンサルタント</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                  <FileText className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">経験年数</p>
                    <p className="text-slate-600">金融機関 5年以上、ライティング 3年以上</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                  <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">対応時間</p>
                    <p className="text-slate-600">平日 9:00～18:00（土日祝は要相談）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 資格・経験 セクション */}
      <section id="qualifications" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">資格・経験</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            複数の専門資格と豊富な実務経験で、高品質なサービスを提供します
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 社会保険労務士 */}
            <Card className="border-2 border-blue-900 hover:shadow-xl transition-all transform hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-blue-900">社会保険労務士</CardTitle>
                    <CardDescription className="text-lg">取得年：2022年</CardDescription>
                  </div>
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  社会保障制度、人事労務管理、給与計算、就業規則作成の専門家です。
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">専門分野：</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">年金制度</Badge>
                    <Badge variant="secondary">健康保険</Badge>
                    <Badge variant="secondary">労務管理</Badge>
                    <Badge variant="secondary">給与計算</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ファイナンシャルプランナー */}
            <Card className="border-2 border-blue-900 hover:shadow-xl transition-all transform hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-blue-900">1級FP技能士</CardTitle>
                    <CardDescription className="text-lg">取得年：2023年</CardDescription>
                  </div>
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  資産運用、税務計画、保険設計、退職計画の専門家です。
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">専門分野：</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">資産運用</Badge>
                    <Badge variant="secondary">税務計画</Badge>
                    <Badge variant="secondary">保険設計</Badge>
                    <Badge variant="secondary">家計管理</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 職務経歴 */}
          <div className="bg-blue-50 rounded-lg p-8 md:p-12 hover:bg-blue-100 transition">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">職務経歴</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">金融機関での実務経験（5年以上）</h4>
                <p className="text-slate-700 mb-4">営業企画、商品開発、顧客サポート</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>金融商品（投資信託、保険、年金商品）の企画・営業</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>顧客向けセミナーの企画・講師</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>複雑な金融商品をわかりやすく説明するコンテンツ制作</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>社内向け研修資料の作成</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* スキル */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">スキル</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "ライティング", level: 5, desc: "ビジネス文章、ブログ記事、SEO対策記事" },
                { name: "専門知識", level: 5, desc: "社会保障制度、金融・投資、人事労務" },
                { name: "コンサルティング", level: 4, desc: "企業向けコンサルティング、個人相談対応" },
                { name: "資料作成", level: 4, desc: "PowerPoint、Word、提案書作成" },
              ].map((skill) => (
                <div key={skill.name} className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-slate-900">{skill.name}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 transition-all ${i < skill.level ? "fill-yellow-500 text-yellow-500 scale-110" : "text-slate-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* サービス セクション */}
      <section id="services" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">対応可能なサービス</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            幅広い業務に対応し、クライアント様のニーズに合わせたソリューションを提供します
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "記事執筆・ライティング",
                icon: "/images/icon-writing.png",
                items: [
                  "社会保障制度に関する記事",
                  "投資・資産運用に関する記事",
                  "人事労務に関する記事",
                  "SEO対策記事"
                ]
              },
              {
                title: "コンテンツ制作",
                icon: "/images/icon-content.png",
                items: [
                  "ブログ記事の企画・執筆",
                  "ニュースレター作成",
                  "FAQ・ガイドの作成",
                  "セミナー資料の作成"
                ]
              },
              {
                title: "コンサルティング・相談対応",
                icon: "/images/icon-consulting.png",
                items: [
                  "人事労務相談",
                  "資産運用相談",
                  "社会保障制度の相談",
                  "企業向けコンサルティング"
                ]
              },
              {
                title: "リサーチ・調査",
                icon: "/images/icon-research.png",
                items: [
                  "最新情報の調査",
                  "競合分析",
                  "データ分析",
                  "市場調査"
                ]
              }
            ].map((service) => (
              <Card key={service.title} className="hover:shadow-xl transition-all transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <img src={service.icon} alt={service.title} className="w-12 h-12" />
                    <CardTitle className="text-blue-900">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 実績 セクション */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">実績・事例</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            これまでのプロジェクトで得た実績と経験を紹介します
          </p>

          <div className="space-y-8">
            {[
              {
                title: "社会保障制度に関する解説記事シリーズ",
                client: "金融教育サイト",
                content: "年金制度、健康保険、雇用保険に関する解説記事（全10記事）",
                result: "月間PV 50,000以上、ユーザー満足度 4.8/5.0",
                period: "2ヶ月"
              },
              {
                title: "投資初心者向けガイドの作成",
                client: "証券会社",
                content: "「初心者のための投資ガイド」（5,000字）",
                result: "ダウンロード数 10,000件以上、顧客獲得に貢献",
                period: "3週間"
              },
              {
                title: "企業向け人事制度設計コンサルティング",
                client: "スタートアップ企業",
                content: "給与制度、評価制度、福利厚生制度の設計",
                result: "離職率低下、従業員満足度向上",
                period: "2ヶ月"
              },
              {
                title: "ブログ記事の定期執筆",
                client: "ファイナンシャルプランニング事務所",
                content: "資産運用、税務計画に関するブログ記事（月4記事）",
                result: "ブログ経由の問い合わせ増加、SEO順位向上",
                period: "6ヶ月（継続中）"
              }
            ].map((project, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-blue-900">{project.title}</CardTitle>
                      <CardDescription className="text-base mt-2">クライアント：{project.client}</CardDescription>
                    </div>
                    <Badge className="bg-yellow-500 text-blue-900">{project.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-600">業務内容</p>
                      <p className="text-slate-700">{project.content}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-600">成果</p>
                      <p className="text-slate-700">{project.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section id="faq" className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">よくある質問</h2>
          <p className="text-center text-slate-600 mb-12">
            クライアント様からよくいただく質問をまとめました
          </p>

          <div className="space-y-4">
            {[
              {
                q: "納期はどのくらいですか？",
                a: "業務内容によって異なりますが、通常1,000字の記事は3～5営業日、コンサルティングは2週間程度です。急ぎの案件もご相談ください。"
              },
              {
                q: "修正対応は可能ですか？",
                a: "はい、初回納品後の修正は2回まで無料で対応いたします。"
              },
              {
                q: "継続契約は可能ですか？",
                a: "はい、月額契約も可能です。継続契約割引もございます。"
              },
              {
                q: "秘密保持契約は対応できますか？",
                a: "はい、対応いたします。事前にご相談ください。"
              },
              {
                q: "クラウドワークス以外での契約は可能ですか？",
                a: "はい、メールやZoomでの直接契約も可能です。詳細はお問い合わせください。"
              },
              {
                q: "支払い方法は何がありますか？",
                a: "クラウドワークスの場合は同プラットフォームの支払い方法に従います。直接契約の場合は銀行振込またはPayPalでの支払いに対応しています。"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-slate-200 hover:shadow-lg transition">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-6 flex justify-between items-center hover:bg-slate-50 transition"
                >
                  <p className="font-semibold text-slate-900 text-left">{item.q}</p>
                  <ChevronDown className={`w-5 h-5 text-yellow-500 transition-transform ${expandedFAQ === idx ? "rotate-180" : ""}`} />
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 pb-6 border-t border-slate-200 text-slate-700">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金表 セクション */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">料金表</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            透明性のある料金設定で、安心してご依頼いただけます
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-blue-900">記事執筆・ライティング</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-slate-700">ブログ記事（1,000字）</span>
                    <span className="font-bold text-blue-900">¥5,000～¥10,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-slate-700">SEO対策記事（2,000字）</span>
                    <span className="font-bold text-blue-900">¥10,000～¥15,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-slate-700">ホワイトペーパー（5,000字以上）</span>
                    <span className="font-bold text-blue-900">¥30,000～</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-slate-700">ニュースレター（月4回）</span>
                    <span className="font-bold text-blue-900">¥20,000～</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">企画・構成のみ</span>
                    <span className="font-bold text-blue-900">¥3,000～</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-blue-900">コンサルティング・相談</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-slate-700">1時間相談</span>
                    <span className="font-bold text-blue-900">¥5,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-slate-700">半日コンサルティング（4時間）</span>
                    <span className="font-bold text-blue-900">¥15,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-slate-700">人事制度設計（一式）</span>
                    <span className="font-bold text-blue-900">¥100,000～</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-slate-700">継続サポート（月額）</span>
                    <span className="font-bold text-blue-900">¥30,000～</span>
                  </div>
                  <div className="text-sm text-slate-600 mt-4 p-3 bg-blue-50 rounded">
                    <p className="font-semibold mb-2">割引・特典</p>
                    <ul className="space-y-1">
                      <li>• 継続契約：10～20%割引</li>
                      <li>• 複数記事：5記事以上で10%割引</li>
                      <li>• 新規クライアント：初回10%割引</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* お問い合わせ セクション */}
      <section id="contact" className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">ご依頼・ご相談はこちらから</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            クラウドワークスでの依頼受付、またはメール・Zoomでの相談に対応しています。
            お気軽にお問い合わせください。
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/20 transition transform hover:scale-105">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">クラウドワークス</h3>
              <p className="text-blue-100 mb-4">メッセージ機能で対応</p>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
                プロフィールを見る
              </Button>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/20 transition transform hover:scale-105">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">メール</h3>
              <p className="text-blue-100 mb-4">24時間以内に返信</p>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                メールを送信
              </Button>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/20 transition transform hover:scale-105">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Zoom相談</h3>
              <p className="text-blue-100 mb-4">事前予約で対応</p>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                予約する
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">サイトマップ</h4>
              <ul className="space-y-2">
                <li><a href="#profile" className="hover:text-white transition">プロフィール</a></li>
                <li><a href="#qualifications" className="hover:text-white transition">資格・経験</a></li>
                <li><a href="#services" className="hover:text-white transition">サービス</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">実績</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">サービス</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">記事執筆</a></li>
                <li><a href="#" className="hover:text-white transition">コンサルティング</a></li>
                <li><a href="#" className="hover:text-white transition">リサーチ・調査</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">お問い合わせ</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">クラウドワークス</a></li>
                <li><a href="#" className="hover:text-white transition">メール</a></li>
                <li><a href="#" className="hover:text-white transition">Zoom相談</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">その他</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition">利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center">
            <p>© 2024 吉田のポートフォリオ. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React, Tailwind CSS, and ❤️</p>
          </div>
        </div>
      </footer>

      {/* アニメーション CSS */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
