function change(platform){
  const fs = require('fs');
  platform=platform.toString();
  fs.writeFile('selected.txt',platform,(err) => {
    if (err) alert(err);
  })
  window.location.href = "loading_page.html";
}
