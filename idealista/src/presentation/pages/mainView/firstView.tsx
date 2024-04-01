
import React from 'react';
import { Box } from '@mui/material';

import logo from '../../../assets/LOGO_1.png'
import ilustration from '../../../assets/solomano.png'

import './firstView.css'

const FirstSecction: React.FC = () => {
  return (
// grid-template-columns: 2fr 2fr; /* Una columna vacía y una columna para el contenido */

      <Box className='container' sx={{display: {xs: 'block', lg:'grid'}, gridTemplateColumns: '2fr 2fr' }}>
        <Box className='info_column' sx={ {margin: {xs: '2vh', lg: '5vh 10vh'}} }>
          <Box sx={{display: {xs: 'flex', lg: 'block'}, justifyContent: 'center', }}>
            <img className='logo' src={logo} alt="" />
          </Box>
          <Box sx={{display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent: 'center', height: '80%', gap: 2, marginY: {xs: '6vh', lg: 0}}}>
            <h2 className='principalTitle'>Potencia tu marca <br /> con nosotros</h2>
            <hr className='hr'/>
            <p className='principalText'>Diseño de marca, seguimiento <br /> digital, manejo completo de redes <br /> sociales y mucho más.</p>
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'end', marginTop: '2vh'}}>
              {/* TODO: volver un compponente */}
              <button className='customButton'  onClick={()=>null}> Saber más! </button>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}, height: '43vh'}}>
              <img className='imageHand' src={ilustration} alt="" />
            </Box>
          </Box>
        </Box>
        <div className='empty-column'></div>
      </Box >


  );
};

export default FirstSecction;
