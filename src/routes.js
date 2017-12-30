import React from './utils/react';
import {Route, IndexRoute} from 'react-router';
import App from './views/app';
import Paths from './config/handlers/routes/paths';
import HomePage from './views/home/homePage';
import AboutPage from './views/about/aboutPage';
import AppointmentPage from './views/appointment/appointmentPage';
import QuestionsPage from './views/questions/questionsPage';
import TestimonialsPage from './views/testimonials/testimonialsPage';
export default (
	<Route path={Paths.HOME} component={App}>
		<IndexRoute component={HomePage}/>
		<Route path={Paths.ABOUT} component={AboutPage}/>
		<Route path={Paths.QUESTIONS} component={QuestionsPage}/>
		<Route path={Paths.APPOINTMENT} component={AppointmentPage} />
		<Route path={Paths.TESTIMONIALS} component={TestimonialsPage}/>
	</Route>
);
