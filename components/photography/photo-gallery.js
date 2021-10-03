/* eslint-disable react/prop-types */
import 'photoswipe/dist/default-skin/default-skin.css'
import 'photoswipe/dist/photoswipe.css'
import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import styles from './photography.module.scss'

const PhotoGallery = ({ photos }) => {
  return (
    <section className={styles.photogallery} id="photography">
      <h2> Photography </h2>
      <div>
        <Gallery>
          {photos &&
            photos.map(({ name, fileName }) => (
              <Item
                key={name}
                original={`/images/photography/${fileName}`}
                thumbnail={`/images/photography/${fileName}`}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={`/images/photography/${fileName}`}
                  />
                )}
              </Item>
            ))}
        </Gallery>
      </div>
    </section>
  )
}
export default PhotoGallery
