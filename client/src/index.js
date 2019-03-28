import ReactDOM from 'react-dom';
import router from './routes/routes.js';
import { injectGlobal } from 'styled-components';

injectGlobal`   
   * {
      box-sizing: border-box; 
   }

   html {
    background-color: #343a40;
    
   }

   body {
    background: url(${require('./assets/bg.jpg')}) repeat;
   }
   
   #root {
    overflow-x: hidden;
   }
`;


ReactDOM.render(
  router,
  document.getElementById('root')
);
