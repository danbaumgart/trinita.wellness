const Routes = {
	HOME: 'HOME',
	ABOUT: 'ABOUT',
	QUESTIONS: 'QUESTIONS',
	APPOINTMENT: 'APPOINTMENT',
	TESTIMONIALS: 'TESTIMONIALS'
};
Object.defineProperty(Routes, 'values', {
	get: () => Object.values(Routes)
});
Object.freeze(Routes);
export default Routes;

