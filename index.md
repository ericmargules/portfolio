---
javascript: main
layout: index
---
<div id="front_page">
	<div id="hero">
		<div id="hero_float">
		</div>
		<text id="hero_name">Eric Margules</text>
		<text id="hero_desc">Web & Game Developer</text>
	</div>
</div>
<div id="about_container">
	<div id="intro_content">
		<br>
		<div class="avatar_column">
			<img id="intro_photo" src="{{site.url}}/images/margules.jpg">
		</div>
		<div class="three_fourths_column">
			<p>I <a class="body_link" href="https://github.com/ericmargules">develop applications</a> that engage users with a blend of creative content and pixel-perfect design. I specialize in: Ruby, Rails, Jekyll, Javascript, HTML/CSS and C#.<br>But don't take my word for it.</p>
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
						<a href="{{site.url}}{{post.url}}"><img class="portfolio_image" src="{{site.url}}/images/{{ post.hero }}"></a>
					</div>
					<div class="portfolio_desc left">
						<a href="{{site.url}}{{post.url}}"><text class="portfolio_title">{{ post.post_title }}</text></a>
						<div class="tech_list">		
							{% for tech in post.tech_list %}
								<div class="tech_div">
									<span class="tech">{{ tech }}</span>
								</div>
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
					<div class="portfolio_desc right">
						<a href="{{site.url}}{{post.url}}"><text class="portfolio_title">{{ post.post_title }}</text></a>
						<div class="tech_list">		
							{% for tech in post.tech_list %}
								<div class="tech_div">
									<span class="tech">{{ tech }}</span>
								</div>
							{% endfor %}
						</div>
						<p>{{ post.excerpt }}</p>
						<a class="p_button" href="{{site.url}}{{post.url}}">Learn More</a>
						<a class="p_button" href="{{ post.github_url }}">GitHub</a>
					</div>
					<div class="fourth_column">
						<a href="{{site.url}}{{post.url}}"><img class="portfolio_image" src="{{site.url}}/images/{{ post.hero }}"></a>
					</div>
				</div>
			</div>		
		{% endif %}
	{% endfor %}
</div>