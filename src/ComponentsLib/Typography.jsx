import styled from "styled-components";

let primeFont = "Zilla Slab";
let secondFont = "Montserrat";

export const Typography = styled.div`
  font-family: ${(props) => props.fFamily || primeFont};
  font-size: ${(props) => props.fSize || "4.4rem"};
  font-style: ${(props) => props.fSyle || "normal"};
  font-weight: ${(props) => props.fWeight || "400"};
  line-height: ${(props) => props.fHeight || "5.6rem"};
  letter-spacing: ${(props) => props.lSpacing || "0rem"};
  text-align: ${(props) => props.tAling || "center"};
  color: ${(props) => props.color || "black"};
  margin: ${(props) => props.margin || "0rem"};
`;

export const H1 = (props) => {
    return (
        <Typography
            as="h1"
            fFamily={props.fFamily || primeFont}
            fSize={props.fSize || "4.4rem"}
            fSyle={props.fSyle || "normal"}
            fWeight={props.fWeight || "400"}
            fHeight={props.fHeight || "5.6rem"}
            lSpacing={props.lSpacing || "0rem"}
            tAling={props.tAling || "left"}
            color={props.color || "rgba(255, 255, 255, 1)"}
            {...props}
        >
            {props.children}
        </Typography>
    );
};

export const H2 = (props) => {
    return (
        <Typography
            as="h2"
            fFamily={props.fFamily || primeFont}
            fSize={props.fSize || "4.4rem"}
            fSyle={props.fSyle || "normal"}
            fWeight={props.fWeight || "400"}
            fHeight={props.fHeight || "3.6rem"}
            lSpacing={props.lSpacing || "0rem"}
            tAling={props.tAling || "left"}
            color={props.color || "rgba(255, 255, 255, 1)"}
            {...props}
        >
            {props.children}
        </Typography>
    );
};

export const H3 = (props) => {
    return (
        <Typography
            as="h3"
            fFamily={props.fFamily || primeFont}
            fSize={props.fSize || "2.4rem"}
            fSyle={props.fSyle || "normal"}
            fWeight={props.fWeight || "400"}
            fHeight={props.fHeight || "2.8rem"}
            lSpacing={props.lSpacing || "0rem"}
            tAling={props.tAling || "left"}
            color={props.color || "rgba(255, 255, 255, 1)"}
            {...props}
        >
            {props.children}
        </Typography>
    );
};
export const H4 = (props) => {
    return (
        <Typography
            as="h4"
            fFamily={props.fFamily || secondFont}
            fSize={props.fSize || " 1.9rem"}
            fSyle={props.fSyle || " normal"}
            fWeight={props.fWeight || " 400"}
            fHeight={props.fHeight || " 2.4rem"}
            lSpacing={props.lSpacing || " 0rem"}
            tAling={props.tAling || " left"}
            color={props.color || "rgba(203, 207, 212, 1)"}
            {...props}
        >
            {props.children}
        </Typography>
    );
};

export const H5 = (props) => {
    return (
        <Typography
            as="h5"
            fFamily={props.fFamily || primeFont}
            fSize={props.fSize || " 1.7rem"}
            fSyle={props.fSyle || " italic"}
            fWeight={props.fWeight || " 400"}
            fHeight={props.fHeight || " 2.2rem"}
            lSpacing={props.lSpacing || " 0rem"}
            tAling={props.tAling || " left"}
            color={props.color || "rgba(255, 255, 255, 1)"}
            {...props}
        >
            {props.children}
        </Typography>
    );
};

export const P = (props) => {
    return (
        <Typography
            as="p"
            fFamily={props.fFamily || secondFont}
            fSize={props.fSize || "1.4rem"}
            fSyle={props.fSyle || "normal"}
            fWeight={props.fWeight || "400"}
            fHeight={props.fHeight || "2.2rem"}
            lSpacing={props.lSpacing || "0rem"}
            tAling={props.tAling || "left"}
            color={props.color || "rgba(203, 207, 212, 1)"}
            {...props}
        >
            {props.children}
        </Typography>
    );
};

export const H6 = (props) => {
    return (
        <Typography
            as="h6"
            fFamily={props.fFamily || secondFont}
            fSize={props.fSize || "1rem"}
            fSyle={props.fSyle || "normal"}
            fWeight={props.fWeight || "400"}
            fHeight={props.fHeight || "1.8rem"}
            lSpacing={props.lSpacing || "0rem"}
            tAling={props.tAling || "left"}
            color={props.color || "rgba(255, 255, 255, 1)"}
            {...props}
        >
            {props.children}
        </Typography>
    );
};
