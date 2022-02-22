import styled from "@emotion/styled";
import icon from "assets/icon-restart.svg";

const Container = styled.img`
    max-width: 1em;
    max-height: 1em;
`;

type Props = {};

const RestartIcon = (props: Props) => {
    return <Container src={icon} alt="Restart Icon" />;
};

export default RestartIcon;
