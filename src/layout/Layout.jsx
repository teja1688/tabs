import React, { useEffect, useState } from 'react';
import './Layout.css';
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import MyFonts from '../myfonts/Myfonts'
import BuyFonts from '../buyfonts/BuyFonts'
function Layout() {

  const [fonts , setFonts] = useState([])
  const [selectedFont , setSelectedFonts] = useState('')

  useEffect(()=> {
    getFontsData()
  }, [])
 // eslint-disable-next-line react-hooks/exhaustive-deps
  const getFontsData = () =>{
  const url =`http://json.ffwagency.md/tabs`
  fetch(url, {method : 'GET'}).then((response =>  response.json())).then((res => setFonts(res)))
  }

  const handleSelectedFonts = (item) => {
    setSelectedFonts(item)
  }

  return (
    
    <div  className="Container btn-group-cstm">
       { fonts.length> 0 && 
       <ButtonGroup  size="sm" className="mb-2">{fonts?.map((items)=> (
         <Button style={{color : selectedFont === items?.label  && 'orange' , opacity : selectedFont === items?.label &&  0.5 }} onClick={() => {handleSelectedFonts(items?.label)}} variant="light" key={items?.id}>{items?.label}</Button>
       ))}
         
       </ButtonGroup>
      }
 
   {selectedFont === 'My Fonts' ? <MyFonts selectedFont={selectedFont} > </MyFonts>  :
    selectedFont === 'Buy Fonts' ?  <BuyFonts selectedFont={selectedFont} > </BuyFonts> : 
   
   <Card   border="info" style={{ width: '50rem' }}>
    <Card.Header align="center">Please Select One font</Card.Header>
  
  </Card>}

    </div>
  );
  
 


}

export default Layout;
