import React, { useState } from 'react';
import image from './common/images/image.jpg';
import './common/style/StartStyle.scss';
import { styled } from '@mui/material/styles';
import 'animate.css';
import './common/style/Headers.scss';

export const Start = () => {
	const ImageContainer = styled('div')`
		position: relative;
		width: 100%;
		height: 100%;
	`;

	const ArrowIcon = styled('i')({
		position: 'absolute',
		bottom: '15px',
		left: '50%',
		transform: 'translateX(-50%)',
		fontSize: '48px',
		color: '#e8eaed',
		cursor: 'pointer',
		zIndex: '2',
		padding: '0, 20px',
	});

	const AnimatedButton = styled('button')`
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		font-size: 48px;
		color: white;
		background-color: transparent;
		border: none;
		cursor: pointer;
		animation: pulse 2s infinite;
		z-index: 4;
	`;

	const scrollToNextScreen = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth',
		});
	};

	return (
		<div className='image-about'>
			<ImageContainer>
				<img
					src={image}
					alt='Moje zdjęcie na tle lasu'
					className='image-about'
				/>
				<AnimatedButton onClick={scrollToNextScreen}>
					<ArrowIcon className='material-icons'>
						<span className='material-symbols-outlined'>
							keyboard_arrow_down
						</span>
					</ArrowIcon>
				</AnimatedButton>
				<h1 className='header'>Luiza Chodanionek</h1>
			</ImageContainer>
		</div>
	);
};
