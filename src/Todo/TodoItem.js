import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
	span: {
		width: '100%',
		overflow: 'hidden',
	},
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '10px 0',
		padding: '5px',
		border: '1px solid #aaa',
		borderRadius: '5px',
	},
	input: {
		margin: '0 10px 0 0',
	},
	button: {
		marginLeft: '20px',
		background: '#D33535',
		border: '1px solid #A80000',
		borderRadius: '5px',
		boxShadow: '0 0 3px #A80000',
	}
}

function TodoItem({todo, index, onChange}) {
	const {removeTodo} = useContext(Context);
	const classes = [];

	if(todo.completed) {
		classes.push('done');
	}

	return (
		<li style={styles.li}>
		<span className={classes.join(' ')} style={styles.span}>
			<input
				type='checkbox'
				checked={todo.completed}
				style={styles.input}
				onChange={() => onChange(todo.id)}/>
			<strong>{index + 1}</strong>
			&nbsp;
			{todo.title}
		</span>
		<button style={styles.button} onClick={() => removeTodo(todo.id)}>&times;</button>
		</li>
		)
	}

	TodoItem.propTypes = {
		todo: PropTypes.object.isRequired,
		index: PropTypes.number,
		onChange: PropTypes.func.isRequired,
	}
	export default TodoItem