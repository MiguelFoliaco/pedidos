import { useState } from "react";
import { Grid, IconButton, TextField } from "@mui/material";
import { Menu, Search } from '@mui/icons-material'
import { useGlobal } from "../../../hooks";

type props = {
    placeholderSearch?: string;
}
export const Header = ({ placeholderSearch }: props) => {
    const { actions: { setSearchTerm }, values: { searchTerm } } = useGlobal()
    const [menuOn, setMenuOn] = useState(false);
    const onChange = (text: string) => {
        setSearchTerm(text)
    }

    return (
        <>
            <Grid
                className="header-home"
                container
                alignItems={'center'}
            >
                <Grid item xs={2}>
                    <IconButton sx={{ position: 'fixed', top: '10px', left: '10px' }}
                        onClick={() => setMenuOn(!menuOn)}
                    >
                        <Menu />
                    </IconButton>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        size="small"
                        value={searchTerm}
                        placeholder={placeholderSearch}
                        onChange={(e) => onChange(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <IconButton sx={{ position: 'fixed', top: '10px', right: '10px' }}>
                        <Search />
                    </IconButton>
                </Grid>
            </Grid>
            <div className="menu-left-content" style={{ transform: `translateX(${menuOn ? '0%' : '-100%'})` }}>
                <div className="menu-left">
                    <Grid container>
                        <Grid item xs={12}>
                            <IconButton color='error' sx={{ position: 'fixed', top: '10px', left: '10px' }}
                                onClick={() => setMenuOn(!menuOn)}
                            >
                                <Menu />
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}