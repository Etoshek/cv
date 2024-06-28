import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './common/style/Headers.scss';
import './common/style/Container.scss';
import styled from '@emotion/styled';

const labels: { [index: string]: string } = {
	0.5: 'Useless',
	1: 'Useless+',
	1.5: 'Poor',
	2: 'Poor+',
	2.5: 'Ok',
	3: 'Ok+',
	3.5: 'Good',
	4: 'Good+',
	4.5: 'Excellent',
	5: 'Excellent+',
};

export default function MyRating() {
	const value = 3.5;

 
	const StyledP = styled('p')({
		color: '#e8eaed',
    fontSize:'20px'
	});

	return (
		<div className='container' style={{ backgroundColor: '#092337'}}>
			<div className='content'>
				<h1 className='header light'>Umiejętności</h1>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<StyledP>A</StyledP>
					<Rating
						name='text-feedback'
						value={value}
						readOnly
						precision={0.5}
						emptyIcon={
							<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
						}
					/>
					<Box sx={{ ml: 2, color:'#e8eaed' }}>{labels[value]}</Box>
				</Box>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<StyledP>B</StyledP>
					<Rating
						name='text-feedback'
						value={value}
						readOnly
						precision={0.5}
						emptyIcon={
							<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
						}
					/>
					<Box sx={{ ml: 2, color:'#e8eaed' }}>{labels[value]}</Box>
				</Box>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<StyledP>C</StyledP>
					<Rating
						name='text-feedback'
						value={value}
						readOnly
						precision={0.5}
						emptyIcon={
							<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
						}
					/>
					<Box sx={{ ml: 2, color:'#e8eaed' }}>{labels[value]}</Box>
				</Box>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<StyledP>D</StyledP>
					<Rating
						name='text-feedback'
						value={value}
						readOnly
						precision={0.5}
						emptyIcon={
							<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
						}
					/>
					<Box sx={{ ml: 2, color:'#e8eaed' }}>{labels[value]}</Box>
				</Box>
			</div>
		</div>
	);
}
