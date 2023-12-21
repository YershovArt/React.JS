import React from "react";
import { useState } from "react";
import env from '../env'
function Create() {

	const [url, setUrl] = useState('');
	const [lineClass, setLineClass] = useState('hide');
	const [formClass, setFormClass] = useState('create__form');

	let sendData = (obj) => {
		setFormClass('hide');
		setLineClass('')
		fetch(env.urlBackend, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(obj),
		})
			.then(response => response.json())
			.then(response => {
				console.log(response);
				if (response.result) {
					setUrl(env.url + '/' + response.url)
				}
			})
	}

	let loadDataFromForm = (event) => {

		event.preventDefault();
		let note = event.target.elements.note.value;
		note = note.trim();

		if (note === '') {
			alert('field shoud not be empty')
			return false;
		}

		sendData({ "note": note });

	}
	return (
		<div className="create">

			<form onSubmit={loadDataFromForm} className={formClass}>
				<div>
					<label htmlFor="note">Enter note text</label>
				</div>
				<div>
					<textarea className="create__textarea" name="nte" id="note" defaultValue="Test"></textarea>
				</div>
				<button className="btn" type="submit">Create</button>
			</form>
			<div className={lineClass}>
				<div className="create__hash">
					{url}
				</div>
					<p>Please copy hash because it will dissappear after reload</p>
				<div>
					<button className="btn creacte__btn-" onClick={function () {
						window.location.reload()
					}}>Create new note</button>
				</div>
			</div>

		</div>
	);
}

export default Create;
