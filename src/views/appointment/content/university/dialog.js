import React from '../../../../utils/react/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Dialog, RefreshIndicator} from 'material-ui';
import AutoComplete from './autoComplete';
import Colors from '../../../../config/constants/colors';
import debounce from '../../../../utils/debounce';
import Timers from '../../../../config/constants/timers';
import LoggingStatus from '../../../../utils/models/logging/constants/status';
import Resources from '../../../../services/constants/resources';
import {loadUniversities, updateUniversities, clearUniversities, updateSearchText, closeSearchDialog} from '../../../../actions/creators/universities';
import {updateInstitution} from '../../../../actions/creators/institution';
import Status from '../../../../ui/common/progress/constants/status';

class UniversityDialog extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.onNewRequest = this.onNewRequest.bind(this);
        this.searchUniversities = debounce(this.props.actions.updateUniversities, Timers.DEBOUNCE);
    }

    onNewRequest({value: {props: {value}}}) {
        if (value) this.props.actions.updateInstitution(value);
        else this.props.actions.clearUniversities();
        this.props.actions.closeSearchDialog();
    }

    onUpdateInput(searchText) {
        this.props.actions.updateSearchText(searchText);
	    this.searchUniversities(searchText);
    }

    render() {
        return (
            <Dialog
                open={this.props.showDialog}
                contentStyle={{width: '100%', maxWidth: 'none', top: '0px', position: "absolute"}}
                onRequestClose={this.props.actions.closeSearchDialog}>
                <div style={{position: 'relative'}}>
                    <AutoComplete
                        open={this.props.status !== Status.LOADING}
                        onUpdateInput={this.onUpdateInput}
                        onNewRequest={this.onNewRequest}
                    />
                    <div style={{position: 'absolute', right: "50px", top: "0px"}}>
                        <RefreshIndicator
                            top={0} left={0} size={50}
                            status={this.props.status}
                            loadingColor={Colors.PALE_GREEN}/>
                    </div>
                </div>
            </Dialog>
        );
    }
}

UniversityDialog.propTypes = {
    actions: React.PropTypes.object.isRequired,
    status: React.PropTypes.oneOf(Status.values),
    showDialog: React.PropTypes.bool
};
UniversityDialog.defaultProps = {
    actions: null,
    status: Status.READY,
    showDialog: false
};

function mapStateToProps(state) {
    const {universities: {showDialog}, transactions: {pending}} = state;
    const universitiesRequests = Array.isArray(pending.universities) && pending.universities.length > 0;
    //const pending = log.pending.some(entry => entry.resource === Resources.UNIVERSITIES);
    const status = universitiesRequests ? Status.LOADING : Status.READY;
    return {status, showDialog};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            closeSearchDialog,
            clearUniversities,
            loadUniversities,
            updateUniversities,
            updateSearchText,
            updateInstitution
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UniversityDialog);
