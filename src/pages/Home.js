import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  Stack,
  Avatar,
  Rating,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
  CheckCircleOutline as CheckIcon,
  ArrowForward as ArrowIcon,
  Star as StarIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";

const MotionBox = motion(Box);

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  background: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.main,
    0.95
  )} 0%, ${alpha(theme.palette.primary.dark, 0.95)} 100%)`,
  color: "white",
  padding: theme.spacing(20, 0, 15),
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "url('/path-to-your-pattern.png')", // Add a subtle pattern
    opacity: 0.1,
    zIndex: 0,
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.shape.borderRadius * 2,
  transition: "all 0.3s ease-in-out",
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
    borderColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },
}));

const features = [
  {
    title: "Personalized Care",
    description:
      "Tailored treatment plans designed specifically for your unique needs and goals.",
    icon: <CheckIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "Expert Guidance",
    description:
      "Professional physical therapy services delivered by experienced specialists.",
    icon: <CheckIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "Convenient Location",
    description:
      "We come to you! Mobile physical therapy services in the comfort of your home.",
    icon: <CheckIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "Proven Results",
    description: "Track record of successful recoveries and satisfied clients.",
    icon: <CheckIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marathon Runner",
    rating: 5,
    comment:
      "The personalized care I received was exceptional. My recovery was faster than expected!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Office Professional",
    rating: 5,
    comment:
      "Their mobile service is a game-changer. Professional, convenient, and effective treatment.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Fitness Enthusiast",
    rating: 5,
    comment:
      "The team's expertise in sports rehabilitation helped me get back to training quickly.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Happy Clients", value: "1000+" },
  { label: "Success Rate", value: "98%" },
  { label: "Areas Served", value: "2 Counties" },
];

function Home() {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 2,
                  }}
                >
                  Transform Your Physical Health with Expert Care
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    fontWeight: 400,
                  }}
                >
                  Experience personalized physical therapy in the comfort of
                  your home. Professional care, tailored to your needs.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      backgroundColor: "white",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Book a Consultation
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      borderColor: "white",
                      color: "white",
                      "&:hover": {
                        borderColor: "white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></MotionBox>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Stats Section */}
      <Box sx={{ py: 6, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{ textAlign: "center" }}
                >
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      color: "primary.main",
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Why Choose Us
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Experience the difference with our comprehensive approach to
              physical therapy
            </Typography>
          </Box>
          <Grid
            container
            spacing={3}
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
              justifyContent: "center",
              overflowX: { md: "auto" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              pb: { md: 2 },
            }}
          >
            {features.map((feature, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  px: { xs: 2, sm: 1.5, md: 1.5 },
                  minWidth: { md: "280px" },
                }}
              >
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "400px", md: "none" },
                  }}
                >
                  <FeatureCard>
                    <CardContent
                      sx={{
                        p: { xs: 3, sm: 4 },
                        textAlign: "center",
                        height: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          mb: { xs: 1.5, sm: 2 },
                          "& svg": {
                            fontSize: { xs: 32, sm: 40 },
                          },
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "1.25rem", sm: "1.5rem" },
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </FeatureCard>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              What Our Clients Say
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              Don't just take our word for it - hear from our satisfied clients
            </Typography>
          </Box>
          <Grid
            container
            spacing={3}
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
              justifyContent: "center",
              overflowX: { md: "auto" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              pb: { md: 2 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  px: { xs: 2, sm: 1.5, md: 1.5 },
                  minWidth: { md: "360px" },
                }}
              >
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "400px", md: "none" },
                  }}
                >
                  <TestimonialCard>
                    <Stack spacing={2}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Avatar
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          sx={{
                            width: { xs: 48, sm: 56 },
                            height: { xs: 48, sm: 56 },
                          }}
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              fontSize: { xs: "1rem", sm: "1.25rem" },
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: { xs: "0.75rem", sm: "0.875rem" },
                            }}
                          >
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        precision={0.5}
                        icon={<StarIcon fontSize="inherit" />}
                        sx={{
                          "& .MuiRating-icon": {
                            fontSize: { xs: "1.25rem", sm: "1.5rem" },
                          },
                        }}
                      />
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                        }}
                      >
                        "{testimonial.comment}"
                      </Typography>
                    </Stack>
                  </TestimonialCard>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: `linear-gradient(135deg, ${alpha(
                  theme.palette.primary.main,
                  0.95
                )} 0%, ${alpha(theme.palette.primary.dark, 0.95)} 100%)`,
                color: "white",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Ready to Start Your Journey?
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: "auto" }}
              >
                Take the first step towards a better, more mobile life. Contact
                us today to schedule your personalized consultation.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    backgroundColor: "white",
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Book Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Card>
          </MotionBox>
        </Container>
      </Box>

      {/* Contact Info Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationIcon color="primary" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Location
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Serving Broward & Miami Dade County
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon color="primary" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Phone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    (754) 900-1221
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack direction="row" spacing={2} alignItems="center">
                <TimeIcon color="primary" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Hours
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mon-Fri: 8AM - 6PM
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
