---
layout: page
title: Instagram Weather Bot
description: Instagram bot for automated daily weather reports written in python
img: assets/img/insta_weather_bot.jpg
importance: 2
category: work
related_publications: false
---

The scope of this python project was to automatically post weather data and water temperature for Lake Starnberg (<a href="https://www.instagram.com/wetter.am.see/"><nobr><i class="fa-brands fa-instagram"></i> wetter.am.see</nobr></a>) and Ammersee (<a href="https://www.instagram.com/wetter.am.ammersee/"><nobr><i class="fa-brands fa-instagram"></i> wetter.am.ammersee</nobr></a>) to instagram. The project code is available in a [github repo](https://github.com/frieseneggerf/insta-weather-bot).

Following subtasks are accomplished:

- parse a .json configuration file for target locations and authentication tokens
- retrieve weather data for the day of posting and the next day using an API
- scrape water temperature from the site of the Waterscience Service Bavaria
- combine the collected data with a background .png image using [pillow](https://github.com/python-pillow/Pillow)
- use [instagrapi](https://github.com/subzeroid/instagrapi) to authenticate with instagram and upload the images

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/insta_weather_bot.jpg" title="First Panel" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/insta_weather_bot_d2.jpg" title="Second Panel" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    In its current configuration the bot publishes weather and water data for the day of posting (left) and weather forecast for the next day (right). It could easily be adjusted to provide 3 or more days.
</div>

Using a cronjob the script runs once a day on my VPS.

During the project I applied multiple new concepts in python, especially

- using APIs
- web scraping
- image manipulation
- configuration file layout and parsing
- keeping the code flexible so it can easily be adapted for new locations
