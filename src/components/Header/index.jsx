import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/" title="Home page">
        <img src={logo} alt="MyContacts" />
      </Link>
    </Container>
  );
}
