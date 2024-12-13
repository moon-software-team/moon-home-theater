/** Dependencies */
import { createRoot } from 'react-dom/client';

/** Import the App react page */
import { App } from './pages/app';

/** Get the dom roots */
const DOM_NODE = document.getElementById('root');

/** Create the root for rendering */
const ROOT = createRoot(DOM_NODE as HTMLElement);

/** Render the App */
ROOT.render(App());
