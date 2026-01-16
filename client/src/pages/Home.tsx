import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, FileText, Mail, Phone, MapPin, Star, CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ナビゲーション */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">
            吉田のポートフォリオ
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#profile" className="text-slate-700 hover:text-blue-900 transition font-medium">プロフィール</a>
            <a href="#qualifications" className="text-slate-700 hover:text-blue-900 transition font-medium">資格・経験</a>
            <a href="#services" className="text-slate-700 hover:text-blue-900 transition font-medium">サービス</a>
            <a href="#portfolio" className="text-slate-700 hover:text-blue-900 transition font-medium">実績</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-900 transition font-medium">お問い合わせ</a>
          </div>
        </div>
      </nav>

      {/* ヒーロー セクション */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              社会保険労務士 × ファイナンシャルプランナー × ライター
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              金融機関での実務経験と専門資格を活かし、複雑な社会保障制度や資産運用、人事労務に関する記事執筆から、わかりやすい解説コンテンツまで、幅広い業務に対応いたします。
            </p>
            <div className="flex gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-6 text-lg">
                クラウドワークスで依頼する
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                詳細を見る
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/professional-character.png" 
              alt="プロフェッショナルキャラクター" 
              className="w-full max-w-md drop-shadow-2xl"
            />
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
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
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
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">対応地域</p>
                    <p className="text-slate-600">全国（リモート対応）</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">職業</p>
                    <p className="text-slate-600">フリーランス ライター・コンサルタント</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">経験年数</p>
                    <p className="text-slate-600">金融機関 5年以上、ライティング 3年以上</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
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
            <Card className="border-2 border-blue-900 hover:shadow-lg transition">
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
            <Card className="border-2 border-blue-900 hover:shadow-lg transition">
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
          <div className="bg-blue-50 rounded-lg p-8 md:p-12">
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
                <div key={skill.name} className="bg-white p-6 rounded-lg border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-slate-900">{skill.name}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < skill.level ? "fill-yellow-500 text-yellow-500" : "text-slate-300"}`}
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
                items: [
                  "社会保障制度に関する記事",
                  "投資・資産運用に関する記事",
                  "人事労務に関する記事",
                  "SEO対策記事"
                ]
              },
              {
                title: "コンテンツ制作",
                items: [
                  "ブログ記事の企画・執筆",
                  "ニュースレター作成",
                  "FAQ・ガイドの作成",
                  "セミナー資料の作成"
                ]
              },
              {
                title: "コンサルティング・相談対応",
                items: [
                  "人事労務相談",
                  "資産運用相談",
                  "社会保障制度の相談",
                  "企業向けコンサルティング"
                ]
              },
              {
                title: "リサーチ・調査",
                items: [
                  "最新情報の調査",
                  "競合分析",
                  "データ分析",
                  "市場調査"
                ]
              }
            ].map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-blue-900">{service.title}</CardTitle>
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
              <Card key={idx} className="hover:shadow-lg transition">
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

      {/* 料金表 セクション */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">料金表</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            透明性のある料金設定で、安心してご依頼いただけます
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
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

            <Card>
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
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">クラウドワークス</h3>
              <p className="text-blue-100 mb-4">メッセージ機能で対応</p>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
                プロフィールを見る
              </Button>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">メール</h3>
              <p className="text-blue-100 mb-4">24時間以内に返信</p>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                メールを送信
              </Button>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Zoom相談</h3>
              <p className="text-blue-100 mb-4">事前予約で対応</p>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                予約する
              </Button>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">よくある質問</h3>
            <div className="space-y-6 text-left">
              <div>
                <p className="font-bold text-yellow-300 mb-2">Q. 納期はどのくらいですか？</p>
                <p className="text-blue-100">業務内容によって異なりますが、通常1,000字の記事は3～5営業日、コンサルティングは2週間程度です。急ぎの案件もご相談ください。</p>
              </div>
              <div>
                <p className="font-bold text-yellow-300 mb-2">Q. 修正対応は可能ですか？</p>
                <p className="text-blue-100">はい、初回納品後の修正は2回まで無料で対応いたします。</p>
              </div>
              <div>
                <p className="font-bold text-yellow-300 mb-2">Q. 継続契約は可能ですか？</p>
                <p className="text-blue-100">はい、月額契約も可能です。継続契約割引もございます。</p>
              </div>
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
    </div>
  );
}
