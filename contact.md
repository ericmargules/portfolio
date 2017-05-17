---
layout: index
javascript: contact
---
<h1>Contact</h1>
<div id="contact_form">

	<form id="contactform" method="POST">
    <div id="contact_fields">
	    <p>
		    <label name="name">Name</label><br>
		    <input type="text" name="name">
		  </p>
	  	<p>
		  	<label name="_replyto">Email</label><br>
		    <input type="email" name="_replyto">
	  	</p>
	  	<p>
		  	<label name="content">Message</label><br>
		    <textarea name="content" cols="40" rows="5"></textarea><br>
		    <input type="text" name="_gotcha" style="display:none" />
				<input type="hidden" name="_next" value="{{ site.baseurl }}/" />
			</p>	
	  </div>
    <button class="button" id="sendMessage"><a href="#">Send</a></button>
	</form>

</div>