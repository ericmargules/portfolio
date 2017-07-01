---
layout: post
javascript: post
post_title:  "Custom Wallet Designer"
date:   2017-06-02
github_url: https://github.com/ericmargules/decade
tech_list: ["Ruby", "Ruby on Rails", "JavaScript", "HTML5", "CSS", "AWS"]
hero: wallet_builder_hero.jpg
cover: wallet_builder_cover.jpg
cover_small: wallet_builder_cover_small.jpg
post_image: wallet_builder_mobile.jpg
excerpt: "A custom wallet builder web app for the leather goods brand, Decade, allows customers to design and purchase their own leather goods by building a composite image based on the customer's choice of materials and options."
position: 1
video: wallet-builder.mp4
---

A custom wallet builder webapp for the boutique luxury leather goods brand, [Decade](http://www.decadeleather.com). The web application enables customers to design their ideal wallet by choosing colors, materials and other options to build the product in real-time. 

![image description]({{ site.url }}/images/{{ page.post_image }})

As the customer selects options, images of the interior and exterior of wallet are built programmatically from over 700 individual images and displayed using Ruby, Javascript, and CSS. The customer can switch views by toggling the view button or clicking the image itself.

<video class="post_video" poster="{{ site.url }}/images/{{ page.hero }}" controls>
	<source src="{{ site.url }}/videos/{{ page.video }}" type="video/mp4">
	Your browser does not support the video tag.
</video>

When the customer adds the custom wallet to their cart, a composite of the images is created using the HTML5 canvas element, converted to data URL using JavaScript, and uploaded to the [Amazon Web Services CDN](https://aws.amazon.com/). The custom product is then stored in the database and added to the customer's cart for purchase.

The wallet builder application lives as a part of [Decade's digital storefront]({{ site.url }}/2017/06/01/decade-storefront.html), which features pre-made leather goods and the ecommerce mechanism to complete purchases. In the future, additional wallet types (card wallet, id wallet, etc.) and other leather goods (notebook and passport covers) will be added to the web application.