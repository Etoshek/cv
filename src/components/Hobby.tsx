import styled from '@emotion/styled';
import './common/style/Headers.scss';
import './common/style/HobbyStyle.scss';
import { useState } from 'react';

type HobbyImgProps = {
	id: number;
	backgroundUrl: string;
	iconClass: string;
	mainText: string;
	subText: string;
};
const HobbyImg: HobbyImgProps[] = [
	{
		id: 1,
		backgroundUrl:
			'https://cdn.pixabay.com/photo/2024/06/18/04/33/travel-8836969_1280.jpg',
		iconClass: 'fa-solid fa-route',
		mainText: 'Podróże (małe i duże)',
		subText: '',
	},
	{
		id: 2,
		backgroundUrl:
			'https://cdn.pixabay.com/photo/2018/08/16/00/13/horse-3609347_1280.jpg',
		iconClass: 'fa-solid fa-horse',
		mainText: 'Jeździectwo',
		subText: '',
	},
	{
		id: 3,

		backgroundUrl:
			'https://cdn.pixabay.com/photo/2017/10/04/20/42/dog-2817560_1280.jpg',
		iconClass: 'fa-solid fa-dog',
		mainText: 'Behawiorystyka psów metodami pozytywnymi',
		subText: '',
	},
	{
		id: 5,
		backgroundUrl:
			'https://cdn.pixabay.com/photo/2017/08/06/14/03/basketball-2592790_1280.jpg',
		iconClass: 'fa-solid fa-basketball',
		mainText: 'Koszykówka',
		subText: '',
	},
	{
		id: 4,
		backgroundUrl:
			'https://cdn.pixabay.com/photo/2017/08/01/23/30/paper-2568647_1280.jpg',
		iconClass: 'fa-solid fa-puzzle-piece',
		mainText: 'Układanie puzzli',
		subText:
			'Ale także kostki rubika, lego czy czytanie książek popularno-naukowych i reportaży',
	},
];

export const Hobby = () => {
	const [activeOption, setActiveOption] = useState<number | null>(null);

	const handleOptionClick = (id: number) => {
		setActiveOption(id);
	};

	const Container = styled('div')(() => ({
		margin: '0 auto',
		height: '100vh',
		backgroundColor: '#092337',
	}));

	return (
		<Container>
			<h1 className='header light'>Moje pasje i zainteresowania</h1>
			<div className='hobby-content'>
				<div className='options'>
					{HobbyImg.map((option) => (
						<div
							key={option.id}
							className={`option ${option.id === activeOption ? 'active' : ''}`}
							style={
								{ '--optionBackground': `url(${option.backgroundUrl})` } as any
							}
							onClick={() => handleOptionClick(option.id)}
						>
							<div className='label'>
								<div className='icon'>
									<i className={option.iconClass}></i>
								</div>
								<div className='info'>
									<div className='main'>{option.mainText}</div>
									<div className='sub'>{option.subText}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};
