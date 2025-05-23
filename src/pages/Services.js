import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Stack,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
  CheckCircle as CheckCircleIcon,
  LocalHospital as HospitalIcon,
  SportsHandball as SportsIcon,
  ElderlyWoman as ElderlyIcon,
  DirectionsRun as RunIcon,
  WorkOutline as WorkIcon,
  AccessibilityNew as AccessibilityIcon,
} from "@mui/icons-material";

const MotionBox = motion(Box);

const ServiceCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: theme.shape.borderRadius * 2,
  transition: "all 0.3s ease-in-out",
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
    borderColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const services = [
  {
    category: "Orthopedic Care",
    icon: <HospitalIcon sx={{ fontSize: 32 }} />,
    items: [
      "Low Back Pain",
      "Sprained Ankles / Knees",
      "Rotator Cuff Injuries",
      "ACL Reconstruction",
      "Joint Replacement",
      "Plantar Fasciitis",
    ],
  },
  {
    category: "Sports Rehabilitation",
    icon: <SportsIcon sx={{ fontSize: 32 }} />,
    items: [
      "Patellar Femoral Pain Syndrome",
      "Muscle Strains / Tears",
      "Surgical / Non-surgical Meniscal Injury",
      "Achilles Tendonitis",
      "Tennis Elbow",
      "Hip Bursitis",
    ],
  },
  {
    category: "Chronic Conditions",
    icon: <ElderlyIcon sx={{ fontSize: 32 }} />,
    items: [
      "Degenerative Disc Disease",
      "Arthritis Management",
      "Chronic Pain",
      "Balance Disorders",
      "Posture Correction",
      "Joint Stiffness",
    ],
  },
  {
    category: "Performance Enhancement",
    icon: <RunIcon sx={{ fontSize: 32 }} />,
    items: [
      "Athletic Performance",
      "Injury Prevention",
      "Movement Optimization",
      "Strength Training",
      "Flexibility Improvement",
      "Sports-Specific Training",
    ],
  },
  {
    category: "Workplace Wellness",
    icon: <WorkIcon sx={{ fontSize: 32 }} />,
    items: [
      "Ergonomic Assessment",
      "Work-Related Injuries",
      "Posture Training",
      "Stress Management",
      "Office Exercise Programs",
      "Preventive Care",
    ],
  },
  {
    category: "Specialized Care",
    icon: <AccessibilityIcon sx={{ fontSize: 32 }} />,
    items: [
      "Post-Surgical Rehabilitation",
      "Neurological Conditions",
      "Vestibular Rehabilitation",
      "Women's Health",
      "Pediatric Care",
      "Geriatric Care",
    ],
  },
];

function Services() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto", mb: 4 }}
          >
            Comprehensive physical therapy services tailored to your needs,
            delivered in the comfort of your home
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              Book a Consultation
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Box>

        {/* Services Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ width: "100%", maxWidth: "360px" }}
              >
                <ServiceCard>
                  <CardContent sx={{ p: 4, height: "100%" }}>
                    <ServiceIcon>{service.icon}</ServiceIcon>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {service.category}
                    </Typography>
                    <List sx={{ py: 0 }}>
                      {service.items.map((item, idx) => (
                        <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon
                              color="primary"
                              sx={{ fontSize: 20 }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: "body1",
                              color: "text.secondary",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </ServiceCard>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ mt: { xs: 8, md: 12 }, textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Don't see what you're looking for?
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
          >
            We offer a wide range of physical therapy services. Contact us to
            discuss your specific needs.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 6,
              py: 1.5,
              fontSize: "1.1rem",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
