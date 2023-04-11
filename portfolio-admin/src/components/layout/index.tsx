import {useEffect,useRef} from 'react';
import S from './layout.styled';
import { BASE_URL } from '../../utils/const';
import axios from 'axios';

const Layout = () => {
  //constants
  const imageRef = useRef<HTMLImageElement | null>(null);
  

  useEffect(() => {
    const handleImage = async () => {
      let result = await axios.get(`${BASE_URL}/profile`);
      const url = result.data.url;
      if (imageRef.current) imageRef.current.src = url;
    }
    handleImage();
  },[])
  return (
    <S.LayoutContainer>
      <S.ProfileImage ref={imageRef} src='' alt='image'/>
    </S.LayoutContainer>
  )
}

export default Layout