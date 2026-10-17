import React, { ChangeEvent, useState } from "react";
import S from "./contact.style";
import { CircularProgress, Grid } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { FormDataType } from "../../types/form";
import { handleRequest } from "../../utils/helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactFormComponent = () => {
  const [data, setData] = useState<FormDataType>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    text: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<Record<string, boolean>>({
    name: false,
    phone: false,
    email: false,
    subject: false,
    text: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (value.trim().length > 0) {
      setIsError((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSendMail = async () => {
    const errors = {
      name: !data.name.trim(),
      email: !EMAIL_REGEX.test(data.email.trim()),
      subject: !data.subject.trim(),
      text: !data.text.trim(),
    };

    setIsError(errors);

    if (Object.values(errors).some(Boolean)) {
      toast.error("Please fill in all required fields with a valid email.");
      return;
    }

    setIsLoading(true);
    const mailData = {
      subject: data.subject.trim(),
      text: "Name: " + data.name.trim() + "\nEmail: " + data.email.trim() + "\nPhone: " + (data.phone.trim() || "N/A") + "\nSubject: " + data.subject.trim() + "\nMessage: " + data.text.trim(),
    };

    const result: any = await handleRequest("POST", mailData, "/api/mail");
    setIsLoading(false);

    if (result?.data) {
      toast.success(result?.data?.message || "Message sent successfully!");
      setData({ name: "", phone: "", email: "", subject: "", text: "" });
    } else {
      window.location.href = "mailto:gtcelan@gmail.com?subject=" + encodeURIComponent(data.subject) + "&body=" + encodeURIComponent(mailData.text);
    }
  };

  return (
    <S.ContactFormContainer>
      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6}>
          <S.ContactTextField
            fullWidth
            label="Your Name *"
            name="name"
            value={data.name}
            error={isError.name}
            onChange={handleChange}
            helperText={isError.name ? "Name is required" : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <S.ContactTextField
            fullWidth
            type="tel"
            name="phone"
            label="Phone Number"
            value={data.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <S.ContactTextField
            fullWidth
            type="email"
            name="email"
            label="Your Email *"
            value={data.email}
            error={isError.email}
            onChange={handleChange}
            helperText={isError.email ? "Please enter a valid email address" : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <S.ContactTextField
            fullWidth
            type="text"
            name="subject"
            label="Subject *"
            value={data.subject}
            error={isError.subject}
            onChange={handleChange}
            helperText={isError.subject ? "Subject is required" : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <S.ContactTextField
            fullWidth
            multiline
            rows={5}
            name="text"
            label="Your Message *"
            value={data.text}
            error={isError.text}
            onChange={handleChange}
            helperText={isError.text ? "Message should not be empty" : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <S.CustomButton
            variant="contained"
            size="large"
            fullWidth
            disabled={isLoading}
            endIcon={!isLoading && <SendRoundedIcon />}
            onClick={handleSendMail}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
          </S.CustomButton>
        </Grid>
      </Grid>
      <ToastContainer position="bottom-right" />
    </S.ContactFormContainer>
  );
};

export default ContactFormComponent;
