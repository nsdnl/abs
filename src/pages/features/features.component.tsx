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
          imgTextDt: `Als gewicht een probleem is dan zorgt deze Lifestyle Enhancer ervoor dat je het overtollige gewicht verliest en het eraf houdt. We combineren duurzame trainingen met voedingsaanpassingen om het ideale gewicht te bereiken.`,
          img: 'images/weight_management_02.jpg',
          url: 'weight-fat-management',
          id: 'weight-fat-management',
          description: 'hell this is sample text'
        },
        {
          label: 'Muscle building & strength training',
          labelDt: 'Muscle building & strength training',
          img: 'images/muscle_building_02.jpg',
          imgText: 'Gain significant muscle mass and get sculpted! Increase not only muscle mass but also look like a chiseled god. Only for those who want to look like a superhero saving the planet. Or a supervillain striking fear in your enemies.',
          imgTextDt: `Krijg aanzienlijke spiermassa en word ripped Vergroot niet alleen de spiermassa, maar zie er ook uit als een Adonis. Alleen voor degenen die eruit willen zien als een superheld die de planeet redt of een superschurk die angst inboezemt in je vijanden.`,
          url: 'muscle-strength',
          id: 'muscle-strength',
          description: 'hell this is sample text'
        },
        {
          label: 'Sport – Specific training',
          labelDt: 'Sport – Specific training',
          img: 'images/sport_specif_training_01.jpg',
          imgText: `Enhance your power and stamina for a particular sport. Great for off-season training so you won’t experience performance reduction when getting back on pitch, mat, or in the ring. We have a training customized for you.`,
          imgTextDt: `Verbeter uw kracht en uithoudingsvermogen voor een bepaalde sport. Geweldig voor trainingen buiten het seizoen met als reden prestatievermindering tegen te gaan wanneer u weer op het veld, de mat of in de ring gaat. We hebben een training op maat voor jou.`,
          url: 'sport-specific-training',
          id: 'sport-specific-training',
          description: 'hell this is sample text'
        },
        {
          label: 'Core conditioning',
          labelDt: 'Core conditioning',
          img: 'images/core_training_01.jpg',
          imgTextDt: `Bescherm uw onderrug, stabiliseer uw wervelkolom en leer de juiste houdingen aan terwijl u specifieke kernoefeningen uitvoert om de negatieve effecten van een zittende levensstijl tegen te gaan.`,
          imgText: `Protect your lower back, stabilize your spine, and learn proper posture while performing specific core exercises to combat the negative effects of a sedentary lifestyle.`,
          url: 'core-conditioning',
          id: 'core-conditioning',
          description: 'hell this is sample text'
        },
        {
          label: 'Senior fitness',
          labelDt: 'Senior fitness',
          img: 'images/senior_training_01.jpg',
          imgTextDt: `Stel het verouderingsproces uit en verbeter uw welzijn en kwaliteit van leven door deze trainingsprogramma's uit te voeren. Ontworpen voor doorgewinterde volwassenen met speciale nadruk op rekken, balans en functionele bewegingen. Die slappelingen noemen je alleen Boomer, want dat is het geluid van hun kaken die op de grond vallen bij het zien van ABS goedgekeurde kracht en lijf.`,
          imgText: `Delay the aging process and improve your well-being and quality of life by performing these workout programs. Designed for seasoned adults with special emphasis on stretching, balance, and functional movements. Those slackers only call you Boomer cause that is the sound of their jaws dropping to the floor seeing your ABS approves vigour and body.`,
          url: 'senior-fitness',
          id: 'senior-fitness',
          description: 'hell this is sample text'
        },
        {
          label: 'Life booster',
          labelDt: 'Levens booster',
          img: 'images/LifeBooster01.jpg',
          imgTextDt: `Versnel het verlies van lichaamsvet door hoge intensiteit en matige intensiteit te combineren met HIIT (hoge intensiteit intervaltraining). Alleen bestemd voor diegen die met dat extra willen.`,
          imgText: `Accelerate body fat loss by intermixing high-intensity with moderate-intensity levels with HIIT(high-intensity interval training). Not for the faint of heart.`,
          url: 'metabolic-conditioning',
          id: 'metabolic-conditioning',
          description: 'hell this is sample text'
        },
        {
          label: 'Prenatal Workout',
          labelDt: 'Prenatale training',
          img: 'images/pernatal_training_01.jpg',
          imgTextDt: `Zorg voor een gezonde zwangerschap door lichamelijk actief te blijven tijdens de
zwangerschap, hierdoor kunt u, de aanstaande moeder, een laag risico patiënt
blijven, waardoor u een breed scala aan opties voor de bevalling heeft. Het is een
mix van cardiovasculaire oefeningen, kracht- en flexibiliteitstraining. Zodra uw arts
heeft verklaard dat u niet tot een risicogroep behoort, kunnen we je reis beginnen.`,
          imgText: `Have a healthy pregnancy by staying physically active during pregnancy, this allows
you, the mommy-to-be to remain low-risk patients, thereby allowing them o wide
array of options for labour and delivery. It is a mix of cardiovascular exercises,
strength and flexibility training! Once your physician declares you are not in a risk
group we can start you journey.`,
          url: 'prenatal-workout',
          id: 'prenatal-workout',
          description: 'hell this is sample text'
        },
        {
          label: 'Postnatal Workout',
          labelDt: 'Postnatal Workout',
          img: 'images/postnatal_training_01.jpg',
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
          id: 'postnatal-workout',
          description: 'hell this is sample text'
        },
        {
          label: 'Daddy Special',
          labelDt: 'Daddy Special',
          img: 'images/daddy_training_01.jpg',
          imgTextDt: `Het bereiken van papakracht is geen eenvoudig proces, maar het krijgen van een papalichaam daarin tegen wel. Door de fysieke inspanningen van het opvoeden van kinderen laat je achter met een indrukwekkende reeks pijntjes en kwalen als je er niet klaar voor bent. Dus of je nu een nieuwe vader bent of in de nabije toekomst een hoop vreugde verwacht, doe jezelf een plezier en bereid je erop voor.`,
          imgText: `Achieving dad strength isn't an easy process but getting a dad body on the other hand is. The physical grind of child-rearing will leave you with an impressive array of aches and pains if you're not ready for it. So whether you’re a new father or if you're expecting a bundle of joy in the near future, do yourself a favor and get prepared.`,
          url: 'daddy-special',
          id: 'daddy-special',
          description: 'hell this is sample text'
        }
      ]
    };
  };

  getFeatures = () => {
    const {features, language} = this.state;
    return features.map((feature: any, i: number) => {
      return <a className={'feature'} key={`feature-${i}`} href={`#/features-details/${feature.url}`}>
        <div className={'img-section'}>
          {/*<div className={`${feature.id} img`} />*/}
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
  };
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
          height: 250px;
          overflow: hidden;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            transition: all .3s ease-in-out;
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        
          .weight-fat-management {
            background-image: url('../../images/le_wm_mgmt.jpg');
          }
          .muscle-strength {
            background-image: url('../../images/le_mb.jpg');
          }
          .sport-specific-training {
            background-image: url('../../images/le_sst.jpg');
          }
          .core-conditioning {
            background-image: url('../../images/le_cc.jpg');
          }
          .senior-fitness {
            background-image: url('../../images/le_st.jpg');
          }
          .metabolic-conditioning {
            background-image: url('../../images/le_lb.jpg');
          }
          .prenatal-workout {
            background-image: url('../../images/le_pre_w.jpg');
          }
          .postnatal-workout {
            background-image: url('../../images/le_post_w.jpg');
          }
          .daddy-special {
            background-image: url('../../images/le_ds.jpg');
          }
          
          .img-text {
            left: -1px;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            background: #00000088;
            color: white;
            padding: 16px;
            transition: all 0.3s ease-in-out;
            transform: translateX(-100%);
            pointer-events: none;
          }
      }
      
      &:hover {
        
        .img-section {
          img {
            transform: scale(1.3);
          }
          .weight-fat-management {
            background-image: url('../../images/le_wm_mgmt_hover.jpg');
          }

          .muscle-strength {
            background-image: url('../../images/le_mb_hover.jpg');
          }
          //.sport-specific-training {
          //  background-image: url('../../images/le_sst_hover.jpg');
          //}
          //.core-conditioning {
          //  background-image: url('../../images/le_cc_hover.jpg');
          //}
          //.senior-fitness {
          //  background-image: url('../../images/le_st_hover.jpg');
          //}
          //.metabolic-conditioning {
          //  background-image: url('../../images/le_lb_hover.jpg');
          //}
          //.prenatal-workout {
          //  background-image: url('../../images/le_pre_w_hover.jpg');
          //}
          //.postnatal-workout {
          //  background-image: url('../../images/le_post_w_hover.jpg');
          //}
          .daddy-special {
            background-image: url('../../images/le_ds_hover.jpg');
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
          height: 220px;
        }
        
        .text-section {
          
        }
      }
    }
   }
`;