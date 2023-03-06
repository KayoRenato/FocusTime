import styled, { css } from "styled-components";

export type VariantBtn = "primary" | "secondary";

interface ButtonContainerProps {
    variant: VariantBtn;
}

const buttonVariants = {
    primary: "green",
    secondary: "transparent",
}



export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 6rem;
height: 3rem;

margin-right: .5rem;

${props => {
        return css`
            background-color: ${buttonVariants[props.variant]};
        `
    }}

`

