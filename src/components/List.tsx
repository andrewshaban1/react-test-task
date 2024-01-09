import { type User } from '../types/user.type';

type Props = {
  users: User[];
  highlightText: (text: string) => string;
  handleDeleteUser: (user: User) => void;
};

const List = (props: Props) => {
  const { users, highlightText, handleDeleteUser } = props;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className='listItem'>
          <div>
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
  );
};

export default List;
