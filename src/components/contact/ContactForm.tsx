import React, { ChangeEvent, useState } from "react";
import S from "./contact.style";
import { CircularProgress } from "@mui/material";
import { FormDataType, FormErrorType } from "../../types/form";
import { handleRequest } from "../../utils/helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFormComponent = () => {
  //constants
  const [data, setData] = useState<FormDataType>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    text: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<any>({
    name: false,
    phone: false,
    email: false,
    subject: false,
    text: false,
  });

  //functions
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Boolean(e.target.value)) {
      setData({ ...data, [e.target.name]: e.target.value });
      setIsError({ ...isError, [e.target.name]: false });
    } else {
      e.target.name !== "phone" &&
        setIsError({ ...isError, [e.target.name]: true });
    }
  };

  const handleSendMail = async () => {
    let err = 0;
    Object.keys(isError).forEach((item) => {
      if (item !== "phone" && Boolean(isError[item])) err++;
    });
    if (!Boolean(err)) {
      setIsLoading(true);
      let mailData = {
        subject: data.subject,
        text: `
                Mail id : ${data.email},
                Phone number : ${data.phone}
                Subject : ${data.subject}
                Message : ${data.text}
              `,
      };
      let result: any = await handleRequest("POST", mailData, "/api/mail");
      if (result?.data) {
        setIsLoading(false);
        toast.success(result?.data?.message);
        setData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          text: "",
        });
      }
    }
  };

  return (
    <S.ContactFormContainer>
      <S.ContactTextFieldContainer direction={"row"}>
        <S.ContactTextField
          label="Your Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          onInput={handleChange}
          helperText={isError.name ? "Name is required" : ""}
        />
        <S.ContactTextField
          type="number"
          name="phone"
          label="Phone Number"
          value={data.phone}
          onChange={handleChange}
          onInput={handleChange}
        />
      </S.ContactTextFieldContainer>
      <S.ContactTextFieldContainer>
        <S.ContactTextField
          type="email"
          name="email"
          label="Your Email"
          value={data.email}
          onChange={handleChange}
          onInput={handleChange}
          helperText={isError.email ? "Email is required" : ""}
        />
      </S.ContactTextFieldContainer>
      <S.ContactTextFieldContainer>
        <S.ContactTextField
          type="text"
          name="subject"
          label="Subject"
          value={data.subject}
          onChange={handleChange}
          onInput={handleChange}
          helperText={isError.subject ? "Subject is required" : ""}
        />
      </S.ContactTextFieldContainer>
      <S.ContactTextFieldContainer>
        <S.ContactTextField
          type="text"
          name="text"
          label="Your Message"
          size="medium"
          value={data.text}
          onChange={handleChange}
          onInput={handleChange}
          helperText={isError.text ? "Message should not be empty" : ""}
        />
      </S.ContactTextFieldContainer>
      <S.ContactTextFieldContainer>
        <S.CustomButton variant="contained" onClick={handleSendMail}>
          {isLoading ? <CircularProgress color="inherit" /> : "Send Mail"}
        </S.CustomButton>
      </S.ContactTextFieldContainer>
      <ToastContainer position="bottom-left" />
    </S.ContactFormContainer>
  );
};

export default ContactFormComponent;
