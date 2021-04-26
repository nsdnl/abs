import React, { Component } from "react";
import styled from "styled-components";


const EquipmentWrapper = styled.div`
    background-color: white;
    padding: 40px 0 0;
    color: #666;
`;

export class Equipment extends Component<any, any> {
    constructor(props: any) {
        super(props);
        const language = localStorage.getItem('__ln') || '';
        this.state = {
            language,
            title: 'Equipment',
            titleDt: 'Artikelen'
        }
    }

    componentDidMount(): void {
        const elm: any = document.scrollingElement;
        elm.scrollTop = 0;
    }

    render(): React.ReactElement{
        const {language} = this.state;
        const state = this.state;
        return <EquipmentWrapper>
            <h1 className={'title'}>{state[`title${language}`]}</h1>
        </EquipmentWrapper>
    }
}