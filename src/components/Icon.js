const searchIcon = () => {
    return(
        <svg fill="#a3bafe" width="45px" height="45px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z"/>
        </svg>
    )
}

const timesIcon = () => {
    return(
        <svg fill="#000000" width="45px" height="45px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.062 16l9.37-9.37c0.136-0.136 0.219-0.323 0.219-0.53 0-0.415-0.336-0.751-0.751-0.751-0.208 0-0.395 0.084-0.531 0.22v0l-9.369 9.369-9.37-9.369c-0.135-0.131-0.319-0.212-0.522-0.212-0.414 0-0.75 0.336-0.75 0.75 0 0.203 0.081 0.387 0.212 0.522l9.368 9.369-9.369 9.369c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.394-0.084 0.53-0.219v0l9.37-9.37 9.369 9.37c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0z"></path>
        </svg>
    )
}

const starIcon = () => {
    return(
        <svg fill="#5785ff" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#5785ff" d="M12.9121 1.59053C12.7508 1.2312 12.3936 1 11.9997 1C11.6059 1 11.2487 1.2312 11.0874 1.59053L8.27041 7.86702L1.43062 8.60661C1.03903 8.64895 0.708778 8.91721 0.587066 9.2918C0.465355 9.66639 0.574861 10.0775 0.866772 10.342L5.96556 14.9606L4.55534 21.6942C4.4746 22.0797 4.62768 22.4767 4.94632 22.7082C5.26497 22.9397 5.68983 22.9626 6.03151 22.7667L11.9997 19.3447L17.968 22.7667C18.3097 22.9626 18.7345 22.9397 19.0532 22.7082C19.3718 22.4767 19.5249 22.0797 19.4441 21.6942L18.0339 14.9606L23.1327 10.342C23.4246 10.0775 23.5341 9.66639 23.4124 9.2918C23.2907 8.91721 22.9605 8.64895 22.5689 8.60661L15.7291 7.86702L12.9121 1.59053Z"/>
        </svg>
    )
}

const trashIcon = () => {
    return(
        <svg fill="red" width="20px" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g id="Layer_2" data-name="Layer 2">
            <g id="invisible_box" data-name="invisible box">
            <rect width="20" height="20" fill="none"/>
            </g>
            <g id="icons_Q2" data-name="icons Q2">
            <g>
                <path d="M41.4,42.6l-36-36a1.9,1.9,0,0,0-2.8,0A1.8,1.8,0,0,0,2.3,9l6.8,6.9,2.7,27.3a2,2,0,0,0,2,1.8H34.2a2,2,0,0,0,2-1.8V43l2.4,2.4a1.9,1.9,0,0,0,2.8,0A1.9,1.9,0,0,0,41.4,42.6Z"/>
                <path d="M43,8.8a2.3,2.3,0,0,1-.6,1.6A2,2,0,0,1,41,11H15.8l-4-4H17V5a2,2,0,0,1,2-2H29a2,2,0,0,1,2,2V7h9.9A2.1,2.1,0,0,1,43,8.8Z"/>
                <path d="M36.8,15H19.6L37.3,32.4l1.5-15.2A2,2,0,0,0,36.8,15Z"/>
            </g>
            </g>
        </g>
        </svg>
    )
}


const Icon = ({name}) => {
    const icons = {
        search:searchIcon,
        times:timesIcon,
        star:starIcon,
        trash:trashIcon
    }
    const Component = icons[name]

    return <Component />
}

export {
    Icon
}