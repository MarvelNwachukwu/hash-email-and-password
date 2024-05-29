const cryptoHash =  require('./index')

const email = 'marvel.code.craft@gmail.com';
const password = "MyVeryOwnWalletAddress(01&1)";

const walletAddressFromCrypto = cryptoHash(email, password)

console.log(walletAddressFromCrypto);
