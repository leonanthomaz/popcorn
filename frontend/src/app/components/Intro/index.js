import React, { useContext } from 'react'
import * as Style from './IntroStyles'
import { MovieContext } from '../../shared/contexts/MovieContext'
import { IMAGES_API } from '../../shared/services/api/ApiTMDB'
import { Spinner } from '../Spinner'

export const Intro = () => {
  const { poster, loading } = useContext(MovieContext)

    return (
      loading ? <Spinner/> : <Style.Container>
      <Style.Featured style={{ 
        backgroundImage: `url(${ poster ? IMAGES_API + poster.backdrop_path : 'https://cdn.falauniversidades.com.br/wp-content/uploads/2018/03/fala-universidades-netflix-3.jpg' })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
        }}>
        <Style.FeaturedVertical>
          <Style.FeaturedHorizontal>
            <Style.Wrapper>
              <Style.Title>{poster ? poster.title : 'Bem vindo ao PopCorn' }</Style.Title>
              <Style.Overview>{poster ? poster.overview : 'Escolhe seu filme favorito e deixe sua resenha!'}</Style.Overview>
              {poster ? 
              <Style.Button href={`/movie/${poster.id}`}>+ Mais</Style.Button>
              : ""}
            </Style.Wrapper>
          </Style.FeaturedHorizontal>
        </Style.FeaturedVertical>
      </Style.Featured>
    </Style.Container>
    )
}
