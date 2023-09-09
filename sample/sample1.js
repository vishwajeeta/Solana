const { Connection, clusterApiUrl }=require("@solana/web3.js");
const connection=new Connection(clusterApiUrl("devnet"))
console.log(connection)