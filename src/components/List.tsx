import { useRef, useState } from 'react';
import { type User } from '../types/user.type';
import Modal from './Modal';
import { userInitialState } from '../constants/initialStates';

type Props = {
  users: User[];
  highlightText: (text: string) => string;
  handleDeleteUser: (user: User) => void;
};

const List = (props: Props) => {
  const { users, highlightText, handleDeleteUser } = props;

  const [userDataModal, setUserDataModal] = useState<User>(userInitialState);

  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = (user: User) => {
    if (modalRef.current) {
      modalRef.current.showModal();
      setUserDataModal(user);
    }
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} className='listItem'>
            <div onClick={() => handleOpenModal(user)}>
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightText(
                    `${user.name} ${user.username} ${user.email}`
                  ),
                }}
              />
            </div>
            <button
              className='deleteBtn button'
              onClick={() => handleDeleteUser(user)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Modal
        modalRef={modalRef}
        onClose={handleCloseModal}
        user={userDataModal}
      />
    </>
  );
};

export default List;
