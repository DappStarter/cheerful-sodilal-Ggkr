require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind hospital good enter blue subway'; 
let testAccounts = [
"0x02e796022c3ccfd35cbc7773b3039c847925771a301d496a51cbab4aae6e0ebf",
"0x284bcaef68181f438b73de749e0cf63fa4c9e9a7f255ab61d7c1d5d024112760",
"0xeb48b35f4295c8ab74de8e54ff26beedff2c671eb81820566284c5c6712443b9",
"0x11e8592970f3f30bc8c738b9d94629ce73d5b15493541dc91ac323cdd1f0ac93",
"0x08f1cd1767d42f53139603ae580f7e5d39c89d3ce3be7fdf52cc12395b10433c",
"0x8d338c7d71c84c63f0e438a54ff00ff1fb7dd5876fbf94d16cc80b88396cf2bd",
"0x98e8a0ab860b90524988271908783ae369ec7ccaf96addb3613c74cd25af811b",
"0x78af33d85b858923a71044567c74f30a2ac49f75a1e6240d28c5a2fccd7be49c",
"0xca13b33bdb9a6f50ed51e3e3af84d38cd3d7e443bceabdff7ee32d9c974f9991",
"0xa5a31c6209a3daada6de92c199e42525855d8eb98890c2404634bf0db77e9537"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


