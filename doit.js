function load() {
	var fs = require("fs");
	var num = fs.readFileSync("/Users/thanasis/Desktop/mooc-platform/courses/numofcourses.txt");
	num=parseInt(num,10);
	for(i=0; i<num; i++){
		path="/Users/thanasis/Desktop/mooc-platform/courses/course"+i.toString()+".json";
		var content = fs.readFileSync(path);
		var object = JSON.parse(content);
		let title = object.title;
		let partners=object.partners;
		let platform=object.platform;
		let snippet=object.snippet;
		let description=object.description;
		let tags=object.tags;
		let li = document.createElement("LI");
		let _title = document.createTextNode(`${title}`);
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
		h2.appendChild(_partners);
		h3.appendChild(_platform);
		h4.appendChild(_snippet);
		h5.appendChild(_tags);
		//To be added: Show more option
		li.appendChild(h1);
		li.appendChild(h2);
		li.appendChild(h3);
		li.appendChild(h4);
		li.appendChild(h5);
		document.getElementById("demo").appendChild(li);
	}
}
function updateCourses(){
	const { exec } = require('child_process');
	exec('python3 scrape.py', (error, stdout, stderr) => {
  	if (error) {
    	alert(`exec error: ${error}`);
			alert(`Something wrong happened: ${stdout}`);
			alert(`stderr: ${stderr}`);
    	return;
  	}
	});
}
