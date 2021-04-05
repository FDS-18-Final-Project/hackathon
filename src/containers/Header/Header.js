import styled from 'styled-components';
import { A11yHidden } from 'components';
import { Navbar } from 'containers';

const StyledHeader = styled.header`
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  height: 80px;
  padding: 10px 0;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Header.Container>
        <A11yHidden as='h1'>MM Auto Care</A11yHidden>
        <img src={process.env.PUBLIC_URL + 'assets/logo.png'} alt='website logo' />
        <Navbar />
      </Header.Container>
    </StyledHeader>
  );
};

Header.Container = styled.section`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
export default Header;
