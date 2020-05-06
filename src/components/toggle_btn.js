import React from 'react';
import Button from '@material-ui/core/Button';



const Toggle = () => {
	onToggle() {
		console.log('toggle');
	}
	return (
		<Button variant="contained" className="mt-2" 
		onClick={onToggle}>
			Toggle
		</Button>
	);
};

export default Toggle;
