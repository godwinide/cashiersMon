const shell = require("shelljs");

function reset(){
    setInterval(() => {
        shell.exec("pm2 stop 1");
        setTimeout(()=> {
            shell.exec("pm2 start 1");
        },5000)
    },3600000)
}

reset();