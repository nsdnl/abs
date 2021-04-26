import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Equipment } from "./pages/equiptment/equipment";
import { FaqComponent } from "./pages/faq/faq";
import { FeatureDetailsComponent } from './pages/features/feature-details.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HomeComponent } from './pages/home/home.component';
import PackageComponent from './pages/package/package.component';
import { Partner } from "./pages/partner/partner";
import { TrainingComponent } from './pages/trainings/training.component';


function PrivateRoute(pProps: any) {
    const {component: Component, authed, ...rest} = pProps;
    return (
        <Route
            {...rest}
            render={(props) =>
                <><Component {...props} />
                    {!(pProps.path === '**' || pProps.path === '/home') && <ContactUsComponent/>}</>}
        />
    )
}


const Routes = [
    {
        path: '/home',
        component: HomeComponent
    },
    {
        path: '/contact-us',
        component: ContactComponent
    },
    {
        path: '/training',
        component: TrainingComponent
    },
    {
        path: '/about-us',
        component: AboutUsComponent
    },
    {
        path: '/packages',
        component: PackageComponent
    },
    {
        path: '/features',
        component: FeaturesComponent
    },
    {
        path: '/features-details/:id',
        component: FeatureDetailsComponent
    },
    {
        path: '/faq',
        component: FaqComponent
    },
    {
        path: '/partners',
        component: Partner
    },
    {
        path: '/equipment',
        component: Equipment
    },
    {
        path: '**',
        redirectTo: '/home',
        component: HomeComponent
    }
];

function App() {
    return (
        <HashRouter>
            <HeaderComponent/>
            <main>
                <Switch>
                    {Routes.map((route: any, i: number) => {
                            return <PrivateRoute key={`root-route${i}`} {...route}/>
                        }
                    )}
                </Switch>
            </main>
            <FooterComponent/>
        </HashRouter>
    );
}

export default App;
