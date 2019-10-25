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
		    host: "localhost",
		    user: "root",
		    password: "simple1234",
		    database: "moocs"
		  });

			var v=false;
			con.connect(function(err){
		    if(err) throw err;
		    console.log("Connected!");


				platform=String(platform);
				var num = fs.readFileSync("./courses/"+platform+"/numofcourses.txt");
				num=parseInt(num,10);
				let plat=platform;
				for(i=0; i<num; i++){
					pth="./courses/"+plat+"/course"+i.toString()+".json";
					var content = fs.readFileSync(pth);
					var object = JSON.parse(content);
					String.prototype.setCharAt = function(index,chr) {
						if(index > this.length-1) return str;
						return this.substr(0,index) + chr + this.substr(index+1);
					}
					var ti=String(object.title);
					ti=ti.replace(/'/g,'i');
					sql="INSERT INTO courses (name) VALUES('"+ti+"') ON DUPLICATE KEY UPDATE hits=0";
					con.query(sql,function(err,result){
			      if(err) throw err;
			      console.log(result);
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
