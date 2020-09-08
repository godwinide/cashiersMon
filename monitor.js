const shell = require("shelljs");

function reset(){
    setInterval(() => {
        shell.exec("pm2 stop 1");
        setTimeout(()=> {
            shell.exec("echo 1 > /proc/sys/vm/drop_caches");
            shell.exec("echo 2 > /proc/sys/vm/drop_caches");
            shell.exec("echo 3 > /proc/sys/vm/drop_caches");
            setTimeout(()=> {
                shell.exec("pm2 start 1");
            },5000)
        },5000)
    },1800000)
}

reset();