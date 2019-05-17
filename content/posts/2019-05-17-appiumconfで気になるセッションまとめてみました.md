---
template: post
title: AppiumConfで気になるセッションまとめてみました
slug: appiumconf_session
draft: true
date: 2019-05-17T01:19:48.932Z
image: /media/スクリーンショット-2019-05-17-10.20.49.png
description: >-
  6月13~15にインドのバンガロールで行われるAppiumConfに参加する予定です。

  Appiumというモバイルテスト自動化のためのフレームワークを軸に、モバイルテスティングに関するセッションが行われる予定ですが、その中で私が気になるセッションをメモ程度にまとめてみました。
category: Automation
tags:
  - Appium
  - Japanese
---
![](/media/スクリーンショット-2019-05-17-10.20.49.png)

6月13~15にインドのバンガロールで行われるAppiumConfに参加する予定です。

Appiumというモバイルテスト自動化のためのフレームワークを軸に、モバイルテスティングに関するセッションが行われる予定ですが、その中で私が気になるセッションをメモ程度にまとめてみました。


## Building a Mobile Testing Infrastructure: What I Learned

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://confengine.com/appium-conf-2019/proposal/9248/building-a-mobile-testing-infrastructure-what-i-learned" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fconfengine.com%2Fappium-conf-2019%2Fproposal%2F9248%2Fbuilding-a-mobile-testing-infrastructure-what-i-learned&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

[Zalenium](https://opensource.zalando.com/zalenium/) のコミッターが、モバイルテスティングの環境について話すみたいです。

実機 or エミュレーター、自作 or クラウドサービス、iOS・PlayStoreのバージョン管理、リソース管理、メンテナンスなど具体的に説明してくれるみたいです。

この辺りの情報はなかなか探しても見当たりにくいので、何か良いものを持ち帰れるのではないかと考えています。

## How we took Appium to 11 platforms

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://confengine.com/appium-conf-2019/proposal/9309/how-we-took-appium-to-11-platforms" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fconfengine.com%2Fappium-conf-2019%2Fproposal%2F9309%2Fhow-we-took-appium-to-11-platforms&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

iOS / Android だけでなく色々なプラットフォーム(tvOS, Android TV, PS4など)でアプリを展開し、そのテストをAppiumで実現したお話をするみたいです。

直接今の職場で活かせるとは思いませんが、Appiumの可能性を知る上でとても面白いセッションだと思います。

また、今回 React Native でアプリケーションを作成したみたいですが、マルチプラットフォーム展開できるアプリケーションフレームワーク(他には Flutter)と Appium の相性はどうなのか気になりました。

## Run your Appium tests using Docker Android

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://confengine.com/appium-conf-2019/proposal/8923/run-your-appium-tests-using-docker-android" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fconfengine.com%2Fappium-conf-2019%2Fproposal%2F8923%2Frun-your-appium-tests-using-docker-android&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

これは去年私も試した、Docker-Androidに関するセッションです。

<div class="iframely-embed"><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Ftech.mercari.com%2Fentry%2F2018%2F12%2F10%2F060000" style="border: 0; width: 100%; height: 190px;" allowfullscreen scrolling="no" allow="autoplay; encrypted-media"></iframe></div>

現状の環境をよりよくできるヒントなどが得られたらいいなと考えています。

## Appium Native Application Crawler

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://confengine.com/appium-conf-2019/proposal/8262/appium-native-application-crawler" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fconfengine.com%2Fappium-conf-2019%2Fproposal%2F8262%2Fappium-native-application-crawler&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

Appium を使ったクローラー作成し、探索的テストをやってもらうというものです。

クローリングする中で色々な情報(ログ、スクリーンショット、パフォーマンス)は取得できそうですが、どのぐらい実用的に使えそうなのかが気になりました。

## Building your own native app visual testing module with Appium

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://confengine.com/appium-conf-2019/proposal/8657/building-your-own-native-app-visual-testing-module-with-appium" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fconfengine.com%2Fappium-conf-2019%2Fproposal%2F8657%2Fbuilding-your-own-native-app-visual-testing-module-with-appium&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

最近 WebdriverIO でビジュアルテスティングできるライブラリを開発した方が、Appium でどうビジュアルリグレッションテスティングを実現するかについて話すみたいです。

個人的には、内部的にどう実現しているのか結構気になっていたので、このセッションを機に理解したいと思います。

## まとめ

セッションを見ていると、Appium を取りまくモバイルテスティングは皆さん色々と試行錯誤している状況だなと感じました。

ただ、その試行錯誤をするだけビジネスインパクトのあるものだとも感じているので、参加して聞いてみるのが楽しみです。
