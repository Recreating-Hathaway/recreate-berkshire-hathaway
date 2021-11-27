import React from "react";
import "./footerStyle.css";

const footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col">
							<h4>BERKSHIRE HATHAWAY</h4>
							<ul>
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">News</a>
								</li>
								<li>
									<a href="#">Reports</a>
								</li>
								<li>
									<a href="#">Contact</a>
								</li>
								<li>
									<a href="#">Pledges</a>
								</li>
								<li>
									<a href="#">Apparel</a>
								</li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>LETTERS</h4>
							<ul>
								<li>
									<a href="#">Owner's Manual</a>
								</li>
								<li>
									<a href="#">Warren's Letters</a>
								</li>
								<li>
									<a href="#">Charlie's Letters</a>
								</li>
								<li>
									<a href="#">Special Letters</a>
								</li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>COMPANIES</h4>
							<ul>
								<li>
									<a href="#">Subsidiaries</a>
								</li>
								<li>
									<a href="#">Minority Holdings</a>
								</li>
								<li>
									<a href="#">Corporate Governance</a>
								</li>
								<li>
									<a href="#">Sustainability</a>
								</li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>INVESTING</h4>
							<ul>
								<li>
									<a href="#">Class A and B Stock</a>
								</li>
								<li>
									<a href="#">SEC Filings</a>
								</li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>DISCLAIMER</h4>
							<ul>
								<li>
									<a href="#">Terms | Privacy</a>
								</li>
								<li>
									<a href="#">Copyright &copy;</a>
								</li>
								<li>
									<a href="#">Berkshire Hathaway Inc.</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default footer;
