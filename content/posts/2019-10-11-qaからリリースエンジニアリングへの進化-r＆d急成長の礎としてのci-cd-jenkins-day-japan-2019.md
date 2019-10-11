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
過去10年間、Taboola社は急成長を続けています。この成長の1つの側面は、非常に競争の激しい環境におけるクライアント、パートナー、およびビジネスの増大です。2つ目の側面は、システム運用と開発に関わるコードとエンジニアのorg/ops(組織からOps)に至る継続的な成長です。
本講演では、どのように当社のエンジニアが「独立していない集中化された他の機能と共にソフトウェアをビルド/テスト/展開する状況」から「個々のエンジニアが自身のコードのリリースとモニタリングに専念する状況」まで到達したか、その転換プロセスについて段階的にご説明します。
この種の変革で成功するための鍵となる技術的・文化的な要素、およびさらに前進するために今後達成しなければならない事柄についても触れたいと思います。また、当社が自身に設定した原則と戦略をご紹介します。約100台のJenkinsマシンで構成されるエコシステムを主な推進力として使用し、他の多くのシステムやALMサービス(Git、Jira、K8s、Seleniumなど)と相互作用しつつ、ビルドとCIパイプラインの合理化をどのように成功に導いたかについてお話しします。
```

## はじめに

Taboola 社では 14億ユーザー/月の巨大なサービスを運用している状況の中で、現在CI/CDの活用により40デプロイ/日を実現しています。

Avi Levi氏はQAエンジニアからのキャリアですが、彼が最終的にQAチームがない状況で上記を実現し、どうリリースエンジニアリングへと進化させたかについて紹介されていました。

彼はこのセッションの中で 「enablement(魚を与えるのではなく、釣り方を教える)」が重要だということを強調していました。
