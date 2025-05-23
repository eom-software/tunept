import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import {
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "translateX(4px)",
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    transform: "translateY(-2px)",
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1.5),
  "& svg": {
    fontSize: 20,
    color: theme.palette.primary.main,
  },
}));

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 6 },
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <img
                src="https://i0.wp.com/tunedpt.com/wp-content/uploads/2025/01/TUNED-PT-LOGO-WHITE-BG-1-1.png?resize=768%2C204&ssl=1"
                alt="Tuned PT Logo"
                style={{ height: "40px", marginBottom: "16px" }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Empowering individuals to achieve their fitness goals through
                personalized training and expert guidance.
              </Typography>
              <Stack direction="row" spacing={1}>
                <SocialIconButton
                  aria-label="Twitter"
                  href="https://twitter.com"
                  target="_blank"
                >
                  <TwitterIcon />
                </SocialIconButton>
                <SocialIconButton
                  aria-label="Facebook"
                  href="https://facebook.com"
                  target="_blank"
                >
                  <FacebookIcon />
                </SocialIconButton>
                <SocialIconButton
                  aria-label="LinkedIn"
                  href="https://linkedin.com"
                  target="_blank"
                >
                  <LinkedInIcon />
                </SocialIconButton>
                <SocialIconButton
                  aria-label="YouTube"
                  href="https://youtube.com"
                  target="_blank"
                >
                  <YouTubeIcon />
                </SocialIconButton>
              </Stack>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              <FooterLink href="/services" variant="body2">
                Our Services
              </FooterLink>
              <FooterLink href="/about" variant="body2">
                About Us
              </FooterLink>
              <FooterLink href="/contact" variant="body2">
                Contact
              </FooterLink>
              <FooterLink href="/blog" variant="body2">
                Blog
              </FooterLink>
              <FooterLink href="/testimonials" variant="body2">
                Testimonials
              </FooterLink>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Contact Us
            </Typography>
            <Stack spacing={1.5}>
              <ContactItem>
                <LocationIcon />
                <Typography variant="body2">
                  123 Fitness Street, Health City, HC 12345
                </Typography>
              </ContactItem>
              <ContactItem>
                <PhoneIcon />
                <Typography variant="body2">(555) 123-4567</Typography>
              </ContactItem>
              <ContactItem>
                <EmailIcon />
                <Typography variant="body2">info@tunedpt.com</Typography>
              </ContactItem>
            </Stack>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                px: 3,
                py: 1,
                borderRadius: 2,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
                },
              }}
            >
              Book a Session
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Footer */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Tuned PT. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "flex-start", sm: "flex-end" }}
            >
              <FooterLink href="/privacy-policy" variant="body2">
                Privacy Policy
              </FooterLink>
              <FooterLink href="/terms" variant="body2">
                Terms of Service
              </FooterLink>
              <FooterLink href="/sitemap" variant="body2">
                Sitemap
              </FooterLink>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
