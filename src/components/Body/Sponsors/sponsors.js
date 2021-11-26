import React from 'react';
import acmeBrick from './images/acmeBrick.png';
import benjaminMoore from './images/benjaminMoore.png';
import dq from './images/dq.png';
import duracell from './images/duracell.png';
import geico from './images/geico.png';
import helDiamonds from './images/helDiamonds.png';
import lubrizol from './images/lubrizol.png';
import nvenergy from './images/nvenergy.png';

import './gridStyle.css';

const sponsors = () => {
	return (
		<div>
			<h4>SOME OF OUR COMPANIES:</h4>
			<div className="companiesList">
				<div>
					<img src={acmeBrick} alt="" />
				</div>
				<div>
					<img src={benjaminMoore} alt="" />
				</div>
				<div>
					<img src={dq} alt="" />
				</div>
				<div>
					<img src={duracell} alt="" />
				</div>
				<div>
					<img src={geico} alt="" />
				</div>
				<div>
					<img src={helDiamonds} alt="" />
				</div>
				<div>
					<img src={lubrizol} alt="" />
				</div>
				<div>
					<img src={nvenergy} alt="" />
				</div>
			</div>
		</div>
	)
}

export default sponsors;
