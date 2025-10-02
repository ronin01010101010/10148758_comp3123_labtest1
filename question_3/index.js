 const fs = require('fs');
const path = require('path');

const logsDir = 'Logs';

function removeLogFiles() {
    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        
        files.forEach(file => {
            console.log(`delete files...${file}`);
            fs.unlinkSync(path.join(logsDir, file));
        });
        
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
}

function createLogFiles() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created');
    }
    
    process.chdir(logsDir);
    
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(fileName);
    }
    
    process.chdir('..');
}

console.log('=== Removing existing log files ===');
removeLogFiles();

console.log('\n=== Creating new log files ===');
createLogFiles();