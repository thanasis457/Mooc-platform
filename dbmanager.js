function insert_into_db(object){
  var mysql=require("mysql");
  var fs=require("fs");
  const path=require('path');
  var con=mysql.createConnection({
    host: "remotemysql.com",
    user: "PuYOkkBsV3",
    password: "QGGyinkJO3",
    database: "PuYOkkBsV3",
    port: 3306
  });
  con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
  //   con.query("CREATE TABLE courses (name VARCHAR(400) PRIMARY KEY, hits INT default 0, partners VARCHAR(2000), platform VARCHAR(400), snippet VARCHAR(10000), tags VARCHAR(4000))",function(err,result){
  //     if(err) throw(err);
  //     console.log(result);
  //   });

    // sql="INSERT INTO courses (name) VALUES('"+String(object)+"') ON DUPLICATE KEY UPDATE hits=hits";
    // pth=path.join(__dirname,"universities.json");
    // var un=fs.readFileSync(pth);
    // var list=JSON.parse(un);
    // for(i in list){
    //   var out=i.split(" ");
    //   var sql='ALTER TABLE courses ADD '+String(out[0])+' INT default 0';
    //   con.query(sql,function(err,result){
    //   if(err) throw err;
    //     console.log(result);
    //   });
    //   // console.log(i);
    // }
    // con.query("SELECT * FROM courses ORDER BY hits DESC LIMIT 5",function(err,result){
    //   if(err) throw err;
    //   console.log(result);
    //   con.end();
    // });
    // con.query("SELECT * FROM courses WHERE name='The Value of Business Models'",function(err,result){
    //   if(err) throw(err);
    //   console.log(result);
    //   con.end();
    // });
    var sql='ALTER TABLE courses ADD (Caltech INT DEFAULT 0,MIT INT DEFAULT 0, Stanford INT DEFAULT 0, Princeton INT DEFAULT 0, Columbia INT DEFAULT 0, Harvard INT DEFAULT 0, Georgia INT DEFAULT 0, UC INT DEFAULT 0, Yale INT DEFAULT 0, UCLA INT DEFAULT 0, Northwestern INT DEFAULT 0, Boston INT DEFAULT 0, Michigan INT DEFAULT 0, UChicago INT DEFAULT 0, Brown INT DEFAULT 0, Toronto INT DEFAULT 0)';
    con.query(sql,function(err,result){
      if(err) throw err;
      console.log(result);
      con.end();
    });
  });
}
insert_into_db("Anything");
