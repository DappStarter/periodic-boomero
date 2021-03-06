require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remain evil hunt hen frame thank'; 
let testAccounts = [
"0x452b7f7b448602550b1b7296c4d2b85da46683d62e1cc4c97534d5f12183d814",
"0x1abe3b7f3ac33794154a3a1a22d08fb0eb985aec78929b784c94c11805e53413",
"0x9d7a43d40abaa1b3cbf2b9a3b304afe1a3e17f92ee507152779422431fcf49cc",
"0x8ff8d5d4bade3d1f73d8fe7c6dc3bba30e2a8b16ab65d535765c2a21e9d47efd",
"0x41aa760320030b63ec83acb6054d503f731a6d5fc3c08c1c7047957419ae5c07",
"0x5f3c87184a07a2de082be755dd6701e52bdc709b0c90b47a8c69da43dd1d991e",
"0x11224227639976d8c56d831a5335c2dc052609732230603e7259dfb5b072fd01",
"0x490d78f72895029d015eefb8c3c23f1b73dbf3e2e71cb777a1063f63c8484481",
"0x5463db50e09d7e5a1f0a58f337cdf6bb51d4a6ce2681e2fab4bc3583ccb3612a",
"0x66d386f4e761b7df27a8ffaf0d4eb4d90d587758142591603e8a29b15a865cfd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
