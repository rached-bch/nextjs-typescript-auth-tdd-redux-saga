import "jsdom-global/register";

import * as React from "react";
import { mount } from "enzyme";
import Index from "../pages/index";
import Login from "../components/login";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { USER_QUERY_LOGIN } from "../api/query/user";
import wait from "waait";

afterEach(cleanup);

describe("Pages", () => {
  describe("Index", () => {
    it("Login page should render without throwing an error", function() {
      const { getByText, getByLabelText } = render(<Login />);

      expect(getByText(/Log in/i).textContent).toBe("Log in");
    });

    it("should login without error", async () => {
      const user = [
        {
          request: {
            query: USER_QUERY_LOGIN,
            variables: {
              id: 1
            }
          },
          result: () => {
            return {
              data: {
                user: { id: "1", name: "Leanne Graham" }
              }
            };
          }
        }
      ];

      const { getByText, getByLabelText } = render(
        <MockedProvider mocks={user} addTypename={false}>
          <Index />
        </MockedProvider>
      );

      await wait(0); // wait for response

      expect(getByText(/Home page/i).textContent).toBe("Home page");
    });
  });
});
