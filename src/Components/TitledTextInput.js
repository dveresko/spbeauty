import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 0px;
    border: solid #152842 1px;
    background-color: #D9E2EF;
    color: #0F172A;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='text-caption-rg'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;