import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
} from "@mui/material";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          LET'S TALK
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Contact Us
        </Typography>
        <Typography align="center" sx={{ mb: 2 }}>
          We'd love to hear from you. We're here to answer your questions and
          listen to your suggestions.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Get in touch
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Serving Broward & Miami Dade County
                <br />
                (754)-900-1221
                <br />
                TunedPT@Gmail.com
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name*"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email*"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message*"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      fullWidth
                      required
                      multiline
                      minRows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption" color="text.secondary">
                      By submitting this form, you agree to our processing of
                      your data in accordance with our Privacy Policy.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
              {submitted && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  Thank you for contacting us!
                </Alert>
              )}
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                We're here to answer your questions and listen to your
                suggestions.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Reach out and our team will get back to you as soon as possible.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
