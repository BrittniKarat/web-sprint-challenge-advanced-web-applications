import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from 'express/lib/response';

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

    const headline = screen.queryByText(/Do graders actually look at this?/i);
    const author = screen.queryByText(/Person/i);
    const summary = screen.queryByText(/Do graders actually look at this?/i);
    const body = screen.queryByText(/Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, amet? Esse dolore vero nostrum totam ad exercitationem eius. Perferendis at enim voluptatum culpa commodi ipsam tempore voluptatibus sequi laborum mollitia./i);
   
    expect(headline).toBeTruthy();
    expect(author).toBeTruthy();
    expect(summary).toBeTruthy();
    expect(body).toBeTruthy();

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={{
        author: '',
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, amet? Esse dolore vero nostrum totam ad exercitationem eius. Perferendis at enim voluptatum culpa commodi ipsam tempore voluptatibus sequi laborum mollitia.",
        createdOn: "2021-12-16T23:56:57-07:00",
        headline: "Do graders actually look at this?",
        id: "TFZzv",
        image: 134,
        summary: "I don't really believe my grader will comment that they've even seen this",
    }}/>)

    const headline = screen.queryByText(/Do graders actually look at this?/i);
    const author = screen.queryByTestId('author')
    const summary = screen.queryByText(/Do graders actually look at this?/i);
    const body = screen.queryByText(/Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, amet? Esse dolore vero nostrum totam ad exercitationem eius. Perferendis at enim voluptatum culpa commodi ipsam tempore voluptatibus sequi laborum mollitia./i);
   
    expect(headline).toBeTruthy();
    expect(author).toBeTruthy();
    expect(summary).toBeTruthy();
    expect(body).toBeTruthy();

    expect(headline).toBeInTheDocument();
    expect(author).toHaveTextContent("Associated Press");
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', async ()=> {
    const mockDelete = jest.fn();

    render(<Article article={data} handleDelete={mockDelete} />);

    const button = screen.getByTestId("deleteButton");
    userEvent.click(button);

    await expect(mockDelete).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.