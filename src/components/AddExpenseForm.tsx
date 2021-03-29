import { useState } from 'react';

const AddExpenseForm = () => {
	const [name, setName] = useState('')
	const [cost, setCosts] = useState('');

	const onSubmit = (event) => {

	}
	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label htmlFor='name'>Name</label>
					<input
						required
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={event => setName(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label htmlFor='cost'>Cost</label>
					<input
						required
						type='text'
						className='form-control'
						id='cost'
						value={cost}
						onChange={event => setCosts(event.target.value)}
					></input>
				</div>

			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
            </div>
		</form>
	);
};

export default AddExpenseForm;