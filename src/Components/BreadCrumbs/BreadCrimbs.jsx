import { Box, Typography } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from 'react-router-dom'

export const BreadCrumbs = (Props) => {


    return (
        <Box role="presentation">
            <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white" }}>
                <Link to={"/"}
                    style={{
                        fontWeight: "300",
                        color: "white",
                        textDecoration: "none",
                        cursor: "pointer",

                    }}
                >
                    Home
                </Link>

                {Props.pages.map(page => (
                    <Link key={page} to={`/${page.toLowerCase().replace(" ", "")}`}
                        style={{
                            fontWeight: "300",
                            color: "white",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        {page}
                    </Link>
                ))}

            </Breadcrumbs>
        </Box >
    )
}