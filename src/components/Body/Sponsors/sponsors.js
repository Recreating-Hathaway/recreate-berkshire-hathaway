import React from 'react';
import './gridStyle.css';
import "../../Header/_utilities.scss";

const sponsors = () => {
	return (
		<div className="sponser-body">

        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">SOME OF OUR COMPANIES:</h2>
        </div>

			
			<div className="companiesList">
				<div>
					<img src="//logo.clearbit.com/duracell.com" />
				</div>
				<div>
					<img src="//logo.clearbit.com/geico.com" alt="" />
				</div>
				<div>
					<img src="//logo.clearbit.com/benjaminmoore.com" alt="" />
				</div>
				<div>
					<img src="//logo.clearbit.com/nvenergy.com" alt="" />
				</div>
				<div>
					<img src="//logo.clearbit.com/helzberg.com" alt="" />
				</div>
				<div>
					<img src="//logo.clearbit.com/lubrizol.com" alt="" />
				</div>
				<div>
					<img src="//logo.clearbit.com/brick.com" alt="" />
				</div>
				<div>
					<img src="//logo.clearbit.com/dairyqueen.com" alt="" />
				</div>
			</div>
		</div>
	)
}

export default sponsors;
