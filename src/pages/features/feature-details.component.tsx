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
          height: '900px',
          id: 'weight-fat-management',
          rightLink: {
            label: 'WEIGHT/FAT MANAGEMENT',
            url: 'https://advancedbodysystem.mypthub.net/buy-packages/143884/buy'
          },
          subTitle: `Reduce body 1 to 5 kg of fat per month efficiently and safely to achieve your ideal weight. If weight is an issue this Lifestyle Enhancer will let you lose the excess weight and keep it off! We will combine feasible training with nutritional adjustments to achieve the weight you most feel comfortable with. ABS has helped many people burn fat without the torture of starving. Warning: If you don’t want to look like an underwear model do not go any further. Available with the supervised benefits of a personal trainer or as a premade plan.`,
          subTitleDt: `Verminder 1 tot 5 kg lichaamsvet per maand efficiënt en veilig om jou ideale gewicht te bereiken. Als overgewicht een probleem is, zorgt deze Lifestyle Enhancer ervoor dat u het overtollige gewicht verliest en het er vanaf houdt. We zullen haalbare trainingen combineren met voedingsaanpassingen om het ideale gewicht te bereiken waar jij je het meest comfortabel bij voelt. ABS heeft veel mensen geholpen vet te verbranden zonder de marteling van verhonger lijden. Waarschuwing: als je er niet uit wil zien als een ondergoedmodel, ga dan niet verder!`,
          content: [
            {
              label: 'Approach',
              description: `Initial body composition will be measured to assess responsible fat reduction. A customised nutrition and work-out plan at your leisure which will transform you into a fat burning machine. We combine incremental behaviour changes, positive motivation and accountability, with achievable training and nutrition.`,
              descriptionDt: `Een aanvankelijke lichaamssamenstelling zal worden gemeten om verantwoorde vetreductie te beoordelen. Een op maat gemaakte voedings- en trainingsplan voor in je vrijetijd zodat je verandert in een vetverbrandingsmachine. We combineren stapsgewijze gedragsveranderingen, positieve motivatie en verantwoordelijkheid, met haalbare trainingen en voeding.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Adopt a healthy eating pattern, Enjoy continued energy through the day, Reduce blood pressure, Reduce diabetes risk, Reduce heartburn, Improve sleep by reducing sleep apnea, Reduce knee pain and increase self-esteem.`,
              descriptionDt: `Maak een gezonde eetpatroon eigen, geniet van aanhoudende energie gedurende de dag, verlaag de bloeddruk, verminder het risico op diabetes, verminder brandend maagzuur, verbeter de slaap door vermindering van slaapapneu ,verminder knieklachten, en verhoog het zelfvertrouwen.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `Those of all fitness levels who want to lose the excess fat and keep it off. Best suited for woman with a body fat of +30% or men with a body fat of +23% (age dependent). If you do not want to starve yourself while on your weight loss journey, this Life Enhancer is perfect for you.`,
              descriptionDt: `Degenen van alle fitnessniveaus die het overtollige vet willen verliezen en het er vanaf willen houden! Het meest geschikt voor vrouwen met een lichaamsvet van +30% of mannen +23% (leeftijdsafhankelijk). Vooral als je niet wilt verhongeren tijdens het bewandelen van het pad der gewichtsverlies is deze Levensverbeteraar perfect voor jou.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Muscle building & strength training',
          labelDt: `Spieropbouw & krachttraining`,
          img: 'images/le_mb_hover.jpg',
          id: 'muscle-strength',
          subTitle: `Gain significant muscle mass and get sculpted! Increase not only muscle mass but also look like a chiselled god. Only meant for those who want to look like a super hero saving the planet or a super villain striking fear in your enemies. Available with the supervised benefits of a personal trainer or as a premade plan.`,
          subTitleDt: `Krijg aanzienlijke spiermassa en word ripped! Vergroot niet alleen jou spiermassa, maar zie er ook uit als een gebeitelde god(in). Alleen bestemt voor degenen die eruit willen zien als een superheld die de planeet redt of een superschurk die angst inboezemt in je vijanden.`,
          rightLink: {
            label: 'Muscle & Strength',
            url: 'https://advancedbodysystem.mypthub.net/buy-packages/143884/buy'
          },
          content: [
            {
              label: 'Approach',
              description: `We will assess which hypertrophy method is best suited for you to maximize your potential. A customised balanced nutrition plan taking your macro and micronutrition into consideration is an integral part of the process to gain lean, hard muscle. If needed we will advise in supplements. Your body composition, anatomy and daily activity will be taken into consideration when we make that step to build serious muscle.`,
              descriptionDt: `Wij beoordelen welke hypertrofiemethode het meest geschikt is om jou potentieel te maximaliseren. Een op maat gemaakt en uitgebalanceerd voedingsplan dat rekening houdt met jouw macro- en microvoedingstoffen. Dit is een integraal onderdeel in het proces om droge en harde spieren aan te maken. Indien nodig adviseren wij in supplementen.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Increase overall power, Prevent injury, Improve symmetry, Improve the health and function of your joints, tendons and ligaments. Become aesthetically stunning and improve you anaerobic endurance.`,
              descriptionDt: `Verhoog jouw algehele kracht, voorkom blessures, verbeter symmetrie, verbeter de gezondheid en functie van jou gewrichten, pezen en ligamenten. Word esthetisch verbluffend en verbeter uw anaerobe uithoudingsvermogen.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `The ectomorph, the skinny or the bigorexia sufferer. Just about anyone who wants to responsibly add more lean muscle.`,
              descriptionDt: `De ectomorph, de gespierde spijker of de bigorexia-patiënt. Zowat iedereen die op een verantwoorde wijze meer droge spieren wil toevoegen. `,
              type: 'white'
            }
          ]
        },
        {
          label: 'Sport – Specific training',
          labelDt: `Sport specifiek trainen`,
          img: 'images/sport_specif_training_01.jpg',
          height: '800px',
          id: 'sport-specific-training',
          subTitle: `Enhance your power and stamina for a particular sport. Great for off-season training as to not reduce performance when getting back on pitch, mat or in the ring. We have a training customised to you. Available with the supervised benefits of a personal trainer or as a premade plan.`,
          subTitleDt: `Verbeter uw kracht en uithoudingsvermogen voor een bepaalde sport. Je ervaart minder prestatieverlies wanneer u weer op het veld, de mat of in de ring gaat. We hebben een training op maat voor jou.`,
          content: [
            {
              label: 'Approach',
              description: `Carefully crafted training programs to focus on conditioning the body and mind to excel through the unique demands for endurance, speed, agility, balance and recovery required for each sport as well as minimize injury.`,
              descriptionDt: `Zorgvuldig samengestelde trainingsprogramma’s gericht op het conditioneren van lichaam en geest. Blinken uit op de unieke eisen van uithoudingsvermogen, snelheid, behendigheid, balans en herstel. Elke sport heeft zijn eigen combinatie eisen. Met de juiste combinatie richten wij ons ook op blessurevermindering.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Increased speed and agility, Improved conditioning, Injury prevention, Gaining a competitive edge, Increased acceleration and power, Improved balance and body awareness, Increased strength, Improved endurance and ability to quickly recover from training and competition.`,
              descriptionDt: `Verbeterde snelheid, verbeterde behendigheid, verbeterde conditie, letselpreventie, concurrentievoordeel behalen, verhoogde acceleratie en kracht, verbeterd evenwicht en lichaamsbewustzijn, verbeterde kracht, verbeterde uithoudingsvermogen en het vermogen om snel te herstellen van trainingen en competitie.`,
              style: {height: '300px'},
              type: 'red'
            },
            {
              label: 'Recommended For', descriptionDt: `De atleet in jou, ongeacht leeftijd of niveau. Als je een voorsprong wilt op die waardige tegenstander of wekelijkse sportpartner.`,
              description: `The athlete in you no matter your age or level. If you want the edge over that worthy adversary or weekly sportsmate.`, type: 'white'
            }
          ]
        },
        {
          label: 'Core conditioning',
          labelDt: `Core training`,
          height: '900px',
          img: 'images/core_training_01.jpg',
          id: 'core-conditioning',
          subTitle: `Protect your lower back, stabilize your spine, and learn proper posture while performing specific core exercises to combat your sedentary lifestyle. Core training will be an important part of all the Life Enhancers. However in this specific program core stability ,flexibility and strength are prominent. If sitting is the new smoking, how many hours are you sitting a day. Not mention the bad posture that creeps in at about 10 am. Available with the supervised benefits of a personal trainer or as a premade plan.`,
          subTitleDt: `Bescherm uw lage rug, stabiliseer uw wervelkolom, versterk de buikspieren en leer de juiste houding terwijl u specifieke core oefeningen uitvoert ter bestrijding van een sedentaire levensstijl. Core training is een belangrijk onderdeel van alle Life Enhancers. In dit specifieke programma wordt echter op kernstabiliteit, veelzijdigheid en kracht benadrukt. Als zitten het nieuwe roken is, hoeveel uur zit u dan per dag? Om nog maar te zwijgen van de slechte zithouding die erin sluipt vanaf ongeveer 10 uur s’ochtends.`,
          rightLink: {
            label: 'Core Training Free',
            url: 'https://advancedbodysystem.mypthub.net/buy-packages/143885/buy'
          },
          content: [
            {
              label: 'Approach',
              description: `Depending on the amount of stress put on your core during your daily activities or lifetime we develop a plan suitable for you. At ABS we safely and effectively assess your physical capabilities and address those deficits.`,
              descriptionDt: `Afhankelijk van de hoeveelheid stress dat wordt uitgeoefend tijdens jouw dagelijkse activiteiten of levensduur, ontwikkelen wij een plan dat bij jou past. Bij ABS beoordelen wij op een veilige en effectieve manier jouw fysieke capaciteiten en pakken deze tekortkomingen aan.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              style: {height: '320px'},
              description: `Stabilizes the spine and helps create a firm base of support for virtually all movement, Tightens the abdominal structures involved in movement and improves the transfer of power to and from the limbs and extremities. Aiding in the prevention of injury, strengthens and improves the torso’s stabilization. Also helps to stabilize and align the spine, ribs and pelvis.`,
              descriptionDt: `Stabiliseert de wervelkolom en helpt bij het creëren van een stevige ondersteuningsbasis voor vrijwel alle bewegingen, verstevigt de buikstructuren die bij het bewegen betrokken zijn en verbetert de krachtoverdracht van en naar de ledematen. Helpt bij het voorkomen van letsel, Versterkt en verbetert de stabilisatie van de romp. Helpt bij het stabiliseren en uitlijnen van de wervelkolom, ribben en bekken.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `The office dweller, The remote worker, Weekend warriors, and the health-conscious. If you are in need of a specific training with the objective of preventing or alleviating core, shoulder and neck issues due to a sedentary lifestyle.`,
              descriptionDt: `De kantoorwerker, de thuiswerker, weekendstrijders en de gezondheidsbewusten. Als u een specifieke training nodig heeft om core-,schouder- en nekklachten te voorkomen of verlichten als gevolg van een sedentaire levensstijl.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Senior fitness',
          labelDt: `Senior fitness`,
          height: '900px',
          img: 'images/senior_training_01.jpg',
          id: 'senior-fitness',
          subTitle: `Delay the aging process and improve your well-being and quality of life by performing these specific workout programs. Designed for seasoned adults of 55 years and older. This customised plan aims to keep you more physically independent so you will be able to enjoy life to the fullest on your terms. We put special emphasis on stretching, balance and functional movements so you will be able to independently keep doing what you love on a daily bases. Available with the supervised benefits of a personal trainer or as a premade plan.`,
          subTitleDt: `Stel het verouderingsproces uit en verbeter uw welzijn en kwaliteit van leven door deze trainingsprogramma’s te volgen. Ontworpen voor doorgewinterde volwassenen van 55 jaar en ouder. Het plan op maat is bedoeld om u lichamelijk onafhankelijker te houden, zodat u optimaal van het leven kunt genieten. We leggen speciale nadruk op rekken, balans en functionele bewegingen om dagelijks te kunnen blijven doen waar u van houdt.`,
          content: [
            {
              label: 'Approach',
              description: `At ABS we safely and effectively assess your physical capabilities and address any deficits with a comprehensive and systematic program. ABS Active Agers takes a holistic approach to fitness, health, and behavioural change. With a steady dose of motivation and devotion, we get you more active and moving towards better overall health and future.`,
              descriptionDt: `Bij ABS beoordelen we op een veilige en effectieve manier uw fysieke mogelijkheden en pakken we eventuele tekortkomingen aan met een uitgebreid en systematisch programma. ABS Active Agers hanteert een holistische benadering van fitness, gezondheid en gedragsverandering. Met een constante dosis motivatie en toewijding zorgen wij ervoor dat u actiever wordt en op weg bent naar een betere gezondheid.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Improved heart health, Improved bone, and joint health. Decreased risk of falling, Warding off inactivity-related disease i.e premature aging, obesity, cardiovascular vulnerability, musculoskeletal fragility, and depression. Be more independent at a later age.`,
              descriptionDt: `Verbeterde gezondheid van het hart, Verbeterde gezondheid van botten en gewrichten, Verlaagd risico op vallen, Afweren van inactiviteit gerelateerde ziekten, zoals vroegtijdige veroudering, zwaarlijvigheid, cardiovasculaire kwetsbaarheid, kwetsbaarheid van het bewegingsapparaat en depressie.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `The seasoned individual who wants to lead a more physical and independent lifestyle. Whether you are new to fitness or you are the competitive active aging athlete putting TikTokers to shame with your life experience, Then program this is for you!`,
              descriptionDt: `De doorgewinterde persoon die een meer lichamelijk actieve en onafhankelijke levensstijl wil leiden. Als fitness nieuw is voor u of u bent de competitieve senioren atleet die Zoomers ten schande brengt met uw levenservaring, dit programma is voor u.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Feeling alive/life booster',
          labelDt: `Life booster`,
          img: 'images/LifeBooster01.jpg',
          height: '935px',
          id: 'metabolic-conditioning',
          subTitle: `Some call it boot camp or interval training or even metabolic conditioning. ABS Life booster is so much more than just interval training or switching from exercise stations in a hurry. We custom design your plan with a combination of the right cardio and strength workouts. No two plans are the same. Don’t expect to spend a long time doing endless, slow cardiovascular training nor uninspiring straight-set strength training workouts. At ABS we give a new spin to interval training to keep you wanting more without the injuries due to the fact we put the focus on YOU. Let’s break boundaries not your back. Available with the supervised benefits of a personal trainer or as a premade plan.`,
          subTitleDt: `Sommigen noemen het bootcamp of intervaltraining of zelfs metabolische conditionering. ABS Feeling alive is zoveel meer dan alleen intervaltraining of haastig wisselen van trainingsstation. Wij ontwerpen een plan op maat met een combinatie van de juiste cardio- en krachttrainingen. Geen twee plannen zijn hetzelfde. Verwacht niet dat u veel tijd zult besteden aan eindeloze, langzame cardiovasculaire training of ongeïnspireerde set krachttraining. Bij ABS geven we een nieuwe draai aan intervaltraining om ervoor te zorgen dat jij meer wilt zonder de blessures, omdat we de focus op JOU leggen. Laten we grenzen doorbreken, niet je rug.`,
          rightLink: {
            label: 'Life Booster Free',
            url: 'https://advancedbodysystem.mypthub.net/buy-packages/143886/buy'
          },
          content: [
            {
              label: 'Approach', descriptionDt: `Door middel van basislijnbepalingen van meerdere factoren, zullen wij beoordelen welke specifieke training het meest geschikt is voor jou en een haalbare trainingsprogramma ontwerpen. Het programma zal bestaan uit een combinatie van grensverleggende training, geplande progressie, motivatie, afwisseling en voeding.`,
              description: `Through baseline determination on multiple factors we will assess which specific training is best suited for you and design a achievable workout program. The program will consist of a combination of boundary-breaking training, planned progression, motivation, variety, and nutrition.`, type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Reset you metabolism, Improve lateral and dynamic movement, improving your aerobic efficiency in all parts of your body.`,
              descriptionDt: `Reset uw metabolisme, verbeter laterale en dynamische bewegingen, verbeter uw aerobe efficiëntie in alle delen van uw lichaam.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `Those in need of a boost of endorphins to feel ALIVE. If you want to improve their overall condition while feeling the most alive you have ever felt. Some fitness experience with peak heart rates is advised before you can take advantage of Life Booster.`,
              descriptionDt: `Diegene die een boost van endorfine willen om je LEVEND te voelen. Als jij je algehele conditie wilt verbeteren terwijl je het meest levend ooit hebt gevoelt. Enige fitnesservaring met piekhartslagen wordt geadviseerd voordat u kunt profiteren van Feeling Alive.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Prenatal Workout',
          labelDt: `Prenatale training`,
          img: 'images/pernatal_training_01.jpg',
          id: 'prenatal-workout',
          subTitle: `Have a healthy pregnancy by staying physically active during pregnancy, this allows you, the mommy-to-be to remain a low-risk patient, thereby allowing you a wide array of options for labour and delivery. It is a mix of cardiovascular exercises, strength and flexibility training! Once your physician declares you are not in a risk group we can begin. Available only with a personal trainer.`,
          subTitleDt: `Zorg voor een gezonde zwangerschap door lichamelijk actief te blijven tijdens de zwangerschap, hierdoor kunt u, de aanstaande moeder, een laag risico patiënt blijven, waardoor u een breed scala aan opties voor de bevalling heeft. Deze is een mix van cardiovasculaire oefeningen, kracht- en flexibiliteitstraining. Zodra uw arts heeft verklaard dat u niet tot een risicogroep behoort, kunnen wij beginnen.`,
          content: [
            {
              label: 'Approach',
              style: {height: '500px'},
              badge: false,
              descriptionDt: `Trimester 1: will include focused cardio and customised strength training targeting the major muscles groups. Preparation exercises for easier labour and child birth while working on body awareness. Trimester 2: With an increase of level of energy we have to resist the urge of training till exhaustion. The focus will be on more variety, stability strength while working on the inner thighs and glutes. Trimester 3: As your body is preparing for child birth and labour you will notice you are slowing down. We will use this time to focus on cardiovascular exercises, mobility to maintain the abdominal strength.`,
              description: `Trimester 1: will include focused cardio and customised strength training targeting the major muscles groups. Preparation exercises for easier labour and child birth while working on body awareness. Trimester 2: With an increase of level of energy we have to resist the urge of training till exhaustion. The focus will be on more variety, stability strength while working on the inner thighs and glutes. Trimester 3: As your body is preparing for child birth and labour you will notice your slowing down. We will use this time to focus on cardiovascular exercises, mobility to maintain the abdominal strength.`, type: 'blue'
            },
            {
              label: 'Benefits',
              style: {top: '230px'},
              description: `Lower the chances of preterm birth, Caesarean birth, Excessive weight gain, Stress, Gestational diabetes or hypertensive disorders such as preeclampsia and lower birth weight. Improved physical fitness, Mental well-being and postpartum recovery.`,
              descriptionDt: `Verlaag de kans op vroeggeboorte, keizersnede, overmatige gewichtstoename, stress, zwangerschapsdiabetes of hypertensieve aandoeningen zoals pre-eclampsie en een lager geboortegewicht. Verbeterde fysieke fitheid, mentale welzijn en het herstel na de bevalling.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              style: {border: '1px solid #6b6b6b', top: 0, left: '350px', height: '230px'},
              description: `Woman who are expecting and want the best for themselves and their unborn child during all trimesters.`,
              descriptionDt: `Zwangere vrouwen in alle trimesters die het beste voor zichzelf en hun ongeboren kind willen.`,
              type: 'white'
            }
          ]
        },
        {
          label: 'Postnatal Workout',
          labelDt: `Postnatale training`,
          img: 'images/postnatal_training_01.jpg',
          height: '950px',
          id: 'postnatal-workout',
          subTitle: `Congratulations, you made it, you’re a mommy! Now comes the hard part. Getting back to your previous fitness level and beyond is a priority but you have to take it slow. Your body just went through a great deal during labour and delivery. You can start this postnatal workout six to eight weeks after delivery. This timeframe depends on the type of delivery you have had. Our workout emphasises not only on reducing the separation of the left and right abdominal wall called diastasis recti but also customised cardio and resistance training. This is key to getting you back in shape and feeling great without straining your pelvic floor. Available with the supervised benefits of a personal trainer or as a premade plan.`,
          subTitleDt: `Gefeliciteerd, je hebt het gehaald, je bent een mama! Nu komt het moeilijke gedeelte. Terugkeren naar uw vorige fitnessniveau of zelfs beter is een prioriteit, maar je moet het langzaam aan doen. Je lichaam heeft zojuist een grote beproeving ondergaan tijdens de bevalling. Je kunt zes tot acht weken na de bevalling beginnen met deze postnatale training. Dit tijdsbestek is afhankelijk van het type bevalling dat je hebt gehad. Onze training legt niet alleen de nadruk op het verminderen van de scheiding van de linker en rechter buikwand, rectus diastase genoemd, maar ook cardio- en weerstandstraining op maat. Dit is de sleutel om je weer in vorm te krijgen en je goed te voelen zonder je bekkenbodem te belasten.`,
          content: [
            {
              label: 'Approach',
              description: `Move to feel good and rebuild your core strength. We will focus on functional training. Every new super mom is different so each moms’ program will be different.`,
              descriptionDt: `Beweeg om je goed te voelen en opbouwen van je core kracht. We zullen ons richten op functionele trainingen. Elke nieuwe supermama is anders, dus het programma van elke moeder zal anders zijn.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              description: `Improve energy, Sleep better, Be more stress resistant. Reduce weight loss and Stretched abdominal muscles. Correct diastasis recti.`,
              descriptionDt: `Verbeter energie, Verstevig uitgerekte buikspieren, bevorder je slaap, verbeterde stressbestendigheid. Gewichtsverlies en Corrigeer rectus diastase.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              description: `New or experienced moms who want to safely work on the challenges of their post-baby body.`,
              descriptionDt: `Nieuwe of ervaren moeders die veilig willen werken aan de uitdagingen van lichaam na het krijgen van een baby.`,
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
          subTitle: `Achieving dad strength isn't an easy process but getting a dad body on the other hand is. You know, the dads who look masculine but are (slightly) overweight. The physical grind of child-rearing will leave you with an impressive array of aches and pains if you're not ready for it. So whether you’re a new father or you are expecting a bundle of joy in the near future, do yourself a favour and get prepared! Available with the supervised benefits of a personal trainer or as a premade plan.`,
          subTitleDt: `Het krijgen van papa kracht is geen eenvoudig proces, maar het krijgen van een papa lichaam daarentegen wel. Je kent het wel, de vaders die er mannelijk uitzien, maar lijden aan (licht) overgewicht. De fysieke sleur van het opvoeden van kinderen zal je met indrukwekkende pijntjes en kwaaltjes achterlaten als je er niet op voorbereidt bent. Dus of je een nieuwe vader bent of in de nabije toekomst een aanwinst van vreugde verwacht, doe jezelf een plezier en bereidt je voor.`,
          content: [
            {
              label: 'Approach',
              description: `Depending on your physicality we will tackle the major muscles groups, improve cardiovascular abilities and “dad bod” functional training. Here we will address you weaker points and focus on daddy movements.`,
              descriptionDt: `Afhankelijk van uw fysieke gesteldheid zullen we de belangrijkste spiergroepen aanpakken, cardiovasculaire vaardigheden verbeteren en toepassen van functionele “dad bod” training. Hier zullen we je zwakkere punten behandelen en ons concentreren op papa-bewegingen.`,
              type: 'blue'
            },
            {
              label: 'Benefits',
              style: {height: '325px'},
              description: `Improve your back strength, Fix the imbalance of your posture, Improved cardiovascular level, Better sleep, Weight loss, and Stress reduction. Be prepared for the physical challenges of fatherhood.`,
              descriptionDt: `Verbeter de kracht in je rug. Herstel de onbalans van uw houding, verbeter het cardiovasculaire vermogen, betere slaap, gewichtsverlies en stressvermindering. Voorbereiding op de fysieke uitdagingen van het vaderschap.`,
              type: 'red'
            },
            {
              label: 'Recommended For',
              style: {height: '300px'},
              description: `All men who are expecting to be a dad within 9 months or less. Also definitely for the new dads already feeling the (physical) aches and pains of fatherhood. If you don’t want to fall victim of the dad bod syndrome join the Daddy training.`,
              descriptionDt: `Alle mannen die verwachten binnen 9 maanden of minder vader te worden. Zeker voor de nieuwe vaders die al de pijnen en kwaaltje van het vaderschap voelen. Als je niet het slachtoffer wilt worden van het paps lijf-syndroom, doe dan mee met de Daddy-training.`,
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
          <div className={'feature'} id={item.id} style={{ height: item.height}}>
            <div className={'feature-label'}>
              <span className={'r-lbl'}>{item[`label${language}`]}</span>
              <div className={'r-sub-title'}>{item[`subTitle${language}`]}</div>
            </div>
            <div className='triplet-container'>
              {this.getTriplet(item.content)}
              {item.rightLink && <a className='right-link-btn' href={item.rightLink.url} target='__blank'>{item.rightLink.label}</a>}
            </div>
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
      display: flex;
      flex-direction: column;
      
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

      .triplet-container {
        flex: 1;
        display: flex;
        align-items: center;
      }
      
      .triplet {
        position: relative;
        height: 100%;
        flex: 1;
        
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

        .right-link-btn {
          border: 1px solid grey;
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

      .triplet-container {
        flex-direction: column;
        align-items: flex-start;

        .right-link-btn {
          width: 100%;
          box-sizing: border-box;
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
        background-image: none !important;
        
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

        .triplet-container {
          flex-direction: column;

          .right-link-btn {
            width: 100%;
            box-sizing: border-box;
            margin-top: 10px;
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