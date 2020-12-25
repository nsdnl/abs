import React, { PureComponent } from 'react';

export class FooterComponent extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      sections: [
        {title: 'COMPANY', items: [
            {label: 'About Us'},
            {label: 'About Us'},
            {label: 'About Us'},
            {label: 'About Us'},
          ]},
        {title: 'OPEN HOURS', items: [
            {label: 'Monday 11am-7pm'},
            {label: 'Tuesday-Friday 11am-8pm'},
            {label: 'Saturday 1-am-6pm'},
            {label: 'Sunday 11am-6am'},
          ]},
        {title: 'RESOURCES', items: [
            {label: 'About Us'},
            {label: 'About Us'},
            {label: 'About Us'},
            {label: 'About Us'},
          ]}
      ]
    };
  }

  getSections = () => {
    const {sections} = this.state;
    return sections.map((section: any, i:number) => {
      return <div key={`section-${i}`} className={'footer-section'}>
        <label>{section.title}</label>
        <ul className={'section-list'}>
          {section.items.map((item:any, j: number) => <li key={`section-item-${j}`}>{item.label}</li>)}
        </ul>
      </div>
      })
  };

  render(): React.ReactNode {
    return <div className={'footer'}>
      <div className={'footer-content'}>{this.getSections()}</div>
      <div className={'footer-copy'}><i>Copyright @2020 All rights reserved to AdvanceBodySystem</i></div>
    </div>
  }
}
