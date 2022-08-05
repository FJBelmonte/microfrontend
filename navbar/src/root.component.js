import { AppBar, Typography, Button } from "@mui/material";

export default function Root(props) {
    return (
        <>
            <AppBar position='fixed' sx={{ height: 40, alignItems: "center", justifyContent: "center" }}>
                <Typography>Essa navbar é React</Typography>
            </AppBar>
            <Button
                onClick={() => {
                    const app2 = localStorage.getItem("app2");
                    localStorage.setItem("app2", !app2);
                }}>
                App
            </Button>
        </>
    );
}
