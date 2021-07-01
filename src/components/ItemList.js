import React from 'react'
import Link from 'next/link'
import { Grid, Image } from 'semantic-ui-react'

const ItemList = ({ list }) => {
  console.log(list)
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list && list.map((item) => {
            const { id, image_link } = item;
            return (
              <Grid.Column>
                <Link href={`/detail/${id}`}><Image src={image_link} /></Link>
              </Grid.Column>
            )
          })}

        </Grid.Row>
      </Grid>
    </div>
  )
}

export default ItemList
