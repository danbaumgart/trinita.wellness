import React from '../utils/react';
import {Menu, Drawer, AppBar} from '../ui/navigation';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import {AlertModel} from '../utils/models/alerts';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {Snackbar} from '../ui/navigation/snackbar';
import {closeDrawer, toggleDrawer} from '../actions/creators/app';
import {closeAlertNotification} from '../actions/creators/alerts';
import {Routes, LinkModel} from '../config/model/link';
import {AppStyles} from '../config/constants/styles';
class App extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.changeRoute = this.changeRoute.bind(this);
        this.onCloseAlertNotification = this.onCloseAlertNotification.bind(this);
        this.homeLink = this.props.links.find(link => link.route === Routes.HOME);
    }
    changeRoute(link){
    	console.log("LINK", link);
        browserHistory.push(link ? link.path : this.homeLink.path);
	    if(this.props.showDrawer) this.props.actions.closeDrawer();
    }
    onCloseAlertNotification(reason){
		if(this.props.alertNotification) this.props.actions.closeAlertNotification(reason);
    }
    render() {
        return (
            <div style={AppStyles.CONTAINER}>
                <AppBar
	                onTitleTouchTap={this.changeRoute}
	                onLeftIconButtonTouchTap={this.props.actions.toggleDrawer}
                />
                {this.props.children}
	            <Drawer open={this.props.showDrawer}>
		            {this.props.links.map((link, index) => (
			            <MenuItem
				            key={link.route}
				            onClick={link.handleClick(this.changeRoute)}
				            primaryText={link.label}
				            value={link}
			            />
		            ))}
	            </Drawer>
                <Snackbar onRequestClose={this.onCloseAlertNotification}>
	                {this.props.alertNotification || null}
                </Snackbar>
            </div>
        );
    }
}

App.propTypes = {
    actions: React.PropTypes.object.isRequired,
	links: React.PropTypes.arrayOf(React.PropTypes.instanceOf(LinkModel)).isRequired,
	selectedLink: React.PropTypes.instanceOf(LinkModel).isRequired,
    showDrawer: React.PropTypes.bool,
	alertNotification: React.PropTypes.instanceOf(AlertModel)

};
App.defaultProps = {
    showDrawer: false,
	alertNotification: null
};

function mapStateToProps(state, ownProps) {
    const {app: {showDrawer, links}, alerts: {queue, position}} = state;
	const alertNotification = Array.isArray(queue) && queue.length > position ? queue[position] : null;
	const selectedLink = links.find(link => link.path === ownProps.location.pathname);
    return {showDrawer, links, selectedLink, alertNotification};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
	        closeDrawer,
	        toggleDrawer,
	        closeAlertNotification
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);