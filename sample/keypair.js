const{
    Connection,
    clusterApiUrl,
    Keypair,
    PublicKey,

}=require("@solana/web3.js");
const connection =new Connection(clusterApiUrl("devnet"),"confiremed");
console.log("connectiob object is:",connection);
const newPair=new Keypair();
const publicKey=new PublicKey(newPair._keypair.publicKey).toString();
console.log("public key is:",publicKey)
const privatekey=newPair._keypair.secretKey;
console.log("private key=",privatekey)

//generating new keypair
const newpair1=new Keypair.generate();
