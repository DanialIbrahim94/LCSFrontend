/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import axios from "utils/axios";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { notification } from "antd";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import Button from "@mui/material/Button";
import MDTypography from "components/MDTypography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import StarIcon from "@mui/icons-material/Star";
import Looks3Icon from "@mui/icons-material/Looks3";
import NotesIcon from "@mui/icons-material/Notes";
import ShortTextIcon from "@mui/icons-material/ShortText";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import AdjustIcon from "@mui/icons-material/Adjust";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import TodayIcon from "@mui/icons-material/Today";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import GestureIcon from "@mui/icons-material/Gesture";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CakeIcon from "@mui/icons-material/Cake";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

import InputBase from "@mui/material/InputBase";
import Rating from "@mui/material/Rating";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import Modal from "@mui/material/Modal";
import multiChoiceInputComponent from "./multiChoiceInputComponent";
import martialStatusInputComponent from "./martialStatusInputComponent";

const useStyles = makeStyles({
  input: {
    textAlign: "center",
    "& input": {
      textAlign: "center",
    },
  },
});

const StyledRating = styled(Rating)(({ theme }) => ({
  fontSize: "3rem",
}));

const drawerWidth = 240;

function NameInputComponent(props) {
  return (
    <MDBox>
      <InputBase
        variant="standard"
        style={{ width: "100%" }}
        className={useStyles().input}
        id="formName"
        label="Form Name"
        type="text"
        {...props}
      />
    </MDBox>
  );
}

function FieldNameInputComponent(props) {
  return (
    <MDBox>
      <InputBase
        style={{ width: "100%" }}
        label="Element Name"
        type="text"
        variant="standard"
        {...props}
      />
    </MDBox>
  );
}

function FieldDescriptionInputComponent(props) {
  return (
    <MDBox mb={3}>
      <InputBase
        style={{ fontSize: "12px", width: "100%" }}
        label="Element Description"
        type="text"
        variant="standard"
        size="small"
        {...props}
      />
    </MDBox>
  );
}

function FieldRequiredCheckboxComponent({ checked, ...otherProps }) {
  return (
    <FormControlLabel
      style={{ margin: "0", marginTop: "5px" }}
      control={<Checkbox size="small" {...otherProps} checked={checked} />}
      label="Required"
    />
  );
}

/* <MenuItem value="control_textbox">Text</MenuItem> */
/* <MenuItem value="control_email">Email</MenuItem> */
/* <MenuItem value="control_phone">Phone</MenuItem> */
/* <MenuItem value="control_scale">Star Rating</MenuItem> */
/* <MenuItem value="control_time">Time</MenuItem> */
/* <MenuItem value="control_address">Address</MenuItem> */
/* <MenuItem value="control_number">Number</MenuItem> */

/* <MenuItem value="control_date">Date</MenuItem> */
/* <MenuItem value="control_signature">Signature</MenuItem> */

function generateElement(push, identifier, type, text, repr, icon, required = true, options = "") {
  return (
    <ListItem style={{ borderBottom: "1px solid #00000038" }} disablePadding>
      <ListItemButton
        onClick={() =>
          push({
            identifier,
            type,
            text,
            options,
            required,
          })
        }
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={repr} />
      </ListItemButton>
    </ListItem>
  );
}

