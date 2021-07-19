import React, { PureComponent } from 'react';

export class HomeComponent extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);
        const language = localStorage.getItem('__ln') || '';
        this.state = {
            language: language,
            tagLine: '"The experts who help you achieve your unattainable."',
            tagLineDt: '"Dé expert die jou het onbereikbare helpt bereiken."',
            slides: [
                {
                    title: 'With Khivo',
                    titleDt: 'Met Khivo',
                    label: 'Advanced Body System has an experience of more than 15 years in the fitness industry.',
                    labelDt: 'ADVANCED BODY SYSTEM HEEFT MEER DAN 15 JAAR ERVARING IN DE FITNESS INDUSTRIE.',
                    active: true
                },
                {
                    title: 'With Khivo',
                    titleDt: 'Met Khivo',
                    label: 'THE AIM OF ADVANCED BODY SYSTEM IS TO PROVIDE a COMPREHENSIVE APPROACH to FITNESS FOR LONGEVITY AND SUSTAINABILITY.',
                    labelDt: 'HET DOEL VAN ABS IS OM DOOR MIDDEL VAN EEN UITGEBREIDE AANPAK TE ZORGEN VOOR gedegenheid EN duurzaamheid in jouw leven.'
                },
                // {
                //     title: 'With Khivo',
                //     titleDt: 'Met Khivo',
                //     label: 'We achieve this by taking an integrated approach to the wellness of our clients which includes advising on lifestyle, healthy eating and stress management.',
                //     labelDt: 'Wij bereiken dit door een geïntegreerde aanpak van het welzijn van onze cliënten dit omvat adviseren op het gebied van levensstijl, gezond eten en stress beheer.'
                // },
            ],
            selectedSlide: 1
        }

        const width = window.innerWidth;
        if (width <= 500) {
            const slides = this.state.slides;
            slides.splice(0, 0, {
                title: 'With Khivo',
                titleDt: 'Met Khivo',
                label: '"The experts who help you achieve your unattainable."',
                labelDt: '"Dé expert die jou het onbereikbare helpt bereiken."',
                special: true,
                active: true
            });
        }
    }

    componentDidMount(): void {
        setInterval(() => {
            this.updateSlidePosition();
        }, 5000);
    }

    updateSlidePosition(selected?: number) {
        if (selected !== undefined) {
            this.setState({selectedSlide: selected});
            return;
        }
        let {selectedSlide, slides} = this.state;
        if (selectedSlide >= slides.length) {
            selectedSlide = 1;
        } else {
            selectedSlide++;
        }
        this.setState({selectedSlide})
    }

    getSlides = () => {
        const {slides, selectedSlide, language} = this.state;
        return slides.map((slide: any, i: number) => {
            const left = (i + 1 - selectedSlide) * 100;
            const style = {left: left + '%'};
            return <div className={'home-slide'} style={style} key={`slide-${i}`}>
                <div className={'home-signature'}><span></span>{slide[`title${language}`]}</div>
                <h1>{slide[`label${language}`]}</h1>
            </div>
        });
    };

    render(): React.ReactNode {
        const language = this.state.language;
        return <div className={'home-page'}>
            <div className={'home-content'}>
                <div className={'home-slides-container'}>
                    {this.getSlides()}</div>
            </div>
            <div className={'home-filler'}></div>
            <div className={'home-msg'}>
                <h3>{this.state[`tagLine${language}`]}</h3>
            </div>
            <div className={'home-actions'}></div>
        </div>
    }
}