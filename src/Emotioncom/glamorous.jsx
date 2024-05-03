import React from 'react';
import glamorous, { ThemeProvider } from 'glamorous';

const Alert = glamorous.div('alert', props => `alert-${props.type}`);

const Glamarous = () => {
    const theme = { main: { color: 'red' } }
    const secondaryTheme = { main: { color: 'blue' } }
    const primaryTheme = { main: { color: 'orange' } }

    const Title = glamorous.h1(({ theme }) => ({
        color: theme.main.color,
    }));


    return (
        <>
            <glamorous.Div maxWidth={600} margin="70px auto" fontSize={24}>
                <Alert type="success">
                    <strong>Success!</strong> Tada! 🎉
                </Alert>
                <Alert type="info">
                    <strong>Heads up!</strong> Some info here ℹ️
                </Alert>
                <Alert type="warning">
                    <strong>Warning!</strong> Something's up ⚠️
                </Alert>

                <Alert type="danger">
                    <strong>Oh snap!</strong> This is not good 🚨
                </Alert>
            </glamorous.Div>
            <ThemeProvider theme={theme}>
                <Title>Hello!</Title>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <div>
                    <Title style={{ color: 'cyan' }}>How are you?</Title>
                    <ThemeProvider theme={secondaryTheme}>
                        <Title>Top ten questions that can be asked by candidates!</Title>
                    </ThemeProvider>
                </div>
            </ThemeProvider>
            <ThemeProvider>
                <div>
                    <Title theme={{ main: { color: 'darkgreen' } }}>Can you please describe the responsibilities of the position?</Title>
                    <ThemeProvider theme={primaryTheme}>
                        <Title>What are the biggest challenges of this job?</Title>
                    </ThemeProvider>
                </div>
            </ThemeProvider>
        </>
    );
}
export default Glamarous;
