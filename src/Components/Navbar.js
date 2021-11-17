import Logo from '../logo.svg'

const Navbar = () => {

    return (
        <nav className="navbar navbar-light" style={styles.navbarContainer}>
            <img style={styles.logo} src={Logo}/>
            <div style={styles.displayFlex, styles.navInfo}>
                <p style={styles.pTag}>212.555.5555</p>
                <a href="#" >Login</a>
                <span className="navbar-toggler-icon" style={styles.iconColor}></span>
            </div>
        </nav>
    )
}

export default Navbar

const styles = {
    navbarContainer:{
        maxWidth: '1440px',
        margin: '0 auto'
    },
    logo: {
        height: '40px',
        width: '150px'
    },
    displayFlex: {
        display: 'flex',
    },
    navInfo: {
        width: '210px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '10px'
    },
    pTag: {
        margin: 0,
        padding: 0
    },
    iconColor: {

    }
}