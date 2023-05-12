import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RdsVideoPlayer } from "../src";
import { RdsVideoPlayerProps } from "../src/rds-video-player/rds-video-player";

describe("RdsVideoPlayer", () => {
  const defaultProps: RdsVideoPlayerProps = {
    width: "640px",
    height: "360px",
    autoplay: false,
    muted: true,
    videoLink: "https://example.com/video.mp4",
  };

  it("renders without crashing", () => {
    const { container } = render(<RdsVideoPlayer {...defaultProps} />);
    expect(container.firstChild).toBeInTheDocument();
  });


});
