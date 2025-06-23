import React from "react";
import JoinWaitlist from "./JoinWaitlist";
import ProductIntro from "./ProductIntro";


function Banner() {
	return (
		<div className="flex flex-col gap-2 items-center w-full py-10">
			<ProductIntro />
			<JoinWaitlist />
		</div>
	);
}

export default Banner;
