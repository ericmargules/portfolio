---
layout: index
javascript: contact
---
<div id="contact_bumper"></div>

<div id="contact_content">
	<div id="contact_form">

		<form id="contactform" method="POST">
	    <div id="contact_fields">
		    <div class="field_box">
			    <input type="text" placeholder="NAME" name="name">
			    <label class="contact_label" name="name">Name</label>
			</div>
		  	<div class="field_box">
			    <input type="email" placeholder="EMAIL" name="_replyto">
			  	<label class="contact_label" name="_replyto">Email</label>
		  	</div>
		  	<div class="field_box">
			    <input type="text" name="_gotcha" style="display:none" />
				<input type="hidden" name="_next" value="{{ site.baseurl }}/" />
			  	<textarea name="content" placeholder="WHAT'S ON YOUR MIND?" cols="40" rows="5"></textarea>
			  	<label class="contact_label" name="content">Message</label>			    
			</div>	
		  </div>
	    <text id="sendMessage"><a class="contact_button" href="#">SEND</a></text>
		</form>
</div>
</div>