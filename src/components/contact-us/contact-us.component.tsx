import { Component } from 'react';
import styled from 'styled-components';

export class ContactUsComponent extends Component<any, any> {
    ownerPhone = '+31617709888';
    ownerEmail = 'khivo@advancedbodysystem.com';
    errorText = 'Invalid value';
    errorTextEmail = 'Invalid email address';
    errorTextEmailDt = 'Ongeldig e-mailadres';
    requiredText = 'Please input value';
    requiredTextDt = 'Voer een waarde in';
    showTrialTxt = false;

    constructor(props: any) {
        super(props);
        const language = localStorage.getItem('__ln') || '';
        this.state = {
            mainTitle: 'DIVINATION',
            mainTitleDt: 'WAARZEGGERIJ',
            dutchPhone: 'Phone',
            dutchPhoneDt: 'Tel',
            language,
            trialBtnText: 'FREE 1 trial PT sessions',
            trialBtnTextDt: 'Gratis 1 proef sessie',
            hiddenTxt: `Upon completion of any Life Enhancer, the participant will not be billed for the
trial session which took place at the beginning. If the participant did not complete the Life Enhancer
program, the trial pt session is €45,- ex VAT.`,
            hiddenTxtDt: `Na voltooiing van een Life Enhancer, wordt de deelnemer niet gefactureerd voor de
proefsessie die aan het begin plaatsvond. Als de deelnemer de Life Enhancer niet heeft voltooid
programma, de proef pt sessie is € 45, - ex btw.
`,
            title: `DROP US A LINE`,
            titleDt: `LAAT EEN BERICHT ACHTER`,
            subTitleDutch: `Heb je een brandende vraag na het lezen van het gehele site?
Laat dan je contact gegevens achter en wij sturen jou z.s.m een antwoord`,
            subTitle: `Want to be eligible for 1 free personal training trial session? <br /> Signup now and take advantage of the introduction to what Advanced Body System
has to offer you.`,
            subTitleDt: `Wil je in aanmerking komen voor 1 gratis proefsessie personal training? <br /> Schrijf u nu in en profiteer van de introductie tot welk Advanced Body System
u te bieden heeft.`,
            fields: [
                {label: 'If you have any questions don’t hesitate to ask', labelDt: 'Mocht u nog vragen hebben, stel ze dan gerust', value: ''},
                {label: 'Name', labelDt: 'Naam', value: '', required: true},
                {label: 'Mobile', labelDt: 'Mobiele nr', value: '', required: true},
                {label: 'Email', labelDt: 'Email adres', value: '', type: 'mobile', required: true},
                {label: 'Question', labelDt: 'Vraag', value: '', type: 'textarea'}
            ]
        }
    }

    handleFocus = (f: any, i: number) => {
        const {fields} = this.state;
        fields[i].focus = true;
        this.setState({fields});
    };

    handleBlur = (f: any, i: number) => {
        const {fields} = this.state;
        const field = fields[i];
        if (!field.value) {
            field.focus = false;
        }
        field.touched = true;
        this.handleChange(f, field.value);
    };

    handleChange = (f: any, value: string) => {
        const {fields, language} = this.state;
        f.value = value;
        if (!f.value && f.required) {
            f.error = language === 'Dt' ? this.requiredTextDt : this.requiredText;
        } else if (f.type === 'mobile' && f.touched) {
            if (/^\S+@\S+\.\S+$/.test(f.value)) {
                f.error = undefined;
            } else {
                f.error = language === 'Dt' ? this.errorTextEmailDt : this.errorTextEmail;
            }
        } else {
            f.error = undefined;
        }
        this.setState({fields});
    };

    getField = () => {
        const {fields, language} = this.state;
        return fields.map((field: any, i: number) => {
            return <div className={`field-row ${field.focus ? 'focused' : ''} ${field.error ? 'error' : ''}`}
                        key={`field_${i}`}>
                <label>{field[`label${language}`]}</label>
                {field.type !== 'textarea' && <input onChange={(ev: any) => this.handleChange(field, ev.target.value)}
                                                     onFocus={() => this.handleFocus(field, i)}
                                                     onBlur={() => this.handleBlur(field, i)}/>}
                {field.type === 'textarea' && <textarea onChange={(ev: any) => this.handleChange(field, ev.target.value)}
                                                     onFocus={() => this.handleFocus(field, i)}
                                                     onBlur={() => this.handleBlur(field, i)}/>}
                {field.error && <span className={'error-txt'}>{field.error}</span>}
            </div>
        })
    };

