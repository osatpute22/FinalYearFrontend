import React from "react";
import './About.css';
import chainlink from '../../assets/images/chainlink.jpg';
import Blockchain from '../../assets/images/blockchain.jpg';

const About=()=>{
    return(
        <div className="container" >
            {/* style= {{backgroundImage: 
            "url('https://wallpaperaccess.com/full/8054303.jpg')", height:'1000px', width:'100%', backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}> */}
        {/* <img src='https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg?size=626&ext=jpg&ga=GA1.1.1467263659.1676706640&semt=ais' style={{'height':'500px'}}  ></img>     */}
        
           
            <br></br>
            <ul>
                <li>Traditional IOT data security solutions involved TPA (Third Party Auditors) to ensure the security of their IOT Data, which made it susceptible to the attacks.</li>
                <li> However, with the introduction of the Blockchain, we tend to eliminate these auditors and propose a system which would also ensure data integrity at greater extend.</li>
                <li> The architecture of the Blockchain is tailor-made for our use case, as the data, once entered in the Blockchain cannot be tampered, thus providing a coveted solution to the security of the IOT Data.</li>
            </ul>

    
        <strong><ul>How we make it possible?</ul></strong>
   
    <ul>
        <li><strong style={{color:'purple'}}>Polygon</strong></li>{}
        <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/08/Polygon_logo_resized.jpeg.jpg" style={{'height': '170px'}} ></img>
        <p> The Polygon network allows you to do many of the same things the main Ethereum network allows, but with fees that are often a fraction of a cent.
        Polygon believes in Web3 for all. 
        Polygon is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.
        </p>
        <details> 
            <summary>What Polygon Offers</summary>
            <br></br>
            <ul>
                <li>Polygon solves common blockchain pain points, offering low gas fees and high speeds without sacrificing security. 

<li>Higher performance with a transaction speed of up to 65,000 transactions per second.</li>

<li>Provides multi-chain architecture for better scalability.</li>

<li>More secure due to the results of the validation system.</li>
</li>
            </ul>
        </details>
        
        <br></br>
        
        
        <li><strong style={{color:'purple'}}>Chainlink</strong></li>
        <br></br>
        <img src={chainlink}  style={{'height': '140px'}} ></img>
        <br></br>
        <br></br>
        <p> Chainlink decentralized oracle networks provide tamper-proof inputs, outputs, and computations to support advanced smart contracts on any blockchain.
        It securely connect smart contracts with off-chain data and services. Like we're using IoT Data as off-chain data.
        <p> 
            <ul>
                <li>A bridge is a software component that acts as an interface between Chainlink and external data sources. Bridges provide a standardized way for Chainlink to access data from different sources, regardless of the platform on which the data is located. Bridges are typically built by third-party developers and can be deployed on a variety of platforms, including cloud services, dedicated servers, or other blockchain networks.</li>

<li>Bridges work by using adapters to translate the data format and protocol used by the external data source into a format that can be understood by Chainlink. Adapters are small pieces of software that are specifically designed to communicate with a particular data source and provide data to the bridge in a standardized format.</li>

<li>Once the bridge has received data from the external data source, it can be securely and reliably transmitted to the Chainlink network, where it can be used by smart contracts to execute their logic.</li>

<li>Overall, bridges play a critical role in enabling Chainlink to access external data sources and provide reliable and secure data to smart contracts. They help to bridge the gap between the decentralized blockchain world and the centralized data sources that smart contracts need to access in order to function properly.</li>
</ul>

</p>
        </p>

            <details>
                <summary><strong>Use Cases of Chainlink</strong>
            </summary>  
            <br></br>          
             <ul>
                <li>Decentralized Finance (DeFi)
                Many traditional financial products like loans, payments, derivatives, asset equity, and more are being built on the blockchain using smart contracts to increase their security and transparency and reduce barriers to entry.
                </li>
                <li>Money Laundering Protection and many more</li>
                
            </ul>
            </details>

    </ul>
 
    

        <ul>
        <img src={Blockchain} style={{'height':'140px'}}></img></ul>
        <ul>
            
            <strong>Why is blockchain important </strong>
            <br></br><br></br>
            
        <li>Traditional database technologies present several challenges for recording financial transactions. 
        For instance, consider the sale of a property. Once the money is exchanged, ownership of the property is transferred to the buyer. </li>
        <li>Individually, both the buyer and the seller can record the monetary transactions, but neither source can be trusted.
        The seller can easily claim they have not received the money even though they have, and the buyer can equally argue that they have paid the money even if they haven’t.</li>
        To avoid potential legal issues, a trusted third party has to supervise and validate transactions. 
        <br></br><br></br>
        <details> <summary><strong>Uses Of BlockChain</strong></summary>
        <br></br>
            <ul>
            <li>International Payments. Blockchain provides a way to securely and efficiently create a tamper-proof log of sensitive activity</li>
            <li>Capital Markets</li>
            <li>Trade Finance</li>
            <li>Regulatory Compliance and Audit</li>
            <li>Money Laundering Protection</li>
            <li>Supply Chain Management</li>
            </ul></details></ul>
            <ul>
                <marquee ><h2>
                Team Members are 
                    Prem kandelwal , Ajinkya Kotwal , Omkar Satpute , Rishikesh Mahajan
                </h2>
                </marquee>
            </ul>
                    
</div>
                   
                )
               
}
export default About;