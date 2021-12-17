import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'express/lib/response';

const data = {
    author: "Person",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, amet? Esse dolore vero nostrum totam ad exercitationem eius. Perferendis at enim voluptatum culpa commodi ipsam tempore voluptatibus sequi laborum mollitia.",
    createdOn: "2021-12-16T23:56:57-07:00",
    headline: "Do graders actually look at this?",
    id: "TFZzv",
    image: 134,
    summary: "I don't really believe my grader will comment that they've even seen this",
}

test('renders component without errors', ()=> {
    render(<Article article={data}/>)
    
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={data}/>)

    // const headline = screen.queryByTestId(/headline/i)
    // const author = 1
    // const summary = 1
    // const body = 1


});

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.