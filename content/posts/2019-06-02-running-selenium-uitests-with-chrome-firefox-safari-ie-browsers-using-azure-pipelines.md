---
template: post
title: >-
  Running Selenium UITests with Chrome / Firefox / Safari / IE browsers, using
  Azure Pipelines 
slug: azure_pipelines_selenium_en
draft: false
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
  - Azure
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


<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/tadashi0713/practice-webdriverio-typescript" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2Ftadashi0713%2Fpractice-webdriverio-typescript&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

I could run Selenium UITests on Linux (Chrome, Firefox), MacOS (Safari) and Windows (IE).
 
You can actually see build results from below link.

https://dev.azure.com/tadashinemoto0713/practice-webdriverio-typescript/_build

![](/media/スクリーンショット-2019-05-26-17.50.46.png)

![](/media/スクリーンショット-2019-05-27-18.02.46.png)

You can check what is contained in each VM images from the repository below.

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/microsoft/azure-pipelines-image-generation" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2Fmicrosoft%2Fazure-pipelines-image-generation&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

There are two points to remember in using Selenium.
 
First, because Linux VM does not have a virtual display, you`ll need to use Chrome and Firefox in headless mode.

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

Second, you need to install Selenium standalone server and browser drivers in addition.
 
※ IE Driver / Chrome Driver / Gecko Driver are installed in Windows VMs

For WebdriverIO, using `@wdio/selenium-standalone-service` is convenient because it installs them automatically.

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://webdriver.io/index.html" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwebdriver.io%2Fdocs%2Fselenium-standalone-service.html&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

I also wanted to try to test with Edge browser this time, but I was not able to do it well. 
 
I`ll try again when this PR is merged.

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/microsoft/azure-pipelines-image-generation/pull/859" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2Fmicrosoft%2Fazure-pipelines-image-generation%2Fpull%2F859&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

I felt it is very useful for running Selenium UITests to have easy access to Windows and macOS resources.

It would be useful for open source projects and small development teams.
