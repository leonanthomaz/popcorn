import React, { useContext, Fragment } from 'react'
import * as Style from './HomeStyles'
import { Intro } from '../../components/Intro'
import { MovieRow } from '../../components/MovieRow'
import { category } from '../../shared/utils/category'
import { Hooks } from '../../shared/contexts/HooksContext'

export const Home = () => {
  const { handleLeftArrow, handleRightArrow, scrollX } = useContext(Hooks)

  return (
    <Style.Container>
        <Intro/>
        {category.map((item, key) => {
              return(
              <Fragment key={key}>
                  <MovieRow 
                  handleLeftArrow={handleLeftArrow}
                  handleRightArrow={handleRightArrow}
                  scrollX={scrollX}
                  url={item.url}
                  title={item.title}
                  code={item.code}
                  />
              </Fragment>
              )
          })}
    </Style.Container>
  )
}
