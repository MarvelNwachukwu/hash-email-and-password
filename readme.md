
# hash-email-and-password

A Node.js package to generate an Algorand wallet address and mnemonic based on an email and password. The package hashes the email and password combination one million times using SHA-256 to ensure uniqueness and security, and then uses the resulting hash to generate an Algorand keypair.

## Installation

Install the package via npm:

```bash
npm install hash-email-and-password
```

## Usage

Import the `generateWalletAddress` function and use it to generate an Algorand wallet address and mnemonic by providing an email and password.

### Example

```javascript
const generateWalletAddress = require('hash-email-and-password');

const email = 'test@example.com';
const password = 'password123';
const wallet = generateWalletAddress(email, password);

console.log('Address:', wallet.address);
console.log('Mnemonic:', wallet.mnemonic);
```

### Output

The function returns an object containing the wallet address and mnemonic:

```json
{
  "address": "ALGOWALLETADDRESS",
  "mnemonic": "mnemonic phrase for the wallet"
}
```

## API

### `generateWalletAddress(email, password)`

- **email**: `string` - The email used to generate the wallet.
- **password**: `string` - The password used to generate the wallet.

**Returns**: An object containing the following properties:
- **address**: `string` - The Algorand wallet address.
- **mnemonic**: `string` - The mnemonic phrase corresponding to the wallet's private key.

## How It Works

1. **Hash Generation**: The email and password are concatenated and hashed using SHA-256. This hash is then repeatedly hashed one million times to ensure security.
2. **Seed Generation**: The resulting hash is converted to a 32-byte buffer, which is used as a seed.
3. **Keypair Generation**: The seed is used to generate an Algorand keypair (public and private keys).
4. **Mnemonic Conversion**: The private key is converted to a mnemonic phrase, which can be used to restore the wallet.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This package uses the `crypto` library for hashing and the `algosdk` library for generating Algorand keypairs.