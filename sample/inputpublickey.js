const {
  Connection,
  Keypair,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

const readline=require('readline');


const connection = new Connection(clusterApiUrl("devnet"));
//console.log(connection);
const newPair = new Keypair();
const newpublic = new PublicKey(newPair._keypair.publicKey).toString();
console.log(newpublic);
const privatekey = newPair._keypair.secretKey;
console.log(privatekey);


const getWalletbalance = async () => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    const myWallet = await Keypair.fromSecretKey(privatekey);
    const walletBalance = await connection.getBalance(
      
      new PublicKey(myWallet.publicKey)
    );
    console.log(
      "Wallet balance:"+ parseInt(walletBalance)/LAMPORTS_PER_SOL +"SOL"
    );
  } catch (err) {
    console.log(err);
  }
};

const airDropSol = async()=>{
  try{
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const myWallet = await Keypair.fromSecretKey(privatekey);

    console.log("Airdropping some SOL to my wallet!");
    
    const fromAirDropSignature = await connection.requestAirdrop(
      /*
      const myAddress = new PublicKey("2nr1bHFT86W9tGnyvmYW4vcHKsQB3sVQfnddasz4kExM");
    const signature = await connection.requestAirdrop(myAddress, LAMPORTS_PER_SOL);
    await connection.confirmTransaction(signature);
    */
      new PublicKey(myWallet.publicKey),
      1*LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(fromAirDropSignature);
  }catch(err){
    console.log(err);
  }
}

const options=async()=>{
  try{
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    
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
  }catch(err){
    console.log(err)
  }
}
inputdata=()=>{
r1.question("enter your name:",(num1)=>{
    console.log(num1);
    r1.close();
})
}
const launch= async()=>{
    await options();
    
const r1=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

    await inputdata();
    await getWalletbalance();
    await airDropSol();
    await getWalletbalance();
}
launch();
