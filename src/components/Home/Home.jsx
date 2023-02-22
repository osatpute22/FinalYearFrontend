import React, { useState } from "react";
// import { Container } from "react-bootstrap";
import *as xlsx from 'xlsx';
import './Home.css';
// function Home() {
//     var bHash = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
//     var eHash = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
// //     return (<>
// // {/* 
// //             <div className="Circle" >
// //                 <div className="Circle1">
// //                     <h3>B.Hash</h3>
// //                 </div>
// //                 <div className="Circle2">
// //                     <h3>E.Hash</h3>
// //                 </div>
// //             </div>  */}
// //             {/* <div className="HashCode" style={{color:bHash === eHash ? 'green': 'red' }}> */}
// //                 <div className="HashCodeBlockChain" style={{color:bHash === eHash ? 'green': 'red' }}>
// //                     <h3 style={{color:'white'}}>B.HASH</h3>
// //                     <span className="neon" > {bHash}</span>
// //                     <span className="neon" > <marquee>{bHash}</marquee></span>

// //                 </div>
// //                 <div className="HashCodeExcel" style={{color:bHash === eHash ? 'green': 'red' }}>
// //                 <h3 style={{color:'white'}}>E.HASH</h3>
// //                     <span className="neon"
// //                     >{eHash}</span>
// //                     <span className="neon" > <marquee>{eHash}</marquee></span>
// //                 </div>
// //            {/* </div> */}
            
// // </>

//     var bhash='2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
//     var ehash='2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
//     return (<div className="main" >
        
//             <div className="Circle" >
//                 <div className="Circle1" >
//                     <h3>B.Hash</h3>
//                 </div>
//                 <div className="Circle2">
//                     <h3>E.Hash</h3>
//                 </div>
//             </div>
//             <div className="HashCode">
                
//                 <div className="HashCodeBlockChain" style={{color:bhash === ehash ? 'green': 'red' }} >
//                     <span className="neon"><marquee scrollamount="2">{bhash}</marquee></span>
//                 </div>
//                 <div className="HashCodeExcel" style={{color:bhash === ehash ? 'green': 'red' }} >
//                     <span className="neon"><marquee scrollamount="2">{ehash}</marquee></span>
//                 </div>
//             </div>

//             {/* <div id="scroll-container">
//                 <div id="scroll-text" style={{color:'White'}}>
//                 4545454545454545454545454545454545454545454545454545454545454545454545445
//                 </div>
//             </div> */}
            
// </div>
        

//     );
// }
// export default Home;




function Home() 
{
   const [excelData, setExcelData]= useState([]);
   const readExcel = async(e)=>{
   const file= e.target.files[0];
   const data= await file.arrayBuffer(file);
   const excelfile= xlsx.read(data);
   const excelsheet= excelfile.Sheets[excelfile.SheetNames[0]];
   const exceljson= xlsx.utils.sheet_to_json(excelsheet);
   //console.log(exceljson);
   setExcelData(exceljson);


  }
    return(
        <React.Fragment>
              <div className="content">
               <div className="row fthight">               
               <div className="col-md-4 ">
               <input type="file" className="form-control" onChange={ (e)=>readExcel(e)} />
               <h3 className='mt-3'>Fetch Excel File </h3>
               </div>
              
               {/* <div className="col-md-12 mt-3">   
               { excelData.length > 1 && (
                <table className="table">
                  <thead>
                     <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                     </tr>
                  </thead>
                  <tbody>
                    {                     
                    excelData.map( (getdata, index)=>(
                     <tr key={index}>
                        <td>{ index+1 }</td>
                        <td>{ getdata.name} </td>
                        <td>{ getdata.email} </td>
                        <td>{ getdata.phoneno} </td>
                     </tr>
                     ) ) }
                  </tbody>
                </table>
               )
}

               </div> */}
               </div>
             </div>
        </React.Fragment>
    );
}
export default Home;