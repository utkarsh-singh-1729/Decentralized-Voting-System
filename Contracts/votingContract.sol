pragma solidity ^0.8.0;

contract VotingContract {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }
he

    address public admin;
    mapping(address => bool) public voters;
    Candidate[] public candidates;
    bool public electionOpen;

    event VoteCast(address indexed voter, uint256 candidateId);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor(string[] memory _candidateNames) {
        admin = msg.sender;
        electionOpen = true;
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate(i, _candidateNames[i], 0));
        }
    }

    function vote(uint256 _candidateId) external {
        require(electionOpen, "Election closed");
        require(!voters[msg.sender], "Already voted");
        require(_candidateId < candidates.length, "Invalid candidate");

        candidates[_candidateId].voteCount++;
        voters[msg.sender] = true;
        emit VoteCast(msg.sender, _candidateId);
    }

    function endElection() external onlyAdmin {
        electionOpen = false;
    }
}
