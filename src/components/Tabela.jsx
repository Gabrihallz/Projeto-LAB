import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import api from "../Services/api";

export default function App() {
  const [user, setUser] = useState();
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const params = { filtro: busca };
    api
      .get("/selecao-2023/usuarios", { params: params })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("Houve um erro!" + err);
      });
  }, [busca]); //useEffect está atualizando sempre que buscar e quando iniciar.

  const columns = [
    { field: "codigo", headerName: "Código", width: 70 },
    { field: "nomeSocial", headerName: "Nome", width: 130 },
    { field: "situacao", headerName: "Situação", width: 130 },
    { field: "nomeCompleto", headerName: "Nome Completo", width: 260 },
    { field: "email", headerName: "E-mail", width: 250 },
    { field: "numeroDeAcessos", headerName: "Nº de Acessos", width: 130 },
    { field: "sexo", headerName: "Sexo", width: 90 },
    { field: "dataDeNascimento", headerName: "Data de Nascimento", width: 150 },
    { field: "estado", headerName: "Estado", width: 130 },
    { field: "municipio", headerName: "Município", width: 180 },
    { field: "dataDeVinculo", headerName: "Data de Vinculo", width: 130 },
  ];

  return (
    <Box className="table-geral" sx={{ height: "100%", width: "100%" }}>
      {user && (
        <DataGrid
          getRowId={(row) => row.codigo}
          rows={user}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          pageSizeOptions={[20]}
          disableRowSelectionOnClick
        />
      )}
    </Box>
  );
}
