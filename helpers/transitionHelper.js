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

export const scaleDown = {
	initial: { opacity: 0, scale: 0 },
  enter: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 0,
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const scaleDownSmall = {
	initial: { opacity: 0, scale: 0.9 },
  enter: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 0.9,
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const menuMovement = {
	initial: { opacity: 0, y: '0vh' },
  enter: { 
    opacity: 1,
    y: '-2vh',
    transition: { duration: 1.5, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '1vh',
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const menuMovementOne = {
	initial: { opacity: 0, y: '0vh' },
  enter: { 
    opacity: 1,
    y: '-12vh',
    transition: { duration: 1.5, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '-9vh',
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const menuMovementTwo = {
	initial: { opacity: 0, y: '0vh' },
  enter: { 
    opacity: 1,
    y: '-22vh',
    transition: { duration: 1.5, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '-19vh',
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const menuMovementThree = {
	initial: { opacity: 0, y: '0vh' },
  enter: { 
    opacity: 1,
    y: '-8vh',
    transition: { duration: 1.5, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '-5vh',
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}