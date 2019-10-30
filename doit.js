function load(platform,cc){
	var fs = require("fs");
	const path=require('path');
	platform=String(platform);
	var num = fs.readFileSync(path.join(__dirname,"courses",platform,"numofcourses.txt"));
	num=parseInt(num,10);
	// platform=platform.toString();
	let plat=platform;
	for(i=0; i<num; i++){
		pth=path.join(__dirname,"courses",plat,"course"+i.toString()+".json");
		var content = fs.readFileSync(pth);
		var object = JSON.parse(content);
		let title = object.title;
		let partners=object.partners;
		let platform=object.platform;
		let snippet=object.snippet;
		let description=object.description;
		let tags=object.tags;
		let li = document.createElement("LI");

		if(String(cc)!="" && !String(title).toLowerCase().includes(String(cc))) continue;
		let _title = document.createTextNode(`${String(title)}`);
		let _partners = document.createTextNode(`partners: ${partners}`);
		let _platform = document.createTextNode(`Platform: ${platform}`);
		let _snippet = document.createTextNode(`${snippet}`);
		let _tags = document.createTextNode(`tags: ${tags}`);
		let h1=document.createElement("h1");
		let h2=document.createElement("h2");
		let h3=document.createElement("h3");
		let h4=document.createElement("h4");
		let h5=document.createElement("h5");
		h1.appendChild(_title);
		h3.appendChild(_partners);
		h4.appendChild(_platform);
		h2.appendChild(_snippet);
		h5.appendChild(_tags);
		//To be added: Show more option
		li.appendChild(h1);
		li.appendChild(h3);
		li.appendChild(h4);
		li.appendChild(h2);
		li.appendChild(h5);
		document.getElementById("demo").appendChild(li);
	}
}
function searchfun(){
	var s=document.getElementById("search").value;
	var fs = require("fs");
	var txt = fs.readFileSync('selected.txt');
	let resultList = document.getElementById("demo");
  resultList.innerHTML = "";
	load(txt,s.toLowerCase());
	window.scrollTo(0,0);
}
