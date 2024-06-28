import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import '../components/common/style/Headers.scss';
import './common/style/Container.scss';

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&::before': {
		display: 'none',
	},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
	'& .MuiPaper-elevation': {
		backgroundColor: '#f9977b',
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
	paddingLeft: '30px',
}));

export default function SchoolAndWork() {
	const [expanded, setExpanded] = React.useState<string | false>();

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return (
		<>
			<div className='container'>
				<div className='content'>
					<h1 className='header dark'>Szkoła i praca</h1>
					<Accordion
						expanded={expanded === 'panel1'}
						onChange={handleChange('panel1')}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>Wykształcenie</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Ukończyłam technikum ekonomiczne o profilu handlowym w Tychach,
								dodatkowo swoich sił spróbowałam idąc na studia w Wyższej Szkole
								Bankowej w Chorzowie na kierunku marketing, ale to nie było to i
								po pierwszym semestrze przerwałam.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === 'panel2'}
						onChange={handleChange('panel2')}
					>
						<AccordionSummary
							aria-controls='panel2d-content'
							id='panel2d-header'
						>
							<Typography>Dotychczasowa praca</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<p>
									Od 18 r.ż. pomagam rodzicom w prowadzeniu sklepu co było
									pomniejszym powodem przerwania studiów. Między studiami i
									pracą w rodzinnym sklepie dorabiałam w KFC i Pepco na tyle,
									żeby zarobić na prawo jazdy i samochód.
								</p>
								<p>
									W pracy w IT niestety nie mam doświadczenia, ale każdy kiedyś
									zaczynał.
								</p>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === 'panel3'}
						onChange={handleChange('panel3')}
					>
						<AccordionSummary
							aria-controls='panel3d-content'
							id='panel3d-header'
						>
							<Typography>Kursy</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</>
	);
}
