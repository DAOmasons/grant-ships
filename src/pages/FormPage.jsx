import { useForm } from '@formspree/react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';

/**
 * ***********************************
 * Form Component
 * ***********************************
 */

const InterestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        X: '',
        Discord: '',
        Telegram: '',
        EthAdd: '',
        CryptoTime: '',
        Tools: '',
        assess: '',
        // Add more fields as necessary
    });

 // Initialize Formspree form
 const [formState, handleSubmit] = useForm(import.meta.env.VITE_PUBLIC_GRANT_SHIPS_SIGN_UP);

 // Check if form submission was successful
 if (formState.succeeded) {
     return <p>Thank you for signing up!</p>;
 }

 const handleChange = (event) => {
     setFormData({
         ...formData,
         [event.target.name]: event.target.value,
     });
 };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Join Grant Ships!
            </Typography>
            <Typography paragraph>
                We are currently looking for Grant Ship operators for the beta season! Do you have what it takes to create a micro grant program? Are you interested in playing a role in funding high impact grants on and for Arbitrum? If you answered `YES`, then we want to hear from you. Please fill out the form below and we will get back to you as soon as possible.
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'white' }, // Changes the text color
                        '& label': { color: 'grey' }, // Changes the label color
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' }, // Changes the border color
                            '&:hover fieldset': { borderColor: 'white' }, // Changes the border color on hover
                            '&.Mui-focused fieldset': { borderColor: 'white' }, // Changes the border color on focus
                        },
                    }}                    
                />
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'white' }, // Changes the text color
                        '& label': { color: 'grey' }, // Changes the label color
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' }, // Changes the border color
                            '&:hover fieldset': { borderColor: 'white' }, // Changes the border color on hover
                            '&.Mui-focused fieldset': { borderColor: 'white' }, // Changes the border color on focus
                        },
                    }}
                />
                <TextField
                    label="X"
                    name="X"
                    fullWidth
                    margin="normal"
                    value={formData.X}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'white' }, // Changes the text color
                        '& label': { color: 'grey' }, // Changes the label color
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' }, // Changes the border color
                            '&:hover fieldset': { borderColor: 'white' }, // Changes the border color on hover
                            '&.Mui-focused fieldset': { borderColor: 'white' }, // Changes the border color on focus
                        },
                    }}
                />
                <TextField
                    label="Discord"
                    name="Discord"
                    fullWidth
                    margin="normal"
                    value={formData.Discord}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'white' }, // Changes the text color
                        '& label': { color: 'grey' }, // Changes the label color
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' }, // Changes the border color
                            '&:hover fieldset': { borderColor: 'white' }, // Changes the border color on hover
                            '&.Mui-focused fieldset': { borderColor: 'white' }, // Changes the border color on focus
                        },
                    }}
                />
                <TextField
                    label="Telegram"
                    name="Telegram"
                    fullWidth
                    margin="normal"
                    value={formData.Telegram}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'white' }, // Changes the text color
                        '& label': { color: 'grey' }, // Changes the label color
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' }, // Changes the border color
                            '&:hover fieldset': { borderColor: 'white' }, // Changes the border color on hover
                            '&.Mui-focused fieldset': { borderColor: 'white' }, // Changes the border color on focus
                        },
                    }}
                />
                <TextField
                    label="Ethereum Address or ENS"
                    name="EthAdd"
                    fullWidth
                    margin="normal"
                    value={formData.EthAdd}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'white' }, // Changes the text color
                        '& label': { color: 'grey' }, // Changes the label color
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' }, // Changes the border color
                            '&:hover fieldset': { borderColor: 'white' }, // Changes the border color on hover
                            '&.Mui-focused fieldset': { borderColor: 'white' }, // Changes the border color on focus
                        },
                    }}
                />
                <TextField
                    label="How long have you been involved in crypto?"
                    name="CryptoTime"
                    fullWidth
                    margin="normal"
                    value={formData.CryptoTime}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'white' }, // Changes the text color
                        '& label': { color: 'grey' }, // Changes the label color
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' }, // Changes the border color
                            '&:hover fieldset': { borderColor: 'white' }, // Changes the border color on hover
                            '&.Mui-focused fieldset': { borderColor: 'white' }, // Changes the border color on focus
                        },
                    }}
                />
                <TextField
                    label="If you could design a grants program, which Web3 tools would you use?"
                    name="Tools"
                    fullWidth
                    margin="normal"
                    value={formData.Tools}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'white' }, // Changes the text color
                        '& label': { color: 'grey' }, // Changes the label color
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' }, // Changes the border color
                            '&:hover fieldset': { borderColor: 'white' }, // Changes the border color on hover
                            '&.Mui-focused fieldset': { borderColor: 'white' }, // Changes the border color on focus
                        },
                    }}
                />
                <TextField
                    label="How would you assess if a project is impactful for Arbitrum?"
                    name="assess"
                    fullWidth
                    margin="normal"
                    value={formData.assess}
                    onChange={handleChange}
                    sx={{
                        input: { color: 'white' }, // Changes the text color
                        '& label': { color: 'grey' }, // Changes the label color
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' }, // Changes the border color
                            '&:hover fieldset': { borderColor: 'white' }, // Changes the border color on hover
                            '&.Mui-focused fieldset': { borderColor: 'white' }, // Changes the border color on focus
                        },
                    }}
                />
                {/* Add more input fields as needed */}
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default InterestForm;
