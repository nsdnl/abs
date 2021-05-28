import React, { Component } from 'react';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import './about-us.css';

export class AboutUsComponent extends Component<any, any> {
    constructor(props: any) {
        super(props);
        const language = localStorage.getItem('__ln') || '';
        this.state = {
            language,
          labelDt: 'OVER ONS',
          label: 'ABOUT US',
          owner: 'WITH KHIVO',
          ownerDt: 'MET KHIVO',
            videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY?controls=1',
            philospyText: `We believe that fitness is not only about losing weight and aesthetics. We regard fitness as a tool through
            which one can add years to your lives, health to yor years and prevent diseases. Fitness therefore, should
            be a life enhancer which should be incorporated as a lifestyle rather than programs.
            Having a sedentary employment is seen by many as ‘It pays the bills but it slowly kills’. At Advanced Body
            we prove that it doesn’t have to be like that.
            We believe in working smarter rather than harder. So if you give us your time, we give you results`,
            philosophy: 'Our Philosophy',
            philosophyDt: 'Onze filosofie',
            philospyTextDt: `We zijn ervan overtuigt dat fitness niet alleen gaat om afvallen en het esthetische. Wij beschouwen fitness als een hulpmiddel voor het toevoegen van jaren aan jouw leven, gezondheid aan jouw jaren en het voorkomen van ziektes. Fitness is om die reden een levensverbeteraar en moet opgenomen worden in je levensstijl in plaats van generieke programma’s.
Geef ons jouw tijd en wij geven jou resultaten.`,
            philospyMainText: `At Advanced body system we believe in working smarter rather than harder. So if you give us your time, we give you results.`,
            philospyMainTextDt: `Bij Advanced Body System geloven wij in slimmer werken in plaats van harder. Dus als jij ons jouw tijd geeft geven wij je resultaten.`,
            ourGymLabel: 'OUR GYM',
            ourGymLabelDt: 'ONZE GYM',
            ourGymText: `The company was founded in 2007 by Khivo Boyrard.
              Khivo Boyrard is a certified Fitness Trainer A & B and a certified Health Specialist (EQF level 5).
              Working at multiple commercial and corporate fitness centres he understands the importance of looking
              good, feeling great and combating the sedentary lifestyle.
              He is constantly honing his skillset by updating his knowledge through education.
              With an extensive practical experience of more than a decade our personal trainers, group fitness
              instructors and nutrition consultants have had the pleasure in guiding a wide range of people achieve
              their fitness goals.
              The main aim of Advanced Body System is to focus and improve the health span of the current and later
              years of our lives.
              The goal is not only have an extended lifespan through longevity but have more vitality and be the best
              version of yourself at any age.`,
            ourGymTextDt: `Advanced Body System werd opgericht in 2007 door Khivo Boyrard.
Als een gecertificeerd Fitness trainer A & B en Health Specialist (EQF level 5) is hij zeker bekwaam om jou te assisteren bij het bereiken van jouw onbereikbare.
Gewerkt te hebben bij meerdere commerciële en zakelijke fitness centra begrijpt hij als geen ander het belang van er goed uitzien, je goed voelen en het tegengaan van een sedentaire levensstijl.
Hij is constant zijn vaardigheden aan het verbeteren door relevante studie en certificeringen.
Met een uitgebreide praktijkervaring van meer dan 10 jaar hebben onze personal trainers,  groepsles instructeurs en voedingsadviseurs het plezier om een breed scala aan mensen te helpen om hun fitness doelen te bereiken.
Het hoofddoel van Advanced Body System is het richten op en bevorderen van het gezondheid van de huidige en latere levensjaren. 
Het doel is niet alleen een langere levensduur maar ook meer vitaliteit om de beste versie te zijn van jezelf op elke leeftijd.`,
            gymExt: `The company was founded in 2007 by me, Khivo Boyrard.
As a certified Fitness Trainer A & B and a certified Health Specialist (EQF level 5) my joy comes from  being an added value in your journey towards your best self. Seeing the smile on your face when you achieve your unattainable is personally gratifying. The name Advanced Body System or ABS is not  only want everyone wants but stands for a system which incorporates different training methods and lifestyle adjustments adapted to your journey.
Working at multiple commercial and corporate fitness centres in and around The Hague, I understand the importance of looking good, feeling great and combating the sedentary lifestyle.
Early on I understood that solely focusing on aesthetics will please your current self but conflict your future self. Even I fell victim in my younger years to the aesthetic trap. I wish someone would have told me to focus more on longevity instead of gaining muscle. That advice would have saved me from various aches and pains. Every one knows the saying no pain no gain, right?  Well, that pain is the body telling you to stop or risk damage.
Working independently at commercial gyms 85% of the members who hire me wanted to have “beach bods”. As I shifted to corporate fitness centres more than 75% of the members were using the facilities combat repetitive stress injuries, improve core stability and the quality of daily life.
 One particular example of a member made me look at training form a holistically point of view. The member Nicole suffered from severe neck, shoulder and back pain from 20 years of office work. During this time Nicole tried almost everything on the market to solve her pains. Nothing seemed to work. Like most office warriors she took her annual vacation but this time she wanted a longer break from work.
After 1 week of taking an extended vacation of 2 months her pain disappeared. She was ecstatic to say the least. With her energized and pain free body her was ready to tackle office life. To her surprize after 3 hours of work on her first day back the old aches and pain came back with a vengeance. Nicole like so many others suffering from sedentary pains thought the aches come with the pay check. I took it upon my self t prove them all wrong. Combating 8 hours of sitting a day with a few hours of tailor made fitness is challenging but definitely feasible. We just have to find the right training methods and implement positive lifestyle changes. You can have an office job and have a pain free and aesthetically pleasing body.
I am constantly honing his skillset by updating my knowledge through education.
With an extensive practical experience of more than a decade as a personal trainer, group fitness instructor and nutrition consultant have had the pleasure in guiding a wide range of people achieve their fitness goals. 
The main aim of Advanced Body System is to focus and improve the health span of the current and later years of our lives. The goal is not only have an extended lifespan through longevity but have more vitality and be the best version of yourself at any age.`,
            missionText: ` At Advanced Body System we understand that each and every body is different and comes with its own challenges.
          Therefore we provide an approach tailor made specific to individual needs. Fitness should be an enjoyment,
          goal oriented but most of all effective. Each participant should have fun while improving vitality through
          proven fitness. We provide the knowledge and skillset to our clients for continued effects. You just have to
          want it.`,
            missionTextDt: `Bij Advanced Body System begrijpen we dat ieder lichaam anders is en komt met eigen uitdagingen. 
Met dit als uitgangspunt bieden wij een op maat gemaakte aanpak voor individuele behoeften. Fitness zou prettig, doel gericht maar vooral effectief moeten zijn. Iedere deelnemer moet zich vermaken tijdens het bevorderen van de vitaliteit door bewezen fitness. Wij bieden de kennis en vaardigheden aan onze cliënten voor een blijvend resultaat. Je moet het alleen willen`,
            missionTitle: 'OUR MISSION',
            missionTitleDt: 'ONZE MISSIE',
            headerText: `AdvancedBodySystem envisions working with various professionals to offer the best tailor-made service to achieve fitness success. The main aim of AdvancedBodySystem is to focus on and improve the healthspan of current and later years your life.`,
            headerTextDt: `ABS voorziet een samenwerking met verschillende professionals om de beste op maat gemaakte service te bieden voor het behalen van fitnesssucces. Het belangrijkste doel van ABS is om u te concentreren op en het verbeteren van de gezondheid van uw huidige en latere jaren`
        };
    }

