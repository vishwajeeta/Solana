const{
    Connection,
    clusterApiUrl,
    Keypair,
    PublicKey,

}=require("@solana/web3.js");
const connection =new Connection(clusterApiUrl("devnet"),"confiremed");
console.log("connectiob object is:",connection);
