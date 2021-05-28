import React, { PureComponent } from 'react';

export class FooterComponent extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);
        const language = localStorage.getItem('__ln') || '';
        this.state = {
            language,
            sections: [
                {
                    title: 'COMPANY', titleDt: 'BEDRIJF', items: [
                        {label: 'About Us', labelDt: 'Over ons', url: '#/about-us'},
                        {label: 'Contact', labelDt: 'Contact', url: '#/contact-us'},
                        {label: 'FAQ', labelDt: `Veel gestelde vragen`, url: '#/faq'},
                        // {label: 'Careers', labelDt: 'Carrière', url: '#/careers'},
                    ]
                },
                {
                    title: 'TRAINING HOURS', titleDt: 'WERKTIJDEN', items: [
                        {label: 'Monday ( 09:00 - 11:30, 12:30 - 19:30 )', labelDt: 'Maandag ( 09:00 - 11:30, 12:30 - 19:30 )'},
                        {label: 'Tuesday ( 09:00 - 11:30, 12:30 - 19:30 )', labelDt: 'Dinsdag ( 09:00 - 11:30, 12:30 - 19:30 )'},
                        {label: 'Wednesday ( 09:00 - 20:00 )', labelDt: 'Woensdag ( 09:00 - 20:00 )'},
                        {label: 'Thursday ( 09:00 - 11:30, 12:30 - 19:30 )', labelDt: 'Donderdag ( 09:00 - 11:30, 12:30 - 19:30 )'},
                        {label: 'Friday ( 09:00 - 11:30, 12:30 - 19:30 )', labelDt: 'Vrijdag ( 09:00 - 11:30, 12:30 - 19:30 )'},
                        {label: 'Saturday ( no training )', labelDt: 'Zaterdag ( no training )'},
                        {label: 'Sunday ( 09:30 - 15:00 )', labelDt: 'Zondag ( 09:30 - 15:00 )'},
                    ]
                },
                // {
                //     title: 'RESOURCES', titleDt: 'BRONNEN', items: [
                //         {label: 'Partners', disabled: true, labelDt:'Partners', url: '#/partners'},
                //         {label: 'Equipment', disabled: true, labelDt: 'Artikelen', url: '#/equipment'}
                //     ]
                // }
            ]
        };
    }

    getSections = () => {
        const {sections, language} = this.state;
        return sections.map((section: any, i: number) => {
            return <div key={`section-${i}`} className={'footer-section'}>
                <label>{section[`title${language}`]}</label>
                <ul className={'section-list'}>
                    {section.items.map((item: any, j: number) => <li key={`section-item-${j}`} className={`${item.disabled ? 'disabled': ''}`}>
                        {item.disabled && <span>{item[`label${language}`]}</span>}
                        {!item.disabled && (item.url ? <a href={item.url}>{item[`label${language}`]}</a> : <span>{item[`label${language}`]}</span>)}
                    </li>)}
                </ul>
            </div>
        })
    };

    render(): React.ReactNode {
        return <div className={'footer'}>
            <div className={'footer-content'}>{this.getSections()}</div>
            <div className={'footer-copy'}><i style={{'color': "white"}}>Copyright @2020 All rights reserved to AdvanceBodySystem</i></div>
        </div>
    }
}
