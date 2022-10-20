
//MUI
import { useMediaQuery, Box, Typography, Grid } from "@mui/material"

//Components
import { BreadCrumbs } from '../BreadCrumbs/BreadCrimbs'

//Styles
import { Wrapper } from "./Eventos.style"

//Imgs
import passeioConcentracao from "../../Assets/eventos/passeio1.png"
import passeioClube from "../../Assets/eventos/passeio2.png"
import passeioPiscina from "../../Assets/eventos/passeio3.png"
import passeioDiscurso from "../../Assets/eventos/passeio4.png"
import Coral from "../../Assets/eventos/ensaio-coral.png"
import DirConselho from "../../Assets/eventos/posse-dir-conselho.png"
import festaJunina from "../../Assets/eventos/festa-junina.png"
import showBeneficente from "../../Assets/eventos/show-beneficente.png"
import torneioDomino1 from "../../Assets/eventos/torneio-domino.png"
import diaDaMulher from "../../Assets/eventos/dia-mulher.png"
import pascal1 from "../../Assets/eventos/pascal1.jpg"
import pascal2 from "../../Assets/eventos/pascal2.jpg"
import pascal3 from "../../Assets/eventos/pascal3.jpg"
import festaJunina1 from "../../Assets/eventos/festa-junina-2019-1.jpg"
import festaJunina2 from "../../Assets/eventos/festa-junina-2019-2.jpg"
import festaJunina3 from "../../Assets/eventos/festa-junina-2019-3.jpg"
import festaNatalina1 from "../../Assets/eventos/natal-2019-1.png"
import festaNatalina2 from "../../Assets/eventos/natal-2019-2.png"
import festaNatalina3 from "../../Assets/eventos/natal-2019-3.png"
import festaNatalina4 from "../../Assets/eventos/natal-2019-4.png"
import festaNatalina5 from "../../Assets/eventos/natal-2019-5.png"
import festaNatalina6 from "../../Assets/eventos/natal-2019-6.png"
import torneioDomino2 from "../../Assets/eventos/torneio-domino2021-1.jpg"
import torneioDomino3 from "../../Assets/eventos/torneio-domino2021-2.jpg"
import palestra1 from "../../Assets/eventos/palestra-2021-1.jpg"
import palestra2 from "../../Assets/eventos/palestra-2021-2.jpg"
import palestra3 from "../../Assets/eventos/palestra-2021-3.jpg"
import palestra4 from "../../Assets/eventos/palestra-2021-4.jpg"
import golbol2 from "../../Assets/eventos/golbol2.jpg"
import golbol4 from "../../Assets/eventos/golbol4.jpg"



export const Eventos = () => {
	const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"))

	const itens = [
		[passeioConcentracao,
			"Passeio a Ouro Preto, Olinda Concentração."],
		[passeioClube,
			"Passeio a Ouro Preto, Olinda no Clube."],
		[passeioPiscina,
			"Passeio a Ouro Preto, Olinda na Piscina."],
		[passeioDiscurso,
			"Passeio a Ouro Preto, Olinda-Discurso Pres."],
		[Coral,
			"Ensaio do Coral."],
		[DirConselho,
			"Posse da nova Diretoria e Conselho Fiscal."],
		[festaJunina,
			"Festa Junina."],
		[showBeneficente,
			"Show Beneficente - Conde Só Brega"],
		[torneioDomino1,
			"Torneio de Dominó para Cegos."],
		[diaDaMulher,
			"Homenagem ao Dia Internacional da Mulher."],
		[pascal1,
			"Passeio pascal - Sítio São Judas Tadeu - 2019."],
		[pascal2,
			"Passeio pascal - Sítio São Judas Tadeu - 2019."],
		[pascal3,
			"Passeio pascal - Sítio São Judas Tadeu - 2019."],
		[festaJunina1,
			"Festa Junina - 2019."],
		[festaJunina2,
			"Festa Junina - 2019."],
		[festaJunina3,
			"Festa Junina - 2019."],
		[festaNatalina1,
			"Festa Natalina - 2019"],
		[festaNatalina2,
			"Festa Natalina - 2019"],
		[festaNatalina3,
			"Festa Natalina - 2019"],
		[festaNatalina4,
			"Festa Natalina - 2019"],
		[festaNatalina5,
			"Festa Natalina - 2019"],
		[festaNatalina6,
			"Festa Natalina - 2019"],
		[torneioDomino2,
			"Torneio Dominó-Semana Pessoa c/ Deficiência-28/08/2021"],
		[torneioDomino3,
			"Torneio Dominó-Semana Pessoa c/ Deficiência-28/08/2021"],
		[palestra1,
			"Palestra Medo e Autoestima-Semana Pessoa c/ Deficiência-27/08/2021"],
		[palestra2,
			"Palestra Medo e Autoestima-Semana Pessoa c/ Deficiência-27/08/2021"],
		[palestra3,
			"Palestra Benefícios Sociais p/ Cegos e c/ Baixa Visão-11/09/2021"],
		[palestra4,
			"Palestra Benefícios Sociais p/ Cegos e c/ Baixa Visão-11/09/2021"],
		[golbol2,
			"Voltamos c/ Atividade Esportiva Golbol Inclusas nas Paralimpíadas."],
		[golbol4,
			"Voltamos c/ Atividade Esportiva Golbol Inclusas nas Paralimpíadas."],
	]

	return (
		<Wrapper>
			<BreadCrumbs pages={["Eventos"]} />
			<Box sx={{ mt: 4, mb: 4 }}>
				<Typography variant={"body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "30px" }}>
					Veja nossa galeria de fotos com imagens dos eventos realizados na nossa Associação.
				</Typography>
			</Box>
			<Grid spacing={6} container sx={{ display: "flex", justifyContent: "space-evenly" }} >

				{itens.map(item => (
					<Grid
						item
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							mb: { xs: 4, sm: 4, md: 0 }
						}}
						xs={12} sm={12} md={5}
						className="ImageContainner"
					>
						<Box component="img" src={item[0]} sx={{ width: "95%", borderRadius: 2 }} />

						<Box
							sx={{
								p: 1,
								bgcolor: "primary.main",
								color: "white",
								borderRadius: 1,
								display: "flex",
								justifyContent: "center",
								alignItems:'center',
								width: "85%",
								minHeight: '2.5em',
								textAlign:"center"
							}}
							className="imgText"
						>
							<Typography variant={"body2"}>{item[1]}</Typography>
						</Box>

					</Grid>
				))}

			</Grid>

		</Wrapper >
	)
}