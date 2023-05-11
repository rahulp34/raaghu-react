import React from "react";
import { mount } from "enzyme";
import { RdsTeamMember } from "../src";
import { RdsTeamMemberProps } from "../src/rds-team-member/rds-team-member";
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
const teamItems = [
    {
        title: "John Doe",
        subTitle: "Developer",
        description: "John Doe is a software developer with 5 years of experience.",
        imgLink: "https://example.com/john-doe.jpg",
        twitterIcon: "twitter",
    },
    {
        title: "Jane Smith",
        subTitle: "Designer",
        description: "Jane Smith is a UI/UX designer with a passion for creating beautiful and functional designs.",
        imgLink: "https://example.com/jane-smith.jpg",
        twitterIcon: "twitter",
    },
];

describe("RdsTeamMember", () => {
    it("renders team members correctly", () => {
        render(<RdsTeamMember teamItem={teamItems} />);
        const johnDoeTitle = screen.getByText("John Doe");
        const janeSmithTitle = screen.getByText("Jane Smith");
        expect(johnDoeTitle).toBeInTheDocument();
        expect(janeSmithTitle).toBeInTheDocument();
    });

    it("displays the team member's subtitle correctly", () => {
        render(<RdsTeamMember teamItem={teamItems} />);
        const johnDoeSubtitle = screen.getByText("Developer");
        const janeSmithSubtitle = screen.getByText("Designer");
        expect(johnDoeSubtitle).toBeInTheDocument();
        expect(janeSmithSubtitle).toBeInTheDocument();
    });

    it("displays the team member's description correctly", () => {
        render(<RdsTeamMember teamItem={teamItems} />);
        const johnDoeDescription = screen.getByText("John Doe is a software developer with 5 years of experience.");
        const janeSmithDescription = screen.getByText("Jane Smith is a UI/UX designer with a passion for creating beautiful and functional designs.");
        expect(johnDoeDescription).toBeInTheDocument();
        expect(janeSmithDescription).toBeInTheDocument();
    });
});
