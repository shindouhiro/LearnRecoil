import './App.css';
import { userSelector } from './store/user';
import { useRecoilValueLoadable } from 'recoil';


function App() {
  const userLoadable = useRecoilValueLoadable(userSelector);

  switch (userLoadable.state) {
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      return <div>Error: {userLoadable.contents.message}</div>;
    case 'hasValue':
      const userData = userLoadable.contents;
      console.log(userData);

      return (
        <div>
          {
            userData.list.map(item => {
              return (
              <>
                <div>用户名：{item.username}</div>
                <div>密码：{item.password}</div>
              </>
              )
            })
          }
       
        </div>
      );
    default:
      return null;
  }
}

export default App;
