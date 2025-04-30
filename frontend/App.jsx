import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import VotingContractABI from './abis/VotingContract.json';

function App() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [account, setAccount] = useState('');

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
        const contract = new ethers.Contract(
          contractAddress,
          VotingContractABI.abi,
          signer
        );
        setContract(contract);

        // Load candidates
        const candidateCount = await contract.candidates.length();
        const candidates = [];
        for (let i = 0; i < candidateCount; i++) {
          const candidate = await contract.candidates(i);
          candidates.push(candidate);
        }
        setCandidates(candidates);
      }
    };
    init();
  }, []);

  const handleVote = async (candidateId) => {
    try {
      await contract.vote(candidateId);
      alert('Vote cast!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Decentralized Voting</h1>
      <p>Account: {account}</p>
      <div>
        {candidates.map((candidate) => (
          <div key={candidate.id}>
            <span>{candidate.name}</span>
            <button onClick={() => handleVote(candidate.id)}>Vote</button>
            <span>Votes: {candidate.voteCount.toString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;