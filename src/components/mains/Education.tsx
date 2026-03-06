import styled from "styled-components";

const NorthHall = styled.div`
    background-color: #8fa98b;
    padding: 1rem;
    margin: 0.75rem auto;
    width: 90%;

    ul {
        font-size: calc(5px + 1vw);
    }
`;

const GSU = styled.div`
    background-color: #6e86a6;
    padding: 1rem;
    margin: 0.75rem auto;
    width: 90%;

    ul {
        font-size: calc(5px + 1vw);
    }
`;

const BU = styled.div`
    background-color: #9b4a42;
    padding: 1rem;
    margin: 0.75rem auto;
    width: 90%;

    ul {
        font-size: calc(5px + 1vw);
    }
`;




export default function Education() {
    return (
        <main>
            <h1>Education</h1>

            <NorthHall>
                <ul>
                    <li>North Hall High School
                        <ul>
                            <li>Gainesville, Georgia</li>
                            <li>2019-2023</li>
                            <li>Unweighted GPA: 4.0, Weighted GPA: 4.6</li>
                            <li>Partial IB</li>
                            <li>Dual STEM Pathway completion in Engineering and Computer Science</li>
                        </ul>
                    </li>
                </ul>
            </NorthHall>
            <GSU>
                <ul>
                    <li> Georgia State University
                        <li>
                            <li>Atlanta, Georgia</li>
                            <li>2023-2024(transferred)</li>
                            <li>Major: Computer Science, Minor: Chinese</li>
                            <li> GPA: 3.75</li>
                            <li>Centennial Pipeline Project</li>
                            <li>Dean's list- Fall 2023</li>
                            <li>President's list- Spring 2024</li>
                            <li>Relevant courses:
                                <ul>
                                    <li>Principles of Computer Science 1</li>
                                    <li>Elementary Chinese 1</li>
                                </ul>
                            </li>
                        </li>
                    </li>

                </ul>
            </GSU>
            <BU>
                <ul>
                    <li>Boston University
                        <ul>
                            <li>Boston, MA</li>
                            <li>2024-2027(expected)</li>
                            <li>Major: Computer Science, Minor: Chinese</li>
                            <li>Relevant Courses:
                                <ul>
                                    <li>INT Computer Science 2</li>
                                    <li>Geometric Algorithms</li>
                                    <li>Analysis of Algorithms</li>
                                    <li>Computer Systems</li>
                                    <li>Probability in Computing</li>
                                    <li> Web App Development</li>
                                    <li>Combinatoric Structures</li>
                                    <li>Second Semester Chinese</li>
                                    <li>Third Semester Chinese</li>
                                    <li>Fourth Semester Chinese</li>
                                    <li>Third Year Chinese</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

            </BU>


        </main>
    )
}