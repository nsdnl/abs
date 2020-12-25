import React, { PureComponent } from 'react';

export class HeaderComponent extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menus: [
        {label: 'Home', id: 'home', url: '/'},
        {label: 'About', id: 'about', url: '/about'},
        {label: 'Services', id: 'services', url: '/services'},
        {label: 'Schedule', id: 'schedule', url: '/schedule'},
        {label: 'Gallary', id: 'gallery', url: '/gallery'},
        {label: 'Contact', id: 'contact', url: '/contact-us'},
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
    const newState: any = {
      stickyHeader: ev.target.scrollingElement.scrollTop > 89
    };
    if (newState.stickyHeader) {
      newState.logoPosition = Math.min(ev.target.scrollingElement.scrollTop - 215, 0);
    }
    this.setState(newState);
  };

  getMenus = () => {
    const {menus} = this.state;
    return menus.map((menu: any, i: number) => <div key={`menu-${i}`} className={'menu-item'}><a
      href={`#${menu.url}`}>{menu.label}</a></div>)
  };
  getMobileMenus = () => {
    const {menus, selectedMenu} = this.state;
    const style = selectedMenu ? {height: 79} : {height: 0};
    return menus.map((menu: any, i: number) => <li style={style} key={`menu-${i}`} className={'menu-item'}>
      <a onClick={this.selectMenu} href={`#${menu.url}`}>{menu.label}</a></li>)
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
