import { useState } from "react";
import Name from "./validation/name";
import Email from "./validation/email";
import Phone from "./validation/phone";
import Username from "./validation/username";
import Empty from "./validation/empty";
import Pwd from "./validation/pwd";
import Cpwd from "./validation/cpwd";
import Pincode from "./validation/pincode";


let flag_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const Handle_Flag = () =>{
  let flag_index = -1;
for (let i = 0; i < flag_array.length; i++){
  if (flag_array[i] === 1) {
    flag_index = i;
    break;
  }
}
return flag_index;

}
function Input(props) {
  const [user_input, set_user_input] = useState("");
  const [span, set_label] = useState();
  
  const mystyle = {
    color:'orangered',

    fontSize:14,
    position: "absolute",
    top: 45,
    left: 20,
  };
  let password;
  if (props.input_id === "pwd_signup") {
    password = user_input;
  }

  return (
    <>
      <input
        type={props.type}
        name={props.input_id}
        id={props.input_id}
        className={props.input_class}
        value={user_input}
        onChange={(e) => {
          set_user_input(e.target.value);
          const input_detail = {
            value: e.target.value,
            label: props.label_child,
            pwd: password,
            name: e.target.name,
          };

          if (e.target.name === "fname_signup") {
            let [returned_span, flag] = Name(input_detail);
            flag_array[0] = flag;
            set_label(returned_span);
           
          }

          if (e.target.name === "lname_signup") {
            let [returned_span, flag] = Name(input_detail);
            flag_array[1] = flag;
            set_label(returned_span);
           
          }
          if (e.target.name === "email_signup") {
            let [returned_span, flag] = Email(input_detail);
            flag_array[7] = flag;
            set_label(returned_span);
            
          }
          if (e.target.name === "phone_signup") {
            let [returned_span, flag] = Phone(input_detail);
            flag_array[2] = flag;
            set_label(returned_span);
           
          }
          if (e.target.name === "uname_signup") {
            let [returned_span, flag] = Username(input_detail);
            flag_array[8] = flag;
            set_label(returned_span);
            
          }
          if (e.target.name === "state_signup") {
            let [returned_span, flag] = Empty(input_detail);
            flag_array[3] = flag;
            set_label(returned_span);
            
          }
          if (e.target.name === "city_signup") {
            let [returned_span, flag] = Empty(input_detail);
            flag_array[4] = flag;
            set_label(returned_span);
            
          }
          if (e.target.name === "zip_signup") {
            let [returned_span, flag] = Pincode(input_detail);
            flag_array[5] = flag;
            set_label(returned_span);
           
          }

          if (e.target.name === "address_signup") {
            let [returned_span, flag] = Empty(input_detail);
            flag_array[6] = flag;
            set_label(returned_span);
            
          }
          if (e.target.name === "pwd_signup") {
            let [returned_span, flag] = Pwd(input_detail);
            flag_array[9] = flag;
            set_label(returned_span);
           
          }
          if (e.target.name === "cpwd_signup") {
            let [returned_span, flag] = Cpwd(input_detail);
            flag_array[10] = flag;
            set_label(returned_span);
            
          }
        }}
        required
      />
      <label
        id={props.label_id}
        className={props.label_class}
        for={props.input_id}
      >
        {props.label_child}
      </label>
      <span id={props.span_id} className={props.span_class} style={mystyle}>
        {span}
      </span>
    </>
  );
}

export { Input,Handle_Flag };
