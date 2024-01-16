import { LegacyRef } from 'react';
import { User } from '../types/user.type';

type Props = {
  user: User;
  modalRef: LegacyRef<HTMLDialogElement>;
  onClose: () => void;
};

const Modal = (props: Props) => {
  const { modalRef, onClose, user } = props;

  return (
    <dialog ref={modalRef} className='modal'>
      <p>{user.address.city}</p>
      <p>{user.address.street}</p>
      <p>{user.address.suite}</p>
      <p>{user.address.zipcode}</p>
      <p>{user.company.name}</p>
      <button className='button' onClick={onClose}>
        Close
      </button>
    </dialog>
  );
};

export default Modal;
