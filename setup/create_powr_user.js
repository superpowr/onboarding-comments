// Fri Dec 30 14:49:35 PST 2016
//   ____                _         _   _               
//  / ___|_ __ ___  __ _| |_ ___  | | | |___  ___ _ __ 
// | |   | '__/ _ \/ _` | __/ _ \ | | | / __|/ _ \ '__|
// | |___| | |  __/ (_| | ||  __/ | |_| \__ \  __/ |   
//  \____|_|  \___|\__,_|\__\___|  \___/|___/\___|_|   
const os                 = require('os');
const exec               = require('child_process').exec;
const newUserName        = 'powruser';
const createLinuxUserCMD = `sudo useradd ${newUserName}`;
const createSillyUserCMD = `sudo dscl . -create /Users/${newUserName}`;
const psqlCreateUserCMD  = `psql postgres -c "create user ${newUserName}"`;

const actualOs = 'linux';

const cmd = (os.platform() === actualOs ? createLinuxUserCMD : createSillyUserCMD);

exec(cmd, function(error, stdout, stderr) {
    if(error || stderr) throw error || stderr;
    console.log(`Yay! The user ${newUserName} was created.  You should be able to make a database with that user name`);

    exec(psqlCreateUserCMD,function(error,stdout,stderr){
        if(error || stderr) throw error || stderr;
        console.log(`Yay! The postgres user ${newUserName} was created.  You should be able to make a database with that user name`);
    })
});

