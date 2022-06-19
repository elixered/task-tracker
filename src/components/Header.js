import propTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color={`${showAdd ? 'red' : 'green'}`} text={`${showAdd ? 'Cancel' : 'Add'}`} onClick={onAdd} />
        </header>
    )
}



Header.defaultProps = {
    title: 'Indecision App'
}

Header.propTypes = {
    title: propTypes.string
}
// style = { headingStyle } in heading
// const headingStyle = {
//     fontSize: '1.5rem',
//     textAlign: 'center',
//     color: 'red'
// }

export default Header