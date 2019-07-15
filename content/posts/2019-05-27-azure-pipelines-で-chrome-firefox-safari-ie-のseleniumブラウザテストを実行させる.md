---
template: post
title: Azure Pipelines で Chrome / Firefox / Safari / IE のSeleniumブラウザテストを実行させる
slug: azure_pipelines_selenium
draft: false
date: 2019-05-27T10:01:13.965Z
image: /media/azure-pipelines-selenium.png
description: >-
  Azure Pipelines では、Linux / macOS / Windows の VM を利用することができます。

  Selenium
  などのブラウザテストの場合、特定のOS上でしか動作できないブラウザ(Safari・IE・Edge)をテストする必要が出てくることもあります。

  それらのテストと Azure Pipelines は相性が良いのではと考え、今回試してみることにしました。
category: Automation
tags:
  - Japanese
  - Selenium
  - Azure
  - WebdriverIO
---
![](/media/azure-pipelines-selenium.png)

去年発表されたマイクロソフトの CI/CDツール「Azure Pipelines」では、オープンソースプロジェクトの場合、無料・無制限で利用することができます。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.publickey1.jp/blog/18/cicdazure_pipeline130.html" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.publickey1.jp%2Fblog%2F18%2Fcicdazure_pipeline130.html&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

最近だと様々なオープンソースプロジェクトが利用しており、JUnit プロジェクトが Azure Pipelines に移行したことでも話題になりました。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.infoq.com/jp/news/2019/05/junit-azure-pipelines/" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.infoq.com%2Fjp%2Fnews%2F2019%2F05%2Fjunit-azure-pipelines%2F&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

この Azure Pipelines ですが、Linux / macOS / Windows のVMを利用することができます。

Selenium などのブラウザテストの場合、特定のOS上でしか動作できないブラウザ(Safari・IE・Edge)をテストする必要が出てくることもあります。

それらのテストと Azure Pipelines は相性が良いのではと考え、今回試してみることにしました。

サンプルコードは下記になります。今回は WebdriverIO で実装してみました。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/tadashi0713/practice-webdriverio-typescript" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2Ftadashi0713%2Fpractice-webdriverio-typescript&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

実際にビルド結果などは下記のリンクから見ることができますが、Linux(Chrome, Firefox)・MacOS(Safari)・Windows(IE)で Selenium テストを実行させることができました。

https://dev.azure.com/tadashinemoto0713/practice-webdriverio-typescript/_build

![](/media/スクリーンショット-2019-05-26-17.50.46.png)

![](/media/スクリーンショット-2019-05-27-18.02.46.png)

それぞれの VM のイメージに何が入っているかは、下記のレポジトリから確認することができます。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/microsoft/azure-pipelines-image-generation" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2Fmicrosoft%2Fazure-pipelines-image-generation&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

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

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://webdriver.io/index.html" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwebdriver.io%2Fdocs%2Fselenium-standalone-service.html&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

今回、Edge ブラウザのテストも試してみたかったのですがうまくできませんでした。

Windows VM に別途設定・インストールが必要かもしれないので時間があるときに試してみたいと思います。

それを差し置いても、Selenium で使うための Windows や macOS のリソースを手軽に利用できるのはとても魅力的に感じました。

オープンソースプロジェクトや、小さな開発チームには有効に使えるのではと考えています。
