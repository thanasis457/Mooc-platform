function insert_into_db(object){
  var mysql=require("mysql");
  var con=mysql.createConnection({
    host: "moocplatform.cingron5sbhn.eu-west-2.rds.amazonaws.com",
    user: "thanasis457",
    password: "simple1234",
    database: "moocplatform",
    port: 3306
  });
  con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    // con.query("CREATE TABLE courses (name VARCHAR(400) PRIMARY KEY, hits INT default 0)",function(err,result){
    //   if(err) throw(err);
    //   console.log(result);
    // });

    // sql="INSERT INTO courses (name) VALUES('"+String(object)+"') ON DUPLICATE KEY UPDATE hits=hits";
    // con.query(sql,function(err,result){
    //   if(err) throw err;
    //   console.log(result);
    // });
    // // con.query("DELETE FROM courses WHERE name='"+String(object)+"'",function(err,result){
    //   if(err) throw err;
    // });
    // con.query("SELECT * FROM courses",function(err,result){
    //   if(err) throw(err);
    //   console.log(result);
    // });
    // con.end();
  });
}
insert_into_db("Gamification");
