import React from "react";
import './About.css';
const About=()=>{
    return(
        <div className="container">
            {/* <img src="https://st4.depositphotos.com/16552764/20957/v/600/depositphotos_209572350-stock-illustration-block-chain-logo-illustration-block.jpg" alt="blockchain"></img>
        */}<details className="desp">
            Blockchain
           <summary>Read About Blockchain</summary>
           A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. 
           As a database, a blockchain stores information electronically in digital format. Blockchains are best known 
           for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. 
           The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
<br></br>
<p>Uses Of BlockChain</p>
<ul>
<li>International Payments. Blockchain provides a way to securely and efficiently create a tamper-proof log of sensitive activity. ...
<li>Capital Markets. ...</li>
<li>Trade Finance. ...</li>
<li>Regulatory Compliance and Audit. ...</li>
<li>Money Laundering Protection. ...</li>
</li>
<li>Supply Chain Management.</li>
</ul>
<details>
            <summary>What is Important Of BlockChain</summary>
            Why is blockchain important?
Traditional database technologies present several challenges for recording financial transactions. For instance, consider the sale of a property. Once the money is exchanged, ownership of the property is transferred to the buyer. Individually, both the buyer and the seller can record the monetary transactions, but neither source can be trusted. The seller can easily claim they have not received the money even though they have, and the buyer can equally argue that they have paid the money even if they haven’t.

To avoid potential legal issues, a trusted third party has to supervise and validate transactions. The presence of this central authority not only complicates the transaction but also creates a single point of vulnerability. If the central database was compromised, both parties could suffer.

Blockchain mitigates such issues by creating a decentralized, tamper-proof system to record transactions. In the property transaction scenario, blockchain creates one ledger each for the buyer and the seller. All transactions must be approved by both parties and are automatically updated in both of their ledgers in real time. Any corruption in historical transactions will corrupt the entire ledger. These properties of blockchain technology have led to its use in various sectors, including the creation of digital currency like Bitcoin.
        </details>
        </details>
        
        </div>

    )
}
export default About;