const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '2vhllDYZ#5H9lvXuKuPZGhK9p7p8YaElh8fJQjUfa1FE0Hh-oPOs', // Enter Your Session ID
    MONGODB: process.env.MONGODB || '',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '',    // Enter Your Owner Number
};
