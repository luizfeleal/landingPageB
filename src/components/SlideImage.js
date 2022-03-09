import React, {useEffect, useState, useRef} from 'react';
import styled , { css } from 'styled-components/macro';
import { SlideRockInRioData } from '../data/SlideRockInRioData';
import { IoArrowForward ,IoArrowBack } from 'react-icons/io5';

const HeroSection = styled.section`
   height: 100vh;
   max-height: 1100px;
   position: relative;
   overflow: hidden;
   color: white;
   text-align: center;

`

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background:  linear-gradient(0deg ,rgba(0, 0, 0, 0.2) 0%, 0deg ,rgba(0, 0, 0, 0.2) 50%, 0deg ,rgba(0, 0, 0, 0.6) 100%)
    }
`;

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`

const ArrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem; 
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`
const PrevArrow = styled(IoArrowBack)`
    ${ArrowButtons}
`
const NextArrow = styled(IoArrowForward)`
    ${ArrowButtons}
`

const Hero = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3000)

        return function(){
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current);
        }

        setCurrent(current === length  ? 0 : current + 1)
        
    }
    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length  : current - 1)
    };

    /*if(Array.isArray(slides) || slides.length <= 0){
        return null;
    }*/
    return (
        <div>
            <HeroSection>
                <HeroWrapper>
                    {slides.map((slide, index) => {
                        return(
                            <HeroSlide key={index}>
                                {index === current && (
                                    
                                    <HeroSlider>
                                        <HeroImage  src={slide.image} alt={slide.alt} />
                                </HeroSlider>
                                )}
                            </HeroSlide>
                        );
                    })}
                    <SliderButtons>
                            <PrevArrow onClick={prevSlide}/>
                            <NextArrow onClick={nextSlide}/>
                    </SliderButtons>
                </HeroWrapper>
            </HeroSection>
        </div>
    )
}

export default Hero
