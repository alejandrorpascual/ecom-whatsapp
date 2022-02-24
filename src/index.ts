import {request} from 'undici'
import {z} from 'zod'
import {PicSchema} from './pic-schema'

async function getInstagramPictures(profileName: string) {
  const baseUrl = 'https://www.instagram.com'
  const profileUrl = `${baseUrl}/${profileName}`
  const jsonDataUrl = `${profileUrl}/?__a=1`

  const {body} = await request(jsonDataUrl, {
    headers: {
      cookie: `sessionid=${process.env.SESSION_ID}`,
    },
  })
  const jsonData = await body.json()
  try {
    const data = PicSchema.parse(jsonData)
    // console.log('jsonData', jsonData)
    const pictures = data.graphql.user.edge_owner_to_timeline_media.edges
    return pictures.map(pic => {
      return {
        src: pic.node.display_url,
        sideCar: pic.node.edge_sidecar_to_children.edges.map(
          e => e.node.display_url,
        ),
        caption: pic.node.edge_media_to_caption.edges.map(
          edge => edge.node.text.split('\n')[0],
        )[0],
      }
    })
  } catch (error) {
    console.error(error)
  }
}

getInstagramPictures('cassishome')
  .then(data => console.log(data))
  .catch(error => console.error(error))
