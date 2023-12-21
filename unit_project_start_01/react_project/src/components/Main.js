import { NavLink } from "react-router-dom";

function Main() {
	return (
		<div className="main">
			<div className="main__buttons">
				<a href="/create" className="btn">Create note</a>
				<a href="/note/" className="btn">Watch note</a>
			</div>
			<div className="container__about">

				<p>
					<b>ShareNotes</b> - service for sharing notes. Create a note, send a link to the note, and your friend can view it. After viewing the note will be deleted (or after 15min).
				</p>
				<p>How to make a note?</p>
				<ul>
					<li>Follow the link;</li>
					<li>Insert the text and press Create;</li>
					<li>Send the generated address to a friend!</li>
				</ul>

				<p>How to read the note? Go to the URL sent, or enter the hash manually <NavLink className="link" to='/note/'>here.</NavLink></p>
			</div>
		</div>

	);
}

export default Main;
