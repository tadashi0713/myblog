---
template: post
title: How to deploy SonarQube server on GCP using Bitnami
slug: sonarqube_gcp_bitnami
draft: true
date: 2020-04-17T06:26:38.922Z
image: /media/sonarqube.jpg
description: >-
  I had chance to create SonarQube server.

  This time, I created SonarQube server on GCP using Bitnami and reduced cost of
  creating.

  I will share some tips of creating it.
category: CLOUD
tags:
  - Sonarqube
  - GCP
  - Bitnami
---
![](/media/sonarqube.jpg)

<br />
I had chance to create SonarQube server.

This time, I created SonarQube server on GCP using Bitnami and reduced cost of creating.

I will share some tips of creating it.

# SonarQube Certified by Bitnami

Bitnami provides solution of deploying various types of packaged softwares to cloud server easily.

It also provides SonarQube(Community Edition)

Bitnami can deploy not only on GCP, but also AWS and Azure

When you want to deploy on GCP,

* Go to GCP console
* Go to Marketplace
* Find SonarQube Certified by Bitnami
* Select zone, machine type, etc
* Deploy

Default setting costs $40~50 per month(Depending on zone)

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

# Google Authentication

SonarQube provides plugin for Google OAuth2 Authentication.

You can limit authentication by GApps domain (ex. hoge.com), which is convenient for account management in companies / teams.

# Upgrade version / change to developer edition

Compared to docker solutions, upgrading SonarQube version is little troublesome.

You can also utilize this steps for changing from community edition to developer edition.
