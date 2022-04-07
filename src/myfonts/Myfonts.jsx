import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import './Myfonts.css';


function MyFonts({selectedFont}) {
   const [fontsData , setMyFontsData] = useState([])

  
  useEffect(()=> {
    getMyFontsData()
  }, [])
 // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMyFontsData = () =>{
  const url =`http://json.ffwagency.md/fonts_a`
  fetch(url, {method : 'GET'}).then((response =>  response.json())).then((res => setMyFontsData(res)))
 
  }

  return (
    
    <div  className="Container" >
    
 <Card   border="info" style={{ width: '50rem' }}>
    <Card.Header>{selectedFont}</Card.Header>
    <Card.Body>
     {fontsData?.content?.map((x) => (
         <React.Fragment > 
     <div className="square"  key={x.id} style={{ textAlign : 'left' , width: '10rem' , background : x?.color}}>
 
       </div>
     <ul style={{textAlign : 'left'}}>
            <li >Color label : {x['color-blind-label']}</li>
        <li>label : {x['label']}</li>
         </ul>
         </React.Fragment > 
     ))}
 

    </Card.Body>
  </Card>
    </div>
  );
  
 


}

export default MyFonts;
