import React, { Component } from 'react';
import styled from 'styled-components';

export default class PackageComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    const language = localStorage.getItem('__ln') || '';
    this.state = {
      language,
      title: 'More than just fitness',
      titleDt: 'MEER DAN ALLEEN FITNESS',
      subTitle: 'Assisting you to fit the success',
      subTitleDt: 'Helpt u om het succes te passen',
      intro: `At Advanced Body System we look together with you for a sustainable and enjoyable level of activity to
                make you feel great and keep you going.`,
      introDt: `Samen met jou kijken naar een duurzaam en genietbaar niveau van activiteit om te zorgen dat jij je geweldig voelt zodat jij.`,
      packages: [
        {
          title: 'Advanced Body',
          titleDt: 'Advanced Body',
          id: 1,
          price: '$ 65',
          content: [
            {label: '1 on 1 training', labelDt: '1 op 1 training'},
            {label: 'Access to  ABS app', labelDt: '1 tot 4 sessies per week'},
            {label: 'Customised training approach', labelDt: 'Opmaat gemaakte trainings aanpak'},
            {label: 'Personalised nutrition', labelDt: 'Gepersonaliseede voeding'},
            {label: 'progress monitoring', labelDt: 'Vooruitgang toezicht '},
          ],
          moreText: 'I want more',
          detail: 'Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum'
        },
        {
          title: 'Advanced Duo/clique',
          titleDt: 'Advanced Duo/clique',
          price: '$ 65',
          id: 2,
          selected: true,
          content: [
            {label: 'Train together with your friend', labelDt: 'Samen trainen met een gelijk gestemde vriend'},
            {label: 'Access to  ABS app', labelDt: '2 sessies per week'},
            {label: 'Fun training program', labelDt: 'Trainingsaanpak vol '},
            {label: 'Personalised nutrition', labelDt: 'Gepersonaliseede voeding'},
            {label: 'progress monitoring', labelDt: 'Vooruitgang toezicht '},
          ],
          moreText: 'I want more',
          detail: 'Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum'
        },
        {
          title: 'Advanced abbo',
          titleDt: 'Advanced abonnement/ 24-7',
          price: '$ 65',
          id: 3,
          content: [
            {label: 'Personalised nutrition', labelDt: 'train wanneer het jou schikt'},
            {label: 'Progress monitoring', labelDt: '12 weken complete programma’s'},
            {label: 'Train in your own time', labelDt: 'online advies van onze personal trainers'},
            {label: '12 weeks complete program'},
            {label: '2 sessions with Personal Trainer*'}
          ],
          moreText: 'I want more',
          detail: 'Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum'
        }
      ],
      price: '$ 59/MO',
      priceDt: 'Vanaf 59/maand',
      priceTxt: `Your fitness journey begins by choosing one of packages .
              When you have made a choice we will assess your fitness level. Don’t worry this is a test you can’t fail.
              This test we will repeat monthly or so to keep of the improvement. Each package is specifically made for
              you with the objective to alter behaviour and change your approach towards exercise.`,
      priceTxtDt: `Wanneer je een keuze hebt gemaakt beoordelen wij jouw fitness niveau. Maak je geen zorgen je kunt niet falen voor deze test. Deze aan jou aangepaste test wordt maandelijks herhaald om vooruitgang bij te houden. Elke pakket is opmaat gemaakt met als doel het veranderen van jouw  gedrag en benadering naar oefeningen.`,
      memberTxt: `Do you want / if you want to fit in that pair of jeans, get rid of flabby arms, get lean muscles or you are happy as you are but want a lifestyle that is healthier, ABS is the best choice for you. We all want to live our best lives and feel great doing it but with your hectic schedule, you might find it difficult to achieve your fitness goals and get fighting fit. We at ABS offer flexibility to reach your maximum potential with a variety of live, online, and a customised personal training lifestyle enhancers.`,
      memberTxtDt: `Wil je in die spijkerbroek passen, slappe armen wegwerken, magere spieren krijgen of ben je gelukkig zoals je bent maar wil je een gezondere levensstijl, dan is ABS de beste keuze voor jou. We willen allemaal ons beste leven leiden en ons er goed bij voelen, maar met je hectische schema vind je het misschien moeilijk om je fitnessdoelen te bereiken en fit te worden. Wij bij ABS bieden flexibiliteit om uw maximale potentieel te bereiken met een verscheidenheid aan live, online en op maat gemaakte persoonlijke levensstijlverbeteraars`,
      groups: [
        {label: '1 : 1', labelDt: '1 : 1', description: `Invest in your health with a personal trainer from ABS who will offer you individual expert advice.
              The specific methods are safe and suitable for whatever your goals or fitness level. (insert funny joke)
              We pride our self in keeping you motivated with our training methods with a healthy dose of
              accountability.
              Our arsenal of knowledge will give you fresh ideas and inspiration for years to come.`, descriptionDt: `Investeer in je gezondheid met een personal trainer van ABS die jou individueel professioneel advies biedt.
The specifieke methodes zijn veilig en geschikt voor alle fitness niveaus en doelen. Wij zijn trots op het feit dat we jou gemotiveerd houden met onze trainingsmethode gepaard met een gezonde doses verantwoording. Ons arsenaal aan kennis geven jou nieuwe ideeën en inspiratie voor de komen jaren.
`},
        {label: 'Nutrition', labelDt: 'Voeding', description: `Making an exact nutrition plan is not difficult however making it personal to you and your life is not.To
              achieve your goals we need to find out why you are eating the way you do. This approach will
              systematically change your lifestyle and in turn come closer to a healthier you. We understand that diets
              are temporary and not sustainable on the long-term. We strive towards working closely with you to find an
              eating pattern which works for you and your busy life.`, descriptionDt: `Het maken van een voedingsschema is niet moeilijk echter het persoonlijk maken voor jou en je leven daarentegen wel. Om je fitness doelen te halen moeten we achterhalen waarom jij eet zoals je nu eet. Deze aanpak zal systematisch je levensstijl veranderen met als gevolg een gezondere versie van jezelf.
Wij begrijpen dat diëten tijdelijk zijn en niet duurzaam is op de lange termijn. Samen met jou streven we er naar om een eetpatroon te vinden dat werk aan aansluit op je drukke leven.`},
        {label: 'Challenge', labelDt: 'Challenge/uitdaging', description: `Weekly challenges for you and a friend to compete head to head.
              Whether you’re looking for an indoor training or outdoor we design the right training to achieve your
              goals.
              If you are looking for fun with a friends this is for you!`, descriptionDt: `Je neemt het op tegen een vriend in deze wekelijkse uitdagingen. Als je opzoek bent voor een binnen of openlucht training, wij ontwerpen de gepaste training om dichterbij je doelen te komen. Ben je opzoek naar en leuke uitdagende training samen met een vriend dan is dit voor jou. `},
        {label: 'Advanced app', labelDt: 'Advanced app', description: `Use the ABS app in combination of the Life Enhancers or training on your own. With your training results and nutritional input, we will go for maximum accountability. You can log in to see your new weekly tailored training program and if you want your eating plan. You won’t ever have to guess what you have to do. Just log and see what we have in store for you to achieve your goals.`,
          descriptionDt: `Gebruik de ABS app om wanneer het jou schikt of in om combinatie met een van de Life Enhancers. Met jou ingevoerde trainings- en voedingsresultaten gaan we voor maximale verantwoording. Log in om je wekelijkse opmaat gemaakte trainingsprogramma en eetschema te zien.  Je hoeft nooit meer te gissen naar wat je moet doen. Gewoon inloggen en kijken wat wij voor jou klaar hebben staan om je onbereikbare te bereiken.`}
      ]
    };
  }

  expandPackage = (pkg: any, index: number) => {
    pkg.expand = !pkg.expand;
    this.setState({});
  };

  selectPackage = (pkg: any, selected: boolean) => {
    const {packages} = this.state;
    packages.forEach((pk: any) => {
      if (pkg.id === pk.id) {
        pk.selected = selected;
      } else {
        pk.expand = false;
        pk.selected = false;
      }
    });
    this.setState({packages});
  };

  getPackagesWidget = () => {
    const {packages, language} = this.state;
    return <div className={'pk-packages'}>
      {packages.map((pkg: any, i: number) => {
        return <div className={`pk-package ${pkg.selected ? 'selected': ''}`} key={`pkd_${i}`}>
          <div className={'package-title'}>{pkg[`title${language}`]}</div>
          <div><span>{pkg.price}</span></div>
          <ul className={'package-content'}>
            {pkg.content.map((cn: any, j: number) => {
              return <li key={`pkd_li-${j}`}>{cn[`label${language}`]}</li>
            })}
          </ul>
          <div className={`package-footer ${pkg.expand ? 'expand' : ''}`} onClick={() => this.expandPackage(pkg, i)}>
            {(!pkg.expand || !pkg.selected) && <span onClick={() => this.selectPackage(pkg, true)} className={'read-more'}>More info...</span>}
            {pkg.expand && pkg.selected && <>
              <div className={'package-content-detail'}>{pkg[`detail${language}`]}</div>
              <span className={'read-more'} onClick={() => this.selectPackage(pkg, false)}>Read less...</span></>}
          </div>
        </div>
      })}
    </div>
  };

  getGroups = () => {
    const {language, groups} = this.state;
    return <div className={'pk-panel-5'}>{groups.map((gp: any, i: any) => {
      return <div className={'pk-floating-content'}>
        <div className={'floating-title'}>{gp[`label${language}`]}</div>
        <div className={'floating-txt'}>
         {gp[`description${language}`]}
        </div>
      </div>
    })}</div>
  }

  render(): React.ReactNode {
    const {title, subTitle, language} = this.state;
    const state = this.state;
    return <PackageWrapper>
      <div className={'pk-content-1'}>
        <div className={'pk-panel-1'}>
          <img src={'profile1.jpeg'} alt={'ims'}/>
        </div>
        <div className={'pk-panel-2'}>
          <div className={'pk-panel-2-content'}>
            <div className={'main-title'}>{state[`title${language}`]}</div>
            <div className={'sub-title'}>{state[`subTitle${language}`]}</div>
            <div className={'top-content'}>
              <p className={'top-content-txt'}>
                {state[`intro${language}`]}
              </p>
              {/*<ul>*/}
              {/*<li>Sample line text</li>*/}
              {/*<li>Sample text</li>*/}
              {/*<li>Sample text line</li>*/}
              {/*<li>Sample text line</li>*/}
              {/*<li>Fifth line</li>*/}
              {/*</ul>*/}
            </div>
          </div>
          <div className={'pk-panel-3'}>
            <div className={'title-3'}>{state[`price${language}`]}</div>
            <div className={'txt-3'}>
              {state[`priceTxt${language}`]}
            </div>
          </div>
        </div>
      </div>

      <div className={'pk-content-2'}>

        <div className={'pk-panel-4'}>
          <div className={'pk-title'}>{language === 'Dt' ? 'Lidmaatschappen' : 'memberships'}</div>
          <div className={'pk-title-sub'}>{state[`memberTxt${language}`]}
          </div>
          {this.getPackagesWidget()}
        </div>

        {this.getGroups()}
        <div></div>
      </div>
    </PackageWrapper>
  }

}

