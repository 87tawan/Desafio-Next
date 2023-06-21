import { Container } from "@mui/material";

interface ContainerComponentProps {
  children: React.ReactNode;
}

export default function ContainerComponent({ children }: ContainerComponentProps) {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        gap: '2rem'
      }}
    >
      {children}
    </Container>
  );
}