    handleSubmit = (ev: any) => {
        ev.preventDefault();
        const {fields, language} = this.state;
        fields.forEach((field: any) => {
            if (!field.value && field.required) {
                field.error = language === 'Dt' ? this.requiredTextDt : this.requiredText;
            }
        });
        const hasError = fields.find((field: any) => field.error);
        if (!hasError) {
            console.log('handleSubmit >>> ');
        } else {
            this.setState({fields});
        }
    };

    getContactForm = () => {
        const {language} = this.state;
        return <div className={'content'}>
            <form onSubmit={this.handleSubmit}>
                {this.getField()}
                <div className={'action'}>
                    <button type={'submit'}
                            className={'submit-btn'}>{language === 'Dt' ? 'Indienen' : 'Submit'}</button>
                </div>
            </form>
        </div>;
    };


    toggleTrialText = () => {
        this.setState({showTrialTxt: !this.state.showTrialTxt});
    };

    getSideBar = () => {
        const {showTrialTxt, language} = this.state;
        const state = this.state;
        return <div className={'side-bar'}>
            <div className={'side-header'}>{state[`title${language}`]}</div>
            <div className={'side-content'}>
                <a href={`tel:${this.ownerPhone}`}>
                    <span>&#x0260E; :- </span>
                    {this.ownerPhone} <span className={'sm-txt'}>( 08:00 - 17:00 )</span>
                </a>
                <div><a
                    href="mailto:khivo@advancedbodysystem.com?body='dummy body'&subject='dummy subject'">&#9993;: {this.ownerEmail}</a>
                </div>
            </div>
            <a className={'side-badge'} onClick={this.toggleTrialText}>
                <label>{state[`trialBtnText${language}`]}</label>
            </a>
            {showTrialTxt && <div className={'trial-msg'}>
                <label>{state[`hiddenTxt${language}`]}</label>
            </div>}
        </div>
    };

    render(): React.ReactNode {
        const {language} = this.state;
        const state = this.state;
        return <Wrapper>
            <div className={'header'}>{state[`mainTitle${language}`]}</div>
            <div dangerouslySetInnerHTML={{__html: state[`subTitle${language}`]}} />
            {this.getContactForm()}
            {this.getSideBar()}
        </Wrapper>
    }
}

const Wrapper = styled.div`
  padding: 50px;
  background-color: #2323239e;
  position: relative;

  .header {
    text-transform: uppercase;
    font-size: 2.5rem;
    letter-spacing: 16px;
  }
  
  .content {
    width: 50%;
    
    .field-row {
      height: 80px;
      position: relative;
      
      label {
        font-size: 1rem;
        position: absolute;
        top: 13px;
        letter-spacing: 1px;
        transition: all 0.1s ease-in-out;
        transform-origin: left;
      }
      input, textarea {
        border: none;
        border-bottom: 1px solid white;
        padding-bottom: 10px;
        margin-top: 10px;
        width: 100%;
        background-color: transparent;
        color: white;
        outline: none;
        font-size: 1rem;
      }
      
      &.error {
        input, textarea {
          border-color: red;
        }
        .error-txt {
          color: red;
          position: absolute;
          left: 0;
          bottom: 10px;
        }
      }
      
      &.focused {
        label {
          opacity: 0.6;
          transform: scale(0.9) translateY(-24px);
        }
        input {}
      }
      
    }
    
    .action {
      text-align: right;
      
      .submit-btn {
        padding: 10px;
        width: 100px;
        border: 1px solid white;
        background: transparent;
        color: white;
        cursor: pointer;
        margin-top: 20px;
        
        &:hover {
          background: white;
          color: #666;
        }
      }
    }
  }
  
  .side-bar {
    position: absolute;
    background: red;
    right: 0;
    bottom: 0;
    padding: 20px 32px 30px 32px;
    width: 300px;
    
    .side-header {
      font-size: 2rem;
      font-weight: 500;
    }
    .side-content {
      font-size: 1.5rem;
      
      a {
        text-decoration: none;
        color: white;
        
        
        .sm-txt {
          font-size: 1rem;
        }
      }
    }
    .side-badge {
      padding: 10px;
      cursor: pointer;
      background: white;
      display: block;
      color: #111;
      letter-spacing: 1px;
      text-align: center;
      box-shadow: 0px 6px 16px #2d2d2d;
      margin-top: 30px;
      
      &:hover {
        background: #dcdcdc;
      }
      &:active {
        background: grey;
      }
      label {
        cursor: pointer;
      }
    }
  }
  
  @media only screen and (max-width: 500px) {
    padding: 20px 10px;
    .header {
    }
    
    .content {
      width: 100%;
      margin-bottom: 20px;
      .field-row {
        
      }
    }
    
    .side-bar {
      position: static;
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      
      .side-header {
      
      }
      .side-content {
        
      }
      .side-badge {
        label {
          
        }
      }
    }
  }
`;