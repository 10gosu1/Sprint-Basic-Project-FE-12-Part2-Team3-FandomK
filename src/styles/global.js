import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --black-200: #02000E;
        --black-100: #181D26;
        
        --gray-300: #67666E;
        --gray-200: #828282;
        --gray-100: #A3A5A8;

        --white-blue: #8C92AB;
        --white: #F7F7F8;

        --coralpink: #F96D69;
        --hotpink: #FE5493;
    }
    button {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 3px;
        background: linear-gradient(to right, #F86F65, #FE5493);
    }
`;
