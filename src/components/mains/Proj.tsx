import styled from "styled-components";
import {useMemo, useState} from "react";

const Main = styled.div`
    width: 70%;
    padding: 2%;
    margin: 0 auto;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

const Num1 = styled.div`
  background-color: #c2d6e8;
  font-size: calc(5px + 3vw);
  padding: 2%;

  label {
    margin-right: 10px;
  }

  input {
    margin-right: 20px;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const Output = styled.h4<{ $neg: boolean }>`
    margin-top: 20px;
    font-size: calc(5px + 2vw);
    color: ${(p) => (p.$neg ? "red" : "black")};
`;

function useCalc() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");

    const a = useMemo(() => Number(first), [first]);
    const b = useMemo(() => Number(second), [second]);

    function clear() {
        setFirst("");
        setSecond("");
        setResult("");
    }

    function compute(op: "+" | "-" | "*" | "/" | "^") {
        if (first === "" || second === "") {
            setResult("Enter two numbers.");
            return;
        }

        if (op === "+") setResult(String(a + b));
        if (op === "-") setResult(String(a - b));
        if (op === "*") setResult(String(a * b));
        if (op === "/") {
            if (b === 0) setResult("Cannot divide by 0.");
            else setResult(String(a / b));
        }
        if (op === "^") setResult(String(a ** b));
    }

    return { first, second, result, setFirst, setSecond, compute, clear };
}


export default function Proj() {
    const { first, second, result, setFirst, setSecond, compute, clear } = useCalc();

    const isNegative = result !== "" && Number(result) < 0;
    return (
        <Main>
            <Num1>
                <label htmlFor="first">Number:</label>
                <input
                    id="first"
                    type="number"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                />

                <label htmlFor="second">Number:</label>
                <input
                    id="second"
                    type="number"
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                />
            </Num1>

            <ButtonsRow>
                <button type="button" onClick={() => compute("-")}>-</button>
                <button type="button" onClick={() => compute("+")}>+</button>
                <button type="button" onClick={() => compute("*")}>*</button>
                <button type="button" onClick={() => compute("/")}>/</button>
                <button type="button" onClick={() => compute("^")}>^</button>
                <button type="button" onClick={clear}>Clear</button>
            </ButtonsRow>

            <Output $neg={isNegative}>{result}</Output>
        </Main>
    );
}