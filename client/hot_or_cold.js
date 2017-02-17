import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';



const New_Number = 'New_Number';
const Make_Guess = 'Make_Guess';

const newNumber = () => {
	return {
		type: New_Number
	};
};

const makeGuess = (number) => {
	return {
		type: Make_Guess,
		number: number
	};
};

var InitialState = {
	guessedNumber: null,
	guesses: [],
	numberToGuess: null,
	feedback: '',
};

const appReducer = (state = InitialState, action) => {
	switch (action.type) {
		case New_Number:
			const randomNumber = Math.floor((Math.random() * 100) + 1);
			return Object.assign({}, state, {
				numberToGuess: randomNumber,
				feedback: 'Guess a number'
			});
		case Make_Guess:
			let feedback, guesses;
			let distance = Math.abs(state.numberToGuess - action.number);
			if (distance === 0) {
				feedback = "You won";
				guesses = [...state.guesses];
			}
			else if (distance >= 50) {
				feedback = "Ice Cold";
				guesses = [...state.guesses, action.number];
			}
			else if (distance > 30 && distance < 50) {
				feedback = "Cold";
				guesses = [...state.guesses, action.number];
			}
			else if (distance > 20 && distance < 30) {
				feedback = "Warm";
				guesses = [...state.guesses, action.number];
			}
			else if (distance > 10 && distance < 20) {
				feedback = "Hot";
				guesses = [...state.guesses, action.number];
			}
			else {
				feedback = "Very Hot";
				guesses = [...state.guesses, action.number];
			}
			return Object.assign({}, state, {
				guessedNumber: action.number,
				guesses: guesses,
				feedback: feedback
			});
		default:
			return state;
	}
}

const store = createStore(appReducer);
console.log(store.getState());
store.dispatch(newNumber());
console.log(store.getState());
store.dispatch(makeGuess(20));
console.log(store.getState());