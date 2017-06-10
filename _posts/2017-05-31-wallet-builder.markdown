---
layout: post
javascript: post
post_title:  "Wallet Builder App"
date:   2017-06-02
github_url: https://github.com/ericmargules/decade
tech_list: ["Ruby", "Ruby on Rails", "JavaScript", "HTML5", "CSS", "AWS"]
hero: portfolio_hero4.jpg
cover: portfolio_hero3.jpg
post_image2: zapdos.png
excerpt: "A custom wallet builder web app for the boutique luxury leather goods brand, Decade. The wallet builder enables customers to design and purchase their own leather goods by building a composite image of the custom wallet based on the user's selection of materials and options."
position: 1
video: decade-webstore.mp4
---

A custom wallet builder webapp for the boutique luxury leather goods brand, [Decade](http://www.decadeleather.com). The web application enables customers to design their own leather goods by choosing from a list of materials and options. An image of the wallet is built programmatically from over 700 individual images and displayed using Ruby, Javascript, and CSS. 

![image description]({{ site.url }}/images/{{ page.post_image2 }})

When the user adds the custom wallet to their cart, a composite of the images is created using the HTML5 canvas element, converted to data URL using JavaScript, and uploaded to the [Amazon Web Services](https://aws.amazon.com/) CDN. The custom product is then stored in the database and added to the user's cart for purchase.