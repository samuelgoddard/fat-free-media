export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { opacity: 0, y: '100%'},
  enter: { 
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
    y: '100%',
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const xRoll = {
	initial: { opacity: 0, rotate: 15, scale: 1.5 },
  enter: { 
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    rotate: 5,
    scale: 1.5,
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}