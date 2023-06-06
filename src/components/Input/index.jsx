import { Container } from './styles';

export function Input({ Icon: Icon, title, ...rest }) {
    return(
        <Container className="input">
            <p>{title}</p>
            {Icon && <Icon size={"24"}/>}
            <input {...rest} />
        </Container>
    );
}