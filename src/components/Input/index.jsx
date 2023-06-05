import { Container } from './styles';

export function Input({ Icon: Icon, title, ...rest }) {
    return(
        <Container>
            <p>{title}</p>
            {Icon && <Icon size={"20"}/>}
            <input {...rest} />
        </Container>
    );
}