function load(platform,cc){
	var fs = require("fs");
	const path=require('path');
	var mysql=require('mysql');
	platform=String(platform);
	var num = fs.readFileSync(path.join(__dirname,"courses",platform,"numofcourses.txt"));
	num=parseInt(num,10);
	// platform=platform.toString();
	var plat=platform;
	if(navigator.onLine){
		var con=mysql.createConnection({
			host: "remotemysql.com",
			user: "8ziCOBYDx9",
			password: "NLZ7t0owaK",
			database: "8ziCOBYDx9",
			port: 3306
		});
		var data=[];
		con.connect(function(err){
			var x=[num];
			var sql='';
			pth=path.join(__dirname,"universities.json");
		  var un=fs.readFileSync(pth);
		  var list=JSON.parse(un);
			var re='hits';
			for(i in list){
				if(list[i]){
					var out=i.split(" ");
					re+="+"+out[0];
				}
			}
			// alert(re);
			if(platform=='Edx') sql="SELECT * FROM courses WHERE platform='edX' ORDER BY ("+re+") DESC";
			if(platform=='Coursera') sql="SELECT * FROM courses WHERE platform='Coursera' ORDER BY ("+re+") DESC";
			con.query(sql,function(err,result){
				if(err) throw err;

				for(i=0; i<result.length; i++){
					var object = result[i];
					let title = object.name;
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
					let a=document.createElement("A");
					h1.appendChild(_title);
					h3.appendChild(_partners);
					h4.appendChild(_platform);
					h2.appendChild(_snippet);
					h5.appendChild(_tags);
					// a.href=object.url;
					a.name=String(title);
					a.id=String(object.url);


					a.onclick=function(){
						const path=require('path');
						var fs = require("fs");
						var mysql=require("mysql");
						if(!navigator.onLine){
							alert("Currently offline");
						}
						else{
							var con=mysql.createConnection({
								host: "remotemysql.com",
								user: "8ziCOBYDx9",
								password: "NLZ7t0owaK",
								database: "8ziCOBYDx9",
								port: 3306
							});
							var name=this.name;
							var url=this.id;
							con.connect(function(err){
								if(err) throw err;
								var sql="UPDATE courses SET hits=hits+1 WHERE name='"+name+"'";
								con.query(sql,function(err,result){
									if(err) throw err;
									console.log(result);
								});
								pth=path.join(__dirname,"universities.json");
								var un=fs.readFileSync(pth);
								var list=JSON.parse(un);
								for(i in list){
									if(list[i]==false) continue;
									var co=i.split(" ");
									sql="UPDATE courses SET "+String(co[0])+"="+String(co[0])+"+1 WHERE name='"+String(name)+"'";
									con.query(sql,function(err,result){
										if(err) throw err;
										console.log(result);
									});
								}
								con.end(function(err,result){
									if(err) throw err;
									window.location.href=url;
								});
							});
						}
					};


					//To be added: Show more option
					li.appendChild(h1);
					li.appendChild(h3);
					li.appendChild(h4);
					li.appendChild(h2);
					li.appendChild(h5);
					a.appendChild(li);
					document.getElementById("demo").appendChild(a);
				}
			});
			console.log(x.length);
			con.end();
		});

	}
	else{
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
			let a=document.createElement("A");
			h1.appendChild(_title);
			h3.appendChild(_partners);
			h4.appendChild(_platform);
			h2.appendChild(_snippet);
			h5.appendChild(_tags);
			// a.href=object.url;
			a.name=String(title);
			a.id=String(object.url);


			a.onclick=function(){
				const path=require('path');
				var fs = require("fs");
				var mysql=require("mysql");
				if(!navigator.onLine){
					alert("Currently offline");
				}
				else{
					var con=mysql.createConnection({
						host: "remotemysql.com",
						user: "8ziCOBYDx9",
						password: "NLZ7t0owaK",
						database: "8ziCOBYDx9",
						port: 3306
					});
					var name=this.name;
					var url=this.id;
					con.connect(function(err){
						if(err) throw err;
						var sql="UPDATE courses SET hits=hits+1 WHERE name='"+name+"'";
						con.query(sql,function(err,result){
							if(err) throw err;
							console.log(result);
						});
						pth=path.join(__dirname,"universities.json");
						var un=fs.readFileSync(pth);
						var list=JSON.parse(un);
						for(i in list){
							if(list[i]==false) continue;
							var co=i.split(" ");
							sql="UPDATE courses SET "+String(co[0])+"="+String(co[0])+"+1 WHERE name='"+String(name)+"'";
							con.query(sql,function(err,result){
								if(err) throw err;
								console.log(result);
							});
						}
						con.end(function(err,result){
							if(err) throw err;
							window.location.href=url;
						});
					});
				}
			};


			//To be added: Show more option
			li.appendChild(h1);
			li.appendChild(h3);
			li.appendChild(h4);
			li.appendChild(h2);
			li.appendChild(h5);
			a.appendChild(li);
			document.getElementById("demo").appendChild(a);
		}
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
