---
title: "Contact"
permalink: "/contact.html"
---

<h5>Adress:</h5>
<div>Bla Bla sokak</div>
<h5>Phone:</h5>
<div>12312312321</div>
<h5>e-mail:</h5>
<div>{{site.email}}</div>
<hr>

<div class="mapouter">
    <div class="gmap_canvas">
        <iframe width="800px" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=Damla%20Yay%C4%B1nevi&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <br><style>.mapouter{position:relative;text-align:right;height:40vh;width:80vh;}</style>
        <style>.gmap_canvas {overflow:hidden;background:none!important;height:40vh;width:80vh;}</style>
    </div>
</div>

<hr>
<form action="https://formspree.io/{{site.email}}" method="POST">    
<p class="mb-4">Please send your message to {{site.name}}. We will reply as soon as possible!</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="Name*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Message*" required></textarea>    
<input class="btn btn-success" type="submit" value="Send">
</form>
