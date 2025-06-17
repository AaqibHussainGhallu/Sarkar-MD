// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklOM3lGSTRDM0QxNUJJdko1dE50SG5YVEVYYmZ2SE5RREVSSnJiVUhGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGg2dG1EY3FYaHBWaEcwQlFJMGUyYUJQdnJhZlpMT1ZKaEllcTBHdWRGST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q0FaVzNSNHErczFwTnJwaHA1eG9qMWVLMzlTMS93N3ZFVVFKUjhTTUU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6RlNlUTcwcTJrcEpzVHZxM1pFa3lobnQ4UjJZeFdLS0U0NFNjeitBWUZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJdGFuYXFkcW9oMy9ielE0R3J5aUxDYWFnNjhFK2M5dHBsdG14bkdIMWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxuRDYydFkxS3ZoNkRZQTJyTEgwVnlvSHAxQlVPdnl1MjVLb1Rqdk13aXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJoTHJNa2R0bllmVGgrWWthb0k3RHhFSHFGVTR4SlJaRmxETk1sTEpXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVHZTRUSHVSZStEa3dXdmNQS3VTeFNTdGdwdTlmOENReGlaYWJtV0pFWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhENzhOazViaGMrN2FQUENrQ3dRRzlVWW84OGkydDVoc3QyeU1vdGlxNFdZdXVGNk9PR0VwbFFMSUNoL0dxZ25lN05DZkVSMXc5WXVDcUtYdG5mSENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiIvYUs5a096SnM1VlpOMnJsMnhROXFkT25qelkrN0d2Ukd2Q3ZRTlpBOTVrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOVFM0YTh2UVNhaW5vV2EzYzRVMDh3IiwicGhvbmVJZCI6ImIxM2FmNGMxLThjMDItNDEyNy04ZDFjLTgxZmEwY2Y1OGNhOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrLzcrUHVoMTFIN0NCdmt4REMrRW9rdm4wQlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWpuVmpndGZiNVY1RzFDd1hTYkhBYTlPTjVrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNBUktBUk1EIiwibWUiOnsiaWQiOiI0NDc0MjI0MDM5NDA6NTFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDU1MTcwMzc0NDUzNDo1MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0oyY3dxSUNFTTN5d3NJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJHdTRFTzJpek9sNEZDbDNhSFptdy8rbnU1cVNrTlo0OW0yNDdSOSs5UzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InQycGplNmdyN09oL2hzcEFROE1VT2xldGExbVB4TE5SMytjRlowMWVBNWdkU2NMM0h6aENheTR4YitmVkNVN01raUx6VnB3bDJEUS9JUm9SN3hOdUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmUnJvNVMxMFhkN0VDNEl0UU5EUjlVKzhnREJueVUwOXlOL0NTU1ZyQnEwWmtQbVlmeXF4QzBQbDJ5aDIyOXBGQm9sR3ZHcFdmMUtIQUloVWVRa2tDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ0NzQyMjQwMzk0MDo1MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVUnJ1QkR0b3N6cGVCUXBkMmgyWnNQL3A3dWFrcERXZVBadHVPMGZmdlV0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTAxMjA3ODQsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "Aaqib Hussain ©",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "447422403940",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
