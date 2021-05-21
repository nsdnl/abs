import React, { Component } from 'react';
import styled from 'styled-components';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

export class FeatureDetailsComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    const language = localStorage.getItem('__ln') || '';
    this.state = {
      title: 'Featured Programs',
      language: language,
      items: [
        {
          label: 'Weight/Fat management',
          labelDt: `Gewichtsmanagement`,
          img: 'images/weight_management_02.jpg',
          height: '1000px',
          id: 'weight-fat-management',
          subTitle: `Reduce body 1 to 5 kg of fat efficiently and safely to achieve the ideal weight.  
If weight is an issue this Lifestyle Enhancer will let you lose the excess weight and keep it off. We will combine sustainable training with nutritional adjustments to achieve the ideal weight. ABS has helped many people burn fat without the torture of starving.
Warning: If you don’t want to look like an underwear model do not go any further.`,
          subTitleDt: `Verminder maandelijks I tot 5 kg lichaamsvet efficiënt en veilig om het ideale gewicht
          te bereiken. Als gewicht een probleem is, zorgt deze Lifestyle Enhancer ervoor dat u
          het overtollige gewicht verliest en het er vanaf houdt. We zullen duurzame training
          combineren met voedingsaanpassingen om het ideale gewicht te bereiken. ABS heeft
          veel mensen geholpen vet te verbranden zonder de marteling van verhongeren.
          Waarschuwing: als je er niet uit wil zien als een ondergoedmodel, ga dan niet verder!`,
          content: [
            {
              label: 'Approach',
              description: `Initial body composition will be measured to assess responsible fat reduction. A customised nutrition and work-out  plan at your leisure which will transform you in to a fat burning machine. We combine incremental behaviour changes, positive motivation and accountability, with sustainable training and nutrition.`,
              descriptionDt: `Een aanvankelijke lichaamssamenstelling zal worden gemeten om verantwoorde
              vetreductie te beoordelen. Een op maat gemaakte voedings- en trainingsplan voor in
              je vrijetijd zodat je verandert in een vetverbrandingsmachine. We combineren
              stapsgewijze gedragsveranderingen, positieve motivatie en verantwoordelijkheid,
              met duurzame trainingen en voeding.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Adopt a healthy eating pattern, enjoy continued energy through the day, Reduce blood pressure, reduce diabetes risk, Reduce heartburn, Improve sleep by reducing sleep apnea, Reduce knee pain and increase self-esteem.`,
              descriptionDt: `Maak een gezonde eetpatroon eigen, geniet van aanhoudende energie gedurende de
              dag, verlaag de bloeddruk, verminder het risico op diabetes, verminder brandend
              maagzuur, verbeter de slaap door vermindering van slaapapneu ,verminder kniepijn,
              en niet de minste verhoog het zelfvertrouwen.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `Those of all fitness levels who want to lose the excess fat and keep it off! Best suited for those with a body fat of 20% and above who do not want to starve themselves while on their weight loss journey.`,
              descriptionDt: `Degenen van alle fitnessniveaus die het overtollige vet willen verliezen en het er vanaf willen houden!
              Het meest geschikt voor vrouwen met een lichaamsvet van &gt;30% of mannen &gt;23%
              (leeftijdsafhankelijk). Vooral als je je niet wilt verhongeren tijdens het bewandelen van het pad der
              gewichtsverlies.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Muscle building & strength training',
          labelDt: `Spieropbouw & krachttraining`,
          img: 'images/le_mb_hover.jpg',
          id: 'muscle-strength',
          subTitle: `Gain significant muscle mass and get sculpted! Increase not only muscle mass but also look like a chiselled god. Only for those who want to look like a super hero saving the planet. Or a super villain striking fear in your enemies.`,
          subTitleDt: `Krijg aanzienlijke spiermassa en word ripped! Vergroot niet alleen de spiermassa, maar zie er ook uit
          als een gebeitelde god(in). Alleen voor degenen die eruit willen zien als een superheld die de planeet
          redt. Of een superschurk die angst inboezemt in je vijanden.`,
          content: [
            {
              label: 'Approach',
              description: `We will assess which hypertrophy method is best suited for you to maximize your potential. A customised balanced nutrition plan taking your macros and micros into consideration is an integral part of the process to gain lean, hard muscle. If needed we will advise in supplements. Your body composition, anatomy and daily activity will be taken into consideration when we make that step to build serious muscle.`,
              descriptionDt: `Wij beoordelen welke hypertrofiemethode het meest geschikt is om jou potentieel te maximaliseren.
              Een op maat gemaakt en uitgebalanceerd voedingsplan dat rekening houdt met jou macro- en
              microvoedingstoffen. Dit is een integraal onderdeel in het proces om droge en harde spieren aan te
              maken. Indien nodig adviseren wij in supplementen.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Increase overall power, prevent injury, improve Symmetry, improve the health and function of your joints, tendons and ligaments. Be come aesthetically stunning and improve you anaerobic endurance.`,
              descriptionDt: `Verhoog jou algehele kracht, voorkom blessures, verbeter symmetrie, verbeter de gezondheid en functie
              van uw gewrichten, pezen en ligamenten. Word esthetisch verbluffend en verbeter uw anaerobe
              uithoudingsvermogen.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `The ectomorph, the skinny or the bigorexia sufferer. Just about anyone who wants to responsibly add more lean muscle.`,
              descriptionDt: `Wit blok: de ectomorph, de bigorexia-patiënt of de persoon die zich mager vindt. Zowat iedereen die op
              verantwoorde wijze meer droge spieren wil toevoegen.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Sport – Specific training',
          labelDt: `Sport specifiek trainen`,
          img: 'images/sport_specif_training_01.jpg',
          height: '765px',
          id: 'sport-specific-training',
          subTitle: `Enhance your power and stamina for a particular sport. Great for off-season training to not reduce performance when getting back on pitch, mat or in the ring. We have a training customised for you.`,
          subTitleDt: `Verbeter uw kracht en uithoudingsvermogen voor een bepaalde sport. Geweldig voor
          trainingen buiten het seizoen om prestatievermindering tegen te gaan wanneer u
          weer op het veld, de mat of in de ring gaat. Wij hebben een training op maat voor jou.`,
          content: [
            {
              label: 'Approach',
              description: `Carefully crafted training programs to focus on conditioning the body and mind to excel through the unique demands for endurance, speed, agility, balance and recovery required by each sport as well as minimize injury.`,
              descriptionDt: `Zorgvuldig samengestelde trainingsprogramma&#39;s gericht op het conditioneren van
              lichaam en geest om uit te blinken door de unieke eisen aan uithoudingsvermogen,
              snelheid, behendigheid, balans en herstel die elke sport vereist om blessures te
              minimaliseren.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Increased speed, Increased agility, Improved conditioning, Injury prevention, Gaining a competitive edge, Increased acceleration and power, Improved balance and body awareness, Increased strength, Improved endurance and ability to quickly recover from training and competition.`,
              descriptionDt: `Verbeterde snelheid, Verbeterde behendigheid, Verbeterde conditie, Letselpreventie,
              Concurrentievoordeel behalen, Verhoogde acceleratie en kracht, Verbeterd evenwicht en
              lichaamsbewustzijn, Verbeterde kracht, Verbeterde uithoudingsvermogen en het vermogen om snel
              te herstellen van trainingen en competitie.`,
              style: {height: '300px'},
              type: 'red'
            },
            {
              label: 'Recommended For', descriptionDt: `De atleet in jou, ongeacht leeftijd of niveau. Als je een voorsprong wilt op die waardige tegenstander
              of wekelijkse sportpartner.`,
              description: `The Athlete in you no matter your age or level. If you want the edge over that worthy adversary or weekly sport mate.`, type: 'white'
            }
          ]
        },
        {
          label: 'Core conditioning',
          labelDt: `Core training`,
          img: 'images/core_training_01.jpg',
          id: 'core-conditioning',
          subTitle: `Protect your lower back, stabilize your spine, and learn proper posture while performing specific core exercises to combat your sedentary lifestyle. Core training will be an important part of all the life enhancers given by ABS. However in this specific program core stability ,x,x.
If sitting is the new smoking, how many hours are you sitting a day. Not mentioning the bad posture which creeps in at about 10Am. 
`,
          subTitleDt: `Bescherm uw lage rug, stabiliseer uw wervelkolom, versterk de buikspieren en leer de juiste houding
          terwijl u specifieke core oefeningen uitvoert ter bestrijding van een sedentaire levensstijl. Core training
          is een belangrijk onderdeel van alle Life Enhancers. In dit specifieke programma worden echter
          kernstabiliteit, veelzijdigheid en kracht benadrukt. Als zitten het nieuwe roken is, hoeveel uur zit u dan
          per dag? Om nog maar te zwijgen van de slechte zithouding vanaf ongeveer 10 uur &#39;s ochtends.`,
          content: [
            {
              label: 'Approach',
              description: `Depending on the amount of stress put on your core during your work or life time we develop a plan suitable for you. At ABS we safely and effectively assess your physical capabilities and address those deficits. `,
              descriptionDt: `Afhankelijk van de hoeveelheid stress die tijdens uw werk of leven op uw kern wordt uitgeoefend, ontwikkelen
              we een plan dat bij u past. Bij ABS beoordelen we op een veilige en effectieve manier uw fysieke capaciteiten
              en pakken deze tekortkomingen aan.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              style: {height: '320px'},
              description: `stabilizes the spine and helps create a firm base of support for virtually all movement, Tightens the abdominal structures involved in movement and improves the transfer of power to and from the extremities, Aids in the prevention of injury, Strengthens and improves the torso’s stabilization, Helps to stabilize and align the spine, ribs and pelvis.`,
              descriptionDt: `Stabiliseert de wervelkolom en helpt bij het creëren van een stevige ondersteuningsbasis voor vrijwel
              alle bewegingen, verstevigt de buikstructuren die bij de beweging betrokken zijn en verbetert de
              krachtoverdracht van en naar de ledematen, helpt bij het voorkomen van letsel,
              Versterkt en verbetert de stabilisatie van de romp. Helpt bij het stabiliseren en uitlijnen van de
              wervelkolom, ribben en bekken.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `The office dweller, the remote worker, weekend warriors, and the health-conscious. If you a specific training with the objective of preventing or alleviating core and neck issues due to a sedentary lifestyle.`,
              descriptionDt: `De kantoorbewoner, de externe werker, weekendstrijders en de gezondheidsbewuste. Als u een
              specifieke training nodig heeft om core- en nekklachten te voorkomen of verlichten als gevolg van een
              sedentaire levensstijl.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Senior fitness',
          labelDt: `Senior fitness`,
          img: 'images/senior_training_01.jpg',
          id: 'senior-fitness',
          subTitle: `Delay the aging process and improve your well-being and quality of life by performing these workout programs. Designed for the seasoned adults of 55 years and older. The customised plan aims to keep you more  physically independent so you will be able enjoy life to the fullest. We lay  special emphasis on stretching, balance and functional movements to be able to keep doing what you love on a daily bases.`,
          subTitleDt: `Stel het verouderingsproces uit en verbeter uw welzijn en kwaliteit van leven door deze
          trainingsprogramma's uit te voeren. Ontworpen voor doorgewinterde volwassenen van 55 jaar en
          ouder. Het plan op maat is bedoeld om u lichamelijk onafhankelijker te houden, zodat u optimaal van
          het leven kunt genieten. We leggen speciale nadruk op rekken, balans en functionele bewegingen om
          dagelijks te kunnen blijven doen waar je van houdt.`,
          content: [
            {
              label: 'Approach',
              description: `At ABS we safely and effectively assess your physical capabilities and address any deficits with a comprehensive and systematic program. ABS Active Agers takes a holistic approach to fitness, health, and behavior change. With a steady dose of motivation and devotion, we get you more active and moving towards better health.`,
              descriptionDt: `Bij ABS beoordelen we op een veilige en effectieve manier uw fysieke mogelijkheden en pakken we
              eventuele tekortkomingen aan met een uitgebreid en systematisch programma. ABS Active Agers
              hanteert een holistische benadering van fitness, gezondheid en gedragsverandering. Met een
              constante dosis motivatie en toewijding zorgen we ervoor dat je actiever wordt en op weg bent naar
              een betere gezondheid.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              description: ` Improved heart health, Improved bone, and joint health Decreased risk of falling, warding off inactivity-related disease i.e premature aging, obesity, cardiovascular vulnerability, musculoskeletal fragility, and depression.`,
              descriptionDt: `Verbeterde gezondheid van het hart, Verbeterde gezondheid van botten en gewrichten, Verlaagd
              risico op vallen, Afweren van inactiviteit gerelateerde ziekten, zoals vroegtijdige veroudering,
              zwaarlijvigheid, cardiovasculaire kwetsbaarheid, kwetsbaarheid van het bewegingsapparaat en
              depressie.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `The seasoned individual who want to lead a more physical lifestyle. Whether you are new to fitness or you are the competitive senior athlete putting Zoomers to shame with your life experience.`,
              descriptionDt: `De doorgewinterde persoon die een meer lichamelijk actieve levensstijl wil leiden. Of u nu nieuw bent
              in fitness of u bent de competitieve senioren atleet die Zoomers ten schande brengt met uw
              levenservaring.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Feeling alive/life booster',
          labelDt: `Levens booster`,
          img: 'images/LifeBooster01.jpg',
          height: '900px',
          id: 'metabolic-conditioning',
          subTitle: `Some call it boot camp or interval training or even metabolic conditioning. ABS Feeling alive is so much more than just interval training or switching from exercise stations in a hurry. We custom design a plan with a combination the of right cardio and strength workouts. No two plans are the same. Don’t expect to spend a long time doing endless, slow cardiovascular training nor uninspiring straight-set strength training workouts. At ABS we give a new spin to interval training to keep you wanting more without the injuries due to the fact we put the focus on YOU. Let’s break boundaries not your back.`,
          subTitleDt: `Sommigen noemen het bootcamp of intervaltraining of zelfs metabolische conditionering. ABS
          Feeling alive is zoveel meer dan alleen intervaltraining of haastig wisselen van trainingsstation. We
          ontwerpen op maat een plan met een combinatie van de juiste cardio- en krachttrainingen. Geen twee
          plannen zijn hetzelfde. Verwacht niet dat u veel tijd zult besteden aan eindeloze, langzame
          cardiovasculaire training of ongeïnspireerde straight-set krachttrainingstrainingen. Bij ABS geven we
          een nieuwe draai aan intervaltraining om ervoor te zorgen dat je meer wilt zonder de blessures,
          omdat we de focus op JOU leggen. Laten we grenzen doorbreken, niet je rug.`,
          content: [
            {
              label: 'Approach', descriptionDt: `Door middel van een basislijnbepaling op basis van meerdere factoren, zullen we beoordelen welke
              specifieke training het meest geschikt voor u is en een duurzaam trainingsprogramma ontwerpen. Het
              programma zal bestaan uit een combinatie van grensverleggende training, geplande progressie,
              motivatie, afwisseling en voeding.`,
              description: `Through baseline determination on multiple factors we will assess which specific training is best suited for you and design a sustainable workout program. The program will consist of a combination of boundary-breaking training, planned progression, motivation, variety, and nutrition.`, type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Reset you metabolism,  improve lateral and dynamic movement,  improving your aerobic efficiency in all parts of your body.`,
              descriptionDt: `Reset uw metabolisme, verbeter laterale en dynamische bewegingen, verbeter uw aerobe efficiëntie in
              alle delen van uw lichaam.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `To give your life the needed boost of endorphins to feel ALIVE. If you want to improve their overall condition while feeling the most alive you have ever been. Some fitness experience with peak heart rates is advised before you can take advantage of Feeling Alive.`,
              descriptionDt: `JOU! Om je leven de nodige boost van endorfine te geven om je LEVEND te voelen. Als jij je algehele
              conditie wilt verbeteren terwijl je het meest levend ooit wilt voelen. Enige fitnesservaring met
              piekhartslagen wordt geadviseerd voordat u kunt profiteren van Feeling Alive.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Prenatal Workout',
          labelDt: `Prenatale training`,
          img: 'images/pernatal_training_01.jpg',
          id: 'prenatal-workout',
          subTitle: `Have a healthy pregnancy by staying physically active during pregnancy, this allows you, the mommy-to-be to remain low-risk patients, thereby allowing them a wide array of options for labor and delivery. It is a mix of cardiovascular exercises, strength and flexibility training! Once your physician declares you are not in a risk group we can start you journey.`,
          subTitleDt: `Zorg voor een gezonde zwangerschap door lichamelijk actief te blijven tijdens de
          zwangerschap, hierdoor kunt u, de aanstaande moeder, een laag risico patiënt
          blijven, waardoor u een breed scala aan opties voor de bevalling heeft. Het is een
          mix van cardiovasculaire oefeningen, kracht- en flexibiliteitstraining. Zodra uw arts
          heeft verklaard dat u niet tot een risicogroep behoort, kunnen we je reis beginnen.`,
          content: [
            {
              label: 'Approach',
              style: {height: '500px'},
              badge: false,
              descriptionDt: `Trimester 1: omvat gerichte cardio- en aangepaste krachttraining gericht op de
              belangrijkste spiergroepen. Voorbereidingsoefeningen om de bevalling en bevalling
              te vergemakkelijken en tegelijkertijd aan het lichaamsbewustzijn te werken.
              Trimester 2: Met een verhoging van het energieniveau willen we de drang om te
              trainen tot uitputting vermijden. De focus zal liggen op meer variatie, stabiliteit en
              kracht bij het werken aan de binnenkant van de dijen en bilspieren. Trimester 3:
              Terwijl uw lichaam zich voorbereidt op de bevalling en de bevalling, zult u merken
              dat u langzamer gaat werken. We zullen deze tijd gebruiken om ons te
              concentreren op cardiovasculaire oefeningen, mobiliteit om de buiksterkte te
              behouden en rectus diastase correctie.`,
              description: `Trimester 1: will include focused cardio and  customised strength training targeting the major muscles groups. Preparation exercises for easier labour and child birth while working on body awareness.
Trimester 2:  With an increase of energy level we want  the urge of training till exhaustion. The focus will be on more variety, stability strength while working on the inner thighs and glutes.
Trimester 3: As you body is preparing for child birth and labour you will notice your slowing down. We will use this time to focus on  cardiovascular exercises, mobility to maintain the abdominal strength and diastasis recti correction.
`, type: 'blue'
            },
            {
              label: 'Benefits',
              style: {top: '230px'},
              description: `Lower the chances of preterm birth, caesarean birth, excessive weight gain, stress, gestational diabetes or hypertensive disorders such as preeclampsia and lower birth weight. Improve physical fitness, mental well-being and postpartum recovery.`,
              descriptionDt: `Verlaag de kans op vroeggeboorte, keizersnede, overmatige gewichtstoename, stress, zwangerschapsdiabetes
              of hypertensieve aandoeningen zoals pre-eclampsie en een lager geboortegewicht. Verbeter de fysieke fitheid,
              het mentale welzijn en het herstel na de bevalling.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              style: {border: '0px solid #6b6b6b', top: 0, left: '350px', height: '230px'},
              description: `woman who are expecting and want the best for themselves and their unborn child during all trimesters.`,
              descriptionDt: `Zwangere vrouwen in alle trimesters die het beste voor zichzelf en hun ongeboren
              kind willen.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Postnatal Workout',
          labelDt: `Postnatale training`,
          img: 'images/postnatal_training_01.jpg',
          height: '910px',
          id: 'postnatal-workout',
          subTitle: `Congratulations, you made it, you’re a mommy! Now comes the hard part. Getting back to your previous fitness level or beyond is a priority but you have to take it slow. Your body just went through a great deal during labour and delivery. You can start the postnatal workout six to eight weeks after delivery. This timeframe depending on the type of delivery. Our workout emphasises not only on reducing the separation of the left and right abdominal wall called diastasis recti but also customised cardio and resistance training. This is key to getting you back in shape and feeling great without straining your pelvic floor.`,
          subTitleDt: `Gefeliciteerd, je hebt het gehaald, je bent een mama! Nu komt het moeilijke gedeelte. Terugkeren
          naar uw vorige fitnessniveau of beter is een prioriteit, maar u moet het langzaam aan doen. Je
          lichaam heeft zojuist een grote beproeving ondergaan tijdens de bevalling en de bevalling. U kunt zes
          tot acht weken na de bevalling beginnen met de postnatale training. Dit tijdsbestek is afhankelijk van
          het type levering dat u heeft gehad. Onze training legt niet alleen de nadruk op het verminderen van
          de scheiding van de linker en rechter buikwand, rectus diastase genaamd, maar ook cardio- en
          weerstandstraining op maat. Dit is de sleutel om je weer in vorm te krijgen en je goed te voelen
          zonder je bekkenbodem te belasten.`,
          content: [
            {
              label: 'Approach',
              description: `Move to feel good and rebuilding your core strength. We will focus on functional training. Every new super mom is different so each moms program will be different.`,
              descriptionDt: `Beweeg om je goed te voelen en opbouwen van je core kracht. We zullen ons richten op functionele
              training. Elke nieuwe supermama is anders, dus het programma van elke moeder zal anders zijn.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Improve energy, stretched abdominal muscles, sleep, stress resistance, weight loss and reduce diastasis recti.`,
              descriptionDt: `Verbeter energie, Verstevig uitgerekte buikspieren, bevorder je slaap, verbeterde
              stressbestendigheid, gewichtsverlies en verminder rectus diastase.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `New or experienced moms who want to safely work on the challenges of their post-baby body.`,
              descriptionDt: `Nieuwe of ervaren moeders die veilig willen werken aan de uitdagingen van hun post-babylichaam.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Daddy’s Muscle/toning Workout',
          labelDt: `Papa training`,
          img: 'images/le_ds_hover.jpg',
          height: '1000px',
          id: 'daddy-special',
          subTitle: `Achieving dad strength isn't an easy process but getting a dad body on the other hand is. You know, the dads who look masculine but are (slightly) overweight. The physical grind of child-rearing will leave you with an impressive array of aches and pains if you're not ready for it. So whether you’re a new father or if you're expecting a bundle of joy in the near future, do yourself a favor and get prepared!`,
          subTitleDt: `Het krijgen van papa kracht is geen eenvoudig proces, maar het krijgen van een papa lichaam wel
          daarentegen. Weet je wel, de vaders die er mannelijk uitzien, maar (licht) overgewicht hebben. De
          fysieke sleur van het opvoeden van kinderen zal je met een indrukwekkende reeks pijntjes en kwalen
          achterlaten als je er niet op voorbereidt bent. Dus of je een nieuwe vader bent of in de nabije
          toekomst een aanwinst van vreugde verwacht, doe jezelf een plezier en bereidt je voor.`,
          content: [
            {
              label: 'Approach',
              description: `Depending on your physicality we will tackle the major muscles groups, improve cardovasclar abilities and dad bod functional training. Here we will address you weaker points and focus on daddy movements.`,
              descriptionDt: `Afhankelijk van uw fysieke gesteldheid zullen we de belangrijkste spiergroepen aanpakken,
              cardiovasculaire vaardigheden verbeteren en toepassen van functionele paps training. Hier zullen we
              je zwakkere punten behandelen en ons concentreren op papa-bewegingen.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              style: {height: '325px'},
              description: `Improve your back strength. Fix the imbalance of your posture, get the benefit of better cardio, sleep, weight loss, and stress reduction.`,
              descriptionDt: `Verbeter de kracht in je rug. Herstel de onbalans van uw houding, verbeter het cardiovasculaire
              vermogen, betere slaap, gewichtsverlies en stressvermindering.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              style: {height: '300px'},
              description: `All men who are expecting to be a dad within 9 months or less. Definitely for the new dads already feeling the aches and pains of fatherhood.  If you don’t a victim of the dad bod syndrome join the Daddy training.`,
              descriptionDt: `Alle mannen die verwachten binnen 9 maanden of minder vader te worden. Zeker voor de nieuwe
              vaders die al de pijnen en kwaaltje van het vaderschap voelen. Als je niet het slachtoffer wilt worden
              van het paps lijf-syndroom, doe dan mee met de Daddy-training.`,
              type: 'white'
            }
          ]
        }
      ]
    };
  }

  componentDidMount(): void {
    const id = this.props.match.params.id;
    if (id) {
      const idElm: any = document.getElementById(id);
      if (idElm) {
        const elm: any = document.scrollingElement;
        elm.scrollTop = idElm.offsetTop;
      }
    }
  }

  getTriplet = (items: any) => {
    const language = this.state.language;
    return <div className={'triplet'}>
      {items.map((item: any, i: number) => {
        return <div key={`tripler-${i}`} className={`triplet-item ${item.type}`} style={item.style}>
          {item.badge && <div className={'badge'}>IMPORTANT</div>}
          <div className={'snd-label'}>{item.label}</div>
          <div className={'snd-content'}>{item[`description${language}`]}</div>
        </div>
      })}
    </div>
  };

  getFeatures = () => {
    const {items, language} = this.state;
    return <div className={'feature-wrapper'}>
      {items.map((item: any, i: number) => {
        return <div key={`item-${i}`}>
          <div className={'feature'} id={item.id} style={{backgroundImage: `url(${item.img})`, height: item.height}}>
            <div className={'feature-label'}>
              <span className={'r-lbl'}>{item[`label${language}`]}</span>
              <div className={'r-sub-title'}>{item[`subTitle${language}`]}</div>
            </div>
            {this.getTriplet(item.content)}
          </div>
          <hr className={'separator'}/>
        </div>
      })}
    </div>
  };

  render() {
    const {title} = this.state;
    return (
      <RenderWrapper>
        <div className={'title'}>{title}</div>
        {this.getFeatures()}
        <div className={'test-block'}><TestimonialsComponent/></div>
      </RenderWrapper>
    );
  }
}

const RenderWrapper = styled.div`
  padding: 50px 0 0;
  color: #666;
  background-color: #efeff1;
  
  .title {
    text-transform: uppercase;
    text-align: center;
    font-size: 50px;
    font-weight: 400;
    margin: 0;
    letter-spacing: 10px;
  }
  
  .badge {
    background: #d40d0d;
    padding: 40px 27px 0px;
    position: absolute;
    font-size: 1rem;
    left: -42px;
    top: -19px;
    transform: rotate(-46deg);
  }
  
  .feature-wrapper {
    width: 80%;
    margin: 0 auto;
    
    .separator {
      width: 60%;
      border: 2px solid red;
      margin: 50px auto;
    }
    
    .feature {
      height: 850px;
      padding: 30px 0 0 0;
      background-repeat: no-repeat;
      background-size: 100%;
      border: 1px solid #e4e4e4;
      border-radius: 5px;
      box-shadow: 2px 2px 17px 3px #888888;
      background-color: #fff;
      
      .feature-label {
        text-align: right;
        //border: 1px solid #e4e4e4;
        border-radius: 5px;
        background: linear-gradient(45deg,transparent,#000000db);
        color: #fff;
        margin: 0 32px 32px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        
        .r-lbl {
          border-bottom: 2px solid #fff;
          //color: #2b2f3e;
          font-size: 2rem;
          padding: 0 16px;
          display: inline-block;
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 10px;
        }
        
        .r-sub-title {
          width: 60%;
        }
      }
      
      .triplet {
        position: relative;
        height: 100%;
        
        .triplet-item {
          padding: 32px;
          //box-shadow: 1px 1px 0px #afafaf;
          position: absolute;
          box-sizing: border-box;
          width: 350px;
          height: 270px;
          
          &.red {
            background-color: #ff0000c9;
            color: white;
            position: absolute;
            left: 350px;
            top: 150px;
            z-index: 1;
            box-sizing: border-box;
          }
          &.white {
            background-color: #ffffffc9;
            top: 270px;
            color: #666;
            border: 1px solid #dcdcdc;
            
            .snd-label {
              color: #2b2f3e;
            }
          }
          &.blue {
            background-color: #2b2f3e;
            color: white;
            position: absolute;
            left: 0;
            z-index: 2;
            box-shadow: none;
            box-sizing: border-box;
            overflow: hidden;
          }
          
          .snd-label {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 1.4rem;
          }
          .snd-content {}
        }
      }
    }
  }
  
   @media only screen and (max-width: 1024px) {
    .feature-wrapper {
      
      .feature {
        height: 900px;
        
        .feature-label {
          
          .r-sub-title {
            width: 90%;
          }
      }
    }
  }
   @media only screen and (max-width: 768px) {
    .feature-wrapper {
      
      .feature {
        height: 900px;
        
        .feature-label {
          
          .r-sub-title {
            width: 100%;
          }
      }
    }
  }
  
  @media only screen and (max-width: 500px) {
    .feature-wrapper {
      width: 100%;
      
      .separator {
        width: 100%;
      }
      
      .feature {
        height: auto !important;
        padding: 16px 10px;
        
        .feature-label {
          padding: 0 10px;
          text-align: left;
          align-items: center;
          margin: 0;
          
          .r-sub-title {
            width: 100%;
            margin: 20px 0;
          }
        }
        
        .triplet {
          .triplet-item {
            position: static;
            width: 100%;
            padding: 16px 10px;
            height: auto;
            box-shadow: none;
            border: 1px solid #2b2f3e;
            
            &.red {
              position: static;
              border-bottom: 0;
            }
            &.white {
              position: static;
              border-top: 0;
            }
            &.blue {
              position: relative;
              height: auto !important;
            }
            
            .2nd-label {}
            .2nd-content {}
          }
        }
      }
    }
    
    .badge {
      left: auto;
      right: -50px;
      transform: rotate(54deg);
    }
  }
`;