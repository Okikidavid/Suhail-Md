const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="okikidavid171@gmail.com"
global.location="Asia/Colombia."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2349161307176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349161307176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_15_05_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2LFxuICAgICAgICA0OCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDk4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgNTksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDgxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDk4LFxuICAgICAgICA1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzeWNTbDUxb3hxY2tvdmhMVDV5LzAzdmFSbFZhV2tnL2dUVnBWL0lIemZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjEzMDcxNzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNjFDN0ExRkNBRDFCN0E5NzM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDg4MjU0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4R0ZBeDV6UVQxLXhBOHZUbm1fWUxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk5M2RjNDMzLTQ5YjgtNGZjNS1hNGQzLTliMzJlZDVkMzBkM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDI0OCxcbiAgICAgIDIwMSxcbiAgICAgIDE0NCxcbiAgICAgIDEyOCxcbiAgICAgIDUwLFxuICAgICAgMTAwLFxuICAgICAgMTQ1LFxuICAgICAgMTUsXG4gICAgICAxODYsXG4gICAgICAyMjIsXG4gICAgICAxODEsXG4gICAgICAxMjQsXG4gICAgICAxMTYsXG4gICAgICAyNDcsXG4gICAgICAxMDIsXG4gICAgICAxMyxcbiAgICAgIDExMCxcbiAgICAgIDE4NCxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICA1NyxcbiAgICAgIDUsXG4gICAgICAxNzAsXG4gICAgICAxODMsXG4gICAgICAyOCxcbiAgICAgIDY1LFxuICAgICAgMTEsXG4gICAgICAyNDksXG4gICAgICAxNjAsXG4gICAgICAzOSxcbiAgICAgIDk3LFxuICAgICAgMjEsXG4gICAgICA4LFxuICAgICAgODEsXG4gICAgICA3MixcbiAgICAgIDIwOSxcbiAgICAgIDg0LFxuICAgICAgOTgsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xicm50a0lFT2lQM0xFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU1FoNy9VdEJ6cVhneStrUy82MnRoTGhGVGFFQWRrOWE3VytYb1hRckl4Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFRExhV3QwQlc1WG55TXUwR1puczV6SzYvVXBIcUNCMWQ1aEFTMGFEZjBrUko5VzZXUkwxUnZoLzQ0ZTZtM2hnMkdPRDdGdXI0OExybUFocU5NKzBpUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3RFFyRWc1UW5NM2hSMjQ0T2U2R2JWR3FpdHpNcndqbmdYbyt2cEhrY1JHMlZMbVB4RUpkdHRzS25qVUJhVzBJVVV1OG4zZG1XZ2tzRHlCVTVQeTRCdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjEzMDcxNzY6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NTk1MjM2MTQ3MjA3NjoxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMZW5hIEZmeFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2MTMwNzE3NjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0ODgyNTM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUlqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSWouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6Tk5DQnV3RWRhcGRXZm8vOTlMZUR5T20rcENTYXVGUW9uVEVoSnRQQ0RBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMzQ2MzU0NDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDg4MjU0MTU1N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "lena",
  packname: process.env.PACK_NAME || "lena",
  botname : process.env.BOT_NAME  || "selena ff",
  ownername:process.env.OWNER_NAME|| "selena ff",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
