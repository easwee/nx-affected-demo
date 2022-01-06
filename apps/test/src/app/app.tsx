import { Dummy } from '@ttt/dummy';
import { Dummy2 } from '@ttt/dummy-2';
import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="test" />
      <Dummy />
      <Dummy2 />
    </StyledApp>
  );
}

export default App;