function ElementList(push) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.level1" }} aria-label="Items">
      {generateElement(push, "control_input", "control_input", "Name", "Name", <AccountBoxIcon />)}
      {generateElement(push, "control_email", "control_email", "Email", "Email", <EmailIcon />)}
      {generateElement(push, "control_phone", "control_phone", "Phone", "Phone", <PhoneIcon />)}
      {generateElement(
        push,
        "control_birthday",
        "control_date",
        "Birthday",
        "Birthday",
        <CakeIcon />
      )}
      {generateElement(
        push,
        "control_address",
        "control_address",
        "Country",
        "Address",
        <RoomIcon />
      )}
      {/* {generateElement(
        push,
        "control_textbox",
        "control_textbox",
        "Type a question",
        "Text Input",
        <ShortTextIcon />
      )}
      {generateElement(
        push,
        "control_textarea",
        "control_textarea",
        "Type a question",
        "Text Area",
        <NotesIcon />
      )}
      {/* {generateElement(
        push,
        "control_martial",
        "control_radio",
        "Marital Status",
        "Marital Status",
        <HelpCenterIcon />
      )}
      {/* {generateElement(
        push,
        "control_scale",
        "control_scale",
        "Type a question",
        "Star rating",
        <StarIcon />
      )}
      {generateElement(
        push,
        "control_time",
        "control_time",
        "Type a question",
        "Time",
        <AccessTimeFilledIcon />
      )}
      {generateElement(
        push,
        "control_datetime",
        "control_datetime",
        "Type a question",
        "Date",
        <CalendarTodayIcon />
      )}
      {generateElement(
        push,
        "control_dropdown",
        "control_dropdown",
        "Type a question",
        "Dropdown",
        <ExpandCircleDownIcon />
      )}
      {generateElement(
        push,
        "control_radio",
        "control_radio",
        "Type a question",
        "Radio",
        <AdjustIcon />
      )}
      {generateElement(
        push,
        "control_checkbox",
        "control_checkbox",
        "Type a question",
        "Checkbox",
        <CheckBoxIcon />
      )}
      {generateElement(
        push,
        "control_number",
        "control_number",
        "Type a question",
        "Number",
        <Looks3Icon />
      )}
      {generateElement(
        push,
        "control_fileupload",
        "control_fileupload",
        "Type a question",
        "File Uploader",
        <FileUploadIcon />
      )}
      {generateElement(
        push,
        "control_signature",
        "control_signature",
        "Type a question",
        "Signature",
        <GestureIcon />
      )}
      {generateElement(
        push,
        "control_captcha",
        "control_captcha",
        "Type a question",
        "Captcha",
        <SmartToyIcon />
      )} */}
    </List>
  );
}

