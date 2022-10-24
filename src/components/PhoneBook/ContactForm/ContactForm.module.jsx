import styled from 'styled-components';

export const ContactsWrapp = styled.div`
  padding: 5px 20px;
  border: 1px solid #000;

  .contacts__name {
    & label {
      display: block;
      margin-bottom: 5px;
    }
    & input {
      margin-bottom: 10px;
    }
  }
  .contacts__phone {
    & label {
      display: block;
      margin-bottom: 5px;
    }
    & input {
      margin-bottom: 10px;
    }
  }
`;
