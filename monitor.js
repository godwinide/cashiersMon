const shell = require("shelljs");

function reset(){
    setInterval(() => {
        setTimeout(()=> {
            shell.exec("echo 1 > /proc/sys/vm/drop_caches");
            shell.exec("echo 2 > /proc/sys/vm/drop_caches");
            shell.exec("echo 3 > /proc/sys/vm/drop_caches");
        },5000)
    },220000)
}

reset();