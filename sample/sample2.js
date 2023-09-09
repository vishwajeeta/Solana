const { Connection, clusterApiUrl, Keypair, PublicKey }=require("@solana/web3.js");
const connection=new Connection(clusterApiUrl("devnet"));
console.log(connection);
const newPair=new Keypair();

const publicdata=new PublicKey(newPair._keypair.publicKey).toString();
console.log(publicdata)
const private=newPair._keypair.secretKey;
console.log(private);