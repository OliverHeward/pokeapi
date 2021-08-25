const Rems = ({type, size}) => {
	// if px output needed add this line before rem line: ${type}: ${size}px;
	return(`
		${type}: ${size / 16}rem;
	`);
}

export default Rems;