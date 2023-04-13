import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const modalElement = document.getElementById('modal');

  if (!modalElement) {
    return null;
  }

  return ReactDOM.createPortal(
    children,
    modalElement,
  );
}
