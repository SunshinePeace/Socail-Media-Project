import React from 'react';
import styles from '../../styles/Home.module.css'

const Widgets: React.FC = function () {



	return (
		<div className="widgets">
			<iframe
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhsu.edu.hk%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
				width="340"
				height="100%"
				style={{ border: "none", overflow: "hidden" }}
				scrolling="no"
				frameBorder="0"
				allowFullScreen			
				allowTransparency
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
				/>
		</div>
		
		
		)

}

export default Widgets;