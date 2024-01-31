"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Image from "next/image";
import { Box, CardMedia } from "@mui/material";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export default function RadioGroupRating() {
  return (
    <Box
      sx={{
        backgroundImage: "./public/fruit.png",
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `300px 300px`,
        height: "100%",
        width: "100%",
      }}
    >
      <div className="">
        <div className="motor-img w-10 h-10 bg-gradient-to-r from-rose-800 to-grey">
          <Image
            className="hover:right-0 active:rg cursor-pointer"
            src="/homepage.svg"
            width={40}
            height={100}
            alt="homepage image"
          />

          <h1 className="title-mce italic cursor-pointer  ">MceFoods</h1>
        </div>

        <div className="rating-div text-center">
          <h1 className="rate-us font-serif text-center text-5xl font-light italic  bg-clip-text text-transparent bg-rose-700">
            Rate Us
          </h1>
          <StyledRating
            className="rating"
            name="highlight-selected-only"
            defaultValue={2}
            size="large"
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
            highlightSelectedOnly
          />
          <div>
            <p className="thx-msg font-serif text-center text-xs">
              Thank you for choosing us.
            </p>
          </div>
          <div>
            <p className="thx-msg font-serif text-center text-xs">
              If you have any complaints, please contact us.
            </p>
            <a className="thx-msg-2 font-mono text-center text-s">
              +90 0216 444 19 05
            </a>
          </div>
        </div>
      </div>
    </Box>
  );
}
