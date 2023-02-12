
const ClosebarIcon = ({ height = 24, width = 24, className = '', color = 'currentColor' }) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={className}
        fill="none"
        stroke={` ${color}`}
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);



export default ClosebarIcon;
