---
template: post
title: 'Microsoft de:code 2019に行ってきたよ(Day1)'
slug: azure_2019_day1
draft: true
date: 2019-05-29T10:42:54.834Z
image: /media/img_20190529_125216.jpg
description: |-
  機会があって、Microsoft de:code 2019 に参加させてもらいました(初参加)。
  Azure(DevOps、Pipelines、Kubernetes)、HoloLens 2、Edgeブラウザーなどをメインに見てきました。
category: Event
tags:
  - Microsoft
  - Windows
  - Azure
---
機会があって、Microsoft de:code 2019 に参加させてもらいました(初参加)。

Azure(DevOps、Pipelines、Kubernetes)、HoloLens 2、Edgeブラウザーなどをメインに見てきました。

# 基調講演

Build 2019 で発表されたものがメインになっていましたが、実際にデモなどを見ると試して見たくなるものも多くありました。

## Windows React Native

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://jp.techcrunch.com/2019/05/07/2019-05-06-microsoft-launches-react-native-for-windows/" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fjp.techcrunch.com%2F2019%2F05%2F07%2F2019-05-06-microsoft-launches-react-native-for-windows%2F&amp;key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

パフォーマンスの高い Windows アプリを React Native で実装できるというものです。

![](/media/img_20190529_102607.jpg)

Javascript 開発者であればとても簡単に実装できるということをアピールしていました、今度簡単なものを作ってみようかなと思います。

## Windows Terminal

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.publickey1.jp/blog/19/windows_terminalpowershellsshmicrosoft_build_2019.html" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.publickey1.jp%2Fblog%2F19%2Fwindows_terminalpowershellsshmicrosoft_build_2019.html&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

1つのターミナルでタブごとに PowerShell、WSLなどに切り替えられて便利そうです。

![](/media/img_20190529_103059-1-.jpg)

Unicode対応で、絵文字・日本語も問題なく表示できます。

## Windows Subsystem for Linux 2(WSL2)

WSL の次期バージョン WSL2 では Docker が実行できることも話題になりました。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.publickey1.jp/blog/19/windowslinuxwsl_2dockermicrosoft_build_2019.html" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.publickey1.jp%2Fblog%2F19%2Fwindowslinuxwsl_2dockermicrosoft_build_2019.html&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

デモンストレーションでは、VSCode on Linux でコーディングしながら Windows Edge on Windows で表示確認をしていました。

![](/media/img_20190529_103353.jpg)

また、パフォーマンスも WSL の数倍高いということでした(デモンストレーションでは npm installで比較していました)。

## Microsoft Edge

最近 Microsoft Edge は Chronium ベースに移行していくことでも話題になりました。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.itmedia.co.jp/news/articles/1905/07/news050.html" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.itmedia.co.jp%2Fnews%2Farticles%2F1905%2F07%2Fnews050.html&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

![](/media/img_20190529_104022.jpg)

IEモードなど、Edge ならではの機能も追加されていく予定です。

## Visual Studio Code Online

![](/media/img_20190529_110203-1-.jpg)

## 仮想ノード on AKS(Virtual Kubelet)

オープンソースの Virtual Kubelet をベースに、Kubernetes の Node を瞬時に増減させることができるというものです。

![](/media/img_20190529_112122.jpg)

以前ブログにも書きましたが、Selenium などの自動テストととても相性が良いと思います。

<div class="iframely-embed"><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Ftech.mercari.com%2Fentry%2F2019%2F04%2F16%2F060000" style="border: 0; width: 100%; height: 190px;" allowfullscreen scrolling="no" allow="autoplay; encrypted-media"></iframe></div>

東日本リージョンで利用できるようになったら是非試してみたいです。

# HoloLens2 体験しました

![](/media/img_20190529_125216.jpg)
