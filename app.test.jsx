import { render, unmountComponentAtNode } from "react-dom";
import { createRoot } from 'react-dom/client'
import { act } from "react-dom/test-utils";
import Index from "./pages";
import { fireEvent, getByTestId, getByText } from "@testing-library/dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children
)

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Home", () => {
  it('loads', () => {
    act(() => {
      render(<Index />, container)
    })
    expect(container.innerHTML).toMatchSnapshot();
  })

  it('matches snapshot', () => {
    act(() => {
      render(<Index />, container)
    })
    expect(container.textContent).toMatch(/^Dan MolloyHi, I'm Dan.I am a $/)
  })
})

describe("About", () => {
  it('matches snapshot', () => {
    act(() => {
      render(<About />, container)
    })
    expect(container.innerHTML).toMatchSnapshot();

  })
})

describe("Web Projects", () => {
  it('matches snapshot', () => {
    act(() => {
      render(<Projects />, container)
    })
    expect(container.innerHTML).toMatchSnapshot();

  })
})
describe("Contact", () => {
  it('matches snapshot', () => {
    act(() => {
      render(<Contact />, container)
    })
    expect(container.innerHTML).toMatchSnapshot();

  })
})