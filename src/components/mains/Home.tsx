import styled from "styled-components";

const Picts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 5% 0;
`;

const HomeImg = styled.img`
  max-width: 40%;
  height: auto;
`;

export default function Home(){
    return (
        <main id="main">
            <Picts>
                <HomeImg src="../../../public/Toriana.JPG" alt="Toriana Mullins"/>
                <p>
                    My name is Toriana Mullins, I am a student at Boston University studying Computer Science and
                    Chinese Language.
                    I am a transfer student from Georgia State University where I was doing the same major and minor.
                    I am eager for any opportunity I get whether it is research, interning, etc.
                </p>

            </Picts>
        </main>
    )
}