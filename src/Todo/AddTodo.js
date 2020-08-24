import React, {useState} from 'react';
import PropTypes from 'prop-types';


const styles = {
	form: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '10px 0',
		padding: '5px',
		border: '1px solid #aaa',
		borderRadius: '5px',
	},
	input: {
		width: '100%',
	},
	button: {
		marginLeft: '20px',
		background: '#2ABE86',
		border: '1px solid #0E7B52',
		borderRadius: '5px',
		boxShadow: '0 0 3px #0E7B52',
	}
}

function useInputValue(defaultValue = '') {
	const [value, setValue] = useState(defaultValue);

	return {
		bind: {
			value,
			onChange: event => setValue(event.target.value),
		},
		clear: () => setValue(''),
		value: () => value,
	}
}

function AddTodo({onCreate}) {
	const input = useInputValue('');

	function submitHandler(event) {
		event.preventDefault();

		if(input.value().trim()) {
			onCreate(input.value());
			input.clear();
			// setValue('');
		}
	}
	return (
		<form style={styles.form} onSubmit={submitHandler}>
			<input {...input.bind} style={styles.input}/>
			<button style={styles.button} type='submit'>+</button>
		</form>
		)
}

AddTodo.propTypes = {
	onCreate: PropTypes.func.isRequired,
}

export default AddTodo