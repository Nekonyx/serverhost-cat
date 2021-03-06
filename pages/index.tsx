import { NextPage } from 'next'
import Image from 'next/image'
import { Fragment } from 'react'

import cats from '../cats'

const IndexPage: NextPage = () => {
  return (
    <Fragment>
      <div className="cats">
        <div className="cats__container">
          {cats.map((image) => (
            <div key={image.src}>
              <Image src={image} alt="cat" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        body {
          background: #202124;
          font-size: 18px;
          margin: 0;
        }

        .cats {
          width: 100%;
        }

        .cats__container {
          padding: 1em;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-gap: 2em;
        }

        .cats__container * {
          width: 100%;
        }

        .cats__container img {
          border-radius: 20px;
        }
      `}</style>
    </Fragment>
  )
}

export default IndexPage
