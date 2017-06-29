---
layout: post
javascript: post
post_title:  "Decade Webstore"
date:   2017-06-01
github_url: https://github.com/ericmargules/decade
tech_list: ["Ruby on Rails", "Javascript", "HTML5", "Heroku", "AWS"]
hero: decade_storefront_hero.jpg
cover: decade_storefront_cover.jpg
cover_small: decade_storefront_cover_small.jpg
post_image: decade_storefront_mobile.jpg
excerpt: "The digital storefront for the boutique luxury leather goods brand, Decade. The webstore features a complete database, cart and checkout system, as well as a custom webapp that enables users to design and purchase their own leather goods."
position: 1
video: decade-webstore.mp4
---

The [digital storefront](http://www.decadeleather.com) of the boutique luxury leather goods brand, Decade. The goal of the storefront was to create a professional, mobile-friendly venue for customers to learn about and purchase Decade leather goods, easily and securely. To keep costs down, the entire project was designed and coded in-house. 

![image description]({{ site.url }}/images/{{ page.post_image }})

The Decade webstore features a complete database, cart and checkout system, and was coded using [Ruby on Rails](http://rubyonrails.org/), [Devise](https://rubygems.org/gems/devise/versions/4.2.0), and the [PayPal REST API](https://developer.paypal.com/docs/api/). The Decade storefront was deployed with [Heroku](https://www.heroku.com/), and uses [Amazon Web Services](https://aws.amazon.com/) for content delivery. 

<video class="post_video" poster="{{ site.url }}/images/{{ page.hero }}" controls>
	<source src="{{ site.url }}/videos/{{ page.video }}" type="video/mp4">
	Your browser does not support the video tag.
</video>

The store also features a [custom webapp]({{ site.url }}/2017/06/02/wallet-builder.html) that enables users to build and purchase their own leather goods using Ruby, Javascript, and HTML5.