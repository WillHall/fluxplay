import React from 'react';
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let DatePicker = mui.DatePicker;



class About extends React.Component {

    render() {
    	let autoOk = false;
    	let minDate = new Date();
    	let maxDate = new Date();
    	let showYearSelector = true;

        return (
            <div>
								<DatePicker
								  hintText="Portrait Dialog"/>

								<DatePicker
								  hintText="Landscape Dialog"
								  mode="landscape"/>

								<DatePicker
								  hintText="Ranged Date Picker"
								  autoOk={autoOk}
								  minDate={minDate}
								  maxDate={maxDate}
								  showYearSelector={showYearSelector} />
            </div>
        );
    }
}

export default About;
