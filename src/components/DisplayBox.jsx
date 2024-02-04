import React, {  useMemo } from 'react';

const DisplayBox = React.memo(({ text }) => {

	const boxes = useMemo(() => {
		const words = text.split(' ');
		const boxHeight = 500;
		let currentBox = '';
		let currentBoxHeight = 0;

		return words.reduce((result, word, index) => {
			const wordHeight = word.length * 0.29;
       
			console.log(wordHeight , word ,  word.length)

			if (currentBoxHeight + wordHeight <= boxHeight) {
				currentBox += word + ' ';
				currentBoxHeight += wordHeight - 0.1;
			} else {
				result.push(currentBox.trim());
				currentBox = word + ' ';
				currentBoxHeight = wordHeight;
			}

			if (index === words.length - 1 && currentBox.trim() !== '') {
				result.push(currentBox.trim());
			}

			return result;
		}, []);
	}, [text]);


	return (
		<div>
			{boxes.map((box, index) => (
				<div key={index} style={{ width: '500px', height: '500px', border: '1px solid black', margin: '10px', padding: '10px', backgroundColor: '#2191ff', color: "white" }}>
					{box}
				</div>
			))}
		</div>
	)
});

export default DisplayBox