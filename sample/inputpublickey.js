const {
  Connection,
  Keypair,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");
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
      2*LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(fromAirDropSignature);
  }catch(err){
    console.log(err);
  }
}
const launch= async()=>{
    await getWalletbalance();
    await airDropSol();
    await getWalletbalance();
}
launch();
