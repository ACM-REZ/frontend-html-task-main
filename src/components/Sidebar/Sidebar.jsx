import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            isActive: ""
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    clickActive = (title, path) => {
        this.goToRoute(path)
        this.setState(() => ({ isActive: title }));
    }

    render() {
        const { isOpened, isActive } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });
        const sidebarElementTitle = classnames('sidebarElement__title', {openedTitle: isOpened});
        const sidebarHeaderBlockName = classnames('sidebarHeaderBlock__name', {openedTitle: isOpened});
        const sidebarHeaderButton = classnames('sidebarHeader__button', { openedButton: isOpened });
        const sidebarHeaderButtonIcon = classnames('sidebarHeaderButtonIcon', { openedButtonIcon: isOpened });

        return (
            <div className={ containerClassnames }>
                <div>
                    <div className='sidebarHeader'>
                        <div className='sidebarHeaderBlock'>
                            <img
                                className='sidebarHeaderBlock__logo'
                                src={ logo }
                                alt="TensorFlow logo"
                            />
                            <span className={sidebarHeaderBlockName}>TensorFlow</span>
                        </div>
                        <button className={ sidebarHeaderButton } onClick={ this.toggleSidebar }>
                            <FontAwesomeIcon className={ sidebarHeaderButtonIcon } icon='angle-right' />
                        </button>
                    </div>

                    <div className='sidebarList'>
                        {
                            routes.map((route) => (
                                <div className={ `sidebarElement ${ isActive === route.title ? "sidebarElement-active" : "" } `} key={ route.title } onClick={ () => this.clickActive(route.title, route.path) }>
                                    <FontAwesomeIcon className='sidebarElement__icon' icon={ route.icon } />
                                    <span className={ sidebarElementTitle }>{ route.title }</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='sidebarList'>
                    {
                        bottomRoutes.map((route) => (
                            <div className={ `sidebarElement ${ isActive === route.title ? "sidebarElement-active" : "" }` } key={ route.title } onClick={ () => this.clickActive(route.title, route.path) }>
                                <FontAwesomeIcon className='sidebarElement__icon' icon={ route.icon } />
                                <span className={ sidebarElementTitle }>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
