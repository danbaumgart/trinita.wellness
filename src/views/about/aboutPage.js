import React from '../../utils/react';
import {PageCard, PageBody, PageImage, Float, StylePaper} from '../../ui/common/page';
import Container from '../../ui/common/paper/container';
import aboutContent from './content/text';
import {NevadaSplash, AboutJenny} from '../../images';
const AboutPage = (props) => (
	<Container scroll>
		<PageCard
			subtitle="Jennifer Ippolito"
			title="About">
			<PageBody
				content={aboutContent}
				zDepth={3}
				pageImage={
					<PageImage
						zDepth={4} top={-70}
						image={AboutJenny}
						float={Float.RIGHT}
						percentWidth={48}/>}/>
		</PageCard>
	</Container>
);
export default AboutPage;