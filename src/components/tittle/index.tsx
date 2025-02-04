import { Container } from './style'


type titleProp = {
    title: string
    subtittle: string
}

export function Titte({title, subtittle}:titleProp){
    return (
        <Container>
            <h2>{title}</h2>
            <span>{subtittle}</span>
        </Container>

    )
}