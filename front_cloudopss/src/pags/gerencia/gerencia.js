import React, {useEffect,useState} from "react";
import "./gerencia.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import back_gerencia from '../../img/back_gerencia.jpg';
import StyledTableCell from "../../styles/StyledTableCell";
import StyledTableRow from "../../styles/StyledTableRow";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@emotion/react";
import theme from "../../styles/styles";


function Gerencia () {

    


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (event) => {
        setOpen(true);
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [usuario, setUsuario] = useState([]);

    useEffect( () =>  {

        let axiosConfig = {

            mode: 'no-cors',

            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.get("http://127.0.0.1:8000/cadastras/", axiosConfig)
          .then(res => {
            setUsuario(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    })
    

    

    return (
        <div id="corpo_tabela" >
            
            <img src={back_gerencia}/>
            <div id="paper">
                <h1>Gerenciador de Usuarios</h1>

                <hr/>
 
                <div id="tabela">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Nome </StyledTableCell>
                                    <StyledTableCell align="right">E-mail</StyledTableCell>
                                    <StyledTableCell align="right">Numero</StyledTableCell>
                                    <StyledTableCell align="right">Endereço</StyledTableCell>
                                    <StyledTableCell align="right">Profissão</StyledTableCell>
                                    <StyledTableCell align="right">Ações</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {usuario.map((usuarios) => (
                                <StyledTableRow key={usuarios.cadastra_id}>
                                    <StyledTableCell component="th" scope="row">
                                        {usuarios.nome}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{usuarios.email}</StyledTableCell>
                                    <StyledTableCell align="right">{usuarios.telefone}</StyledTableCell>
                                    <StyledTableCell align="right">{usuarios.end}</StyledTableCell>
                                    <StyledTableCell align="right">{usuarios.prof}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <IconButton color="error" >
                                            <DeleteForeverOutlinedIcon onClick={handleClickOpen}/>
                                        </IconButton>
                                        <IconButton color='inherit'>
                                            <Link to={`/gerencia/EDITA/${usuarios.cadastra_id}/`}>
                                                <EditOutlinedIcon/>
                                            </Link>
                                        </IconButton>
                                        <ThemeProvider theme={theme}>
                                            <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">
                                                    {"Tem certeza que deseja DELETAR esté usuario?"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                        Assim que está operacão for confirmada, a mesma não poderá ser revertida.
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>

                                                    <Button color="secondary" onClick={handleClose}>Cancelar</Button>

                                                    <Link to={`/gerencia/DELETE/${usuarios.cadastra_id}/`}>
                                                        <Button color="secondary" onClick={handleClose} autoFocus>
                                                            Deletar
                                                        </Button>
                                                    </Link>
                                                </DialogActions>
                                            </Dialog>
                                        </ThemeProvider>
                                        
                                    </StyledTableCell>
                                </StyledTableRow>
                                
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    
                </div>
            </div>
        </div>
    )
}

export default Gerencia;