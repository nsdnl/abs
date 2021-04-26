import React, { Component } from 'react';
import styled from 'styled-components';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

export class FeaturesComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    const language = localStorage.getItem('__ln') || '';
    this.state = {
      language,
      title: 'Life Enhancers',
      titleDt: 'Levensverbeteraars',
      features: [
        {
          label: 'Weight/Fat management',
          labelDt: 'Weight/Fat management',
          imgText: 'If weight is an issue this Lifestyle Enhancer will let you lose the excess weight and keep it off. We will combine sustainable training with nutritional adjustments to achieve the ideal weight.',
          imgTextDt: `Verminder maandelijks I tot 5 kg lichaamsvet efficiënt en veilig om het ideale gewicht
          te bereiken. Als gewicht een probleem is, zorgt deze Lifestyle Enhancer ervoor dat u
          het overtollige gewicht verliest en het er vanaf houdt. We zullen duurzame training
          combineren met voedingsaanpassingen om het ideale gewicht te bereiken. ABS heeft
          veel mensen geholpen vet te verbranden zonder de marteling van verhongeren.
          Waarschuwing: als je er niet uit wil zien als een ondergoedmodel, ga dan niet verder!`,
          img: 'features/feature1.jpeg',
          url: 'weight-fat-management',
          id: 1,
          description: 'hell this is sample text'
        },
        {
          label: 'Muscle building & strength training',
          labelDt: 'Muscle building & strength training',
          img: 'features/feature2.jpg',
          imgText: 'Gain significant muscle mass and get sculpted! Increase not only muscle mass but also look like a chiseled god. Only for those who want to look like a superhero saving the planet. Or a supervillain striking fear in your enemies.',
          imgTextDt: `Krijg aanzienlijke spiermassa en word ripped! Vergroot niet alleen de spiermassa, maar zie er ook uit
          als een gebeitelde god(in). Alleen voor degenen die eruit willen zien als een superheld die de planeet
          redt. Of een superschurk die angst inboezemt in je vijanden.`,
          url: 'muscle-strength',
          id: 'fat',
          description: 'hell this is sample text'
        },
        {
          label: 'Sport – Specific training',
          labelDt: 'Sport – Specific training',
          img: 'features/feature3.jpeg',
          imgText: `Enhance your power and stamina for a particular sport. Great for off-season training to not reduce performance when getting back on pitch, mat, or in the ring. We have a training customized for you.`,
          imgTextDt: `Verbeter uw kracht en uithoudingsvermogen voor een bepaalde sport. Geweldig voor
          trainingen buiten het seizoen om prestatievermindering tegen te gaan wanneer u
          weer op het veld, de mat of in de ring gaat. Wij hebben een training op maat voor jou.`,
          url: 'sport-specific-training',
          id: 3,
          description: 'hell this is sample text'
        },
        {
          label: 'Core conditioning',
          labelDt: 'Core conditioning',
          img: 'features/feature2.jpg',
          imgTextDt: `Bescherm uw lage rug, stabiliseer uw wervelkolom, versterk de buikspieren en leer de juiste houding
          terwijl u specifieke core oefeningen uitvoert ter bestrijding van een sedentaire levensstijl. Core training
          is een belangrijk onderdeel van alle Life Enhancers. In dit specifieke programma worden echter
          kernstabiliteit, veelzijdigheid en kracht benadrukt. Als zitten het nieuwe roken is, hoeveel uur zit u dan
          per dag? Om nog maar te zwijgen van de slechte zithouding vanaf ongeveer 10 uur &#39;s ochtends.`,
          imgText: `Protect your lower back, stabilize your spine, and learn proper posture while performing specific core exercises to a combat sedentary lifestyle.`,
          url: 'core-conditioning',
          id: 4,
          description: 'hell this is sample text'
        },
        {
          label: 'Senior fitness',
          labelDt: 'Senior fitness',
          img: 'features/feature3.jpeg',
          imgTextDt: `Stel het verouderingsproces uit en verbeter uw welzijn en kwaliteit van leven door deze
          trainingsprogramma&#39;s uit te voeren. Ontworpen voor doorgewinterde volwassenen van 55 jaar en
          ouder. Het plan op maat is bedoeld om u lichamelijk onafhankelijker te houden, zodat u optimaal van
          het leven kunt genieten. We leggen speciale nadruk op rekken, balans en functionele bewegingen om
          dagelijks te kunnen blijven doen waar je van houdt.`,
          imgText: `Delay the aging process and improve your well-being and quality of life by performing these workout programs. Designed for seasoned adults with special emphasis on stretching, balance, and functional movements. Those slackers only call you Boomer cause that is the sound of their jaws dropping to the floor seeing your ABS approves vigour and body.`,
          url: 'senior-fitness',
          id: 5,
          description: 'hell this is sample text'
        },
        {
          label: 'Metabolic conditioning ',
          labelDt: 'Metabolic conditioning ',
          img: 'features/feature2.jpg',
          imgTextDt: `Sommigen noemen het bootcamp of intervaltraining of zelfs metabolische conditionering. ABS
          Feeling alive is zoveel meer dan alleen intervaltraining of haastig wisselen van trainingsstation. We
          ontwerpen op maat een plan met een combinatie van de juiste cardio- en krachttrainingen. Geen twee
          plannen zijn hetzelfde. Verwacht niet dat u veel tijd zult besteden aan eindeloze, langzame
          cardiovasculaire training of ongeïnspireerde straight-set krachttrainingstrainingen. Bij ABS geven we
          een nieuwe draai aan intervaltraining om ervoor te zorgen dat je meer wilt zonder de blessures,
          omdat we de focus op JOU leggen. Laten we grenzen doorbreken, niet je rug.`,
          imgText: `Accelerate body fat loss by intermixing high-intensity with moderate-intensity levels with HIIT(high-intensity interval training). Not for the faint of heart.`,
          url: 'metabolic-conditioning',
          id: 6,
          description: 'hell this is sample text'
        },
        {
          label: 'Prenatal Workoutl',
          labelDt: 'Prenatal Workoutl',
          img: 'features/feature2.jpg',
          imgTextDt: `Zorg voor een gezonde zwangerschap door lichamelijk actief te blijven tijdens de
          zwangerschap, hierdoor kunt u, de aanstaande moeder, een laag risico patiënt
          blijven, waardoor u een breed scala aan opties voor de bevalling heeft. Het is een
          mix van cardiovasculaire oefeningen, kracht- en flexibiliteitstraining. Zodra uw arts
          heeft verklaard dat u niet tot een risicogroep behoort, kunnen we je reis beginnen.`,
          imgText: `Have a healthy pregnancy by staying physically active during pregnancy, this allows you, the mommy-to-be to remain low-risk patients, thereby allowing them a wide array of options for labor and delivery. It is a mix of cardiovascular, strength, and flexibility training!`,
          url: 'prenatal-workout',
          id: 7,
          description: 'hell this is sample text'
        },
        {
          label: 'Postnatal Workout',
          labelDt: 'Postnatal Workout',
          img: 'features/feature2.jpg',
          imgTextDt: `Gefeliciteerd, je hebt het gehaald, je bent een mama! Nu komt het moeilijke gedeelte. Terugkeren
          naar uw vorige fitnessniveau of beter is een prioriteit, maar u moet het langzaam aan doen. Je
          lichaam heeft zojuist een grote beproeving ondergaan tijdens de bevalling en de bevalling. U kunt zes
          tot acht weken na de bevalling beginnen met de postnatale training. Dit tijdsbestek is afhankelijk van
          het type levering dat u heeft gehad. Onze training legt niet alleen de nadruk op het verminderen van
          de scheiding van de linker en rechter buikwand, rectus diastase genaamd, maar ook cardio- en
          weerstandstraining op maat. Dit is de sleutel om je weer in vorm te krijgen en je goed te voelen
          zonder je bekkenbodem te belasten.`,
          imgText: `Starting six to eight weeks after delivery. You made it, you’re a mommy! Now comes the hard part. Getting back to your fitness level and then some. This workout emphasizes reducing the separation of the left and right abdominal wall called diastasis recti. After pregnancy cardio and resistance training is key to getting you back in shape and feeling great.`,
          url: 'postnatal-workout',
          id: 7,
          description: 'hell this is sample text'
        },
        {
          label: 'Daddy Special',
          labelDt: 'Daddy Special',
          img: 'features/feature2.jpg',
          imgTextDt: `Het krijgen van papa kracht is geen eenvoudig proces, maar het krijgen van een papa lichaam wel
          daarentegen. Weet je wel, de vaders die er mannelijk uitzien, maar (licht) overgewicht hebben. De
          fysieke sleur van het opvoeden van kinderen zal je met een indrukwekkende reeks pijntjes en kwalen
          achterlaten als je er niet op voorbereidt bent. Dus of je een nieuwe vader bent of in de nabije
          toekomst een aanwinst van vreugde verwacht, doe jezelf een plezier en bereidt je voor.`,
          imgText: `Achieving dad strength isn't an easy process but getting a dad body on the other hand is. The physical grind of child-rearing will leave you with an impressive array of aches and pains if you're not ready for it. So whether you’re a new father or if you're expecting a bundle of joy in the near future, do yourself a favor and get prepared!`,
          url: 'daddy-special',
          id: 7,
          description: 'hell this is sample text'
        }
      ]
    };
  }

  getFeatures = () => {
    const {features, language} = this.state;
    return features.map((feature: any, i: number) => {
      return <a className={'feature'} key={`feature-${i}`} href={`#/features-details/${feature.url}`}>
        <div className={'img-section'}>
          <img src={feature.img} alt={feature.alt}/>
          <div className={'img-text'}>{feature[`imgText${language}`]}</div>
        </div>
        <div className={'text-section'}>
          <div className={'l-text'}>{feature[`label${language}`]}</div>
          <div className={'r-text'}></div>
        </div>
      </a>
    })
  };

  render(): React.ReactNode {
    const state = this.state;
    return <FeaturesWrapper>
      <h1 className={'title'}>{state[`title${state.language}`]}</h1>
      <div className={'features-wrapper'}>{this.getFeatures()}</div>
      <div className={'test-block'}><TestimonialsComponent/></div>
    </FeaturesWrapper>
  }
}

