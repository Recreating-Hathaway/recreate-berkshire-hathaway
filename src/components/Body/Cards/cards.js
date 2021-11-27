import React from "react";
import "./_cards.scss";
import "../../Header/_utilities.scss";

const cards = () => {
	return (
		<div>
			<section className="section-tours" id="section-tours">
				<div className="u-center-text u-margin-bottom-big">
					<h2 className="heading-secondary">Company Updates</h2>
				</div>

				<div className="row">
					<div className="col-1-of-3">
						<div className="card">
							<div className="card__side card__side--front">
								<div className="card__picture card__picture--1">&nbsp;</div>
								<h4 className="card__heading">
									<span className="card__heading-span card__heading-span--1">
										Important News
									</span>
								</h4>
								<div className="card__details">
									<ul>
										<li>Stock Split</li>
										<li>Right Issues</li>
										<li>Dividend Announcements</li>
										<li>Brand Partnerships</li>
										<li>Campaigns and Advertisments</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-1">
								<div className="card__cta">
									<div className="card__price-box">
										<p className="card__price-only"></p>
										<p className="card__price-value"></p>
									</div>
									<a href="https://www.berkshirehathaway.com/news/2021news.html" target="blank" className="btn btn--white">
										Check Now!
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-1-of-3">
						<div className="card">
							<div className="card__side card__side--front">
								<div className="card__picture card__picture--2">&nbsp;</div>
								<h4 className="card__heading">
									<span className="card__heading-span card__heading-span--2">
										Annual Reports
									</span>
								</h4>
								<div className="card__details">
									<ul>
										<li>Balance Sheet</li>
										<li>Quarterly Reports</li>
										<li>Investor Presentation</li>
										<li>Industry's Growth</li>
										<li>Income & Cashflow Statement</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-2">
								<div className="card__cta">
									<div className="card__price-box">
										<p className="card__price-only"></p>
										<p className="card__price-value"></p>
									</div>
									<a href="https://www.berkshirehathaway.com/reports.html" target="blank" className="btn btn--white">
										Check Now!
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-1-of-3">
						<div className="card">
							<div className="card__side card__side--front">
								<div className="card__picture card__picture--3">&nbsp;</div>
								<h4 className="card__heading">
									<span className="card__heading-span card__heading-span--3">
										Shareholder Letters
									</span>
								</h4>
								<div className="card__details">
									<ul>
										<li>Warren Buffet's Letter</li>
										<li>Charlie Munger's Letter</li>
										<li>Long-term Vision of CEO</li>
										<li>Upcoming Plans</li>
										<li>Forthcoming Challenges</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-3">
								<div className="card__cta">
									<div className="card__price-box">
										<p className="card__price-only"></p>
										<p className="card__price-value"></p>
									</div>
									<a href="https://www.berkshirehathaway.com/letters/letters.html" target="blank" className="btn btn--white">
										Check Now!
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default cards;
