---
layout: post
javascript: post
post_title:  "Syema de Pon"
date:   2017-06-01
github_url: https://github.com/ericmargules/syema_de_pon
tech_list: ["Ruby", "Gosu", "Photoshop", "MS Paint"]
hero: syema_hero.png
cover: syema_cover.png
cover_small: syema_cover_small.png
post_image: zapdos.png
excerpt: "A proof-of-concept puzzle game based on classic  games like its namesake, Panel de Pon. Players must create horizontal or vertical words to clear letter blocks before they reach the top of the screen."
position: 1
video: syema-de-pon.mp4
---

A proof-of-concept puzzle game written in Ruby using the [Gosu Development Library](https://www.libgosu.org/). Based on classic puzzle games like its namesake, [Panel de Pon](https://www.youtube.com/watch?v=kpr9H_Zzhz8), players must create horizontal or vertical words to clear letter blocks before they reach the top of the screen.

<video class="post_video" poster="{{ site.url }}/images/{{ page.hero }}" controls>
	<source src="{{ site.url }}/videos/{{ page.video }}" type="video/mp4">
	Your browser does not support the video tag.
</video>

Syema de Pon was created using [Model-View-Controller Architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller). The board (view) is represented by a simple array (model), which the player manipulates to create words in one or more rows and columns. Words must be three letters or longer, and are scored by their length and the rarity of the letters comprising them. The player clears words by hitting Enter, which evaluates the board state for the highest scoring words in each row and column. 

Rows are added to the bottom of the board state at fixed intervals, which accelerate as time progresses. Alternately, the player may add new rows themselves by hitting the E key. The game ends when a row is added while one or more letters occupy the top row.

This proof-of-concept was used to judge the viability and entertainment value of such a game for further development using C# and the [Unity game engine](https://unity3d.com/). In the future, a fully-developed version of Syema de Pon will be available on iOS and Android.