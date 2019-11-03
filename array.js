var mysql=require("mysql");
var fs = require("fs");
const path=require('path');
var platform="Coursera";
let plat=platform;
var con=mysql.createConnection({
  host: "remotemysql.com",
  user: "8ziCOBYDx9",
  password: "NLZ7t0owaK",
  database: "8ziCOBYDx9",
  port: 3306
});
con.connect(function(err){
  if(err) throw err;
  var sql="SELECT * FROM courses ORDER BY hits DESC";
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result[0]['hits']);
    // for(i=0; i<x.length; i++){
    //   x[i]['number']=result[i]['hits'];
    //   console.log(result[i]['hits']);
    // }
  });
  con.end(function(err){
  });
});
// console.log(x['number']);
// function compare( a, b ) {
//   if ( a < b.last_nom ){
//     return -1;
//   }
//   if ( a.last_nom > b.last_nom ){
//     return 1;
//   }
//   return 0;
// }
//
// x.sort( compare );
// var t=get_hits("Gamification");
// console.log(t);
// t=t+1;
// console.log(t);
