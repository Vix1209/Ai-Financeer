import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "1rem",
  boxShadow: "0.25rem 0.3rem 0.25rem 0.2rem rgba(0, 0, 0, .8)",
  overflow:"hidden"}));

export default DashboardBox;
