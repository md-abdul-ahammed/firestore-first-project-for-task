import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Radio, FormControlLabel, Grid, Container, RadioGroup, Typography } from '@mui/material';
import './Main.css';
import { useForm } from "react-hook-form";



const Main = () => {
    const [select, setSelect] = useState(0);
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const res = await fetch("https://assessment-0001-default-rtdb.firebaseio.com/userInfo.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (res) {
            alert("Data Stored Successfully")
        } else {
            alert("Please Select The Data")
        }
    }

    return (
        <Box>
            <Box mb={7} style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <ButtonGroup aria-label="outlined primary button group">
                    <Button
                        onClick={() => setSelect(0)} sx={{ px: '4rem' }}
                        style={select === 0 ? { color: '#393939d1', fontWeight: 'bold', backgroundColor: '#55fec3', fontSize: "1.2rem" } : { color: '#393939d1', fontWeight: 'bold', fontSize: "1.2rem" }}>
                        Goal
                    </Button>
                    <Button
                        onClick={() => setSelect(1)} sx={{ px: '4rem' }}
                        style={select === 1 ? { color: '#393939d1', fontWeight: 'bold', backgroundColor: '#55fec3', fontSize: "1.2rem" } : { color: '#393939d1', fontWeight: 'bold', fontSize: "1.2rem" }}>
                        Activity
                    </Button>
                    <Button
                        onClick={() => setSelect(2)} sx={{ px: '4rem' }}
                        style={select === 2 ? { color: '#393939d1', fontWeight: 'bold', backgroundColor: '#55fec3', fontSize: "1.2rem" } : { color: '#393939d1', fontWeight: 'bold', fontSize: "1.2rem" }}>
                        Profile
                    </Button>
                    <Button
                        onClick={() => setSelect(3)} sx={{ px: '4rem' }}
                        style={select === 3 ? { color: '#393939d1', fontWeight: 'bold', backgroundColor: '#55fec3', fontSize: "1.2rem" } : { color: '#393939d1', fontWeight: 'bold', fontSize: "1.2rem" }}>
                        Select Coach
                    </Button>
                </ButtonGroup>
            </Box>
            <Container fixed>
                {select === 0 &&
                    <Box sx={{ width: '100%' }}>
                        <Grid
                            container
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid
                                style={{ paddingTop: '4rem', paddingLeft: '2rem', paddingRight: '2rem' }}
                                rowSpacing={1}
                                item xs={5}>
                                <Typography
                                    sx={{ fontWeight: 'bold' }}
                                    variant="h4"
                                    gutterBottom
                                    component="div">
                                    Goal
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom>
                                    Select your Primary Goal. What do you want to accomplish in the next few months
                                </Typography>
                            </Grid>
                            <Grid
                                sx={{ borderRadius: 1 }}
                                style={{ backgroundColor: '#f7f7f7' }}
                                item xs={7}>
                                <Box
                                    sx={{ py: 7 }}
                                    style={{ paddingLeft: '3.5rem' }} >
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel {...register("goal")} name="goal" value="Get leaner" control={<Radio />} label="Get leaner" />
                                            <FormControlLabel {...register("goal")} name="goal" value="Get active again" control={<Radio />} label="Get active again" />
                                            <FormControlLabel {...register("goal")} name="goal" value="Reduce pain of injury" control={<Radio />} label="Reduce pain of injury" />
                                            <FormControlLabel {...register("goal")} name="goal" value="Improve cardio or speed" control={<Radio />} label="Improve cardio or speed" />
                                            <FormControlLabel {...register("goal")} name="goal" value="Improve sports performance" control={<Radio />} label="Improve sports performance" />
                                        </RadioGroup>
                                        <Button type="submit" style={{ fontSize: '1.3rem', width: '40%', color: 'black', fontWeight: 'bold', marginTop: "2rem", backgroundColor: '#fff', borderColor: "rgb(255, 255, 255)", border: "2px solid #9797ffb8" }} variant="outlined">Submit</Button>
                                    </form>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                }
                {select === 1 &&
                    <Box sx={{ width: '100%' }}>
                        <Grid
                            container
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid
                                style={{ paddingTop: '4rem', paddingLeft: '2rem', paddingRight: '2rem' }}
                                rowSpacing={1}
                                item xs={5}>
                                <Typography
                                    sx={{ fontWeight: 'bold' }}
                                    variant="h4"
                                    gutterBottom
                                    component="div">
                                    Activity
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom>
                                    Select your Primary Activity. What do your activity want  in the next few months
                                </Typography>
                            </Grid>
                            <Grid
                                sx={{ borderRadius: 1 }}
                                style={{ backgroundColor: '#f7f7f7' }}
                                item xs={7}>
                                <Box
                                    sx={{ py: 7 }}
                                    style={{ paddingLeft: '3.5rem' }} >
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel {...register("activity")} name="activity" value="Think, Pair and Share" control={<Radio />} label="Think, Pair and Share" />
                                            <FormControlLabel {...register("activity")} name="activity" value="Group Discussion" control={<Radio />} label="Group Discussion" />
                                            <FormControlLabel {...register("activity")} name="activity" value="Pictionary" control={<Radio />} label="Pictionary" />
                                            <FormControlLabel {...register("activity")} name="activity" value="Role Play" control={<Radio />} label="Role Play" />
                                            <FormControlLabel {...register("activity")} name="activity" value="Ice Breakers" control={<Radio />} label="Ice Breakers" />
                                        </RadioGroup>
                                        <Button type="submit" style={{ fontSize: '1.3rem', width: '40%', color: 'black', fontWeight: 'bold', marginTop: "2rem", backgroundColor: '#fff', borderColor: "rgb(255, 255, 255)", border: "2px solid #9797ffb8" }} variant="outlined">Submit</Button>
                                    </form>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                }
                {select === 2 &&
                    <Box sx={{ width: '100%' }}>
                        <Grid
                            container
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid
                                style={{ paddingTop: '4rem', paddingLeft: '2rem', paddingRight: '2rem' }}
                                rowSpacing={1}
                                item xs={5}>
                                <Typography
                                    sx={{ fontWeight: 'bold' }}
                                    variant="h4"
                                    gutterBottom
                                    component="div">
                                    Profile
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom>
                                    Select your Primary Goal. What do you want to accomplish in the next few months
                                </Typography>
                            </Grid>
                            <Grid
                                sx={{ borderRadius: 1 }}
                                style={{ backgroundColor: '#f7f7f7' }}
                                item xs={7}>
                                <Box
                                    sx={{ py: 7 }}
                                    style={{ paddingLeft: '3.5rem' }} >
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel {...register("profile")} name="profile" value="Get active again" control={<Radio />} label="Get active again" />
                                            <FormControlLabel {...register("profile")} name="profile" value="Get leaner" control={<Radio />} label="Get leaner" />
                                            <FormControlLabel {...register("profile")} name="profile" value="Reduce pain of injury" control={<Radio />} label="Reduce pain of injury" />
                                            <FormControlLabel {...register("profile")} name="profile" value="Improve cardio or speed" control={<Radio />} label="Improve cardio or speed" />
                                            <FormControlLabel {...register("profile")} name="profile" value="Improve sports performance" control={<Radio />} label="Improve sports performance" />
                                        </RadioGroup>
                                        <Button type="submit" style={{ fontSize: '1.3rem', width: '40%', color: 'black', fontWeight: 'bold', marginTop: "2rem", backgroundColor: '#fff', borderColor: "rgb(255, 255, 255)", border: "2px solid #9797ffb8" }} variant="outlined">Submit</Button>
                                    </form>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                }
                {select === 3 &&
                    <Box sx={{ width: '100%' }}>
                        <Grid
                            container
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid
                                style={{ paddingTop: '4rem', paddingLeft: '2rem', paddingRight: '2rem' }}
                                rowSpacing={1}
                                item xs={5}>
                                <Typography
                                    sx={{ fontWeight: 'bold' }}
                                    variant="h4"
                                    gutterBottom
                                    component="div">
                                    Select Coach
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom>
                                    Select your Primary Goal. What do you want to accomplish in the next few months
                                </Typography>
                            </Grid>
                            <Grid
                                sx={{ borderRadius: 1 }}
                                style={{ backgroundColor: '#f7f7f7' }}
                                item xs={7}>
                                <Box
                                    sx={{ py: 7 }}
                                    style={{ paddingLeft: '3.5rem' }} >
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel {...register("selectCouch")} name="selectCouch" value="Get leaner" control={<Radio />} label="Get leaner" />
                                            <FormControlLabel {...register("selectCouch")} name="selectCouch" value="Improve sports performance" control={<Radio />} label="Improve sports performance" />
                                            <FormControlLabel {...register("selectCouch")} name="selectCouch" value="Get active again" control={<Radio />} label="Get active again" />
                                            <FormControlLabel {...register("selectCouch")} name="selectCouch" value="Improve cardio or speed" control={<Radio />} label="Improve cardio or speed" />
                                            <FormControlLabel {...register("selectCouch")} name="selectCouch" value="Reduce pain of injury" control={<Radio />} label="Reduce pain of injury" />
                                        </RadioGroup>
                                        <Button type="submit" style={{ fontSize: '1.3rem', width: '40%', color: 'black', fontWeight: 'bold', marginTop: "2rem", backgroundColor: '#fff', borderColor: "rgb(255, 255, 255)", border: "2px solid #9797ffb8" }} variant="outlined">Submit</Button>
                                    </form>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                }
            </Container >
        </Box>

    );
};

export default Main;



