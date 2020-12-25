import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { TrainingComponent } from './pages/trainings/training.component';


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
    path: '**',
    redirectTo: '/home',
    component: HomeComponent
  }
];

function App() {
  return (
    <HashRouter>
      <HeaderComponent />
      <main>
      <Switch>
        {Routes.map((route: any, i: number) => {
            return <Route key={`root-route${i}`} {...route}/>
          }
        )}
      </Switch>
      </main>
      <FooterComponent />
    </HashRouter>
  );
}

export default App;