    render(): React.ReactNode {
        const {videoUrl, language} = this.state;
        const state = this.state;
        return <div className={'about-us'}>
            <div className={'block-1'}>
                <h1 className={'ab-title'}>{state[`label${language}`]}</h1>
                <div className={'sign'}>
                    <div>{state[`owner${language}`]}</div>
                    <hr/>
                </div>
                <div className={'ab-info1'}>
                    {state[`headerText${language}`]}
                </div>
            </div>


            <div className={'block-2'}>
                <div className={'our-gym-title'}>{state[`ourGymLabel${language}`]}</div>
                <div className={'sec-2'}>
                    <div className={'flexible'}>
                        <div>
                            {state[`ourGymText${language}`]}
                        </div>
                        {/*<a href={'#/home'}>read more...</a>*/}
                    </div>
                    <div className={'flexible avatar'}>
                        <img src={'./images/about_us_our_gym.jpg'}/>
                    </div>
                    {/*<a href={'#/home'} className={'flexible avatar'}>*/}
                    {/*    <div className={'avatar-img'}>*/}
                    {/*        <iframe className={'avatar-content'} src={videoUrl}></iframe>*/}
                    {/*    </div>*/}
                    {/*</a>*/}
                </div>
            </div>


            <div className={'block-3'}>
                <div className={'red-left-section'}>
                    <div className={'r-d-f1'}>
                        {state[`philosophy${language}`]}<br/>
                        <span>{state[`philospyMainText${language}`]}</span>
                    </div>
                    <div className={'r-d-f2'}>
                        {state[`philospyText${language}`]}
                    </div>
                </div>
                <div className={'float-right'}>
                    <img src={'./images/about_us_philosophy_hover.jpg'} />
                    {/*<img src={'profile6.jpeg'} alt={''}/>*/}
                </div>
                <div className={'float-bottom'}>
                    {/*<img src={'profile1.jpeg'} alt={''}/>*/}
                    <div className={'img'}>
                        <img src={'./images/about_us_philosophy_mission_hover.jpg'} />
                    </div>
                    <div className={'float-content'}>
                        <div className={'sc-child'}>
                            <div>{state[`missionTitle${language}`]}</div>
                            <div className={'second-txt'}>
                                {state[`missionText${language}`]}
                            </div>
                        </div>
                        {/*<div className={'sc-child'}>*/}
                        {/*<div className={'btn'}>Direct link</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>


            <div className={'block-4 mission'}>
            </div>


            <TestimonialsComponent/>
            <div className={'block-5'}></div>


        </div>
    }
}