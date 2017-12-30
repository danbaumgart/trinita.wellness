import React from '../../utils/react';
import {PageTitle} from '../../ui/common/page';
import Container from '../../ui/common/paper/container';
import content from './content/text';
import TestimonialCard from './testimonialCard';
const TestimonialsPage = (props) => (
	<Container scroll>
		<PageTitle title="Testimonials" />
			{content.map((testimonial, index) =>
			<TestimonialCard key={index}
							 text={testimonial.text}
							 author={testimonial.author}
							 organization={testimonial.organization.name}
							 phone={testimonial.organization.phone}
							 website={testimonial.organization.website} />)}
	</Container>
);
export default TestimonialsPage;