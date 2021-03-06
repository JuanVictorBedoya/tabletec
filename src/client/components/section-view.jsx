
/****************************************************************************************

	Copyright (c) 2016-2017, Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

const React = require('react');

/****************************************************************************************/

module.exports = class SectionView extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
		return(
		<div className={this.props.className} style={{padding: '0rem 0.2rem 0rem 0.2rem'}}>
		{/*} style={{padding: '0rem', borderLeft: '0.2rem solid #b0bec5', borderRight: '0.2rem solid #b0bec5'}}*/}
			{ this.props.children }
		</div>)
	}
}
