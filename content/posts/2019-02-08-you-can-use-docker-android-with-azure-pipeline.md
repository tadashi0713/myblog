---
template: post
title: You can use Docker-Android with Azure pipeline
slug: docker_android_with_azure_pipeline
draft: false
date: 2019-02-08T05:12:50.387Z
description: >-
  Recently, I found that we can run x86 Android Emulator in Azure Pipeline. I
  tried to use this for Docker-Android for Appium testing, and it worked!
category: Automation
tags:
  - English
  - Continuous Integration
  - Appium
---
Last year, I wrote blog about Android・Appium test environment using [Docker-Android](https://github.com/budtmo/docker-android)

<div><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Ftech.mercari.com%2Fentry%2F2018%2F12%2F28%2F175147" style="border: 0; width: 100%; height: 190px;" allowfullscreen scrolling="no" allow="autoplay; encrypted-media"></iframe></div>

I used AWS bare metal instance (i3.metal) because this x86 Android Emulator is running inside this Docker container.

Recently, I found that we can run x86 Android Emulator in [Azure Pipeline](https://azure.microsoft.com/en-us/services/devops/pipelines/)

It`s unlimited to use with OSS, so some repositories of Appium project are trying use.

I tried to use this for Docker-Android, and it worked!

Sample code is following.

<div class="iframely-embed"><div class="iframely-responsive" style="height: 168px; padding-bottom: 0;"><a href="https://github.com/tadashi0713/azure-pipeline-appium" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2Ftadashi0713%2Fazure-pipeline-appium&amp;key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>
