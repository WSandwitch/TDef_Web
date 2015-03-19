// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require bootstrap
//= require_tree .



function toggle_qrdiv(){
	obj=document.getElementById("qrdiv")
	attr=obj.getAttribute("hidden")
	if (attr==null){
		document.cookie="qrcode=t"
		obj.setAttribute("hidden","")
		obj.parentNode.getElementsByTagName("arrow")[0].setAttribute("class","icon-arrow-up")
	}else{
		document.cookie="qrcode=f"
		obj.removeAttribute("hidden")
		obj.parentNode.getElementsByTagName("arrow")[0].setAttribute("class","icon-arrow-down")
	}
}


