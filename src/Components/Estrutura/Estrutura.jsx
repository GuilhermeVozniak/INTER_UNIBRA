
//MUI
import { useMediaQuery, Box, Typography, Grid } from "@mui/material"

//Components
import { BreadCrumbs } from '../BreadCrumbs/BreadCrimbs'

//Styles
import { Wrapper } from "./Estrutura.style"

//Imgs
import salaDiretoria from "../../Assets/estrutura/salaDiretoria.png"
import aSocial from "../../Assets/estrutura/aSocial.png"
import recepcao from "../../Assets/estrutura/recepcao.png"
import dormitorio from "../../Assets/estrutura/dormitorio.png"
import refeitorio from "../../Assets/estrutura/refeitorio.png"
import salaInformatica from "../../Assets/estrutura/salaInformatica.png"
import cursoBraile from "../../Assets/estrutura/cursoBraile.png"
import escritaCursiva from "../../Assets/estrutura/escritaCursiva.png"



export const Estrutura = () => {
	const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"))

	const itens = [
		[salaDiretoria,
			"Na sala da diretoria são realizadas as reuniões do presidente e membros da diretoria."
		],
		[aSocial,
			"Com o objetivo de proporcionar o desenvolvimento a todos os membros da assobecer."],
		[recepcao,
			"Entre, seja bem-vindo! A nossa instituição terá satisfação em lhe atender."],
		[dormitorio,
			"A Associação possui capacidade para acolher 20 pessoas em seu dormitório."],
		[refeitorio,
			"A Associação possui capacidade para servi proximadamente, 130 refeições ao dia."],
		[salaInformatica,
			"Aqui são realizadas as aulas do Curso de Informática com o auxílio da ferramenta DOSVOX(UFRJ)."],
		[cursoBraile,
			"Neste curso as pessoas cegas e/ou com baixa visão aprendem o Sistema Braille."],
		[escritaCursiva,
			"Curso que ensina as pessoas cegas e/ou com baixa visão a escreverem à mão."]
	]

	return (
		<Wrapper>
			<BreadCrumbs pages={["Estrutura"]} />
			<Box sx={{ mt: 2 }} />
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