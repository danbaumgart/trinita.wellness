import React from '../../../../utils/react/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AutoComplete} from 'material-ui';
import MenuItem from 'material-ui/MenuItem';
import {universitySearchFilter,findIndexOf, replaceSpecialCharacters,trimExtraWhitespace, getObjectPropertySort} from '../../../../utils/string/index';
import {clearSearchText} from '../../../../actions/creators/universities';
import {AutoCompleteStyles} from '../../../../config/constants/styles';
const SearchTermDiv = (props) => (
	<div style={props.style}>
		{props.startIndex > 0 && props.name.substr(0, props.startIndex)}
		<span style={{color: 'blue'}}>
				{props.name.substr(props.startIndex, props.length)}
			</span>
		{props.name.substr(props.startIndex + props.length)}
	</div>
);
SearchTermDiv.propTypes = {
	name: React.PropTypes.string.isRequired,
	startIndex:React.PropTypes.number,
	length:React.PropTypes.number,
	style: React.PropTypes.object
};
SearchTermDiv.defaultProps = {
	startIndex: 0,
	length: 1,
	style: AutoCompleteStyles.PRIMARY_TEXT
};
const UniversityAutoComplete = (props) => (
		<AutoComplete
			open={props.open}
			onUpdateInput={props.onUpdateInput}
			onNewRequest={props.onNewRequest}
			onFocus={props.onFocus}
			floatingLabelText={`Search`}
			maxSearchResults={10}
			menuCloseDelay={0}
			menuProps={{desktop: true, autoWidth: true}}
			filter={AutoComplete.noFilter}
			dataSource={props.dataSource.sort(getObjectPropertySort('searchTermIndex', true)).map(obj => ({
					text: obj.university.name,
					value: (
						<MenuItem
							value={obj.university}
							innerDivStyle={AutoCompleteStyles.INNEER_DIV}
							secondaryText={
								<div style={AutoCompleteStyles.SECONDARY_TEXT}>{`${obj.university.city}, ${obj.university.state}`}</div>}
							primaryText={
								<div style={AutoCompleteStyles.PRIMARY_TEXT}>
									<SearchTermDiv
										name={obj.university.name}
										startIndex={obj.searchTermIndex}
										length={props.searchText.length}
										style={AutoCompleteStyles.PRIMARY_TEXT}
									/>
								</div>
							}
					/>)
				}))
			} fullWidth />
);
UniversityAutoComplete.propTypes = {
	onFocus: React.PropTypes.func.isRequired,
	onUpdateInput: React.PropTypes.func.isRequired,
	onNewRequest: React.PropTypes.func.isRequired,
	dataSource: React.PropTypes.arrayOf(React.PropTypes.object),
	searchText: React.PropTypes.string,
	open: React.PropTypes.bool
};
UniversityAutoComplete.defaultProps = {
    dataSource: [],
	searchText: '',
	open: true
};
function mapStateToProps(state, ownProps) {
    const {searchText} = state.universities;
    const {universities} = state.repositories;
    //const cache = Object.keys(locationCache).filter(key => !ids.includes(key)).map(uniqueKey => locationCache[uniqueKey]);
    const cache = Object.values(universities).map(university =>
	    ({university, searchTermIndex: findIndexOf(searchText, university.name)}));
	return {dataSource: Object.values(cache).filter(val => val.searchTermIndex > -1), searchText};
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({onFocus: clearSearchText}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(UniversityAutoComplete);