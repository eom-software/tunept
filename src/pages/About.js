import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Button,
  Paper,
} from "@mui/material";

const benjaminPhoto =
  "https://i0.wp.com/tunedpt.com/wp-content/uploads/2025/03/BP-image-edited.jpg?w=380&ssl=1"; // Placeholder, replace with real photo if available

function About() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Welcome to Physical Therapy done RIGHT!
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Experience the difference at <b>Tuned Physical Therapy</b>. We
              push the boundaries of physical therapy to deliver exceptional
              results, offering personalized care tailored to your needs.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Located in the heart of South Florida, we provide a wide range of
              services to support your recovery, whether you're healing from an
              injury, managing a chronic condition, or enhancing performance
              right at your home.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Our team of skilled therapists uses the latest techniques and
              technologies to ensure the highest level of care. We focus on your
              long-term well-being, helping you regain strength, mobility, and
              confidence.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Every individual is unique, so we create personalized treatment
              plans that align with your specific goals. Together, we'll work
              towards achieving your best physical self.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              At Tuned, we're not just your physical therapy clinic—we're your
              partner in health.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
              href="/contact"
            >
              Contact us today
            </Button>
          </Grid>
        </Grid>

        {/* Team Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            MEET THE TEAM
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar
                  src={benjaminPhoto}
                  alt="Dr. Benjamin Portnoy"
                  sx={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item xs>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Dr. Benjamin Portnoy, DPT
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Doctor of Physical Therapy
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Dr. Benjamin is dedicated to providing exceptional care and
                  personalized treatment for each of his clients. His journey
                  began at Russell Sage College, graduating with honors, before
                  completing his Doctorate in Physical Therapy at the University
                  of Miami. Since then, he has continually expanded his
                  expertise through advanced training in manual therapy, sports
                  rehabilitation, and blood flow restriction, allowing him to
                  offer the most effective and cutting-edge treatments.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Throughout his career, he has had the privilege of working
                  with a diverse range of clients, including athletes, corporate
                  professionals, post-surgery patients, etc. Dr. Benjamin
                  specializes in orthopaedic conditions with an approach that
                  combines a deep understanding of biomechanics with hands-on
                  techniques to create tailored recovery plans. He is passionate
                  about helping individuals achieve lasting recovery, improved
                  mobility, and a better quality of life.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Outside of the clinic Dr. Benjamin is an active individual
                  enjoying paddle boarding, running, working out, trying new
                  coffee shops, and volunteering. He recently participated in
                  the 305 marathon and partnered with The Next Step in raising
                  money to help amputees run again!
                </Typography>
                <Typography variant="body1">
                  As a lifelong learner, Dr. Benjamin is committed to staying
                  ahead of the latest advancements in physical therapy to ensure
                  his clients receive the best possible care. His goal is to
                  empower you to take control of your health, regain your
                  strength, and live life with confidence.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
