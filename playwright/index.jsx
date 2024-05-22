// Import styles, initialize component theme here.
// import '../src/common.css';
import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import { BrowserRouter } from 'react-router-dom';

beforeMount(async ({ hooksConfig, App }) => {
  console.log(`Before mount: ${JSON.stringify(hooksConfig)}`);

  if (hooksConfig?.routing)
     return <BrowserRouter><App /></BrowserRouter>;
});