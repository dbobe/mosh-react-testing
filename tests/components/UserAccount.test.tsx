import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  const testUser: User = {
    id: 1,
    name: "David",
    isAdmin: true,
  };
  it("should render the user name", () => {
    render(<UserAccount user={testUser} />);
    expect(screen.getByText(testUser.name)).toBeInTheDocument();
  });

  it("should render the Edit button if the user is an Admin", () => {
    render(<UserAccount user={testUser} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render the Edit button if the user is not an Admin", () => {
    const user: User = {
      id: 1,
      name: "David",
      isAdmin: false,
    };
    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
