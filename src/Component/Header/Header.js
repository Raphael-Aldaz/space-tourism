import './style.scss';
import logoMain from './logo.svg';

function Header() {
    return(
        <div className='header'>
        <div className='header_logo'>
            <img src={logoMain} alt='logoMain'/>
        </div>
        <div className='header_navigation '>
            <a href='#0'>00 HOME</a>
            <a href='#1'>01 DESTINATION</a>
            <a href='#2'>02 CREW</a>
            <a href='#3'>03 TECHNOLOGY</a> 
        </div>
        </div>
        
    );
}

export default Header