import React, { Component } from 'react';
import styled from 'styled-components';

export class TestimonialsComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedItem: 1,
      items: [
        {
          text: 'Advanced Body System envisions working with various professionals to offer the best tailor made service to achieve fitness success. The main aim of Advanced Body System is to focus and improve the health span of',
          name: 'William Smith',
          selected: true,
          type: 'Life',
          id: 1
        },
        {
          text: 'Advanced Body System envisions working with various professionals to offer the best tailor made service to achieve fitness success. The main aim of Advanced Body System is to focus and improve the health span of',
          name: 'William Smith',
          type: 'Fat',
          id: 2
        },
        {
          text: 'Advanced Body System envisions working with various professionals to offer the best tailor made service to achieve fitness success. The main aim of Advanced Body System is to focus and improve the health span of',
          name: 'William Smith',
          type: 'Life',
          id: 3
        }
      ]
    };
  }

  getTestimonials = (isMobile?: boolean) => {
    const {items, selectedItem} = this.state;
    return <div className={`testi-wrapper ${isMobile ? 'on-mobile' : ''}`}>
      {items.map((item: any, i: number) => {
        const offset = isMobile ? 100 : 50;
        const style = {left: `${offset - ((selectedItem - (i)) * offset)}%`};
        return <div className={'testi-content'} style={style} key={`item-${i}`}>
          <div className={'testi-avatar'}></div>
          <div>{item.text}</div>
          <div className={'testi-owner'}>
            <span className={'t-name'}>{item.name}</span>
            <span className={'t-type'}>{item.type}</span>
          </div>
        </div>
      })}
    </div>

  };

  onStepChange = (step: any) => {
    const {items} = this.state;
    items.forEach((item: any) => {
      item.selected = item.id === step.id;
    });
    this.setState({items, selectedItem: step.id});
  };

  getSteps = (isMobile?: boolean) => {
    const {items} = this.state;
    return <div className={`step-wrapper`}>
      {items.map((item: any, i: number) => {
        return <div key={`step-${i}`} className={`step ${item.selected ? 'selected' : ''}`}
                    onClick={() => this.onStepChange(item)}/>
      })}
    </div>
  };

  render() {
    return (
      <TestiWrapper>
        <div className={'testimonials'}>
          <div className={'testi-title'}>Testimonials</div>
          {this.getSteps()}
          {this.getTestimonials()}
          {this.getTestimonials(true)}
        </div>
      </TestiWrapper>
    );
  }
}

const TestiWrapper = styled.div`
  text-align: center;
  padding: 100px 0 20px;
  width: 80%;
  margin: 0 auto;
  
  .step-wrapper {
    display: flex;
    justify-content: center;
    margin: 16px 0;
    
    .step {
      width: 10px;
      height: 10px;
      background-color: red;
      border-radius: 50%;
      cursor: pointer;
      margin-left: 10px;
      transition: all 0.2s ease-in-out;
      
      &.selected {
       transform: scale(1.4);
      }
    }
  }
  
  .t-type {
    border: 1px solid red;
    padding: 3px 5px 0;
    border-radius: 4px;
    line-height: 20px;
    text-transform: uppercase;
    float: right;
    background: red;
    color: white;
  }
  
  .t-name {
    border: 1px solid #7f85a2;
    padding: 3px 5px 0;
    border-radius: 4px;
    line-height: 20px;
    text-transform: uppercase;
    float: left;
    background: #7f85a2;
    color: white;
  }
  
  .testi-title {
    font-size: 40px;
    letter-spacing: 7px;
    text-transform: uppercase;
    line-height: 40px;
  }
  .testi-wrapper {
    position: relative;
    height: 180px;
    margin: 16px;
    overflow: hidden;
    box-sizing: border-box;
    
    &.on-mobile {
      display: none;
    }
    
    .testi-content {
      width: 50%;
      position: absolute;
      display: inline-block;
      font-size: 1rem;
      padding: 0 30px 0 80px;
      margin-top: 20px;
      text-align: left;
      box-sizing: border-box;
      left: 0%;
      transition: all 0.5s cubic-bezier(0.74, 0.18, 0.43, 0.96);
      
      
      .testi-avatar {
        position: absolute;
        left: 0;
        background-color: #7f85a2;
        width: 60px;
        height: 60px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        border: 2px solid #2b2e3e;
      }
      
      .testi-owner {
          font-weight: 500;
          margin-top: 5px;
      }
    }
  }
  
  
  @media only screen and (max-width: 500px) { 
    padding: 40px 0;
    width: 100%;
    margin: 0 auto;
    
    .step-wrapper {
      
    }
    
    .testi-title {
    }
    .testi-wrapper {
       display: none;
        
      &.on-mobile {
        display: flex;
      }
      
      .testi-content {
        width: 100%;
        
        .testi-avatar {
        }
        
        .testi-owner {
        }
      }
    } 
  }
  
  
`;