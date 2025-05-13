# Decentralized Voting System

A blockchain-based voting platform leveraging Ethereum smart contracts for secure, transparent, and tamper-proof elections.


## Features
- **Immutable Voting Records**: Votes stored on blockchain
- **Transparent Results**: Real-time vote tally visibility
- **Voter Authentication**: MetaMask wallet integration
- **Admin Controls**: Election lifecycle management
- **Tamper-Proof**: Cryptographic verification of votes

## Tech Stack
- **Smart Contracts**: Solidity, Hardhat
- **Frontend**: React.js, Ethers.js
- **Blockchain**: Ethereum (Local/Testnet/Mainnet)
- **Wallet Integration**: MetaMask
- **Testing**: Chai, Mocha

## Prerequisites
- Node.js v16+
- npm v8+
- MetaMask browser extension
- Ethereum testnet ETH (for deployment)


decentralized-voting-system/
├── contracts/
│   └── Voting.sol            # Smart contract written in Solidity
├── test/
│   └── Voting.test.js        # Tests for the smart contract (JavaScript/Mocha)
├── scripts/
│   ├── deploy.js             # Script to deploy the contract (JavaScript)
│   └── interact.js           # Script to interact with the contract (optional)
├── frontend/
│   ├── src/
│   │   ├── components/       # React/Vue components (e.g., Vote.js, Results.js)
│   │   ├── App.js            # Main frontend logic
│   │   └── utils/
│   │       └── contract.js   # Contract interaction logic (ethers.js/web3.js)
│   ├── public/
│   │   └── index.html        # Frontend entry point
│   └── package.json          # Frontend dependencies
├── .env                      # Environment variables (private keys, RPC URLs)
├── truffle-config.js         # Truffle/Hardhat configuration (if using)
├── hardhat.config.js         # Alternative to Truffle
├── package.json              # Backend/dev dependencies


