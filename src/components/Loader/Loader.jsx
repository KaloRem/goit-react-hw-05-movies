import { MutatingDots } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <MutatingDots
        height="100"
        width="100"
        color="#2a2f4f"
        secondaryColor="#2a2f4f"
        radius="15"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrap>
  );
};

export default Loader;