function getFieldRepr(field, index, showVerificationButton) {
  switch (field.identifier) {
    case "control_input":
      return (
        <Grid container>
          <Grid item xs={12}>
            <label htmlFor="input">
              {field.text}
              <input type="text" id="input" disabled style={{ marginLeft: "40px" }} />
            </label>
          </Grid>
        </Grid>
      );
    case "control_textbox":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={12} style={{ textAlign: "center", paddingTop: "0" }}>
            <TextField label="Last Name" variant="outlined" style={{ width: "100%" }} disabled />
          </Grid>
        </Grid>
      );
    case "control_textarea":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={12} style={{ textAlign: "center", paddingTop: "0" }}>
            <TextField
              label="Long text.."
              type="text"
              variant="outlined"
              style={{ width: "100%" }}
              multiline
              rows={4}
              disabled
            />
          </Grid>
        </Grid>
      );
    case "control_email":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={12}>
            <label htmlFor="email">
              {field.text}
              <input
                id="email"
                variant="outlined"
                style={{ width: "auto", marginLeft: "40px" }}
                disabled
              />
            </label>
          </Grid>
        </Grid>
      );
    case "control_phone":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={12}>
            <label htmlFor="phone">
              {field.text}
              <input label="Area Code" variant="outlined" style={{ marginLeft: "40px" }} disabled />
              <input
                label="Phone Number"
                variant="outlined"
                style={{ marginLeft: "20px" }}
                disabled
              />
            </label>
          </Grid>
        </Grid>
      );
    case "control_scale":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={12} style={{ textAlign: "center", paddingTop: "0" }}>
            <StyledRating name="Star rating" value={3} size="large" />
          </Grid>
        </Grid>
      );
    case "control_martial":
      return null;
    case "control_birthday":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={12}>
            <label htmlFor="birthday">
              {field.text}
              <input
                type="date"
                variant="outlined"
                style={{ marginLeft: "40px", minWidth: "200px", textAlign: "center" }}
                disabled
              />
            </label>
          </Grid>
        </Grid>
      );
    case "control_time":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={4} style={{ textAlign: "center", paddingTop: "0" }}>
            <TextField label="Hour" variant="outlined" style={{ width: "100%" }} disabled />
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center", paddingTop: "0" }}>
            <TextField label="Minutes" variant="outlined" style={{ width: "100%" }} disabled />
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center", paddingTop: "0" }}>
            <TextField label="PM" variant="outlined" style={{ width: "100%" }} disabled />
          </Grid>
        </Grid>
      );
    case "control_date":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={12}>
            <label htmlFor="birthday">
              {field.text}
              <input
                type="date"
                variant="outlined"
                style={{ marginLeft: "40px", minWidth: "200px", textAlign: "center" }}
                disabled
              />
            </label>
          </Grid>
        </Grid>
      );
    case "control_address":
      return (
        <Grid container spacing={1} style={{ padding: "0" }}>
          <Grid item xs={12} style={{ textAlign: "left", paddingTop: "7px" }}>
            <label htmlFor="country">
              {field.text}
              <input type="text" id="country" disabled style={{ marginLeft: "57px" }} />
            </label>
            <br />
            <label htmlFor="state">
              State
              <input type="text" id="state" disabled style={{ marginLeft: "40px" }} />
            </label>
            <br />
            <label htmlFor="city">
              City
              <input type="text" id="city" disabled style={{ marginLeft: "40px" }} />
            </label>
          </Grid>
        </Grid>
      );
    case "control_number":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={12} style={{ textAlign: "center", paddingTop: "0" }}>
            <TextField
              label="e.g. 23"
              type="number"
              variant="outlined"
              style={{ width: "100%" }}
              disabled
            />
          </Grid>
        </Grid>
      );
    case "control_dropdown":
      return (
        <Grid container>
          <Grid item xs={12}>
            <label htmlFor="country">
              {field.text}
              <select type="text" id="country" disabled style={{ marginLeft: "40px" }}>
                <option>United States</option>
              </select>
            </label>
          </Grid>
        </Grid>
      );
    case "control_radio":
      return null;
    case "control_checkbox":
      return null;
    case "control_fileupload":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={12} style={{ textAlign: "center", paddingTop: "0" }}>
            <img
              src="https://css-tricks.com/wp-content/uploads/2015/11/drag-drop-upload-1.gif"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
        </Grid>
      );
    case "control_signature":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid
            item
            xs={12}
            style={{ height: "200px", borderColor: "cadetblue", borderStyle: "double" }}
          />
        </Grid>
      );
    case "control_captcha":
      return (
        <Grid container style={{ padding: "0" }}>
          <Grid item xs={12} style={{ textAlign: "center", paddingTop: "0" }}>
            <img src="https://www.octoparse.fr/media/2110/captcha-1.jpg" alt="" />
          </Grid>
        </Grid>
      );
    default:
      return null;
  }
}

