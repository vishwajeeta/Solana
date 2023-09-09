const { Connection, clusterApiUrl, Keypair, PublicKey }=require("@solana/web3.js");
const connection=new Connection(clusterApiUrl("devnet"));
//console.log(connection);
const newPair=new Keypair();
const publicdata=new PublicKey(newPair._keypair.publicKey).toString();
console.log(publicdata)
const private=newPair._keypair.secretKey;
console.log(private);

//generating new keypair

console.log("key pair options:-")
const newpair1=new Keypair.generate();
const publicKey1=new PublicKey(newpair1._keypair.publicKey).toString();
console.log("sample public key1:"+publicKey1);
const newpair2=new Keypair.generate();
const publicKey2=new PublicKey(newpair2._keypair.publicKey).toString();
console.log("sample public key1:"+publicKey2);
const newpair3=new Keypair.generate();
const publicKey3=new PublicKey(newpair3._keypair.publicKey).toString();
console.log("sample public key1:"+publicKey3);
const newpair4=new Keypair.generate();
const publicKey4=new PublicKey(newpair4._keypair.publicKey).toString();
console.log("sample public key1:"+publicKey4);