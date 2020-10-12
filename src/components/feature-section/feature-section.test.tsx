import React from "react";
import {render, screen} from "@testing-library/react";

import FeatureSection from "./feature-section.component";

describe("testing feature section", () => {
    const image = "/images/kash.jpg";
    const heading = "Listen to podcasts";
    const text = "Lorem ipsum";

    test("has image with alt, heading and text", () => {
        render(<FeatureSection img={image} heading={heading} text={text} />);

        expect(screen.getByRole('heading', {name: /listen to podcasts/i})).toBeInTheDocument();

        expect(screen.getByRole('heading', {name: /lorem ipsum/i})).toBeInTheDocument();

        expect(screen.getByRole('img')).toBeInTheDocument();

        expect(screen.getByRole('img').getAttribute('alt')).toBeTruthy();
    });

    test("link goes to podcast page", () => {
        render(<FeatureSection img={image} heading={heading} text={text} />);

        expect(screen.getByRole('link')).toHaveAttribute('href', '/podcasts');
    });
})