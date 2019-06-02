---
template: post
title: >-
  Running Selenium UITests with Chrome / Firefox / Safari / IE browsers, using
  Azure Pipelines 
slug: azure_pipelines_selenium_en
draft: true
date: 2019-06-02T08:29:48.212Z
image: /media/azure-pipelines-selenium.png
description: >-
  In the case of browser tests such as Selenium, it may be necessary to test
  browsers that can only operate on a specific OS, such as Safari / IE / Edge.

  I tried to run Selenium UITests on Azure Pipelines because it provides  Linux
  / macOS / Windows VMs
category: Automation
tags:
  - English
  - Selenium
  - ''
---
![](/media/azure-pipelines-selenium.png)

Microsoft`s Azure Pipelines was announced last year.

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://azure.microsoft.com/en-us/services/devops/pipelines/" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fazure.microsoft.com%2Fen-us%2Fservices%2Fdevops%2Fpipelines%2F&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

For open source projects, it`s free to use until 10 parallel jobs.

Recently, some open source projects have migrated to Azure Pipelines, including JUnit project.

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.infoq.com/news/2019/03/junit-azure-pipelines/" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.infoq.com%2Fnews%2F2019%2F03%2Fjunit-azure-pipelines%2F&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

We can use Linux / macOS / Windows VMs in Azure Pipelines.
 
In the case of browser tests such as Selenium, it may be necessary to test browsers that can only operate on a specific OS, such as Safari / IE / Edge.

Therefore, I tried to run Selenium UITests on Azure Pipelines.

The sample code is below.  I implemented with WebdriverIO.



I felt it is very useful for running Selenium UITests to have easy access to Windows and macOS resources.

It would be useful for open source projects and small development teams.
