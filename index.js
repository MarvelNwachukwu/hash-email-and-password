const crypto = require('crypto');
const algosdk = require('algosdk');

function generateWalletAddress(email, password) {
  let hash = crypto
    .createHash('sha256')
    .update(email + password)
    .digest('hex');

  for (let i = 0; i < 1000000; i++) {
    hash = crypto.createHash('sha256').update(hash).digest('hex');
  }

  // Convert the hash to a buffer and use it to generate the Algorand keypair
  const seed = Buffer.from(hash, 'hex').slice(0, 32); // Algorand keys are 32 bytes long
  const keyPair = algosdk.mnemonicToSecretKey(
    algosdk.secretKeyToMnemonic(seed)
  );

  return {
    address: keyPair.addr,
    mnemonic: algosdk.secretKeyToMnemonic(keyPair.sk),
  };
}

module.exports = generateWalletAddress;
