/*import { formwrapper, labeldesign, inputdesign } from "./input.module.scss";*/
import styled from "styled-components";

const Form = styled.form`
    background-color: #34495e;
    max-width: 50%;
    margin-left: 25%;
    margin-right: 25%;
`;

const Label = styled.label`
    display: block;
`;

const Input = styled.input`
    width: 100%;
    margin-top: 3px;
    padding: 8px;
    font-size: 15px;
`;

const InputComp = props => {
    return (
        <Form>
        <div>
          <Label>
             Name 
             <Input name="name" id="name"></Input>
          </Label>
        </div>
        <div>
          <Label>
             Last Name 
             <Input name="last-name" id="last-name"></Input>
          </Label>
        </div>
        <div>
          <Label>
             Email 
             <Input name="email" id="email"></Input>
          </Label>
        </div>
        <div>
          <Label>
             Text 
             <Input name="text" id="text"></Input>
          </Label>
        </div>
      </Form>
    )
}

export default InputComp;