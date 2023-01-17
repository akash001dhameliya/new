import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Nav,Navbar} from 'react-bootstrap';
import { UpOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const Header = () =>
{
    return(
        <>
    <Navbar className='text-bg-dark bg-opacity-75' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><Link to="/"><img src= {require('./images/logo.png')} alt=""/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='Link mainmenu  d-flex align-items-center'>Home<UpOutlined className='icon'/>
              <ul className='submenu'>
                <li><Link to="/About" className='Link'>Digital Agency 1</Link></li>
                <li><Link to="/" className='Link'>Digital Agency 2</Link></li>
                <li><Link to="/" className='Link'>Digital Agency 3</Link></li>
                <li><Link to="/" className='Link'>Digital Agency 4</Link></li>
                <li><Link to="/" className='Link'>Digital Agency 5</Link></li>
                <li><Link to="/" className='Link'>Digital Agency 6</Link></li>
                <li><Link to="/" className='Link'>Digital Agency 7</Link></li>
                <li><Link to="/" className='Link'>Loading Page 1</Link></li>
                <li><Link to="/" className='Link'>Loading Page 2</Link></li>
              </ul>
              </Link>
            
            <Link to="/About" className='Link'>About US</Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}

export default Header;

