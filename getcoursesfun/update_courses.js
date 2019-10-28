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
		    host: "remotemysql.com",
		    user: "8ziCOBYDx9",
		    password: "NLZ7t0owaK",
		    database: "8ziCOBYDx9",
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
					sql="INSERT INTO courses (name) VALUES('"+ti+"') ON DUPLICATE KEY UPDATE hits=0";
					con.query(sql,function(err,result){
			      if(err) throw err;
			      console.log(result);
						var elem=document.getElementById('active').innerHTML=(cnt+1)+"/"+num;
						cnt++;
			    });
					// con.query('DELETE FROM courses',function(err,result){
			    //   if(err) throw(err);
			    //   console.log(result);
			    // });

				}
				v=true;
				con.end(function(err,result){
					if(err) throw err;
					if(!alert("Updated")){
						window.location.href="../load_courses.html";
					}
				});
			});
		}
	});
}
