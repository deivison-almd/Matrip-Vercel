import styled from "styled-components";

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'


const BaseImg = styled.div`
  width: 100%;
  height: 45.5rem;
`

export const Imagem1 = styled(BaseImg)`
        background: url(${img1});
        background-size: cover;
        z-index: 0;
`
export const Imagem2 = styled(BaseImg)`
        background: url(${img2});
        background-size: cover;
        z-index: 0;
`
export const Imagem3 = styled(BaseImg)`
        background: url(${img3});
        background-size: cover;
        z-index: 0;
`

export const BookNow = styled.button`
        padding: 1.1rem 2.4rem;
        background: #248277;
        border-radius: 5px;
        font-weight: 600;
        color: #fff;
        transition: 500ms ease;

        &:hover{
                background-color: #fca311;
        }
`

export const TextoPasseio = styled.h2`
        font-size: 5rem;
        font-weight: 700;
        line-height: 5rem;
        color: #0a0908;
`

export const ParagrafoPasseio = styled.p`
        margin: 1rem 0 2rem;
        font-size: 1.5rem;
`

