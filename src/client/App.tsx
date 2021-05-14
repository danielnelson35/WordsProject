import * as React from 'react';
import { useState, useEffect } from 'react';

/* HOOK REACT EXAMPLE */
// const App = (props: AppProps) => {
// 	const [word, setWord] = useState<word<{word: string, wordtype: string, definition: string}>>();
//
// 	useEffect(() => {
// 		async function getGreeting() {
// 			try {
// 				const res = await fetch('/api/word');
// 				const word = await res.json();
// 				setWord(word);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 		getGreeting();
// 	}, []);
//
// 	return (
// 		<main className="container my-5">
// 			<h1 className="text-primary text-center">Word of the Day</h1>
// 			<h2 className="text-primary text-center">{word}</h2>
// 		</main>
// 	);
// };
//
// interface AppProps {}

/* CLASS REACT EXAMPLE */
class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			word: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/word');
			let word = await r.json();
			this.setState({ word });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">Word of the Day</h1>
					{this.state.word.map(function(word, index) {
						return <div>
							<h3 key={word.word}>{word.word}, {word.wordtype}</h3>
							<p key={index}>{word.definition}</p>
						</div>
					})}
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	word: Array<{word: string, wordtype: string, definition: string}>;
}

export default App;
