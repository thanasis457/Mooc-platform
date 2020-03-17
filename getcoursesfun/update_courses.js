function updateCourses(platform){
	const path=require('path');
	var fs = require("fs");
	var mysql=require("mysql");
	const { exec } = require('child_process');
	var run='python3 scrape_'+String(platform)+'.py';
	exec(run, (error, stdout, stderr) => {
  	if (error) {
    	alert(`exec error: ${error}`);
			alert(`Something wrong happened: ${stdout}`);
			alert(`stderr: ${stderr}`);
    	return;
  	}
		else{
			alert(platform+" courses downloaded");
			alert("Updating database");

			var con=mysql.createConnection({
				host: "sql7.freesqldatabase.com",
		    user: "sql7328427",
		    password: "vbEvKGVABL",
		    database: "sql7328427",
		    port: 3306
		  });

			var v=false;
			con.connect(function(err){
		    if(err) throw err;
		    console.log("Connected!");


				platform=String(platform);
				var num = fs.readFileSync("./courses/"+platform+"/numofcourses.txt");
				num=parseInt(num,10);
				let plat=platform;
				var cnt=0;
				for(i=0; i<num; i++){
					pth="./courses/"+plat+"/course"+i.toString()+".json";
					var content = fs.readFileSync(pth);
					var object = JSON.parse(content);
					var ti=String(object.title);
					ti=ti.replace(/'/g,'i');
					var snip=object.snippet;
					snip=snip.replace(/'/g,'');
					snip=snip.replace(/&/g,'');
					snip=snip.replace(/;/g,'');
					snip=snip.replace(/"/g,'');
					sql="INSERT INTO courses (name,partners,platform,snippet,tags,url) VALUES('"+ti+"','"+object.partners+"','"+object.platform+"','"+snip+"','"+object.tags+"','"+object.url+"') ON DUPLICATE KEY UPDATE hits=hits";
					con.query(sql,function(err,result){
			      if(err) throw err;
			      console.log(result);
						var elem=document.getElementById('active').innerHTML=(cnt+1)+"/"+num;
						cnt++;
			    });
					// foreign="ALTER TABLE courses ADD "+
					// con.query('DELETE FROM courses',function(err,result){
			    //   if(err) throw(err);
			    //   console.log(result);
			    // });

				}
				v=true;
				con.end(function(err,result){
					if(err) throw err;
					if(!alert("Updated")){
						window.location.href=path.join(__dirname,"..","load_courses.html");
					}
				});
			});
		}
	});
}
