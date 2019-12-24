function hit_update(){
  const path=require('path');
  var fs = require("fs");
  var mysql=require("mysql");
  var con=mysql.createConnection({
    host: "remotemysql.com",
    user: "PuYOkkBsV3",
    password: "QGGyinkJO3",
    database: "PuYOkkBsV3",
    port: 3306
  });
  con.connect(function(err){
    if(err) throw err;
    var sql="UPDATE courses SET hits=hits+1 WHERE name='"+this.name+"'";
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
      sql="UPDATE courses SET "+String(co[0])+"="+String(co[0])+"+1 WHERE name='"+String(this.name)+"'";
      con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
      });
    }
    con.end(function(err,result){
      if(err) throw err;
    });
  });
}
hit_update("Gamification");
