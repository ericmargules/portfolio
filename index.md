---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: index
---
<div id="front_page">
	<div id="hero">
		<div id="hero_float">
		</div>
		<text id="hero_name">Eric Margules</text>
		<text id="hero_desc">Web & Game Development</text>
	</div>
</div>
<div id="about_container">
	<div id="intro_content">
		<br>
		<div class="fourth_column">
			<img id="intro_photo" src="{{site.url}}/images/margules.jpg">
		</div>
		<div class="three_fourths_column">
			<p>I <a class="body_link" href="#">develop applications</a> that engage users with a blend of creative content and pixel-perfect design. I specialize in: Ruby, Rails, Jekyll, Javascript, HTML/CSS and C#.<br>But don't take my word for it.</p>
			<h2><a class="body_link" href="#portfolio_content">Browse my portfolio</a></h2>
		</div>
	</div>
</div>
<div id="portfolio_content">
	{% for post in site.posts %}
		{% capture evenodd %}{% cycle 'even', 'odd' %}{% endcapture %}
		{% if evenodd == 'even' %}
			<div class="portfolio_item">
				<div class="p_item_container">
					<div class="fourth_column">
						<img class="portfolio_image" src="{{site.url}}/images/{{ post.hero }}">
					</div>
					<div class="portfolio_desc">
						<text class="portfolio_title">{{ post.post_title }}</text>
						<div class="tech_list">		
							{% for tech in post.tech_list %}
							<span class="tech">{{ tech }}</span>
							{% endfor %}
						</div>
						<p>{{ post.excerpt }}</p>
						<a class="p_button" href="{{site.url}}{{post.url}}">Learn More</a>
						<a class="p_button" href="{{ post.github_url }}">GitHub</a>
					</div>
				</div>
			</div>
		{% else %}
			<div class="portfolio_item">
				<div class="p_item_container">
					<div class="portfolio_desc">
						<text class="portfolio_title">{{ post.post_title }}</text>
						<div class="tech_list">		
							{% for tech in post.tech_list %}
							<span class="tech">{{ tech }}</span>
							{% endfor %}
						</div>
						<p>{{ post.excerpt }}</p>
						<a class="p_button" href="{{site.url}}{{post.url}}">Learn More</a>
						<a class="p_button" href="{{ post.github_url }}">GitHub</a>
					</div>
					<div class="fourth_column">
						<img class="portfolio_image" src="{{site.url}}/images/{{ post.hero }}">
					</div>
				</div>
			</div>		
		{% endif %}
	{% endfor %}
</div>