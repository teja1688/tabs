import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import './BuyFonts.css';


function BuyFonts({selectedFont}) {
   const [buyFontsInfo , setBuyFontsInfo] = useState([])

  
  useEffect(()=> {
    getBuyFontsData()
  }, [])
 // eslint-disable-next-line react-hooks/exhaustive-deps

  const getBuyFontsData = () =>{
  const url =`http://json.ffwagency.md/fonts_b`
  fetch(url, {method : 'GET'}).then((response =>  response.json())).then((res => setBuyFontsInfo(res)))
 
  }

console.log(buyFontsInfo)
  

  return (
    
    <div  className="Container" >
    
 <Card   border="info" style={{ width: '50rem' }}>
    <Card.Header>{selectedFont}</Card.Header>
    <Card.Body>
    <Card.Text>
       {buyFontsInfo?.content}
      </Card.Text>
    </Card.Body>
  </Card>
    </div>
  );
  
 


}

export default BuyFonts;
