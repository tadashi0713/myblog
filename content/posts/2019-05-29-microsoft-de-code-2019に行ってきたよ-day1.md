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

パフォーマンスの高い Windows アプリを React Native で実装できるというものです。

Javascript 開発者であればとても簡単に実装できるということをアピールしていました、今度簡単なものを作ってみようかなと思います。

## Windows Terminal

1つのターミナルでタブごとに PowerShell、WSLなどに切り替えられて便利そうです。

Unicode対応で、絵文字・日本語も問題なく表示できます。

## Windows Subsystem for Linux 2(WSL2)

WSL の次期バージョン WSL2 では Docker が実行できることも話題になりました。

デモンストレーションでは、VSCode on Linux でコーディングしながら Windows Edge on Windows で表示確認をしていました。

また、パフォーマンスも WSL の数倍高いということでした(デモンストレーションでは npm installで比較していました)。

## Microsoft Edge

最近 Microsoft Edge は Chronium ベースに移行していくことでも話題になりました。

IEモードなど、Edge ならではの機能も追加されていく予定です。

## Visual Studio Code Online


## 仮想ノード on AKS(Virtual Kubelet)

オープンソースの Virtual Kubelet をベースに、Kubernetes の Node を瞬時に増減させることができるというものです。

以前ブログにも書きましたが、Selenium などの自動テストととても相性が良いと思います。

東日本リージョンで利用できるようになったら是非試してみたいです。

# HoloLens2 体験しました
