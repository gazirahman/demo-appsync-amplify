import { Authenticator } from '@aws-amplify/ui-react';
import './App.css';
import { Transactions } from './components';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <button style={{float: 'right'}} onClick={signOut}>Logout</button>
          <div className='App'>
            <Transactions />
          </div>
        </>
      )}
    </Authenticator>
  );
}

export default App;
