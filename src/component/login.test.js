import { fireEvent, render, screen,waitFor } from '@testing-library/react';
import Login from "./login";

jest.mock("axios", () => ({
    __esModule: true,
  
    default: {
      get: () => ({
        data: { id: 1, name: "John" },
      }),
    },
  }));


//When page load testing
test("username input should be rendered",()=>{
    render(<Login/>);
    const userInput=screen.getByPlaceholderText('username')
    expect(userInput).toBeInTheDocument()
})
test("password input should be rendered",()=>{
    render(<Login/>);
    const password=screen.getByPlaceholderText('password')
    expect(password).toBeInTheDocument()
})

test("button text check",()=>{
    render(<Login/>);
    const button=screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

test("username input value should be empty",()=>{
    render(<Login/>);
    const username=screen.getByPlaceholderText('username')
    expect(username.value).toBe("")
})
test("password input value should be empty",()=>{
    render(<Login/>);
    const password=screen.getByPlaceholderText('password')
    expect(password.value).toBe("")
})

test("button should be disable",()=>{
    render(<Login/>);
    const button=screen.getByRole('button')
    expect(button).toBeDisabled()
})
test("error msg should not be display",()=>{
    render(<Login/>);
    const error=screen.getByTestId('error')
    expect(error).not.toBeVisible();
})



//When inserting text
test("change user name test",()=>{
    render(<Login/>);
    const username=screen.getByPlaceholderText('username')
    const testValue="test"
    fireEvent.change(username,{target:{value:testValue}})
    expect(username.value).toBe(testValue)
    
})
test("change password test",()=>{
    render(<Login/>);
    const password=screen.getByPlaceholderText('password')
    const testValue="test"
    fireEvent.change(password,{target:{value:testValue}})
    expect(password.value).toBe(testValue)
})

test("button should not be disable when fields exists",()=>{
    render(<Login/>);
    const button=screen.getByRole('button')
    const username=screen.getByPlaceholderText('username')
    const password=screen.getByPlaceholderText('password')
    const testValue="test"
    fireEvent.change(username,{target:{value:testValue}})
    fireEvent.change(password,{target:{value:testValue}})
    expect(button).not.toBeDisabled()
})

test("loading should not be rendered", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).not.toHaveTextContent(/please wait/i);
});

test("loading should be rendered when click", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
  
    const testValue = "test";
  
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
  
    expect(buttonEl).toHaveTextContent(/please wait/i);
  });


  test("loading should not be rendered after fetching", async () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
  
    const testValue = "test";
  
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
  
    await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
  });
  
  test("user should be rendered after fetching", async () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
  
    const testValue = "test";
  
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
  
    const userItem = await screen.findByText("John");
  
    expect(userItem).toBeInTheDocument();
  });

