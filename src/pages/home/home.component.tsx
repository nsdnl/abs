import React, { PureComponent } from 'react';

export class HomeComponent extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      slides: [
        {title: 'With Khivo', label: 'Build perfect body shape for good and healthy life.', active: true},
        {title: 'With Khivo', label: 'Build perfect body shape for good and healthy life.'},
        {title: 'With Khivo', label: 'Build perfect body shape for good and healthy life.'},
      ],
      selectedSlide: 1
    }
  }
  componentDidMount(): void {
    setInterval(() => {
      let {selectedSlide, slides} = this.state;
      if (selectedSlide >= slides.length) {
        selectedSlide = 1;
      } else {
        selectedSlide++;
      }
      this.setState({selectedSlide})
    }, 5000);
  }

  getSlides = () => {
    const {slides, selectedSlide} = this.state;
    return slides.map((slide: any, i:number) => {
      const left = (i + 1 - selectedSlide) * 100;
      const style = {left: left + '%'};
      return <div className={'home-slide'} style={style} key={`slide-${i}`}>
        <div className={'home-signature'}><span></span>{slide.title}</div>
        <h1>{slide.label}</h1>
      </div>
    });
  };

  render(): React.ReactNode {
    return <div className={'home-page'}>
      <div className={'home-content'}>
        <div className={'home-slides-container'}>
          {this.getSlides()}</div>
      </div>
      <div className={'home-actions'}></div>
    </div>
  }
}