---
template: post
title: Azure Pipelines で Chrome / Firefox / Safari / IE のSeleniumブラウザテストを実行させる
slug: azure_pipelines_selenium
draft: true
date: 2019-05-27T10:01:13.965Z
image: /media/azure-pipelines-selenium.png
description: >-
  Azure Pipelines では、Linux / macOS / Windows の VM を利用することができます。

  Selenium
  などのブラウザテストの場合、特定のOS上でしか動作できないブラウザ(Safari・IE・Edge)をテストする必要が出てくることもあります。

  上記のようなブラウザテストと、3つのOSをサポートしている Azure Pipelines は相性が良いのではと考え、今回試してみることにしました。
category: Automation
tags:
  - Japanese
  - Selenium
  - Azure
  - WebdriverIO
---
![](/media/azure-pipelines-selenium.png)

去年発表されたマイクロソフトの CI/CDツール「Azure Pipelines」では、オープンソースプロジェクトの場合、無料・無制限で利用することができます。

最近だと様々なオープンソースプロジェクトが利用しており、JUnit プロジェクトが Azure Pipelines に移行したことでも話題になりました。

この Azure Pipelines ですが、Linux / macOS / Windows のVMを利用することができます。

Selenium などのブラウザテストの場合、特定のOS上でしか動作できないブラウザ(Safari・IE・Edge)をテストする必要が出てくることもあります。

上記のようなブラウザテストと、3つのOSをサポートしている Azure Pipelines は相性が良いのではと考え、今回試してみることにしました。

サンプルコードは下記になります。今回は WebdriverIO で実装してみました。

実際にビルド結果などは下記のリンクから見ることができますが、Linux(Chrome, Firefox)・MacOS(Safari)・Windows(IE)で Selenium テストを実行させることができました。

それぞれの VM のイメージに何が入っているかは、下記のレポジトリから確認することができます。

Selenium を使う上で懸念しないといけない点は主に2点です。

1つ目に、Linux VM の場合は仮想ディスプレイなどが入っていないため、Chrome, Firefox のヘッドレスモードなどを利用する必要があります

```javascript
config.capabilities = [{
  browserName: 'chrome',
  'goog:chromeOptions': {
    args: ['window-size=1920,1080', '--headless', '--disable-gpu']
  }
}]
```

```javascript
config.capabilities = [{
  browserName: 'firefox',
  'moz:firefoxOptions': {
    args: ['window-size=1920,1080', '--headless']
  }
}]
```

2つ目に、Selenium standalone server や、各種 driver は別途インストールする必要があります。
※ Windows VMの一部では IE Driver / Chrome Driver / Gecko Driver がインストールされています

WebdriverIO の場合、@wdio/selenium-standalone-service を使うことによって、それらを自動でインストールしてくれるので便利です。

今回、Edge ブラウザのテストも試してみたかったのですがうまくできませんでした。Windows VM に別途設定・インストールが必要かもしれないので時間があるときに試してみたいと思います。

それを差し置いても、Selenium で使うための Windows や macOS のリソースを手軽に利用できるのはとても魅力的に感じました。

オープンソースプロジェクトや、小さな開発チームには有効に使えるのではと考えています。
