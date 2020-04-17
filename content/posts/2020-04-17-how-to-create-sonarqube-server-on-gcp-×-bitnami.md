---
template: post
title: How to deploy SonarQube server on GCP using Bitnami
slug: sonarqube_gcp_bitnami
draft: false
date: 2020-04-17T06:26:38.922Z
image: /media/sonarqube.jpg
description: >-
  I had chance to create SonarQube server.

  This time, I created SonarQube server on GCP using Bitnami and reduced cost of
  creating.

  I will share some tips of creating it.
category: CLOUD
tags:
  - English
  - Sonarqube
  - GCP
  - Bitnami
---
![](/media/sonarqube.jpg)

I had chance to create SonarQube server.

This time, I created SonarQube server on GCP using Bitnami and reduced cost of creating.

I will share some tips of creating it.

# SonarQube Certified by Bitnami

Bitnami provides solution of deploying various types of packaged softwares to cloud server easily.

It also provides SonarQube(Community Edition)

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://bitnami.com/stack/sonarqube" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fbitnami.com%2Fstack%2Fsonarqube&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

Bitnami can deploy not only on GCP, but also AWS and Azure

When you want to deploy on GCP,

* Go to GCP console
* Go to Marketplace
* Find SonarQube Certified by Bitnami
* Select zone, machine type, etc
* Deploy

<br />

Default setting costs $40~50 per month(Depending on zone), which includes

* Bitnami SonarQube Usage Fee: Free
* VM instance: 2 vCPUs + 4 GB memory (e2-medium): $65.91/month
* Standard Persistent Disk: 10GB: $0.44/month: $0.44/month
* Sustained use discount: − $19.77/month
* Total: $46.58/month

![](/media/screen-shot-2020-04-17-at-13.23.25.png)

After deploy is finished, you can assess to SonarQube server by admin username and temporary admin password.

In addition, you can ssh by browser window, gcloud command, etc.

![](/media/screen_shot_2020-04-17_at_13_38_55.jpg)

# Assign static IP address

An ephemeral external IP address has been assigned to the VM instance.

If you require a static external IP address, you may promote the address to static.

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fcloud.google.com%2Fcompute%2Fdocs%2Fip-addresses%2Freserve-static-external-ip-address%3Fhl%3Den_US%23promote_ephemeral_ip&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

# Firewall rules

Once deployed, two firewall rules are applied.

* tcp-80(Allow TCP 80 Port)
* tcp-443(Allow TCP 443 Port)

You can change them from

* VPC Network → Firewall Rules

# SSL certificate(HTTPS)

When using Bitnami HTTPS Configuration Tool, you can easily generate and install SSL certificate(Let’s encrypt)

```
sudo /opt/bitnami/bncert-tool
```

[Generate And Install A Let's Encrypt SSL Certificate For A Bitnami Application](https://docs.bitnami.com/aws/how-to/generate-install-lets-encrypt-ssl/)

# Google Authentication

SonarQube provides plugin for Google OAuth2 Authentication.

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/InfoSec812/sonar-auth-google" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2FInfoSec812%2Fsonar-auth-google&key=b9fe832f5332a1c3e40cbe51810e08d3"></a></div></div>

You can limit authentication by GApps domain (ex. hoge.com), which is convenient for account management in companies / teams.

# Upgrade version / change to developer edition

Compared to docker solutions, upgrading SonarQube version is little troublesome.

[Upgrade SonarQube](https://docs.bitnami.com/installer/apps/sonarqube/administration/upgrade/)

You can also utilize this steps for changing from community edition to developer edition.
