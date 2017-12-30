import React from '../../utils/react';
import {PageCard, StylePaper, PageBody, PageImage, Float, Display} from '../../ui/common/page';
import Container from '../../ui/common/paper/container';
import homeContent from './content/text';
import {JennyHome, AlamogordoSplash} from '../../images';
import VideoPlayer from '../../ui/media/videoPlayer';
const HomePage = (props) => (
	<Container scroll>
		<PageCard
			title="Home"
			subtitle="Jennifer Ippolito"
			overlayStyle={{paddingLeft: "60%"}}>
			<PageBody
				content={homeContent}
				zDepth={3}
				pageImage={
					<PageImage
						zDepth={4} top={-55}
						image={JennyHome}
						float={Float.LEFT}
						percentWidth={55}
					/>}
			/>
			<StylePaper margin={5} zDepth={5} padding={8} display={Display.BLOCK}>
				<VideoPlayer video="http://media.trinitawellness.com/jennifer.mp4"/>
			</StylePaper>
		</PageCard>
	</Container>
);
export default HomePage;