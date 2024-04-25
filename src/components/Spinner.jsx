import BeatLoader from 'react-spinners/BeatLoader'



const Spinner = ({ loading }) => {
    return (
        <BeatLoader
            color="#4338ca"
            loading={loading}
            size={25}
        />
    )
}

export default Spinner