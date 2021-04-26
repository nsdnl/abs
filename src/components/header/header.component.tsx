import React, { PureComponent } from 'react';

const DUTCH_LANGUAGE = 'Dt';
const LANGUAGE_KEY = '__ln';

export class HeaderComponent extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);
        const language = localStorage.getItem(LANGUAGE_KEY) || '';
        this.state = {
            language,
            menus: [
                {label: 'Home', labelDt: 'Home', id: 'home', url: '/'},
                {label: 'About', labelDt: 'Over', id: 'about', url: '/about-us'},
                {label: 'Services', labelDt: 'Diensten', id: 'services', url: '/packages'},
                {label: 'Features', labelDt: 'Features', id: 'features', url: '/features'},
                // {label: 'Gallary', id: 'gallery', url: '/gallery'},
                {label: 'Contact', labelDt: 'Contact', id: 'contact', url: '/contact-us'},
                {label: 'Netherlands', labelDt: 'English', id: 'contact', language: true},
            ],
            stickyHeader: false,
            logoPosition: -122,
            selectedMenu: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    handleScroll = (ev: any) => {
        if (ev.target.scrollingElement) {
            const newState: any = {
                stickyHeader: ev.target.scrollingElement.scrollTop > 89
            };
            if (newState.stickyHeader && ev.target.scrollingElement) {
                newState.logoPosition = Math.min(ev.target.scrollingElement.scrollTop - 215, 0);
            }
            this.setState(newState);
        }
    };

    toggleLanguage = () => {
        const {language} = this.state;
        if (language === DUTCH_LANGUAGE) {
            localStorage.setItem(LANGUAGE_KEY, '')
        } else {
            localStorage.setItem(LANGUAGE_KEY, DUTCH_LANGUAGE);
        }
        window.location.reload();
    };

    getMenus = () => {
        const {menus, language} = this.state;
        return menus.map((menu: any, i: number) => <div key={`menu-${i}`} className={'menu-item'}>
            {menu.url && <a href={`#${menu.url}`}>{menu[`label${language}`]}</a>}
            {menu.language && <span className={'language'} onClick={this.toggleLanguage}>| {menu[`label${language}`]}</span>}
        </div>)
    };
    getMobileMenus = () => {
        const {menus, selectedMenu, language} = this.state;
        const style = selectedMenu ? {height: 79} : {height: 0};
        return menus.map((menu: any, i: number) => <li style={style} key={`menu-${i}`} className={'menu-item'}>
            {menu.url && <a onClick={this.selectMenu} href={`#${menu.url}`}>{menu[`label${language}`]}</a>}
            {menu.language && <span className={'language'} onClick={this.toggleLanguage}>{menu[`label${language}`]}</span>}
        </li>)
    };

    getClasses = () => {
        const {stickyHeader, selectedMenu} = this.state;
        let cls: any = {main: 'header-area', mobile: 'header-menus-mobile'};
        if (stickyHeader) {
            cls.main += ' sticky';
        }
        if (selectedMenu) {
            cls.mobile += ' selected';
        }
        return cls;
    };

    selectMenu = () => {
        this.setState({selectedMenu: !this.state.selectedMenu});
    };

    render(): React.ReactNode {
        const {logoPosition} = this.state;
        const cls = this.getClasses();
        return <header>
            <div className={cls.main}>
                <div className={'header-icon'}>
                    <a className={'logo'} href={'#/'}><img alt={'ABS Logo'} src={'/icons/logo/logo3.png'}/></a></div>
                <div className={'header-menus'}>{this.getMenus()}</div>
                <div className={cls.mobile}>
                    <button className={'header-menu-icon'} onClick={this.selectMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <ul className={'mobile-menu'}>
                        {this.getMobileMenus()}
                    </ul>
                </div>
            </div>
            <div className={`${cls.main} secondary`} style={{marginTop: `${logoPosition}px`}}>
                <div className={'header-icon'}>
                    <a className={'logo'} href={'#/'}><img alt={'ABS Logo'} src={'/icons/logo/logo3.png'}/></a>
                </div>
            </div>
        </header>
    }
}
