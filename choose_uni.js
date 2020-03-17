function unis(){
  var fs=require("fs");
  const path=require('path');
  pth=path.join(__dirname,"universities.json");
  var un=fs.readFileSync(pth);
  var list=JSON.parse(un);
  var cnt=0;
  for(i in list){
    var label=document.createElement('LABEL');
    label.className="switch";
    var checkbox = document.createElement('input');
    checkbox.id ="chbox";
    checkbox.type= 'checkbox';
    var t=checkbox.name = i;
    checkbox.onclick = function (){
      // alert(this.name);
      var un=fs.readFileSync(pth);
      var ll=JSON.parse(un);
      if(ll[this.name]==false){
        this.checked=true;
        ll[this.name]=true;
      }
      else{
        this.checked=false;
        ll[this.name]=false;
      }
      // alert(ll[this.name]);
      ch(ll);
    };
    if(list[i]==false){
      checkbox.checked=false;
    }
    else{
      checkbox.checked=true;
    }
    cnt++;
    // checkbox.style="float: right;  margin-left:100px;";
    var sw=document.createElement("SPAN");
    sw.className="slider round";
    label.appendChild(checkbox);
    label.appendChild(sw);
    document.getElementById("Universities").appendChild(label);
    let show=document.createTextNode(`${String(i)}`);
    let li=document.createElement("LI");
    li.appendChild(show);
    document.getElementById("Universities").appendChild(li);
  }
  function ch(list){
    var fs=require("fs");
    let data = JSON.stringify(list,null,2);
    fs.writeFile('universities.json', data,(err)=>{
      if(err) throw err;
    });
  }
}
function load_hits(){
  var fs=require("fs");
  const path=require('path');
  var mysql=require('mysql');
  var con=mysql.createConnection({
    host: "sql7.freesqldatabase.com",
    user: "sql7328427",
    password: "vbEvKGVABL",
    database: "sql7328427",
    port: 3306
  });
  con.connect(function(err){
    if(err) throw err;
  });
}
