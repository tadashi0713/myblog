---
template: post
title: QAからリリースエンジニアリングへの進化 R＆D急成長の礎としてのCI/CD(Jenkins Day Japan 2019)
slug: jenkins_day_japan_2019_release_engineering
draft: false
date: 2019-10-11T05:40:57.738Z
image: /media/jenkinsday2019_top_br.jpg
description: >-
  10/11(金)に行われた「Jenkins Day Japan 2019」に参加しました。


  今回はその中のセッション「QAからリリースエンジニアリングへの進化 R＆D急成長の礎としてのCI/CD(The evolution from QA to
  Release engineering and CI/CD as the anchor for R&D hyper
  growth)」がとても興味深かったのでまとめてみました。
category: Event
tags:
  - Jenkins
  - Japanese
  - Continuous Integration
  - Continuous Delivery
  - Automation
---
![](/media/jenkinsday2019_top_br.jpg)


<br />

10/11(金)に行われた「Jenkins Day Japan 2019」に参加しました。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://cloudbees.techmatrix.jp/jenkins-day-japan2019/" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fcloudbees.techmatrix.jp%2Fjenkins-day-japan2019%2F&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

今回はその中のセッション「QAからリリースエンジニアリングへの進化 R＆D急成長の礎としてのCI/CD(The evolution from QA to Release engineering and CI/CD as the anchor for R&D hyper growth)」がとても興味深かったのでまとめてみました。

```
【講演概要】
過去10年間、Taboola社は急成長を続けています。
この成長の1つの側面は、非常に競争の激しい環境におけるクライアント、パートナー、およびビジネスの増大です。
2つ目の側面は、システム運用と開発に関わるコードとエンジニアのorg/ops(組織からOps)に至る継続的な成長です。
本講演では、どのように当社のエンジニアが「独立していない集中化された他の機能と共にソフトウェアをビルド/テスト/展開する状況」から「個々のエンジニアが自身のコードのリリースとモニタリングに専念する状況」まで到達したか、その転換プロセスについて段階的にご説明します。

この種の変革で成功するための鍵となる技術的・文化的な要素、およびさらに前進するために今後達成しなければならない事柄についても触れたいと思います。
また、当社が自身に設定した原則と戦略をご紹介します。
約100台のJenkinsマシンで構成されるエコシステムを主な推進力として使用し、他の多くのシステムやALMサービス(Git、Jira、K8s、Seleniumなど)と相互作用しつつ、ビルドとCIパイプラインの合理化をどのように成功に導いたかについてお話しします。
```

## はじめに

Taboola 社では 14億ユーザー/月の巨大なサービスを運用している状況の中で、現在CI/CDの活用により40デプロイ/日を実現しています。

Avi Levi氏はQAエンジニアからのキャリアですが、彼が最終的にQAチームがない状況で上記を実現し、どうリリースエンジニアリングへと進化させたかについて紹介されていました。

![QA → リリースエンジニアリング](/media/screen-shot-2019-10-11-at-16.25.52.png "QA → リリースエンジニアリング")

彼はこのセッションの中で 「enablement(魚を与えるのではなく、釣り方を教える)」が重要だということを強調していました。

## QA → Testing Infra

Avi Levi 氏はまず1人でQAを始め、後に3~4人のQA部隊になりました。

当時の状況としては下記のようなものでした。

* マニュアルテストと開発は別れていた
* ウォーターフォール・手動でのデプロイ
* Automationを始めた、いわゆるE2Eのリグレッションテスト

しかし、この状況で課題が出てきました。

* QAの遅れによりビジネスに悪い影響が出てきた。
* QAの遅れにより品質に妥協が必要になってきた。
* QA・開発とのコミュニケーション・フィードバックに時間がかかってしまったしまった
* QAに知識が中心化しがちになった。

そのため彼はQAがテストをするのではなく、開発者にテスト(Unit, Integration)を書いてもらうようにすることを決めました。

そのためにはテストフレームワーク・環境を用意するためのチーム(Testing Infra Team)が必要ですし、最初は手動のテストより時間がかかりますが、徐々にスピードを上げることができると期待しました。

しかし、今まで以上に開発にやってもらうことを増やすことになってしまうため、「なんで Integration Test を書かないといけないんだ」「他の会社やってないぞ」という反対意見ももちろんありました。

そのために彼が主にやったことは2つあり、一つは上司を味方につけることです。

彼はVPを味方につけ、彼がやりたい事が開発の考え方・文化そのものを変える必要があるということ、最初は時間がかかるが徐々にスピードを上げることができるということを主張しました。

また、彼は正直(Honest)に開発者と話していくことを続けました。

それらの行動により、彼が立ち上げたTest Infracture Teamはテストインフラを提供しつつ、開発者数百人が品質に責任を持つようになり、結果として品質・テストカバレッジも継続的に上げることができるようになりました。

## Test Infra →  DevTestOps

上記の成果が出てきた中、下記の課題が次第に出てきました。

* テストを書く・実行するのに開発者の約40%のリソースが使われている。
* fleaky tests(不安定なテスト)が増える

そのため、彼は下記の価値観を主軸にしたDevTestOpsの実践を試みました。

* 小さい単位でリリースできるようにし、velocityを上げる
* 開発者にEnd to Endのプロダクトのオーナーシップを持ってもらう

それに応じて技術的な進化も行ないました。

* CI/CD パイプライン
* モノレポジトリビルド
* コンテナ上でのテスト
* 本番環境でのカナリーテスティング
* 継続的なモニタリング・フィードバック

![](/media/screen-shot-2019-10-13-at-21.14.07.png)

これによって開発スピードの向上が見え始め、実際にコミット数を増やすことができました。

また、開発者がEnd to Endのプロダクトのオーナーシップを持つことで、モチベーションが上がるという効果も見え始めてきました。

## まとめ

まとめとして彼は5つの重要点(takeaways)を述べました

1. Harness the Right Stakeholder(正しいステークホルダーを味方につける)
2. Start Small and Lead by Example(小さく始めて手本にする)
3. Honest Data Driven Discussions(データを元にした正直なディスカッションを行う)
4. Enable Engineering Productivity and Collaboration(エンジニアの生産性とコラボレーションを実現する)
5. Maintain Good Perception・Users Trust(信頼される良い人であること)
