
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/mains/Home.tsx";
import Proj from "./components/mains/Proj.tsx";
import Education from "./components/mains/Education.tsx";
import Exp from "./components/mains/Exp.tsx";
import Cert from "./components/mains/Cert.tsx";
import Extra from "./components/mains/Extra.tsx";
import styled, {createGlobalStyle} from "styled-components";
import {Container, ContentRow} from "./components/Layout.ts";
import Header from "./components/Header.tsx";

const GlobalStyle = createGlobalStyle`
    body{
        font:normal ;
    }
`;
const MainWrap = styled.main`
    flex: 1;
    min-height: 100vh;
    padding: 2%;
    background-color: #F0F0DB;
    font-size: calc(2px + 1.3vw);
`;



function Root(){
  return (
      <>
          <GlobalStyle />
          <Container>
          <Header/>
              <ContentRow>
                  <Nav />
                  <MainWrap>

              <Routes>
                  <Route
                  path={`/`}
                  element={<Home/>}
                  />
                <Route
                    path={`/proj.html`}
                    element={<Proj/>}
                />
                <Route
                    path={`/edu.html`}
                    element={<Education/>}
                />
                <Route
                    path={`/exp.html`}
                    element={<Exp/>}
                />
                <Route
                    path={`/cert.html`}
                    element={<Cert/>}
                />
                <Route
                    path={`/extra.html`}
                    element={<Extra/>}
                />


              </Routes>
                  </MainWrap>
              </ContentRow>
          <Footer/>
              </Container>
      </>
  )
}

const router =createBrowserRouter(
    [{path: "*",Component: Root}]
)



export default function App() {


  return (
    <>
      {/*EXAM*/}
        <RouterProvider router={router}/>


    </>
  )
}