function FormEditor({
  initialValues,
  initialWelcomePage,
  initialVerificationCode,
  initialReferralId,
}) {
  const inputRef = useRef(null);
  const userinfo = JSON.parse(sessionStorage.getItem("userData"));
  const [open, setOpen] = useState(false);
  const [referralId, setReferralId] = useState();
  const [logoURL, setLogoURL] = useState();
  const [logoFile, setLogoFile] = useState();
  const [openChild, setOpenChild] = useState(false);
  const [verificationCode, setVerificationCode] = useState(false);
  const [welcomePage, setWelcomePage] = useState({
    title: "<b style='color: #4a98d2;'>The $100</b> Hotel Saver Gift",
    subTitle: `You’re about to receive a FREE coupon valued up to $100 in GUARANTEED hotel savings* BELOW the prices listed on Expedia, Priceline and many others. <br />
      You can use the savings on up to 1,000,000 worldwide hotels and resorts up to 2-years, once redeemed. There is nothing to join, no blackout dates, no travel restrictions, and no timeshare presentations to attend. <br />
      <b>NO GIMMICKS, JUST SAVINGS!</b><br /><br />
      The amount of savings will vary based on the time of year, the length of stay, the type of property and any special events going on in the area at the time of booking. <br />`,
    buttonText: "Start",
    logo: "",
    isActive: "1",
    showQuestionCount: "Yes",
  });
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    textAlign: "center",
    boxShadow: 24,
    paddingTop: "20px",
  };
  const updateUserInfo = (formId) => {
    userinfo.jotform_id = formId;
    sessionStorage.setItem("userData", JSON.stringify(userinfo));
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    // Call Django view to create new form using Jotform API
    const data = JSON.parse(JSON.stringify(values));
    // data.welcomePage = welcomePage;
    data.user_id = userinfo.id;
    data.verificationCode = verificationCode;
    data.logoFile = logoFile;
    data.referralId = referralId;
    axios
      .put(`/jotform/${userinfo.id}/update/`, data)
      .then((res) => {
        notification.success({
          message: res.data.message,
          placement: "bottomRight",
        });
      })
      .catch((err) => {
        notification.error({
          message: err.response.data.message || err.message,
          placement: "bottomRight",
        });
      });

    // Redirect to newly created form
  };

  const handleLogoUpload = (event) => {
    const { name, value } = event.target;
    setLogoFile(value);
  };

  const handleReferralIdChange = (event) => {
    const { name, value } = event.target;
    setReferralId(value || "");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    setReferralId(initialReferralId);
  }, [initialReferralId]);

  useEffect(() => {
    setVerificationCode(initialVerificationCode);
  }, [initialVerificationCode]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = referralId;
    }
  }, []);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "5px",
          marginBottom: "8px",
        }}
      >
        <Box>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: "2px",
              width: "400px",
              margin: "auto",
            }}
          >
            <MDInput
              type="text"
              name="refferal_id"
              label="Refferal ID"
              size="small"
              onChange={handleReferralIdChange}
              value={referralId}
              inputRef={inputRef}
              fullWidth
            />
          </div>
          <MDBox>
            <p id="child-modal-description" style={{ fontSize: "14px", margin: "10px 0 15px 0" }}>
              Click to change logo
            </p>
            <input
              accept="image/*"
              style={{ display: "block" }}
              id="logo-upload"
              type="file"
              onChange={handleLogoUpload}
            />
            {logoURL && <img src={logoURL} alt="Logo" />}
            <p
              variant="standard"
              style={{
                width: "100%",
                fontSize: "32px",
                fontWeight: "600",
                letterSpacing: "normal",
              }}
              className={useStyles().input}
              id="welcomePageTitle"
              type="text"
              name="title"
              dangerouslySetInnerHTML={{ __html: welcomePage.title }}
            />
          </MDBox>
          <MDBox>
            <p
              variant="standard"
              style={{
                width: "80%",
                margin: "auto",
                fontWeight: "400",
                textAlign: "center",
                letterSpacing: "normal",
              }}
              className={useStyles().input}
              id="welcomePageSubTitle"
              type="text"
              name="subTitle"
              dangerouslySetInnerHTML={{ __html: welcomePage.subTitle }}
            />
          </MDBox>
        </Box>
      </div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize="true">
        {({ values, setValues, isSubmitting }) => (
          <Form onKeyDown={handleKeyDown}>
            <div style={{ margin: "20px 0", minHeight: "550px" }}>
              <FieldArray name="formElements" id="formElements">
                {({ push, remove }) => (
                  <Container
                    disableGutters
                    maxWidth="false"
                    style={{ boxSizing: "content-box", borderStyle: "dashed", minHeight: "550px" }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <CssBaseline />
                      <AppBar
                        position="absolute"
                        sx={{
                          backgroundColor: "info.main",
                          zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                      >
                        <Toolbar>
                          <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            style={{ color: "white" }}
                          >
                            Form Elements
                          </Typography>
                        </Toolbar>
                      </AppBar>
                      <Drawer
                        sx={{
                          width: drawerWidth,
                          flexShrink: 0,
                          "& .MuiDrawer-paper": {
                            position: "absolute",
                            height: "-webkit-fill-available",
                            width: drawerWidth,
                            borderRadius: 0,
                            margin: "64px 0 0 0",
                            boxSizing: "border-box",
                            zIndex: 0,
                          },
                        }}
                        variant="permanent"
                        anchor="left"
                      >
                        <Box sx={{ overflow: "auto" }}>{ElementList(push)}</Box>
                      </Drawer>
                      <Box
                        component="main"
                        style={{
                          maxHeight: "600px",
                          overflow: "auto",
                          minHeight: "522px",
                          backgroundColor: "lightblue",
                        }}
                        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
                      >
                        <Toolbar />
                        {values.formElements.map((field, index) => (
                          <div>
                            <div
                              style={{
                                borderRadius: "4px",
                                borderTopLeftRadius: "0",
                                borderBottomLeftRadius: "0",
                                backgroundColor: "white",
                                float: "right",
                              }}
                            >
                              <IconButton
                                aria-label="delete"
                                size="small"
                                onClick={() => remove(index)}
                              >
                                <ClearIcon fontSize="small" />
                              </IconButton>
                            </div>
                            <div
                              style={{
                                marginRight: "30px",
                                marginBottom: "30px",
                                padding: "10px 20px 10px 20px",
                                backgroundColor: "white",
                                borderRadius: "4px",
                                borderTopRightRadius: "0",
                              }}
                            >
                              <Field
                                type="hidden"
                                name={`formElements[${index}].type`}
                                value={field.type}
                              />
                              <Field
                                as={FieldNameInputComponent}
                                name={`formElements[${index}].text`}
                              />
                              <Field
                                as={FieldDescriptionInputComponent}
                                name={`formElements[${index}].description`}
                                placeholder="Description"
                              />

                              {getFieldRepr(field, index, verificationCode)}

                              {field.identifier === "control_email" && (
                                <Grid
                                  item
                                  xs={12}
                                  style={{
                                    textAlign: "right",
                                    paddingRight: "15px",
                                    paddingTop: "7px",
                                    float: "right",
                                  }}
                                >
                                  <Tooltip title="Already specified on form creation">
                                    <FormControlLabel
                                      control={
                                        <Switch
                                          checked={verificationCode}
                                          inputProps={{ "aria-label": "controlled" }}
                                          style={{ padding: "6px" }}
                                          size="small"
                                        />
                                      }
                                      label="Use verification code"
                                      labelPlacement="start"
                                    />
                                  </Tooltip>
                                </Grid>
                              )}

                              <Field
                                as={FieldRequiredCheckboxComponent}
                                name={`formElements[${index}].required`}
                                checked={field.required} // Assuming field.required is a boolean indicating if the checkbox should be checked
                              />
                            </div>
                          </div>
                        ))}
                      </Box>
                    </Box>
                  </Container>
                )}
              </FieldArray>
              <ErrorMessage name="formElements" />
            </div>
            <MDBox style={{ float: "right" }}>
              <Button type="submit" disabled={isSubmitting} variant="contained">
                <MDTypography
                  variant="caption"
                  fontSize="15px"
                  color="white"
                  fontWeight="medium"
                  style={{ paddingLeft: "5px" }}
                >
                  Update Form
                </MDTypography>
              </Button>
            </MDBox>
          </Form>
        )}
      </Formik>
    </>
  );
}
FieldRequiredCheckboxComponent.propTypes = {
  checked: PropTypes.bool.isRequired, // Add prop validation for checked prop
};
FormEditor.propTypes = {
  initialValues: PropTypes.func.isRequired,
  initialWelcomePage: PropTypes.func.isRequired,
  initialVerificationCode: PropTypes.func.isRequired,
  initialReferralId: PropTypes.func.isRequired,
};

export default FormEditor;
