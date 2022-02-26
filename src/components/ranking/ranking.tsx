import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Club, list } from '../../services/ClubService';
import LoaderModal from '../misc/LoaderModal/LoaderModal';

function createData(
  logo: string,
  name: string,
  ptos: number,
  pj: number,
  pg: number,
  pe: number,
  pp: number,
  gf: number,
  gc: number,
) {
  return { logo, name, ptos, pj, pg, pe, pp, gf, gc };
}

const Ranking = () => {
  const [clubs, setClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(true)
  const rows = clubs.map(club => createData(club.logo, club.name, 57, 25, 17, 6, 2, 51, 20))

  const fetchClubs = async () => {
    try {
      const response = await list()
      setLoading(false)
      setClubs(response)
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchClubs()
  }, [])

  if (loading) {
    return <LoaderModal/>
  }

  return (
    <TableContainer component={Paper} style={{ marginBottom: '55px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Equipo</TableCell>
            <TableCell align="right">Ptos</TableCell>
            <TableCell align="right">PG</TableCell>
            <TableCell align="right">PE</TableCell>
            <TableCell align="right">PP</TableCell>
            <TableCell align="right">GF</TableCell>
            <TableCell align="right">GC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right"><img height={40} src={row.logo} alt="" /></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ptos}</TableCell>
              <TableCell align="right">{row.pg}</TableCell>
              <TableCell align="right">{row.pe}</TableCell>
              <TableCell align="right">{row.pp}</TableCell>
              <TableCell align="right">{row.gf}</TableCell>
              <TableCell align="right">{row.gc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Ranking