const FeaturesWrapper = styled.div`
  background-color: white;
  color: #666;
  padding: 40px 0 0;
  
  .title {
    text-transform: uppercase;
    text-align: center;
    font-size: 50px;
    font-weight: 400;
    margin: 0;
    letter-spacing: 10px;
  }
  
  .test-block {
    margin-top: 40px;
  }
  
  .l-text {
    font-weight: 500;
    font-size: 1.5rem;
    color: #2b2f3e;
  }
  
  .r-text {
    width: 16px;
    height: 16px;
    border-top: 1px solid red;
    transform: rotate(45deg);
    border-right: 1px solid red;
    transition: transform .3s ease-in-out;
  }
  
  .features-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  
    .feature {
      margin: 40px 0 0 0;
      text-decoration: none;
      color: #666;
      box-shadow: 3px 4px 11px #adadad;
      border-radius: 4px;
      overflow: hidden;
      width: 30%;
      min-width: 300px;
      cursor: pointer;
      transition: transform .3s ease-in-out;
      background-color: white;
      
      &:active {
        opacity: 0.5;
      }
      
      .img-section {
          background-color: grey;
          width: 100%;
          height: 200px;
          overflow: hidden;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            transition: all .3s ease-in-out;
          }
          
          .img-text {
            left: 0;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            background: #00000088;
            color: white;
            padding: 16px;
            transition: all 0.3s ease-in-out;
            transform: translateX(-100%);
          }
      }
      
      &:hover {
        
        .img-section {
          img {
            transform: scale(1.3);
          }
          .img-text {
            transform: translateX(0%);
          }
        }
        
        .r-text {
          transform: translateX(34px) rotate(45deg);
        }
      }
      
      .text-section {
        padding: 16px;
        display: flex;
        align-items: center;
      }
    }
  }
  
   @media only screen and (max-width: 1024px) {
    .features-wrapper {
      .feature {
        margin: 20px 0 0 0;
      }
    }
   
   }
   @media only screen and (max-width: 500px) {
      .title {
        font-size: 30px;
        letter-spacing: 5px;
      }
      
      
     .features-wrapper {
      .feature {
         margin: 20px 10px 0 10px;
         width: 100%;
         
         &:hover {
          transform: scale(1);
        }
        
        .img-section {
          width: 100%;
        }
        
        .text-section {
          
        }
      }
    }
   }
`;