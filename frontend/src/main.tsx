import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Toaster } from 'sonner';
import { RoutePath } from '@/RoutePath';
import './index.css';

const root_elem = document.getElementById('root');
if (root_elem) {
  const root_return = createRoot(root_elem);
  root_return.render(
    <StrictMode>
      <RoutePath />
      <Toaster />
    </StrictMode>
  );
} else {
  throw new Error("The document does not contain an element with the ID 'root'.");
}
