import { MutatingDots } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <MutatingDots
        height="100"
        width="100"
        color="#ff0000"
        secondaryColor="#000000"
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