const PackageWrapper = styled.div`
  position: 'relative';
  background-color: white;

  div {
  }
  .pk-content-1 {
    width: 100%;
    display: flex;
    
    .pk-panel-1 {
      width: 50%;
      
      img {
        width: 100%;
        height: 100%;
      }
    }
    
    .pk-panel-2 {
      width: 50%;
      color: #333;
      text-align: center;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      
      .pk-panel-2-content {
        padding: 50px;
      }
      
      .main-title {
        font-size: 3rem;
        // letter-spacing: 16px;
        color: #333;
        text-transform: uppercase;
      }
      .sub-title {
        font-weight: 500;
        border-bottom: 2px solid #e22020;
        display: inline-block;
        line-height: 1.5rem;
        margin-bottom: 30px;
      }
      .top-content {
        font-size: 1rem;
        
        .top-content-txt {
          width: 260px;
          margin: 0 auto;
        }
      }
    }
    
    
    .pk-panel-3 {
      text-align: center;
      background-color: #e22020;
      padding: 30px 5%;
      flex: 1;
      color: white;
      
      .title-3 {
        font-size: 2.5rem;
        letter-spacing: 5px;
      }
      
      .txt-3 {
        padding: 0 40px;
      }
    }
  }
  
  .pk-content-2 {
    width: 100%;
    background-color: #e22020;
    
    .pk-panel-4 {
      text-align: center;
      padding: 30px;
      
      .pk-title {
        text-transform: uppercase;
        font-size: 2rem;
        letter-spacing: 5px;
        display: inline;
        padding: 0 5%;
        border-bottom: 1px solid #f77f7f;
      }
      
      .pk-title-sub {
        font-size: 1rem;
        margin-top: 5px;
        width: 60%;
        margin: 0 auto;
      }
    
      .pk-packages {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 20px;
        
        
        .pk-package {
          width: 230px;
          margin-right: 24px;
          margin-top: 24px;
          background-color: white;
          text-align: center;
          padding: 30px;
          display: flex;
          flex-direction: column;
          background-color: white;
          color: #333;
          border-radius: 5px;
          box-shadow: -2px 5px 12px 3px #a92626;
          transition: all 0.4s ease-in-out;
          
           &.selected {
            transform: scale(1.2);
            background: #fff;
            color: #3a3a3a;
          }
          
          ul {
            padding-left: 40px;
          }
          li {
            list-style-type: disc;
          }
        }
        
        .package-title {
          color: #e22020;
          text-transform: uppercase;
          word-spacing: 5px;
        }
        .package-content {
          flex: 1;
          text-align: left;
        }
        .package-footer {
          color: #111;
          display: inline-block;
          margin-top: 20px;
          padding: 0 10px;
          line-height: 1rem;
          text-align: left;
          
          &.expand {
            font-weight: 100;
            font-size: 20px;
            line-height: 1.5rem;
          }
          
          .read-more {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
    .pk-panel-5 {
      padding: 30px;
      display: flex;
      flex-wrap: wrap;
        
      .pk-floating-content {
        padding: 30px;
        margin: 30px 30px 0 0;
        border-radius: 5px;
        display: inline-block;
        box-sizing: border-box;
        width: calc(50% - 30px);
        box-shadow: -2px 5px 12px 3px #a92626;
        transition: all 0.4s ease-in-out;
        transform-origin: bottom;
        
        &:hover {
          transform: scale(1.1);
          background: #fff;
          color: #3a3a3a;
        }
      }
      .floating-title {
        text-transform: uppercase;
        font-weight: 500;
      }
      .floating-txt {
        // font-size: 1.2rem;
        line-height: 1.5rem;
      }
    }
  }
  
  @media only screen and (max-width: 1023px) {
    
    .pk-content-2 .pk-panel-5 .pk-floating-content {
      // width: 100%;
    }
  }
  
  
  @media only screen and (max-width: 767px) {
    .pk-content-1 {
      display: block;
      
      .pk-panel-1 {
        display: none;
      }
      
      .pk-panel-2, .pk-panel-1 {
        width: 100%;
      }
      
      .pk-panel-2-content {
        background-image: url(profile6.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
      }
      
      .pk-panel-3 {
        padding: 10px;
        
        .txt-3 {
          padding: 0
        }
      }
    }
    
    .pk-content-2 .pk-panel-5 {
      padding: 0;
      .pk-floating-content {
        width: calc(100% - 20px);
        margin: 5px 10px;
      }
    }
    
    .pk-content-2 .pk-panel-4 {
      padding: 30px 0;
      .pk-packages .pk-package {
        width: 100%;
        margin: 5px 10px;
      }
      
      .pk-title-sub {
        width: 100%;
      }
    }
  }
`;