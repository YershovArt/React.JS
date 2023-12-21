import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json'

function Note() {
	let { noteURL } = useParams();
	const [noteText, setNoteText] = useState('');
	const [lineClass, setLineClass] = useState('');
	const [formClass, setFormClass] = useState('hide');
	const [errorClass, setErrorClass] = useState('hide');

	useEffect(() => {

		if (noteURL !== undefined) {
			fetch(env.urlBackend, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({ "url": noteURL })
			})
				.then(response => response.json())
				.then(response => {
					if (response.result) {
						setNoteText(response.note)
						setLineClass('');
						setFormClass('hide');
						setErrorClass('hide');
					}
					else if (!response.result) {
						setLineClass('hide');
						setFormClass('hide');
						setErrorClass('')
					}
				})
		}
		else {
			setLineClass('hide');
			setFormClass('')
			setErrorClass('hide')
		}
	}, []);

	function getNote(event) {
		event.preventDefault();
		let url = event.target.elements.url.value;
		url = url.trim();

		if (url === '') {
			alert('field shoud not be empty')
			return false;
		}

		noteURL = url;
		window.location.href = env.url + '/' + url;
	}

	function searchNote() {
		window.location.href = env.url
	}
	return (
		<div className="note">
			<div className={lineClass}>
				<h4>Note: </h4>
				<div className="note__text">{noteText}</div>
				<div><button className="btn" onClick={searchNote}>search note</button></div>
			</div>
			<div className={errorClass}>
				<p className="note__error">Произошла ошибка</p>
			</div>
			<div className={formClass}>
				<form onSubmit={getNote}>
					<div>
						<label htmlFor="url">
							Enter note hash
						</label>
					</div>
					<div>
						<input  type="text" name="url" id="url" className="note__textarea" />
					</div>
					<button type="submit" className="btn">Search note</button>
				</form>
			</div>
		</div>
	);
}

export default Note;
