import { useEffect, useRef } from 'react';

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function useClickOutsideModal({ setOpenModal }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = (e: any) => {
      const modal = modalRef.current;
      if (modal && !modal.contains(e.target as Node)) {
        setOpenModal(false);
      }
    };

    document.addEventListener('mousedown', closeModal);

    return () => document.removeEventListener('mousedown', closeModal);
  }, []);

  return { modalRef };
}
