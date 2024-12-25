---
layout: page
title: Instagram Weather Bot
description: Instagram bot for automated daily weather reports
img: assets/img/insta_weather_bot.jpg
importance: 1
category: personal
related_publications: false
---

The scope of this python project was to automatically post weather data and water temperature for Lake Starnberg <a href="https://www.instagram.com/wetter.am.see/"><i class="fa-brands fa-instagram"></i>wetter.am.see</a> and Ammersee<a href="https://www.instagram.com/wetter.am.ammersee/"><i class="fa-brands fa-instagram"></i>wetter.am.ammersee</a> to instagram.

{% include figure.liquid path="assets/img/insta_weather_bot.jpg" title="Image output of insta_weather_bot" class="img-fluid rounded z-depth-1" %}

The project code is available in a [github repo](https://github.com/frieseneggerf/insta-weather-bot).

Following subtasks are accomplished:

- parse a .json configuration file for target locations and authentication tokens
- retrieve weather data for the day of posting and the next day using an API
- scrape water temperature from the site of the Waterscience Service Bavaria
- combine the collected data with a background .png image using [pillow](https://github.com/python-pillow/Pillow)
- use [instagrapi](https://github.com/subzeroid/instagrapi) to authenticate with instagram and upload the images

Using a cronjob the script runs once a day on my VPS.

During the project I applied multiple new concepts in python, especially

- using APIs
- web scraping
- image manipulation
- configuration file layout and parsing
