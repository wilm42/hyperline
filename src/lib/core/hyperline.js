import React from "react";
import PropTypes from "prop-types";
import Component from "hyper/component";
import decorate from "hyper/decorate";

class HyperLine extends Component {
	static propTypes() {
		return {
			plugins: PropTypes.array.isRequired,
		};
	}

	styles() {
		return {
			line: {
				opacity: 0.3,
				display: "flex",
				alignItems: "center",
				position: "absolute",
				overflow: "hidden",
				top: "0",
				right: "0",
				height: "18px",
				width: "28%",
				font: "10px Monospace",
				pointerEvents: "none",
				background: "rgba(0, 0, 0, 1)",
				margin: "10px 10px 0 10px",
			},
			wrapper: {
				display: "flex",
				flexShrink: "0",
				alignItems: "center",
				padding: "10px",
			},
		};
	}
	template(css) {
		const { plugins } = this.props;

		return (
			<div className={css("line")} {...this.props}>
				{plugins.map((Component, index) => (
					<div key={index} className={css("wrapper")}>
						<Component />
					</div>
				))}
			</div>
		);
	}
}

export default decorate(HyperLine, "HyperLine");
