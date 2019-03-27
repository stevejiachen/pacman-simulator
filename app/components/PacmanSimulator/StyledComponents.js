import styled from 'styled-components';

const CommandContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputWithError = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Error = styled.div`
  color: red;
`;

const QuickAccess = styled.div`
  display: flex;
  justify-content: center;
`;

export { CommandContainer, InputWithError, Error, QuickAccess };
