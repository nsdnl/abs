import React, { Component } from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import styled from "styled-components";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";

const FaqWrapper = styled.div`
    background-color: white;
    padding: 40px 0 0;
    color: #666;
    
    .accordion__button {
        width: auto;
    }
    
    .title {
        text-transform: uppercase;
        text-align: center;
        font-size: 50px;
        font-weight: 400;
        margin: 0;
        -webkit-letter-spacing: 10px;
        -moz-letter-spacing: 10px;
        -ms-letter-spacing: 10px;
        letter-spacing: 10px;
    }
    
    .faq-container {
        margin-top: 40px;
    }
    
    @media only screen and (max-width: 500px) {
         .title {
            font-size: 30px;
            -webkit-letter-spacing: 5px;
            -moz-letter-spacing: 5px;
            -ms-letter-spacing: 5px;
            letter-spacing: 5px;
        }
        
        .faq-container {
            margin-top: 20px;
        }
    }
`;

export class FaqComponent extends Component<any, any> {
    constructor(props: any) {
        super(props);
        const language = localStorage.getItem('__ln') || '';
        this.state = {
            language,
            title: `FAQ`,
            titleDt: `FAQ`,
            items: [
                {
                    id: 1,
                    label: 'How do you assess new clients?',
                    labelDt: `Hoe beoordeelt u nieuwe klanten?`,
                    faq: `An initial fitness test must be performed to gauge your overall health and
physical status. These are a series of exercises that will depend on your goal
and your current physicality. Think about cardiovascular endurance, muscular
strength, muscular endurance, flexibility, and body composition exercises.To
design an effective and appropriate exercise program we will use your results
as a starting point.`,
                    faqDt: `Er moet een eerste fitnesstest worden uitgevoerd om uw algehele gezondheid
en fysieke toestand te meten. Dit zijn een reeks oefeningen die afhangen van
je doel en je huidige fysieke gesteldheid. Denk aan cardiovasculair
uithoudingsvermogen, spierkracht, spieruithoudingsvermogen, flexibiliteit en
oefeningen voor lichaamssamenstelling. Om een effectief en passend
oefenprogramma te ontwerpen, zullen we uw resultaten als uitgangspunt
gebruiken.`
                },
                {
                    id: 2,
                    label: 'How will you track my progress?',
                    labelDt: `Hoe ga je mijn voortgang volgen?`,
                    faq: `We log your progress through an app that is convenient for you and your
trainer to always have access to. If you don’t want to take advantage of the
app your trainer will manually keep track of your progress when training with
you.`,
                    faqDt: `We houden je voortgang bij via een app waar jij en je trainer altijd toegang toe
hebben. Als je geen gebruik wilt maken van de app, houdt je trainer je
voortgang handmatig bij wanneer jullie samen trainen.`
                },
                {
                    id: 3,
                    label: 'Do you offer nutritional advice?',
                    labelDt: `Biedt u voedingsadviezen aan?`,
                    faq: `We will take a closer look at your diet and make suggestions on how to add or
reduce certain foods or drinks. Your lifestyle and fitness goals will be taken into
consideration so that specific nutritional advice can be offered.`,
                    faqDt: `Wij nemen je voedingspatroon onder de loep en maken suggesties over het
toevoegen of reduceren van bepaalde voedingsmiddelen. Hierbij wordt je
levensstijl en fitnessdoelen in acht genomen zodat er specifieke
voedingsadvies kan worden geboden.`
                },
                {
                    id: 4,
                    label: `How much does it cost?`,
                    labelDt: `Hoeveel kost het?`,
                    faq: `Can you put a price on improved quality of life and breaking barriers?
The answer is YES!
That is why we believe we have a solution for all people with different
incomes.
Get in touch with us and we will be more than happy to elaborate.`,
                    faqDt: `Kunt u een prijs stellen aan een verbeterde levenskwaliteit en het doorbreken
van barrières? Het antwoord is JA!
Daarom geloven we dat we een oplossing hebben voor alle mensen met
verschillende inkomens.
Neem contact met ons op en we lichten het nader toe.`
                },
                {
                    id: 5,
                    label: 'What\'s your preferred style of encouragement?',
                    labelDt: `Wat is uw favoriete stijl van aanmoediging?`,
                    faq: `We use honest and positive reinforcement. We do not believe body-
shaming can be effective for motivational purposes.`,
                    faqDt: `We gebruiken eerlijke en positieve bekrachtiging. We geloven niet dat body-
shaming effectief kan zijn voor motiverende doeleinden.`
                },
                {
                    id: 6,
                    label: `How do you incorporate 'fun' into workouts?`,
                    labelDt: `Hoe integreer je 'plezier' in trainingen?`,
                    faq: `Every one different so is our view of fun. Some like to be pushed to their limit
while others like their workouts to be gamified. We will adjust the training
accordingly.`,
                    faqDt: `Iedereen is anders, dus onze kijk op plezier. Sommigen houden ervan om tot
het uiterste te worden gepusht, terwijl anderen graag zien dat hun trainingen
worden gegamificeerd. We zullen de training hierop aanpassen.`
                }
            ]
        };
    }

    getFaq = () => {
        const {items, language} = this.state;
        return <Accordion className={'faq-container'}>
            {items.map((item: any, index: number) => {
                return <AccordionItem key={item.id}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item[`label${language}`]}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {item[`faq${language}`]}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            })}
        </Accordion>
    }

    render(): React.ReactElement {
        const {language} = this.state;
        const state = this.state;
        return <FaqWrapper>
            <h1 className={'title'}>{state[`title${language}`]}</h1>
            {this.getFaq()}
            <div className={'test-block'}><TestimonialsComponent/></div>
        </FaqWrapper>;
    }
}
